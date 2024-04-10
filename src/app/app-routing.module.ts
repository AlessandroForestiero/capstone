import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { SearchComponent } from './pages/search/search.component';
import { CategoryComponent } from './components/category/category.component';
import { DettagliComponent } from './pages/dettagli/dettagli.component';
import { LoginComponent } from './pages/login/login.component';
import { UserTicketsComponent } from './pages/user-tickets/user-tickets.component';

const routes: Routes = [
  { path: '', component: HomeComponent,title: 'Home' },
   {path:'login',component:LoginComponent,title: 'Login'},
  { path: 'carrello', component: CarrelloComponent,title: 'Carrello'},
  { path: 'search', component: SearchComponent,title: 'Search'},
  {path: 'category', component: CategoryComponent,title: 'Category'},
  {path:'dettagli', component: DettagliComponent,title: 'Dettagli'},
  {path:'user_tickets' , component: UserTicketsComponent,title: 'tickets'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
