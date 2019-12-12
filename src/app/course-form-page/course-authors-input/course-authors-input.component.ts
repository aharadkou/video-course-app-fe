import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/entities/user/user.model';

@Component({
  selector: 'app-course-authors-input',
  templateUrl: './course-authors-input.component.html',
  styleUrls: ['./course-authors-input.component.css']
})
export class CourseAuthorsInputComponent implements OnInit {

  @Input() authors: User[];

  constructor() { }

  ngOnInit() {
  }

}
