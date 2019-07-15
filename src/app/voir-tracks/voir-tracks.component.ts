import { Component, OnInit, TemplateRef, ViewChild, Input, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Playlist } from '../models/playlist.model';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-voir-tracks',
  templateUrl: './voir-tracks.component.html',
  styleUrls: ['./voir-tracks.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class VoirTracksComponent implements OnInit {

  @ViewChild('content', { static: true })
  public content: TemplateRef<any>;

  @Input()
  public openModal: EventEmitter<boolean>;
  @Input()
  public playlist: Playlist;
  @Input()
  public tracks;
  public track;
  public trackForm;

  playTrack: EventEmitter<boolean> = new EventEmitter();
  editTrack: EventEmitter<boolean> = new EventEmitter();

  constructor(config: NgbModalConfig, private modalService: NgbModal,
              private service: PlaylistService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    if (this.openModal) {
      this.openModal.subscribe(data => {
        this.modalService.open(this.content);
      });
    }
  }

  playTracks(track){
    this.track = track;
    this.playTrack.emit(true);
  }

  close(content) {
    this.modalService.dismissAll(content);
  }

  deleteTrack(id, index){
    if(confirm('Voulez vous vraiment supprimer ?')){
      this.service.deleteTrack(id).subscribe(() => {
      });
      this.tracks.splice(index,1);
      alert("Playlist supprimée.");
    }else { };
  }

  openEditionTrack(track){
    this.trackForm = track;
    this.editTrack.emit(true);
  }

}
