// Core Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Component
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { IntoComponent } from './into/into.component';
import { TranHistoryComponent } from './tran-history/tran-history.component';
import { OrdersHistoryComponent } from './orders-history/orders-history.component';
import { TermsComponent } from './terms/terms.component';
import { ReqServiceService } from './service/req-service.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  { path: 'into', component: IntoComponent },
  { path: 'account', component: TranHistoryComponent },
  { path: 'orders', component: OrdersHistoryComponent },
  { path: 'trc', component: TermsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IntoComponent,
    TranHistoryComponent,
    OrdersHistoryComponent,
    TermsComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        // useHash: true
      },
    )
  ],
  providers: [
    ReqServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
