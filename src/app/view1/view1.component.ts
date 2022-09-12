import { Component, OnInit, ViewChild } from '@angular/core';
import { IGridEditDoneEventArgs, IgxGridComponent, IgxSnackbarComponent, IRowDataEventArgs } from 'igniteui-angular';
import { Feature } from '../models/features-model';
import { FeaturesService } from '../services/features.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})

export class View1Component implements OnInit {
  public featuresFeatures!: Feature[];
  @ViewChild('grid', { static: true }) public grid: IgxGridComponent | undefined;
  @ViewChild('snackbar', { static: true }) public snackbar: IgxSnackbarComponent | undefined;

  constructor(
    private featuresService: FeaturesService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.featuresService.getFeatures().subscribe(data => this.featuresFeatures = data);
  }

  async rowAdd(event: IRowDataEventArgs) {
    var newFeature = await this.featuresService.addFeature(event.data);
    this.grid?.updateRow(newFeature, event.data.featureRequestId);
    this.snackbar?.open("Row Added");
  }

  async rowEdit(event: IGridEditDoneEventArgs){
    if (!event.isAddRow){
      await this.featuresService.updateFeature(event.newValue)
      this.snackbar?.open("Row Updated");
    }
  }

  async rowDelete(event: IRowDataEventArgs){
    await this.featuresService.deleteFeature(event.data);
    this.snackbar?.open("Row Deleted");
  }
}
