import { NavBarComponent } from './component/navBar/navBar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './component/home/home.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { NavModule } from './nav-bar/nav.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    NavBarComponent


  ],
  exports: [
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule,
    HttpClientModule,

    // NavModule

  ]
})
export class LayoutModule { }
