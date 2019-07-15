import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VoirPlaylistComponent } from './voir-playlist/voir-playlist.component';
import { CreerPlaylistComponent } from './creer-playlist/creer-playlist.component';
import { CreerMorceauComponent } from './creer-morceau/creer-morceau.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VoirTracksComponent } from './voir-tracks/voir-tracks.component';
import { PlayerComponent } from './player/player.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoirPlaylistComponent,
    CreerPlaylistComponent,
    CreerMorceauComponent,
    VoirTracksComponent,
    PlayerComponent,
    SafePipe
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
