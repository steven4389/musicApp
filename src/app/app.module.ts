import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AlbumListComponent } from './components/album-list/album-list.component';

//services
import {AlbumService} from './services/album.service';
import { SongsComponent } from './components/songs/songs.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainPageComponent,
    AlbumListComponent,
    SongsComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
