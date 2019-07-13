import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VoirPlaylistComponent } from './voir-playlist/voir-playlist.component';
import { CreerPlaylistComponent } from './creer-playlist/creer-playlist.component';
import { CreerMorceauComponent } from './creer-morceau/creer-morceau.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoirPlaylistComponent,
    CreerPlaylistComponent,
    CreerMorceauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
