import { Component, OnInit, ViewChild, TemplateRef, Input, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Playlist } from '../models/playlist.model';

@Component({
  selector: 'app-modifier-playlist',
  templateUrl: './modifier-playlist.component.html',
  styleUrls: ['./modifier-playlist.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class ModifierPlaylistComponent implements OnInit {

  @ViewChild('content', { static: true })
  public content: TemplateRef<any>;

  @Input()
  public openEdit: EventEmitter<boolean>;
  @Input()
  public playlistForm;

  constructor( config: NgbModalConfig, private modalService: NgbModal, ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    if (this.openEdit) {
      this.openEdit.subscribe(data => {
        this.modalService.open(this.content);
      });
  }
  }

  close(content) {
    this.modalService.dismissAll(content);
  }

  editPlaylist(newPlaylist){

  }
}
