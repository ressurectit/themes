import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FirstUppercaseLocalizeSAPipe, GoBackDirective, HostScrollableContentStyle} from '@anglr/common';

import {RenderMarkdownDirective, ShowSourceDirective, WithThemeDirective} from '../../../directives';

/**
 * Component used for displaying docs for blocks theme
 */
@Component(
{
    selector: 'blocks-theme',
    templateUrl: 'blocks.component.html',
    styles: [HostScrollableContentStyle],
    standalone: true,
    imports:
    [
        RenderMarkdownDirective,
        WithThemeDirective,
        GoBackDirective,
        FirstUppercaseLocalizeSAPipe,
        ShowSourceDirective,
    ],
    preserveWhitespaces: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BlocksComponent
{
}