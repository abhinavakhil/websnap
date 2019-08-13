import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
   width=700;
   height=0;
   filter='none';
   streaming=false;
   video: HTMLVideoElement;
///taking photo
   @ViewChild("canvas")
    public canvas: ElementRef;
    captures:Array<any>;
//filter
  @ViewChild("photofilter") photoFilter :ElementRef;
  @ViewChild('clearButton') clearButton :ElementRef;
  @ViewChild('a') alpha:ElementRef;

//
   constraints = { audio: false, video:true };
  constructor() {
    this.captures = [];
   }

  ngOnInit() {

    this.video = document.querySelector('video');
    navigator.mediaDevices.getUserMedia(this.constraints).then(
      stream => {
        this.video.srcObject = stream;
        this.video.play();
      },
      error => {
        console.log('Error: ' + error);
      });
///filtering
this.photoFilter.nativeElement.addEventListener('change',(e)=>{
  this.filter=e.target.value;
  
  this.video.style.filter = this.filter;
  e.preventDefault();
});
//clear event
 this.clearButton.nativeElement.addEventListener('click',(e)=>{
   //this.captures.innerHTML="";
   //set filter none;
   this.filter='none';
   //set video filter
   this.video.style.filter=this.filter;
   //reset select list
    // y.selectedIndex = 0;
 })


  }


   takepicture() {
    let context = this.canvas.nativeElement.getContext('2d')
    .drawImage(this.video, 0, 0, 700, 480);

    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    (document.querySelector('.app') as HTMLElement).style.filter = this.filter;
    }

}


