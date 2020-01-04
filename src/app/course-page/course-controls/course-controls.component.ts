import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicatorService } from 'src/app/core/services/communicator.service';
import { FormControl } from '@angular/forms';
import { debounceTime, filter} from 'rxjs/operators';
import { DEBOUNCE_SEARCH, SEARCH_SKIP_COUNT } from 'src/app/core/constants/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-controls',
  templateUrl: './course-controls.component.html',
  styleUrls: ['./course-controls.component.css']
})
export class CourseControlsComponent implements OnInit, OnDestroy {

  private searchSub: Subscription;
  searchControl: FormControl;

  constructor(private router: Router, private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.searchControl = new FormControl('');
    this.searchSub = this.searchControl.valueChanges.pipe(
      debounceTime(DEBOUNCE_SEARCH),
      filter((searchValue: string) => {
        const searchLength = searchValue.trim().length;
        return searchLength >= SEARCH_SKIP_COUNT || searchLength === 0;
      })
    ).subscribe(
      searchValue => this.communicatorService.publishData('courseFind', searchValue)
    );
  }

  add() {
    this.router.navigateByUrl('/courses/new');
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }

}
