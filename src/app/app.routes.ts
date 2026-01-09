import { Routes } from '@angular/router';
import { Inicio } from './componetes/inicio/inicio';
import { Title } from '@angular/platform-browser';
import { Nabvar } from './componetes/interface/nabvar/nabvar';

export const routes: Routes = [
    {path: 'inicio', pathMatch:'full', title:'inicio', component: Inicio},
    {path: 'nabvar', pathMatch: 'full', component: Nabvar},
    {path: '**', redirectTo: 'inicio'},
];
