import { Component, OnInit, Input, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { Track } from '../models/track.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class PlayerComponent implements OnInit {

  @ViewChild('content', { static: true })
  public content: TemplateRef<any>;

  @Input()
  public track: Track;
  @Input()
  public playTrack: EventEmitter<boolean>;

  constructor(config: NgbModalConfig, private modalService: NgbModal,) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    if (this.playTrack) {
      this.playTrack.subscribe(data => {
        this.modalService.open(this.content, { size: 'lg', backdrop: 'static' });
      });
    }
  }

  close(content) {
    this.modalService.dismissAll(content);
  }

}
