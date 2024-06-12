import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'xp-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {

  @ViewChild('featuresSection', { static: true }) featuresSection: ElementRef;

  constructor(private router: Router, private ngZone: NgZone) { }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  scrollToFeatures(): void {
    this.ngZone.run(() => {
      this.featuresSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
