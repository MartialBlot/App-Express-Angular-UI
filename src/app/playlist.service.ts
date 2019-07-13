import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Playlist } from './models/Playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  public api = `${environment.apiUrl}`;

  public getPlaylists(): Observable<Playlist>{
    return this.http.get(`${this.api}/playlists`).pipe(
      map((playlists: any) => { return playlists as Playlist
      })
      )
  };

  public createPlaylist(playlistForm: Playlist): Observable <Playlist>{
    return this.http.post<Playlist>(`${this.api}/playlist`, playlistForm);
  }

}
