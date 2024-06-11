import {Routes} from '@angular/router';

import {notFoundRoute} from '../pages/notFound/notFound.route';
import {buttonsRoute} from '../pages/+theme';

export const routes: Routes = 
[
    {
        path: '',
        loadChildren: () => import('../pages/+default/default.module')
    },
    buttonsRoute,
    notFoundRoute,
];