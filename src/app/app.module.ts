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

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'into', component: IntoComponent },
  { path: 'account', component: TranHistoryComponent },
  { path: 'orders', component: OrdersHistoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IntoComponent,
    TranHistoryComponent,
    OrdersHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        useHash: true
      },
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
