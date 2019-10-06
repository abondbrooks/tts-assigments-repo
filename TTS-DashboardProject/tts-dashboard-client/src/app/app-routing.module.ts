import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPageComponent},
  { path: 'categories', component: CategoryPageComponent},
  { path: 'suppliers', component: SupplierPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }