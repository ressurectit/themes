import {Directive, ElementRef, inject} from '@angular/core';

/**
 * Directive that marks element as source content that will be shown
 */
@Directive(
{
    selector: '[showSourceContent]',
    standalone: true,
})
export class ShowSourceContentDirective
{
    //######################### public properties #########################

    /**
     * Instance of element holding source content
     */
    public element: ElementRef<HTMLElement> = inject(ElementRef);
}