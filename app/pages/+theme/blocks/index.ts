import {Route} from '@angular/router';

/**
 * Route for blocks component
 */
export const blocksRoute: Route =
{
    path: 'blocks',
    loadComponent: () => import('./blocks.component')
};
