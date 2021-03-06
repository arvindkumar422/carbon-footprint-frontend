import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { MapMainComponent } from './components/map-main/map-main.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DataService } from './services/data.service';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SocialComponent } from './components/social/social.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StatsComponent } from './components/stats/stats.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UkNationalGridComponent } from './components/stats/uk-national-grid/uk-national-grid.component';
import { TweetsComponent } from './components/social/tweets/tweets.component';
import { NewsComponent } from './components/social/news/news.component';
import { StatsLiveComponent } from './components/social/stats-live/stats-live.component';
import { StatsDataComponent } from './components/social/stats-data/stats-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MapMainComponent,
    UserFormComponent,
    HomeComponent,
    SocialComponent,
    NavbarComponent,
    StatsComponent,
    UkNationalGridComponent,
    TweetsComponent,
    NewsComponent,
    StatsLiveComponent,
    StatsDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyCNcA5GQHiQ9BU7ATE_KmcqU78TUrMSrtM',
      libraries: ['places'] 
    }),
    AgmDirectionModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
