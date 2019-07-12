import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VoirPlaylistComponent } from './voir-playlist/voir-playlist.component';
import { CreerPlaylistComponent } from './creer-playlist/creer-playlist.component';
import { CreerMorceauComponent } from './creer-morceau/creer-morceau.component';

const routes: Routes = [ {path: "", component: HomeComponent},
{path: "playlists", component: VoirPlaylistComponent},
{path: "newplaylist", component: CreerPlaylistComponent},
{path: "newtrack", component: CreerMorceauComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
