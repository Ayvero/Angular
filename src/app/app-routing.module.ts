import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesSalesComponent } from './clothes-sales/clothes-sales.component';
import { ClothesAboutComponent } from './clothes-about/clothes-about.component';


const routes: Routes = [
  
 { path: '',redirectTo: 'sales',pathMatch: 'full' },
 { path: 'sales', component: ClothesSalesComponent },
 { path: 'about', component: ClothesAboutComponent },
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule { }







