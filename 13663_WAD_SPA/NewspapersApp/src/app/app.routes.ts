import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
//import { DetailsComponent } from './components/details/details.component';
import { CreateComponent } from './components/create/create.component';
//import { UpdateComponent } from './components/update/update.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  /*{
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'edit/:id',
    component: UpdateComponent,
  },
  {
    path: 'delete/:id',
    component: HomeComponent,
  },*/
];