import { Routes } from '@angular/router';

import { MyComponent } from './mycomponent/mycomponent';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MyComponent }
];

