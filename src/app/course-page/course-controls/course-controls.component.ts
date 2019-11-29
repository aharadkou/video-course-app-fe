import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from 'src/app/core/services/communicator-service';

@Component({
  selector: 'app-course-controls',
  templateUrl: './course-controls.component.html',
  styleUrls: ['./course-controls.component.css']
})
export class CourseControlsComponent implements OnInit {

  private searchValue: string;

  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit() {
  }

  private add() {
    console.log('Add course pressed');
  }

  private find() {
    console.log(this.searchValue);
    this.communicatorService.publishData(this.searchValue);

  }

}
