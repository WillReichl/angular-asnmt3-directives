import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-paragraph',
  templateUrl: './secret-paragraph.component.html',
  styleUrls: ['./secret-paragraph.component.css']
})
export class SecretParagraphComponent implements OnInit {

  isPghDisplayed = false;
  clicks: string[] = [];
  numClicks = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleDisplayed() {
    this.clicks.push((this.isPghDisplayed ? 'Hiding' : 'Showing') + ' Secret Paragraph at: ' + new Date());
    this.isPghDisplayed = !this.isPghDisplayed;
    this.numClicks++;
    // console.log(this.clicks);
  }

}
