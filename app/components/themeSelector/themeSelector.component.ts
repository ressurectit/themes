import {Component, ChangeDetectionStrategy, Signal, computed} from '@angular/core';
import {ValueNamePair} from '@jscrpt/common';

import {DemoTheme} from '../../services/demoTheme';
import {config} from '../../config';

/**
 * Component used for selecting theme
 */
@Component(
{
    selector: 'theme-selector',
    templateUrl: 'themeSelector.component.html',
    styleUrl: 'themeSelector.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSelectorComponent
{
    //######################### protected properties #########################

    /**
     * Array of available themes
     */
    protected themes: Signal<ValueNamePair[]>;

    //######################### constructor #########################
    constructor(protected selected: DemoTheme,)
    {
        this.themes = computed(() =>
        {
            const themes = Object.keys(config.configuration.demoThemes);

            return themes.map(theme =>
            {
                return <ValueNamePair>{
                    name: theme,
                    value: config.configuration.demoThemes[theme],
                };
            });
        });
    }
}