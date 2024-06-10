import {Component, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, Inject, AfterViewInit, OnDestroy} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';
import {LOGGER, Logger, ProgressIndicatorModule} from '@anglr/common';
import {AppHotkeysService, HotkeysCheatsheetComponent} from '@anglr/common/hotkeys';
import {InternalServerErrorSAComponent} from '@anglr/error-handling';
import {NotificationsGlobalModule} from '@anglr/notifications';
import {fadeInOutTrigger} from '@anglr/animations';
import {nameof} from '@jscrpt/common';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

import {routeAnimationTrigger} from './app.component.animations';
import {SettingsGeneral, config} from '../config';
import {SettingsService} from '../services/settings';

/**
 * Application root component
 */
@Component(
{
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrl: 'app.component.scss',
    standalone: true,
    imports:
    [
        CommonModule,
        RouterModule,
        InternalServerErrorSAComponent,
        ProgressIndicatorModule,
        NotificationsGlobalModule,
        HotkeysCheatsheetComponent,
    ],
    animations: [routeAnimationTrigger, fadeInOutTrigger],
    providers: [AppHotkeysService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSAComponent implements AfterViewInit, OnDestroy
{
    //######################### private fields #########################

    /**
     * Subscription for router outlet activation changes
     */
    private _routerOutletActivatedSubscription: Subscription|undefined|null;

    /**
     * Subscription for changes of general settings
     */
    private _settingsChangeSubscription: Subscription;

    /**
     * Currently active theme
     */
    private _theme: string;

    /**
     * Array of link for demo themes
     */
    private _demoLinks: HTMLLinkElement[] = [];

    //######################### public properties - template bindings #########################

    /**
     * Name of state for routed component animation
     */
    public routeComponentState: string = 'none';

    //######################### public properties - children #########################

    /**
     * Router outlet that is used for loading routed components
     */
    @ViewChild('outlet')
    public routerOutlet: RouterOutlet|undefined|null;

    //######################### constructor #########################
    constructor(translateSvc: TranslateService,
                private _changeDetector: ChangeDetectorRef,
                private _appHotkeys: AppHotkeysService,
                settings: SettingsService,
                @Inject(LOGGER) logger: Logger,
                @Inject(DOCUMENT) document: Document,)
    {
        const demoThemes = Object.keys(config.configuration.demoThemes);

        for(const demoTheme of demoThemes)
        {
            const link = document.createElement('link');

            link.rel = 'stylesheet';
            link.href = `https://www.unpkg.com/@css-styles/custom-themes@latest/css/${demoTheme}.css`;

            this._demoLinks.push(link);

            document.head.appendChild(link);
        }

        logger.verbose('Application is starting, main component constructed.');

        document.body.classList.add('app-page', settings.settings.theme);
        this._theme = settings.settings.theme;

        this._settingsChangeSubscription = settings.settingsChange
            .subscribe(itm =>
            {
                if(itm == nameof<SettingsGeneral>('theme'))
                {
                    document.body.classList.remove(this._theme);
                    this._theme = settings.settings.theme;
                    document.body.classList.add(this._theme);
                }

                if(itm == nameof<SettingsGeneral>('language'))
                {
                    translateSvc.use(settings.settings.language);
                    this._changeDetector.detectChanges();
                }
            });

        translateSvc.setDefaultLang('en');
        translateSvc.use(settings.settings.language);
    }

    //######################### public methods - implementation of AfterViewInit #########################

    /**
     * Called when view was initialized
     */
    public ngAfterViewInit()
    {
        this._routerOutletActivatedSubscription = this.routerOutlet?.activateEvents.subscribe(() =>
        {
            this.routeComponentState = this.routerOutlet?.activatedRouteData['animation'] || (<any>this.routerOutlet?.activatedRoute.component).name;
        });
    }

    //######################### public methods - implementation of OnDestroy #########################

    /**
     * Called when component is destroyed
     */
    public ngOnDestroy()
    {
        this._routerOutletActivatedSubscription?.unsubscribe();
        this._routerOutletActivatedSubscription = null;

        this._settingsChangeSubscription?.unsubscribe();

        this._appHotkeys.destroy();

        for(const link of this._demoLinks)
        {
            link.remove();
        }

        this._demoLinks = [];
    }
}