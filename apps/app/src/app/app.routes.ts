import { Route } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome';

export const appRoutes: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
  },
  // You can add other routes here later, e.g.:
  // { path: 'products', component: ProductListComponent },
  // { path: 'ingredients', component: IngredientListComponent },
];
