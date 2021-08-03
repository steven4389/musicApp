import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AlbumService} from '../../services/album.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name:string = ''
  public musicList:Object = {};
  public getSongs:boolean=false;

  constructor(private activatedRoute: ActivatedRoute, private albumServide:AlbumService) {
   this.name = this.activatedRoute.snapshot.paramMap.get("name")!;
  }

  ngOnInit(): void {

  }

  myFavouritesSongs(){
    this.musicList = this.albumServide.getData();
    this.getSongs=true;
  }

}
