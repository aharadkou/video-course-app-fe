import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourseFreshness]'
})
export class CourseFreshnessDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input() set appCourseFreshness(creationDate: Date) {
    const currentDate = new Date();
    const preCurrentDate = new Date();
    preCurrentDate.setDate(currentDate.getDate() - 14);
    if (creationDate.getTime() <= currentDate.getTime() && creationDate.getTime() >= preCurrentDate.getTime()) {
      this.renderer.addClass(this.elementRef.nativeElement, 'course-item-fresh');
    }
    if (creationDate.getTime() > currentDate.getTime()) {
      this.renderer.addClass(this.elementRef.nativeElement, 'course-item-upcoming');
    }
  }

  ngOnInit() {
  }

}
