import { Component, OnInit, Input } from '@angular/core';
import {AlbumService} from '../../services/album.service'

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  @Input() musicList: any = {};
  public music:any = [];
  public hideArtists:boolean = false;

  constructor(private albumService:AlbumService) { }

  ngOnInit(): void {
    this.music = this.musicList.data
  }

  artist(artist:string){
    this.albumService.setAlbum(artist);
    this.hideArtists = true
  }

}
