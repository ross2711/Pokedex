import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-my-loader',
  templateUrl: './my-loader.component.html',
  styleUrls: ['./my-loader.component.scss'],
})
export class MyLoaderComponent implements OnInit {
  color = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {}
}
