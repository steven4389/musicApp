import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public name:string ='';

  constructor(private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  enter(){
    this.router.navigate([`/home/${this.name}`], { relativeTo: this.activatedRoute });
  }

}
