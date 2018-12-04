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
import { PostComponent } from './post/post.component';
import { PostHistoryComponent } from './post-history/post-history.component';
import { PostHistoryViewComponent } from './post-history-view/post-history-view.component';

const appRoutes: Routes = [
  { path: 'into', component: IntoComponent },
  { path: 'khabar-post', component: PostComponent },
  { path: 'account', component: TranHistoryComponent },
  { path: 'orders', component: OrdersHistoryComponent },
  { path: 'trc', component: TermsComponent },
  { path: 'index', component: IndexComponent },
  { path: 'history-post', component: PostHistoryComponent },
  { path: 'history-post-view', component: PostHistoryViewComponent },
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
    LogoutComponent,
    PostComponent,
    PostHistoryComponent,
    PostHistoryViewComponent
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
