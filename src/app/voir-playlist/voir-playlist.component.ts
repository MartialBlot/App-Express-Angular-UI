import { Component, OnInit, EventEmitter } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../models/playlist.model';
import { Track } from '../models/track.model';

@Component({
  selector: 'app-voir-playlist',
  templateUrl: './voir-playlist.component.html',
  styleUrls: ['./voir-playlist.component.scss']
})
export class VoirPlaylistComponent implements OnInit {

  openModal: EventEmitter<boolean> = new EventEmitter();
  openEdit: EventEmitter<boolean> = new EventEmitter();

  public playlists;
  public playlist;
  public tracks;
  public playlistForm;

  constructor(private service: PlaylistService,) { }

  ngOnInit() {
    this.service.getPlaylists().subscribe((playlists: Playlist) => {
      this.playlists = playlists;
    })
  }

  openEditionPlaylist(play){
    this.openEdit.emit(true);
    this.playlistForm = play;
  }

  openModalTracks(playlist){
    this.openModal.emit(true);
    this.playlist = playlist;
    this.service.getTracks(playlist.id).subscribe((tracks: Track) => {
      this.tracks = tracks;
    })
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
