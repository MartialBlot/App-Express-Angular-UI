import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../models/playlist.model';

@Component({
  selector: 'app-creer-playlist',
  templateUrl: './creer-playlist.component.html',
  styleUrls: ['./creer-playlist.component.scss']
})
export class CreerPlaylistComponent implements OnInit {

  constructor(private service: PlaylistService,
              ) { }

  public playlist: Playlist;

  ngOnInit() {
  }

  createPlaylist(playlist){
    this.service.createPlaylist(playlist).subscribe((playlist) => {

    });
  }

}
