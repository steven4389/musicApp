import { Injectable } from '@angular/core';
import {data} from '../../data'
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService{

  private album = new Subject<any>();
  albumObservable$ = this.album.asObservable();

  constructor() {}

  public setAlbum(data: any) {
    if (data) {
      this.album.next(data);
    }
  }

  getData(){
    return data;
  }
}
