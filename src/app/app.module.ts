import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { Routes, RouterModule } from '@angular/router';
import { LoadDataComponent } from './load-data/load-data.component';
import { CustomMaterialModule } from './custom-mat-module';
import { ShowBoxesComponent } from './show-boxes/show-boxes.component';
import { UserConfirmationService } from './services/user-confirmation.service';

//setting up routes for navigation
const appRoutes: Routes = [
  { path: '', component: LoadDataComponent },
  { path: 'next-screen', component: ShowBoxesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    LoadDataComponent,
    ShowBoxesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],

  providers: [UserConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
