import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckComponent } from './components/mock-component/check/check.component';
import { EditorComponent } from './components/mock-component/editor/editor.component';
import { HomeComponent } from './components/mock-component/home/home.component';
import { ManageComponent } from './components/mock-component/manage/manage.component';
import { UsersComponent } from './components/mock-component/users/users.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { ErrorHandlerModule } from './core/errors/error-handler.module';
import { AngularMaterialCommonModule } from './models/angular-material-common.module';
import { NotFoundComponent } from './models/not-found/not-found.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { LoadingIndicatorInterceptor } from './shared/loading-indicator.interceptor';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor,
};
const INTERCEPTOR_LOADING_INDICATOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: LoadingIndicatorInterceptor,
};

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    CheckComponent,
    EditorComponent,
    ManageComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    HttpClientModule,
    ErrorHandlerModule,
    AngularMaterialCommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  providers: [INTERCEPTOR_PROVIDER, INTERCEPTOR_LOADING_INDICATOR],
  bootstrap: [AppComponent],
})
export class AppModule {}
