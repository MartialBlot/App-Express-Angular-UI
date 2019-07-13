import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../models/Playlist.model';
@Component({
  selector: 'app-creer-playlist',
  templateUrl: './creer-playlist.component.html',
  styleUrls: ['./creer-playlist.component.scss']
})
export class CreerPlaylistComponent implements OnInit {

  constructor(private service: PlaylistService,) { }

  public playlist: Playlist;

  ngOnInit() {
  }

  createPlaylist(playlist){
    console.log(playlist.value)
    this.service.createPlaylist(playlist.value).subscribe((playlist) => {
      if(playlist){
        alert('La nouvelle playlist a bien été enregistrée')
      }
    });
  }

}
