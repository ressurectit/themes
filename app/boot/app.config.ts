import {ApplicationConfig, FactoryProvider, importProvidersFrom} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {AnglrExceptionHandlerOptions} from '@anglr/error-handling';
import {HotkeyModule} from 'angular2-hotkeys';

import {appProviders} from './app.providers';
import {config} from '../config';

/**
 * Application configuration for browser
 */
export const appConfig: ApplicationConfig = 
{
    providers:
    [
        ...appProviders,
        provideAnimations(),
        <FactoryProvider>
        {
            provide: AnglrExceptionHandlerOptions,
            useFactory: () => new AnglrExceptionHandlerOptions(config.configuration.debug, false)
        },
        importProvidersFrom(HotkeyModule.forRoot(
        {
            cheatSheetCloseEsc: true
        })),
    ],
};
