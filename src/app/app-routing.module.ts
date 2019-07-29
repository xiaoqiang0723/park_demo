import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkComponent } from './park/park.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { RegisterComponent } from './register/register.component';
import { StockComponent } from './stock/stock.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AnalysisChartComponent } from './analysis-chart/analysis-chart.component';
import { ParkLotUtilizationComponent } from './analysis-chart/park-lot-utilization/park-lot-utilization.component';
import { CreateComponent } from './park/create/create.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'recover', component:RecoverComponent},
  {path:'park', component:ParkComponent,
        children:[
          {path:'create', component:CreateComponent},
          // {path:'**',redirectTo:'/park',pathMatch:'full'}
        ]
  },
  {path:'stock', component:StockComponent},
  {path:'accounts', component:AccountsComponent},
  {path:'analysis-chart', component:AnalysisChartComponent},
  {path:'park-lot-utilization', component:ParkLotUtilizationComponent},
  {path:'**',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
