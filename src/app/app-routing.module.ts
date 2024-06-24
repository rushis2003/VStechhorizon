import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApplycourseComponent } from './applycourse/applycourse.component';
import { CoursesComponent } from './courses/courses.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ProjectComponent } from './project/project.component';
import { CareerComponent } from './career/career.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';

import { ScholarshipPageComponent } from './scholarship-page/scholarship-page.component';

import { SteamComponent } from './steam/steam.component';

import { ServivePageOverviewComponent } from './servive-page-overview/servive-page-overview.component';

import { ServivePageDetailedComponent } from './servive-page-detailed/servive-page-detailed.component';
import { ItComponent } from './it/it.component';
import { IotComponent } from './iot/iot.component';
import { AiMlComponent } from './ai-ml/ai-ml.component';
import { RoboticsComponent } from './robotics/robotics.component';
import { JobApplicantComponent } from './CRUD/job-applicant/job-applicant.component';
import { StudentComponent } from './CRUD/student/student.component';
import { ContactComponent } from './CRUD/contact/contact.component';
import { KitComponent } from './CRUD/kit/kit.component';
import { ScholarshipComponent } from './CRUD/scholarship/scholarship.component';
import { ScholarshipFormComponent } from './scholarship-form/scholarship-form.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ProjectKitBuyFormComponent } from './project-kit-buy-form/project-kit-buy-form.component';
import { PayPageComponent } from './pay-page/pay-page.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AHeaderComponent } from './a-header/a-header.component';
import { AAuthLoginComponent } from './a-auth-login/a-auth-login.component';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { AuthGuard } from './auth.guard';
import { JobDetailsComponent } from './CRUD/job-details/job-details.component';
import { JobUpdateFormComponent } from './job-update-form/job-update-form.component';
import { JobAddFormComponent } from './job-add-form/job-add-form.component';
import { SubscribeComponent } from './CRUD/subscribe/subscribe.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HeaderComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'career', component: CareerComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'job-description/:id', component: JobDescriptionComponent },
  { path: 'application-form', component: ApplicationFormComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'form', component: FormComponent },
  { path: 'service-page-overview', component: ServivePageOverviewComponent },
  { path: 'detailed-info-service', component: ServivePageDetailedComponent },
  { path: 'pay-page', component: PayPageComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'applycourse', component: ApplycourseComponent },
  { path: 'scholarship', component: ScholarshipPageComponent },
  { path: 'steam', component: SteamComponent },
  { path: 'term-condition', component: TermsConditionComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'form', component: FormComponent },
  { path: 'it', component: ItComponent },
  { path: 'iot', component: IotComponent },
  { path: 'ai-ml', component: AiMlComponent },
  { path: 'robotics', component: RoboticsComponent },
  { path: 'job', component: JobApplicantComponent },
  { path: 'student', component: StudentComponent },
  { path: 'con', component: ContactComponent },
  { path: 'kit', component: KitComponent },
  { path: 'schol-table', component: ScholarshipComponent },
  { path: 'scholarship-form', component: ScholarshipFormComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'admin/contact', component: ContactComponent },
  { path: 'admin/job-application', component: JobApplicantComponent },
  { path: 'admin/kit', component: KitComponent },
  { path: 'admin/scholarship', component: ScholarshipComponent },
  { path: 'admin/student', component: StudentComponent },
  { path: 'project-kit-buy-form', component: ProjectKitBuyFormComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'aheader', component: AHeaderComponent, canActivate: [AuthGuard] },
  { path: 'vsTechHorizon.com.oblique/admin', component: AAuthLoginComponent },
  { path: 'a-dashboard', component: ADashboardComponent },
  { path: 'admin/job-details', component: JobDetailsComponent },
  { path: 'job-update-form/:id', component: JobUpdateFormComponent },
  { path: 'job-add-form', component: JobAddFormComponent},
  { path: 'admin/subscribe', component: SubscribeComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],

  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

