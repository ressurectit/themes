import {Injectable, Signal, WritableSignal, signal} from '@angular/core';

/**
 * Service that allows sharing selected demo theme
 */
@Injectable({providedIn: 'root'})
export class DemoTheme
{
    //######################### private fields #########################

    /**
     * Value of theme that is selected
     */
    private _theme: WritableSignal<string> = signal('chiroptera');

    //######################### public properties #########################

    /**
     * Gets value of theme that is selected
     */
    public get theme(): Signal<string>
    {
        return this._theme.asReadonly();
    }

    //######################### public methods #########################

    /**
     * Sets selected theme
     * @param theme - Theme to be eselected
     */
    public setTheme(theme: string): void
    {
        this._theme.set(theme);
    }
}