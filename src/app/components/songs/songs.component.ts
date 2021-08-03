import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  public subscription!: Subscription;
  public albums: Array<any> = [];
  public artist: string = '';
  public songs: Array<any> = [];
  public selectedSong = '';

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.subscription = this.albumService.albumObservable$.subscribe((res) => {
      this.albums = res.albums;
      this.artist = res.artist;
    });
  }

  selectAlbum(album: any) {
    this.songs = album.songs;

  }

  selectSong(item: any) {
    this.selectedSong = item.title;
  }

}
