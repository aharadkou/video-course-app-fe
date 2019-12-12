import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-controls',
  templateUrl: './course-controls.component.html',
  styleUrls: ['./course-controls.component.css']
})
export class CourseControlsComponent implements OnInit {

  searchValue: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  add() {
    console.log('Add course pressed');
    this.router.navigate(['/courses/new']);
  }

  find() {
    console.log(this.searchValue);
  }

}
