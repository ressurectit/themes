import {Route} from '@angular/router';

/**
 * Route for buttons component
 */
export const buttonsRoute: Route =
{
    path: 'buttons',
    loadComponent: () => import('./buttons.component')
};
