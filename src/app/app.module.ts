import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { MapMainComponent } from './map-main/map-main.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    MapMainComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyCNcA5GQHiQ9BU7ATE_KmcqU78TUrMSrtM',
      libraries: ['places'] 
    }),
    AgmDirectionModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
