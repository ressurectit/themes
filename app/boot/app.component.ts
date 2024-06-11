import {Component, ChangeDetectionStrategy, ChangeDetectorRef, Inject, OnDestroy} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FirstUppercaseLocalizeSAPipe, LOGGER, Logger, ProgressIndicatorModule} from '@anglr/common';
import {AppHotkeysService, HotkeysCheatsheetComponent} from '@anglr/common/hotkeys';
import {InternalServerErrorSAComponent} from '@anglr/error-handling';
import {NotificationsGlobalModule} from '@anglr/notifications';
import {nameof} from '@jscrpt/common';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

import {SettingsGeneral, config} from '../config';
import {SettingsService} from '../services/settings';
import {ThemeSelectorComponent} from '../components';

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
        ThemeSelectorComponent,
        FirstUppercaseLocalizeSAPipe,
    ],
    providers: [AppHotkeysService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSAComponent implements OnDestroy
{
    //######################### private fields #########################

    /**
     * Subscription for changes of general settings
     */
    private _settingsChangeSubscription: Subscription;

    /**
     * Array of link for demo themes
     */
    private _demoLinks: HTMLLinkElement[] = [];

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

        document.body.classList.add('app-page', 'light');

        this._settingsChangeSubscription = settings.settingsChange
            .subscribe(itm =>
            {
                if(itm == nameof<SettingsGeneral>('language'))
                {
                    translateSvc.use(settings.settings.language);
                    this._changeDetector.detectChanges();
                }
            });

        translateSvc.setDefaultLang('en');
        translateSvc.use(settings.settings.language);
    }

    //######################### public methods - implementation of OnDestroy #########################

    /**
     * Called when component is destroyed
     */
    public ngOnDestroy()
    {
        this._settingsChangeSubscription?.unsubscribe();

        this._appHotkeys.destroy();

        for(const link of this._demoLinks)
        {
            link.remove();
        }

        this._demoLinks = [];
    }
}