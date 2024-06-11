import {Component, ChangeDetectionStrategy, Inject, Signal, computed, ElementRef, inject} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {DIALOG_DATA} from '@angular/cdk/dialog';
import {CdkCopyToClipboard} from '@angular/cdk/clipboard';

import {RenderMarkdownDirective} from '../../directives/renderMarkdown/renderMarkdown.directive';

/**
 * Component used for displaying html source code
 */
@Component(
{
    selector: 'source-viewer',
    templateUrl: 'sourceViewer.component.html',
    styleUrl: 'sourceViewer.component.scss',
    standalone: true,
    imports:
    [
        RenderMarkdownDirective,
        MatDialogModule,
        CdkCopyToClipboard,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceViewerComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Html source to be displayed
     */
    protected htmlSource: Signal<string>;

    /**
     * Instance of element
     */
    protected element: ElementRef<HTMLElement> = inject(ElementRef);
    
    //######################### constructor #########################
    constructor(@Inject(DIALOG_DATA) sourceHtml: string,)
    {
        this.htmlSource = computed(() =>
        {
            return `\`\`\`html
${sourceHtml.replace(/\s_ngcontent-ng-.*?=""/g, '')}
\`\`\``;
        });
    }
}