import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { WhislistComponent } from './components/whishlist/whislist.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { ProductCardComponent } from './shared/components/product-card/product.card.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { AdminProductsComponent } from './components/admin-dash/admin-products/admin-products.component';
import { AdminUsersComponent } from './components/admin-dash/admin-users/admin-users.component';
import { AdminGenreComponent } from './components/admin-dash/admin-genre/admin-genre.component';
import { AdminPlatformsComponent } from './components/admin-dash/admin-platforms/admin-platforms.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ListingProductsComponent } from './components/listing-products/listing-products.component';
import { SupportComponent } from './components/support/support.component';
import { SupportpageComponent } from './components/supportpage/supportpage.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    WhislistComponent,
    SigninComponent,
    RegisterComponent,
    MenuComponent,
    FooterComponent,
    ProfileComponent,
    ProductCardComponent,
    AdminDashComponent,
    AdminProductsComponent,
    AdminUsersComponent,
    AdminGenreComponent,
    AdminPlatformsComponent,
    ProductDetailComponent,
    ListingProductsComponent,
    SupportComponent,
    SupportpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
