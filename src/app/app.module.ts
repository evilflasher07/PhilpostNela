import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { PostofficeFormComponent } from './admin/postoffice-form/postoffice-form.component';
import { EmployeeFormComponent } from './admin/employee-form/employee-form.component';

import { RouterModule, Routes } from '@angular/router';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AreaComponent } from './area/area.component';
import { AreaGeneratorService } from './area-generator.service';
import { PostofficeformService } from './postofficeform.service';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    PostofficeFormComponent,
    EmployeeFormComponent,
    AreaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'postofficeform', component: PostofficeFormComponent },
      { path: 'employeeform', component: EmployeeFormComponent },
      { path: 'areaform', component: AreaComponent },
     
      
    ])
  ],

  
  providers: [
    AreaGeneratorService,
    PostofficeformService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
