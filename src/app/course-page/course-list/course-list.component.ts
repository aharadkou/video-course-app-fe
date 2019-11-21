import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/entities/course/course.model';
import { courses } from '../courses';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  private courses : Course[];

  constructor() { }

  ngOnInit() {
    this.courses = courses;
  }

  private delete(id : number) {
    this.courses = this.courses.filter((course : Course) => course.id !== id);   
  }

  loadMore() {
    console.log("Loaded more courses");
  }

}
