import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VoirPlaylistComponent } from './voir-playlist/voir-playlist.component';
import { CreerPlaylistComponent } from './creer-playlist/creer-playlist.component';
import { CreerMorceauComponent } from './creer-morceau/creer-morceau.component';
import { ModifierPlaylistComponent } from './modifier-playlist/modifier-playlist.component';

const routes: Routes = [ {path: "", component: HomeComponent},
{path: "playlists", component: VoirPlaylistComponent},
{path: "playlists/new", component: CreerPlaylistComponent},
{path: "tracks/new", component: CreerMorceauComponent}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
