import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../models/Playlist.model';

@Component({
  selector: 'app-voir-playlist',
  templateUrl: './voir-playlist.component.html',
  styleUrls: ['./voir-playlist.component.scss']
})
export class VoirPlaylistComponent implements OnInit {

  public playlists;

  constructor(private route: ActivatedRoute,
              public service: PlaylistService,) { }

  ngOnInit() {
    this.service.getPlaylists().subscribe((playlists: Playlist) => {
      this.playlists = playlists;
    })
  }

}
