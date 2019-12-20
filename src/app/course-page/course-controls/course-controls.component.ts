import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicatorService } from 'src/app/core/services/communicator.service';

@Component({
  selector: 'app-course-controls',
  templateUrl: './course-controls.component.html',
  styleUrls: ['./course-controls.component.css']
})
export class CourseControlsComponent implements OnInit {

  searchValue: string;

  constructor(private router: Router, private communicatorService: CommunicatorService) { }

  ngOnInit() {
  }

  add() {
    console.log('Add course pressed');
    this.router.navigate(['/courses/new']);
  }

  find() {
    this.communicatorService.publishData('courseFind', this.searchValue);
  }

}
