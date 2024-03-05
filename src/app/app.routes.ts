import { Routes } from '@angular/router';
import { ErrorComponent } from './shared/components/error/error.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.routes').then(r => r.HOME_ROUTES),
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
