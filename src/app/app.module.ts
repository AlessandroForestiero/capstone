import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { CardComponent } from './components/card/card.component';
import { DettagliComponent } from './pages/dettagli/dettagli.component';
import { AcquistaComponent } from './pages/acquista/acquista.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { SearchComponent } from './pages/search/search.component';
import { CategoryComponent } from './components/category/category.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { UserTicketsComponent } from './pages/user-tickets/user-tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarrelloComponent,
    CardComponent,
    DettagliComponent,
    AcquistaComponent,
    SearchComponent,
    CategoryComponent,
    RegisterComponent,
    LoginComponent,
    UserTicketsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
