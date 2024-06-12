import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentSelectionComponent } from './equipment/equipment-selection/equipment-selection.component';
import { MaterialModule } from 'src/app/infrastructure/material/material.module';
import { MatCardModule } from '@angular/material/card';
import { UnusedEquipmentComponent } from './equipment/unused-equipment/unused-equipment.component';
import { TourFormComponent } from './tours/tour-form/tour-form.component';
import { TourComponent } from './tours/tour/tour.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacilityComponent } from './facilities/facility/facility.component';
import { TourKeypointsComponent } from './keypoints/tour-keypoints/tour-keypoints.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MapModule } from 'src/app/shared/map/map.module';
import { FacilityCreateComponent } from './facilities/facility-create/facility-create.component';
import { FacilityUpdateComponent } from './facilities/facility-update/facility-update.component';
import { MarkerDialogComponent } from '../../shared/map/marker-dialog/marker-dialog.component';
import { TourViewComponent } from './tours/tour-view/tour-view.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { TourKeypointUpdateFormComponent } from './keypoints/tour-keypoint-update-form/tour-keypoint-update-form.component';
import { TourDetailsComponent } from './tours/tour-details/tour-details.component';
import { PublicTourKeypointsComponent } from './keypoints/public-tour-keypoints/public-tour-keypoints.component';
import { PublicFacilitiesComponent } from './facilities/public-facilities/public-facilities.component';
import { PublicKeypointsListComponent } from './keypoints/public-keypoints-list/public-keypoints-list.component';
import { TourCreationComponent } from './tours/tour-creation/tour-creation.component';
import { IndividualTourStatisticsComponent } from './statistics/individual-tour-statistics/individual-tour-statistics.component';

import { OverallTourStatisticsComponent } from './statistics/overall-tour-statistics/overall-tour-statistics.component';
import { RouterModule } from '@angular/router';
import { TourDiscountSaleComponent } from './tours/tour-discount-sale/tour-discount-sale.component';
import { TouristTourCreationComponent } from './tours/tourist-tour-creation/tourist-tour-creation.component';
import { TouristPublicKeypointSelectionComponent } from './keypoints/tourist-public-keypoint-selection/tourist-public-keypoint-selection.component';
import { CampaignCreationComponent } from './campaign/campaign-creation/campaign-creation.component';
import { CampaignCreationFormComponent } from './campaign/campaign-creation-form/campaign-creation-form.component';


@NgModule({
  declarations: [
    EquipmentSelectionComponent,
    UnusedEquipmentComponent,
    TourFormComponent,
    TourComponent,
    FacilityComponent,
    TourKeypointsComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent,
    MarkerDialogComponent,
    TourViewComponent,
    TourKeypointUpdateFormComponent,
    TourDetailsComponent,
    PublicTourKeypointsComponent,
    PublicFacilitiesComponent,
    PublicKeypointsListComponent,
    TourCreationComponent,
    IndividualTourStatisticsComponent,
    OverallTourStatisticsComponent,
    TourDiscountSaleComponent,
    TouristTourCreationComponent,
    TouristPublicKeypointSelectionComponent,
    CampaignCreationComponent,
    CampaignCreationFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    MatIconModule,
    MapModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    RouterModule
  ],
  exports: [
    EquipmentSelectionComponent,
    TourFormComponent,
    TourComponent,
    TourKeypointsComponent,
    CampaignCreationComponent
  ],
})
export class TourAuthoringModule {}