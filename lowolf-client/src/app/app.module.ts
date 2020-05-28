import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FaIcons } from '../fa-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppShellModule } from './app-shell/app-shell.module';
import { HttpClientModule } from '@angular/common/http';
import { WidgetsModule } from '@lo/widgets';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AppShellModule,
    FontAwesomeModule,
    // WidgetsModule.forRoot(environment)
  ],
  providers: [
    {
      provide: 'ENVIRONMENT',
      useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    FaIcons.init(library);
  }
}
