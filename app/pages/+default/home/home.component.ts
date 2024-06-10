import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ComponentRedirectRoute, ComponentRoute} from '@anglr/common/router';

import {RenderMarkdownDirective, WithThemeDirective} from '../../../directives';
import {ThemeSelectorComponent} from '../../../components';

/**
 * Home component
 */
@Component(
{
    selector: 'home-view',
    templateUrl: 'home.component.html',
    standalone: true,
    imports:
    [
        RenderMarkdownDirective,
        ThemeSelectorComponent,
        WithThemeDirective,
    ],
    preserveWhitespaces: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@ComponentRedirectRoute('', 'home')
@ComponentRoute({path: 'home'})
export class HomeComponent
{
}
