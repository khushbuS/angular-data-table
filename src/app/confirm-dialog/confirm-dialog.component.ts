
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserConfirmationService } from '../services/user-confirmation.service';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  confirmation: string;
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, private router: Router, private psuedoApi: UserConfirmationService) { }

  onNoClick(): void {
    this.dialogRef.close('no');
  }
  onYesClick(): void {
    this.dialogRef.close();
    this.psuedoApi.getConfimation().then((response: string) =>
    {
      this.confirmation = response;
      this.confirmation === 'success' ? this.router.navigate(['/next-screen']) : alert('API request was not successful'); 
    });
 
  }
  ngOnInit() {
  }

}
