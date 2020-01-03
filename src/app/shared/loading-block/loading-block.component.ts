import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingBlockService } from 'src/app/core/services/loading-block.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.css']
})
export class LoadingBlockComponent implements OnInit, OnDestroy {

  private loadingSub: Subscription;
  isShown: boolean;


  constructor(private loadingService: LoadingBlockService) { }

  ngOnInit() {
    this.loadingSub =  this.loadingService.$isShown.subscribe(visibilityFlag => {
      this.isShown = visibilityFlag;
    });
  }

  ngOnDestroy() {
    this.loadingSub.unsubscribe();
  }

}
