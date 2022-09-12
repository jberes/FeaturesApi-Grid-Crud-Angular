import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../services/features.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  public featuresFeatures: any = null;

  constructor(
    private featuresService: FeaturesService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.featuresService.getFeatures().subscribe(data => this.featuresFeatures = data);
  }
}
