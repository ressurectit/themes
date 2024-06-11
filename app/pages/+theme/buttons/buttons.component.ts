import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FirstUppercaseLocalizeSAPipe, GoBackDirective, HostScrollableContentStyle} from '@anglr/common';

import {RenderMarkdownDirective, WithThemeDirective} from '../../../directives';

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
    ],
    preserveWhitespaces: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ButtonsComponent
{
}