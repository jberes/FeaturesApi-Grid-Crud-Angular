import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../services/features.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public featuresFeatures: any = null;

  constructor(
    private featuresService: FeaturesService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.featuresService.getFeatures().subscribe(data => this.featuresFeatures = data);
  }
}
