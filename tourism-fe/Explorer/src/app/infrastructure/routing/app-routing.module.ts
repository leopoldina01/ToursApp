import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/feature-modules/layout/home/home.component';
import { LoginComponent } from '../auth/login/login.component';
import { EquipmentComponent } from 'src/app/feature-modules/administration/equipments/equipment/equipment.component';
import { AuthGuard } from '../auth/auth.guard';
import { RegistrationComponent } from '../auth/registration/registration.component';
import { ApplicationRatingsComponent } from 'src/app/feature-modules/administration/application-rating/application-ratings/application-ratings.component';
import { UserProfilesComponent } from 'src/app/feature-modules/layout/social/user-profiles/user-profiles.component';
import { TourratingComponent } from 'src/app/feature-modules/marketplace/rating/tourrating/tourrating.component';
import { TourComponent } from 'src/app/feature-modules/tour-authoring/tours/tour/tour.component';
import { FacilityComponent } from 'src/app/feature-modules/tour-authoring/facilities/facility/facility.component';
import { TourKeypointsComponent } from 'src/app/feature-modules/tour-authoring/keypoints/tour-keypoints/tour-keypoints.component';
import { UserPendingReqComponent } from 'src/app/feature-modules/layout/social/user-pending-req/user-pending-req.component';
import { AvailableClubsComponent } from 'src/app/feature-modules/layout/clubs/available-clubs/available-clubs.component';
import { BlogCreateComponent } from 'src/app/feature-modules/blog/blog-create/blog-create.component';
import { AdministratorComponent } from 'src/app/feature-modules/administration/administrator/administrator.component';
import { ClubComponent } from 'src/app/feature-modules/layout/clubs/club/club.component';
import { MapComponent } from '../../shared/map/map.component';
import { FacilityCreateComponent } from 'src/app/feature-modules/tour-authoring/facilities/facility-create/facility-create.component';
import { FacilityUpdateComponent } from 'src/app/feature-modules/tour-authoring/facilities/facility-update/facility-update.component';
import { TourViewComponent } from 'src/app/feature-modules/tour-authoring/tours/tour-view/tour-view.component';
import { TourKeypointUpdateFormComponent } from 'src/app/feature-modules/tour-authoring/keypoints/tour-keypoint-update-form/tour-keypoint-update-form.component';
import { TourProblemsComponent } from 'src/app/feature-modules/administration/tour-problems/tour-problems.component';
import { TourProblemFormComponent } from 'src/app/feature-modules/tour-execution/tour-problem-form/tour-problem-form.component';
import { LandingPageComponent } from 'src/app/feature-modules/layout/landing-page/landing-page.component';
import { TourPreferencesComponent } from 'src/app/feature-modules/marketplace/preferences/tour-preferences/tour-preferences.component';
import { TourPreferencesFormComponent } from 'src/app/feature-modules/marketplace/preferences/tour-preferences-form/tour-preferences-form.component';
import { BlogsOverviewComponent } from 'src/app/feature-modules/blog/blogs-overview/blogs-overview.component';
import { BlogPageOverviewComponent } from 'src/app/feature-modules/blog/blog-page-overview/blog-page-overview.component';
import { ReportedProblemsComponent } from 'src/app/feature-modules/marketplace/problems/reported-problems/reported-problems.component';
import { EquipmentTrackingComponent } from 'src/app/feature-modules/tour-authoring/equipment/equipment-tracking/equipment-tracking.component';
import { TourFormComponent } from 'src/app/feature-modules/tour-authoring/tours/tour-form/tour-form.component';
import { PublicKeypointFacilityRequestsComponent } from 'src/app/feature-modules/administration/requests/public-keypoint-facility-requests/public-keypoint-facility-requests.component';
import { BoughtToursComponent } from 'src/app/feature-modules/tour-execution/tours/bought-tours/bought-tours.component';
import { TouristTourViewComponent } from 'src/app/feature-modules/tour-execution/tours/tourist-tour-view/tourist-tour-view.component';
import { TourDetailsComponent } from 'src/app/feature-modules/tour-authoring/tours/tour-details/tour-details.component';
import { MessagesComponent } from 'src/app/feature-modules/layout/social/messages/messages.component';
import { TourAllDetailsComponent } from 'src/app/feature-modules/tour-execution/tours/tour-all-details/tour-all-details.component';
import { CartItemsComponent } from 'src/app/feature-modules/marketplace/shopping-cart/cart-items/cart-items.component';
import { MyProfileComponent } from 'src/app/feature-modules/layout/social/my-profile/my-profile.component';
import { ProfileComponent } from 'src/app/feature-modules/layout/social/profile/profile.component';
import { IndividualTourStatisticsComponent } from 'src/app/feature-modules/tour-authoring/statistics/individual-tour-statistics/individual-tour-statistics.component';
import { OverallTourStatisticsComponent } from 'src/app/feature-modules/tour-authoring/statistics/overall-tour-statistics/overall-tour-statistics.component';
import { AboutUsTeamCardsComponent } from 'src/app/feature-modules/layout/about-us-and-faq/about-us-team-cards/about-us-team-cards.component';
import { ATestSliderComponent } from 'src/app/feature-modules/layout/about-us-and-faq/a-test-slider/a-test-slider.component';
import { AboutUsComponent } from 'src/app/feature-modules/layout/about-us-and-faq/about-us/about-us.component';
import { FrequentQuestionsComponent } from 'src/app/feature-modules/layout/about-us-and-faq/frequent-questions/frequent-questions.component';
import { ChallengeComponent } from 'src/app/feature-modules/administration/challenges/challenge/challenge.component';
import { ChallengesViewComponent } from 'src/app/feature-modules/tour-execution/challenges/challenges-view/challenges-view.component';
import { BundleCreateUpdateComponent } from 'src/app/feature-modules/tour-authoring/bundle/bundle-create-update/bundle-create-update.component';
import { BundleViewComponent } from 'src/app/feature-modules/tour-authoring/bundle/bundle-view/bundle-view.component';
import { TouristTourCreationComponent } from 'src/app/feature-modules/tour-authoring/tours/tourist-tour-creation/tourist-tour-creation.component';
import { CouponManagementComponent } from 'src/app/feature-modules/marketplace/coupon/coupon-management/coupon-management.component';
import { CampaignCreationComponent } from 'src/app/feature-modules/tour-authoring/campaign/campaign-creation/campaign-creation.component';
import { ClubInfoComponent } from 'src/app/feature-modules/layout/clubs/club-info/club-info.component';
import { MapViewComponent } from 'src/app/shared/map-view/map-view/map-view.component';
import { TourRatingFormComponent } from 'src/app/shared/map-view/tour-rating-form/tour-rating-form.component';
import { ChallengeFormComponent } from 'src/app/feature-modules/administration/challenges/challenge-form/challenge-form.component';
import { ChangePasswordRequestComponent } from '../auth/change-password-request/change-password-request.component';
import { ChangePasswordComponent } from '../auth/change-password/change-password.component';
import { EmailVerificationComponent } from '../auth/email-verification/email-verification.component';
import {HeroSectionComponent} from "../../feature-modules/layout/hero-section/hero-section.component";




const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'myProfile', component: MyProfileComponent},
  {path: 'userProfiles', component: UserProfilesComponent},
  {path: 'tour', component: TourComponent},
  {path: 'equipment', component: EquipmentComponent, canActivate: [AuthGuard],},
  {path: 'tourrating' , component : TourratingComponent, canActivate: [AuthGuard],},
  {path: 'facilities', component: FacilityComponent, canActivate: [AuthGuard],},
  {path: 'keypoints/create/:tourId/:mode', component: TourKeypointsComponent, canActivate: [AuthGuard]},
  {path: 'pending-req', component: UserPendingReqComponent},
  {path: 'available-clubs', component: AvailableClubsComponent},
  {path: 'blog/create/:id', component:BlogCreateComponent, canActivate: [AuthGuard]},
  {path: 'club', component: ClubComponent},
  {path: 'map', component: MapComponent},
  {path: 'facilities/create', component: FacilityCreateComponent},
  {path: 'facilities/update/:id', component: FacilityUpdateComponent, canActivate: [AuthGuard]},
  {path: 'tour-view', component: TourViewComponent, canActivate: [AuthGuard]},
  {path: 'keypoint-update', component: TourKeypointUpdateFormComponent , canActivate: [AuthGuard]},
  {path: 'administrator',component:AdministratorComponent, canActivate: [AuthGuard]},
  {path: 'tourProblems',component:TourProblemsComponent, canActivate: [AuthGuard]},
  {path: 'tour-problem',component:TourProblemFormComponent, canActivate: [AuthGuard]},
  {path: 'rate-us', component: ApplicationRatingsComponent, canActivate: [AuthGuard]},
  {path: '', component: HeroSectionComponent},
  {path: 'rate-us', component: ApplicationRatingsComponent, canActivate: [AuthGuard]},
  {path: 'tour-preferences', component: TourPreferencesComponent, canActivate: [AuthGuard],},
  {path: 'tour-preferences/tour-preferences-form', component: TourPreferencesFormComponent, canActivate: [AuthGuard],},
  {path: 'blogs-overview', component: BlogsOverviewComponent, canActivate: [AuthGuard]},
  {path: 'blogPage-overview/:id', component: BlogPageOverviewComponent, canActivate: [AuthGuard]},
  {path: 'reported-problems', component: ReportedProblemsComponent, canActivate: [AuthGuard]},
  {path: 'bought-tours', component: BoughtToursComponent, canActivate: [AuthGuard]},
  {path: 'tours', component: TouristTourViewComponent, canActivate: [AuthGuard]},
  {path: 'equipment-tracking', component: EquipmentTrackingComponent, canActivate: [AuthGuard]},
  {path: 'tour-creation-form/:id/:mode', component: TourFormComponent, canActivate: [AuthGuard]},
  {path: 'public-keypoint-facility-requests', component: PublicKeypointFacilityRequestsComponent, canActivate: [AuthGuard]},
  {path: 'bought-tours', component: BoughtToursComponent, canActivate: [AuthGuard]},
  {path: 'tour-details/:id',component: TourDetailsComponent,canActivate: [AuthGuard]},
  {path: 'tour-all-details/:id', component: TourAllDetailsComponent, canActivate: [AuthGuard]},
  {path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
  {path: 'map-view', component: MapViewComponent, canActivate: [AuthGuard]},
  {path: 'cart-items', component: CartItemsComponent},
  {path: 'show-statistic/:id', component: IndividualTourStatisticsComponent, canActivate: [AuthGuard]},
  {path: 'tour/overall-tour-statistics', component: OverallTourStatisticsComponent, canActivate: [AuthGuard]},
  {path: 'about-us-cards', component: AboutUsTeamCardsComponent},
  {path: 'test-slider', component: ATestSliderComponent},
  {path: 'challenges/:keypointid', component: ChallengeComponent, canActivate: [AuthGuard]},
  {path: 'challenges-view', component: ChallengesViewComponent, canActivate: [AuthGuard]},
  {path: 'challenge-form', component: ChallengeFormComponent, canActivate: [AuthGuard]},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'frequent-questions', component: FrequentQuestionsComponent},
  {path: 'bundle-create', component: BundleCreateUpdateComponent, canActivate: [AuthGuard]},
  {path: 'bundle-view', component: BundleViewComponent, canActivate: [AuthGuard]},
  {path: 'bundle-update/:id', component: BundleCreateUpdateComponent, canActivate: [AuthGuard]},
  {path: 'tourist-tour-creation/:id', component: TouristTourCreationComponent, canActivate: [AuthGuard]},
  {path: 'coupon-management', component: CouponManagementComponent, canActivate: [AuthGuard]},
  {path: 'campaign-creation', component: CampaignCreationComponent, canActivate: [AuthGuard]},
  {path: 'club-info', component: ClubInfoComponent},
  {path: 'change-password-request', component: ChangePasswordRequestComponent},
  {path: 'reset-password', component: ChangePasswordComponent},
  {path: 'verify-email', component: EmailVerificationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
