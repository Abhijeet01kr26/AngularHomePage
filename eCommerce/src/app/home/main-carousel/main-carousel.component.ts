import { Component, OnDestroy, OnInit } from '@angular/core';
import { homeCarouselData } from 'src/Data/mainCarousel';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})
export class MainCarouselComponent implements OnInit, OnDestroy {
  carouselData: any[] = [];
  currentSlide = 0;
  intervalId: any;

  ngOnInit() {
    this.carouselData = homeCarouselData;
    this.autoPlay();
  }

  autoPlay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 2500);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

