import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
krajinas: Object;
  constructor(private data:DataService) { }
stats: Object;
 ngOnInit() {
   

  this.data.getCountries().subscribe(name=>{
     this.stats=name 
      console.log(this.stats)
  //  })}

 //this.data.getUser().subscribe(data => {this.profiles = data
// console.log(this.profiles)

})}

}