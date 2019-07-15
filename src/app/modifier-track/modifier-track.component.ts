import { Component, OnInit, ViewChild, TemplateRef, Input, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Track } from '../models/track.model';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-modifier-track',
  templateUrl: './modifier-track.component.html',
  styleUrls: ['./modifier-track.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class ModifierTrackComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal,
              private service: PlaylistService) {
    config.backdrop = 'static';
    config.keyboard = false;
    }

  @ViewChild('content', { static: true })
  public content: TemplateRef<any>;
  @Input()
  public editTrack: EventEmitter<boolean>;
  @Input()
  public trackForm;

  ngOnInit() {
    if (this.editTrack) {
      this.editTrack.subscribe(data => {
        this.modalService.open(this.content, { size: 'lg', backdrop: 'static' });
      });
  }
}

close(content) {
  this.modalService.dismissAll(content);
}

edTrack(track, id){
  this.service.updateTrack(id, track.value).subscribe((track: Track) => {
    this.modalService.dismissAll();
  })
}

}
