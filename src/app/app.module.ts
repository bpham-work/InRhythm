import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MyComponent } from './mycomponent/mycomponent';
import { IrBoxesComponent } from './irboxes/irboxes.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    IrBoxesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
