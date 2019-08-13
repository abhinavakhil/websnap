import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-lovecalc',
  templateUrl: './lovecalc.component.html',
  styleUrls: ['./lovecalc.component.css']
})
export class LovecalcComponent implements OnInit {
  image:string="assets/1.jpg";
  constructor(private dataService:DataService) { }
  // item;
  // myquotevalue:any={};
 
  ngOnInit() {
  }
  // calculatepercentage(){
  //     let mylovevalue;
  //     mylovevalue=Math.floor(Math.random()*21) +80;
  //     if(mylovevalue)
  //     this.item= mylovevalue;
  // }
  
  // myQuote(){
  //  this.dataService.getQuotes().subscribe(
  //    (response)=>{
  //      this.myquotevalue=response;
  //      console.log(response);
  //    },
  //    (error)=>{
  //      console.log(error);
  //    }
  //  )
  // }
}
