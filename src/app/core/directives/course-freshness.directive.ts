import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourseFreshness]'
})
export class CourseFreshnessDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input() set appCourseFreshness(creationDate: Date) {
    const freshnessDuration = 14;
    const currentDate = new Date();
    const preCurrentDate = new Date(currentDate);
    preCurrentDate.setDate(currentDate.getDate() - freshnessDuration);
    if (creationDate > currentDate) {
      this.renderer.addClass(this.elementRef.nativeElement, 'course-item-upcoming');
    } else if (creationDate < currentDate && creationDate.getTime() >= preCurrentDate.getTime()) {
      this.renderer.addClass(this.elementRef.nativeElement, 'course-item-fresh');
    }
  }

  ngOnInit() {
  }

}
