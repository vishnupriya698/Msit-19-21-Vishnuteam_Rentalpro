// Built-in Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// Custom Modules
import { AppRoutingModule } from './app-routing.module';
import { IndexModule } from './index/index.module'

// Component
import { AppComponent } from './app.component';
import { LoaderSpinnerComponent } from './shared/loader-spinner/loader-spinner.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    LoaderSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    IndexModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    AuthGuard, AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
