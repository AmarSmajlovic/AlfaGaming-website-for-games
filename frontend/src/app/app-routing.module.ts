import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ListingProductsComponent } from './components/listing-products/listing-products.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { WhislistComponent } from './components/whishlist/whislist.component';
import { AuthGuard } from './shared/services/AuthGuard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'signin',component:SigninComponent},
  {path:'register',component:RegisterComponent},
  {path:'whishlist',component:WhislistComponent},
  {path:'menu',component:MenuComponent},
  {path:'profile/:id',component: ProfileComponent},
  {path:'admin',component: AdminDashComponent,canActivate:[AuthGuard]},
  {path:'productDetail/:id',component: ProductDetailComponent},
  {path:'listing',component:ListingProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
