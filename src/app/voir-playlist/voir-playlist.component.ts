import { Component, OnInit, EventEmitter } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../models/playlist.model';

@Component({
  selector: 'app-voir-playlist',
  templateUrl: './voir-playlist.component.html',
  styleUrls: ['./voir-playlist.component.scss']
})
export class VoirPlaylistComponent implements OnInit {

  openModal: EventEmitter<boolean> = new EventEmitter();

  public playlists;

  constructor(private service: PlaylistService,) { }

  ngOnInit() {
    this.service.getPlaylists().subscribe((playlists: Playlist) => {
      this.playlists = playlists;
    })
  }

  openModalTracks(){
    this.openModal.emit(true);
  }

  deletePlaylist(id, index){
    if(confirm('Voulez vous vraiment supprimer ?')){
      this.service.deletePlaylist(id).subscribe(() => {
      });
      this.playlists.splice(index,1);
      alert("Playlist supprimée.");
    }else { };
  }

}
