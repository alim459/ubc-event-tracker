import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EventDataService } from './shared/services/event-data.service';
import { AppToggleService } from './shared/services/app-toggle.service';
import { BannerComponent } from './banner/banner.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    BannerComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [ EventDataService, AppToggleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
