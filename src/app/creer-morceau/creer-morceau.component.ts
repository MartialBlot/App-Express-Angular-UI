import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-creer-morceau',
  templateUrl: './creer-morceau.component.html',
  styleUrls: ['./creer-morceau.component.scss']
})
export class CreerMorceauComponent implements OnInit {

  constructor(private service: PlaylistService) { }

  ngOnInit() {
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
