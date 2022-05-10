import { Component, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss']
})
export class SpinnerOverlayComponent implements OnInit {
  color = 'primary';
  value = 50;
  isLoading?: boolean;

  constructor(private loaderService: LoadingService) {

    this.loaderService.loading$.subscribe((v) => {
      this.isLoading = v;
    });

  }
  ngOnInit() {
  }
}
