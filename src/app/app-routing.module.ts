import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfiloComponent } from './pages/profilo/profilo.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { SearchComponent } from './pages/search/search.component';
import { CategoryComponent } from './components/category/category.component';
import { DettagliComponent } from './pages/dettagli/dettagli.component';

const routes: Routes = [
  { path: '', component: HomeComponent,title: 'Home' },
  { path: 'profilo', component: ProfiloComponent,title: 'Profilo'},
  { path: 'carrello', component: CarrelloComponent,title: 'Carrello'},
  { path: 'search', component: SearchComponent,title: 'Search'},
  {path: 'category', component: CategoryComponent,title: 'Category'},
  {path:'dettagli', component: DettagliComponent,title: 'Dettagli'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
