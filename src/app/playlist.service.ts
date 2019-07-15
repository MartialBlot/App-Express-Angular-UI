import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Playlist } from './models/playlist.model';
import { Track } from './models/track.model';

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

  public deletePlaylist(id: number): Observable<Playlist> {
    return this.http.delete(`${this.api}/playlist/${id}`).pipe(
      map((playlist: any) => {
        return  playlist as Playlist;
      }),
    );
  }

  public deleteTrack(id: number): Observable<Track> {
    return this.http.delete(`${this.api}/tracks/${id}`).pipe(
      map((tracks: any) => {
        return  tracks as Track;
      }),
    );
  }

  public addTrack(trackForm: Track): Observable <Track>{
    return this.http.post<Track>(`${this.api}/tracks`, trackForm);
  }

  public getTracks(id: number): Observable<Track>{
    return this.http.get(`${this.api}/tracks/playlist/${id}`).pipe(
      map((tracks: any) => { return tracks as Track
      })
      )
  };

}
