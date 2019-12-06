import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-controls',
  templateUrl: './course-controls.component.html',
  styleUrls: ['./course-controls.component.css']
})
export class CourseControlsComponent implements OnInit {

  private searchValue: string;

  constructor() { }

  ngOnInit() {
  }

  private add() {
    console.log('Add course pressed');
  }

  private find() {
    console.log(this.searchValue);
  }

}
