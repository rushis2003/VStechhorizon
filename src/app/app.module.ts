import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScholarshipPageComponent } from './scholarship-page/scholarship-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { ApplycourseComponent } from './applycourse/applycourse.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { SteamComponent } from './steam/steam.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { CareerComponent } from './career/career.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { CoursesComponent } from './courses/courses.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormComponent } from './form/form.component';
import { ServivePageOverviewComponent } from './servive-page-overview/servive-page-overview.component';
import { ServivePageDetailedComponent } from './servive-page-detailed/servive-page-detailed.component';
import { CarouselbootComponent } from './carouselboot/carouselboot.component';
import { MapComponent } from './map/map.component';
import { ItComponent } from './it/it.component';
import { IotComponent } from './iot/iot.component';
import { AiMlComponent } from './ai-ml/ai-ml.component';
import { RoboticsComponent } from './robotics/robotics.component';
import { JobApplicantComponent } from './CRUD/job-applicant/job-applicant.component';
import { StudentComponent } from './CRUD/student/student.component';
import { ContactComponent } from './CRUD/contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { KitComponent } from './CRUD/kit/kit.component';
import { ScholarshipComponent } from './CRUD/scholarship/scholarship.component';
import { ScholarshipFormComponent } from './scholarship-form/scholarship-form.component';
import { ProjectKitBuyFormComponent } from './project-kit-buy-form/project-kit-buy-form.component';
import { MatCardModule } from '@angular/material/card';
import { PopupComponent } from './popup/popup.component';
import { KitBuyFormSuccessDialogComponent } from './kit-buy-form-success-dialog/kit-buy-form-success-dialog.component';
import { PayPageComponent } from './pay-page/pay-page.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AAuthLoginComponent } from './a-auth-login/a-auth-login.component';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { AHeaderComponent } from './a-header/a-header.component';
import { AuthGuard } from './auth.guard';
import { JobDetailsComponent } from './CRUD/job-details/job-details.component';
import { JobUpdateFormComponent } from './job-update-form/job-update-form.component';
import { JobAddFormComponent } from './job-add-form/job-add-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTh, faBars, faUserAlt, faSync, faStar, faPlus, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { SubscribeComponent } from './CRUD/subscribe/subscribe.component';


library.add(faTh, faBars, faUserAlt, faSync, faStar, faPlus, faCogs, faSignOutAlt);
//npm install @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScholarshipPageComponent,
    HelpPageComponent,
    FooterComponent,
    ScholarshipPageComponent,
    CoursesComponent,
    ApplycourseComponent,
    WhatsappComponent,
    SteamComponent,
    ProjectComponent,
    ApplicationFormComponent,
    CareerComponent,
    JobDescriptionComponent,
    CoursesComponent,
    AboutUsComponent,
    MainHeaderComponent,

    FormComponent,
    CarouselComponent,
    ServivePageOverviewComponent,
    ServivePageOverviewComponent,
    ServivePageDetailedComponent,

    ChatbotComponent,
    CarouselbootComponent,
    MapComponent,
    ItComponent,
    IotComponent,
    AiMlComponent,
    RoboticsComponent,
    JobApplicantComponent,
    StudentComponent,
    ContactComponent,
    FeedbackComponent,
    KitComponent,
    ScholarshipComponent,
    ScholarshipFormComponent,
    ProjectKitBuyFormComponent,
    PopupComponent,
    KitBuyFormSuccessDialogComponent,
    PayPageComponent,
    TermsConditionComponent,
    PaymentComponent,
    AdminDashboardComponent,
    AAuthLoginComponent,
    ADashboardComponent,
    AHeaderComponent,
    JobDetailsComponent,
    JobUpdateFormComponent,
    JobAddFormComponent,
    SubscribeComponent,
   
    
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    FontAwesomeModule

  ],
  providers: [ AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }





