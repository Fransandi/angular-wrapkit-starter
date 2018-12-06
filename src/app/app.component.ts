import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.SetAnchorEventHandler();
  }

  SetAnchorEventHandler() {
    // wrapkit initialization (moved from index.html)
    $('a').on('click', function (event) {
      const $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 90
      }, 1000);
      event.preventDefault();
      // code
    });
  }
}
