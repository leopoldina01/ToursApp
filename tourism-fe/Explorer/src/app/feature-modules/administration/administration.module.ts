import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentFormComponent } from './equipments/equipment-form/equipment-form.component';
import { EquipmentComponent } from './equipments/equipment/equipment.component';
import { MaterialModule } from 'src/app/infrastructure/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministratorComponent } from './administrator/administrator.component';
import { ApplicationRatingsComponent } from './application-rating/application-ratings/application-ratings.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ApplicationRatingFormComponent } from './application-rating/application-rating-form/application-rating-form.component';
import { TourProblemsComponent } from './tour-problems/tour-problems.component';
import { PublicKeypointFacilityRequestsComponent } from './requests/public-keypoint-facility-requests/public-keypoint-facility-requests.component';
import { MapModule } from 'src/app/shared/map/map.module';
import { RequestDenialCommentComponent } from './requests/request-denial-comment/request-denial-comment.component';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ChallengeComponent } from './challenges/challenge/challenge.component';
import { ChallengeFormComponent } from './challenges/challenge-form/challenge-form.component';


@NgModule({
  declarations: [
    EquipmentFormComponent,
    EquipmentComponent,
    AdministratorComponent,
    ApplicationRatingsComponent,
    ApplicationRatingFormComponent,
    TourProblemsComponent,
    PublicKeypointFacilityRequestsComponent,
    RequestDenialCommentComponent,
    ChallengeComponent,
    ChallengeFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MapModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  exports: [
    EquipmentComponent,
    EquipmentFormComponent,
    AdministratorComponent,
    MatCard,
    TourProblemsComponent,
    PublicKeypointFacilityRequestsComponent,
    RequestDenialCommentComponent,
    ChallengeFormComponent
  ]
})
export class AdministrationModule {}
