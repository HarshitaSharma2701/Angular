import { Component, OnInit } from '@angular/core';
import { GlobalsettingsService } from 'src/app/globalsettings.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  data;
  sideBarOpen = true;

  constructor() {  }

  ngOnInit(): void { }
   
   sideBarToggler(){
  this.sideBarOpen = !this.sideBarOpen;
  }


}
