import { Component, OnInit, TemplateRef, ViewChild, Input, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-voir-tracks',
  templateUrl: './voir-tracks.component.html',
  styleUrls: ['./voir-tracks.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class VoirTracksComponent implements OnInit {

  @ViewChild('content', { static: true })
  public content: TemplateRef<any>;

  @Input()
  public openModal: EventEmitter<boolean>;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
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

  close(content) {
    this.modalService.dismissAll(content);
  }

}
