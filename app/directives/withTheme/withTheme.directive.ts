import {Directive, ElementRef, effect} from '@angular/core';

import {DemoTheme} from '../../services/demoTheme';

/**
 * Directive that applies theme to element
 */
@Directive(
{
    selector: '[withTheme]',
    standalone: true,
})
export class WithThemeDirective
{
    //######################### private fields #########################

    /**
     * Value of previous css class name
     */
    private _previousClass: string|undefined|null;

    //######################### constructor #########################
    constructor(element: ElementRef<HTMLElement>,
                selected: DemoTheme,
    )
    {
        effect(() =>
        {
            const theme = selected.theme();
            const className = `${theme}-theme`;

            if(this._previousClass)
            {
                element.nativeElement.classList.remove(this._previousClass);
            }

            element.nativeElement.classList.add(className);
            this._previousClass = className;
        });
    }
}