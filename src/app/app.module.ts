import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import { ParkComponent } from './park/park.component';
import { StockComponent } from './stock/stock.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AnalysisChartComponent } from './analysis-chart/analysis-chart.component';
import { ParkLotUtilizationComponent } from './analysis-chart/park-lot-utilization/park-lot-utilization.component';
import { CreateComponent } from './park/create/create.component';

import { ParkserviceService } from './services/parkservice.service';
//antd
import { NgZorroAntdModule, NZ_I18N, zh_CN,NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { IconDefinition } from '@ant-design/icons-angular';
import { LockOutline, MobileOutline } from '@ant-design/icons-angular/icons';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { UserComponent } from './user/user.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

const icons: IconDefinition[] = [ MobileOutline, LockOutline ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    ParkComponent,
    StockComponent,
    AccountsComponent,
    AnalysisChartComponent,
    ParkLotUtilizationComponent,
    CreateComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    NzIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzLayoutModule,
    NzTableModule,
    NzPaginationModule,
    NzSelectModule,
    BrowserAnimationsModule,
    NzDropDownModule,
    NzModalModule,
    NzToolTipModule,
    NzStepsModule,
    NzTabsModule
  ],
  providers: [
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' },
    { provide: NZ_ICONS, useValue: icons },
    ParkserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
