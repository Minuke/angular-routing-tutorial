import { Routes } from '@angular/router';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';

export const HOME_ROUTES: Routes = [
    {
        path: 'one',
        component: OneComponent
    },
    {
        path: 'two',
        component: TwoComponent
    },
    {
        path: 'input-binding/:number',
        component: InputBindingComponent
    },
    {
        path: '',
        redirectTo: '/one',
        pathMatch: 'full'
    },
];
