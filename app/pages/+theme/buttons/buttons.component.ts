import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FirstUppercaseLocalizeSAPipe, GoBackDirective, HostScrollableContentStyle} from '@anglr/common';

import {RenderMarkdownDirective, ShowSourceContentDirective, ShowSourceDirective, WithThemeDirective} from '../../../directives';

/**
 * Component used for displaying docs for buttons theme
 */
@Component(
{
    selector: 'buttons-theme',
    templateUrl: 'buttons.component.html',
    styles: [HostScrollableContentStyle],
    standalone: true,
    imports:
    [
        RenderMarkdownDirective,
        WithThemeDirective,
        GoBackDirective,
        FirstUppercaseLocalizeSAPipe,
        ShowSourceDirective,
        ShowSourceContentDirective,
    ],
    preserveWhitespaces: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ButtonsComponent
{
}