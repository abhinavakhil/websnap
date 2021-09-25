import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-picture",
  templateUrl: "./picture.component.html",
  styleUrls: ["./picture.component.css"],
})
export class PictureComponent implements OnInit {
  @ViewChild("canvas") public canvas: ElementRef;
  @ViewChild("photofilter") photoFilter: ElementRef;
  @ViewChild("clearButton") clearButton: ElementRef;
  @ViewChild("a") alpha: ElementRef;

  width: number = 700;
  height: number = 0;
  filter: string = "none";
  streaming: boolean = false;
  video: HTMLVideoElement;
  constraints = { audio: false, video: true };
  hasMedia = { hasVideo: false, hasAudio: false };
  captures: Array<{ img: any; filter: string }>;

  constructor(private toastr: ToastrService) {
    this.captures = [];
  }

  ngOnInit() {
    this.video = document.querySelector("video");
    navigator.mediaDevices.getUserMedia(this.constraints).then(
      (stream) => {
        this.video.srcObject = stream;
        this.video.play();
        this.checkStream(stream);
      },
      (error) => {
        this.toastr.error("An error occured, please refresh");
        console.log("Error: " + error);
      }
    );
  }

  filterImage(value) {
    this.filter = value;
    this.video.style.filter = this.filter;
  }

  clear() {
    this.captures = [];
    this.filter = "none";
    this.video.style.filter = this.filter;
  }

  takepicture() {
    if (this.hasMedia.hasVideo) {
      const context = this.canvas.nativeElement.getContext("2d");
      context.drawImage(this.video, 0, 0, 700, 480);
      const imgUrl = this.canvas.nativeElement.toDataURL("image/png");

      let payload = { img: imgUrl, filter: this.filter };
      this.captures.push(payload);
    } else {
      this.toastr.error("initializing video please wait");
    }
  }

  checkStream(stream) {
    if (stream.active) {
      this.hasMedia.hasVideo = true;
      if (this.hasMedia.hasVideo) {
        this.toastr.success("Video initialized, take awesome pic: )");
      }
    }
    return this.hasMedia;
  }
}
