import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../models/playlist.model';

@Component({
  selector: 'app-creer-morceau',
  templateUrl: './creer-morceau.component.html',
  styleUrls: ['./creer-morceau.component.scss']
})
export class CreerMorceauComponent implements OnInit {

  public playlists;
  public idPlaylist;

  constructor(private service: PlaylistService) { }

  ngOnInit() {
    this.service.getPlaylists().subscribe((playlists: Playlist) => {
      this.playlists = playlists;
    })
  }

  addTrack(newTrack){
    this.service.addTrack(newTrack.value).subscribe((track) => {
      console.log(track)
      if(track){
        alert('Le nouveau titre a bien été enregistré')
      }
    });
  }
}
