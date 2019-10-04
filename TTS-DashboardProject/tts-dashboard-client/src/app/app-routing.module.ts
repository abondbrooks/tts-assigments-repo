import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{path:'home', component: HomeComponent },
{path:'inventory', component:InventoryComponent},
{path:'report', component:ReportComponent},
{path:'settings', component:SettingsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
