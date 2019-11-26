import { Directive, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Directive({
  selector: '[appPageTitle]'
})
export class PageTitleDirective implements OnInit {

  @Input() pageTitle: string;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
  }

}
