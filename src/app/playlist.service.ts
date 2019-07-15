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
    return this.http.post<Playlist>(`${this.api}/playlists`, playlistForm);
  }

  public deletePlaylist(id: number): Observable<Playlist> {
    return this.http.delete(`${this.api}/playlists/${id}`).pipe(
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
    return this.http.get(`${this.api}/playlists/${id}/tracks`).pipe(
      map((tracks: any) => { return tracks as Track
      })
      )
  };

  public updatePlaylist(id: string, playlistForm: Playlist): Observable<Playlist> {
    return this.http.put<Playlist>(`${this.api}/playlists/${id}`, playlistForm);
  }

  public updateTrack(id: string, track: Playlist): Observable<Track> {
    return this.http.put<Track>(`${this.api}/tracks/${id}`, track);
  }

}
