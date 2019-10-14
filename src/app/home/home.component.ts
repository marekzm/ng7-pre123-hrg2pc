import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  h1Style:boolean=false;
  h1Nadpis:boolean=false;

  users: Object;



   constructor(private data:DataService) { }
   profiles: Object;

  ngOnInit() {
   

   this.data.getUsers().subscribe(xxx=>{
     this.users=xxx;
     console.log(this.users);
     
  //  })}

 //this.data.getUser().subscribe(data => {this.profiles = data
// console.log(this.profiles)

})}


 
  
  firstClick(){
    this.data.firstClick();
    //console.log('clicked');
    //this.h1Style=true;
    //this.h1Nadpis=true;
  };
   
  }




 