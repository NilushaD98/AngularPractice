// src/app/phone-auth/phone-auth.component.ts
import { Component } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebaseauth.service';

@Component({
  selector: 'app-phone-auth',
  template: `
    <div *ngIf="!verificationId; else codeVerification">
      <label for="phoneNumber">Phone Number:</label>
      <input type="tel" [(ngModel)]="phoneNumber" id="phoneNumber" />
      <button (click)="sendVerificationCode()">Send Verification Code</button>
    </div>
    <ng-template #codeVerification>
      <label for="smsCode">Enter SMS Code:</label>
      <input type="text" [(ngModel)]="smsCode" id="smsCode" />
      <button (click)="verifySmsCode()">Verify SMS Code</button>
    </ng-template>
  `,
})
export class PhoneAuthComponent {
  phoneNumber: string = '';
  smsCode: string = '';
  verificationId: string | null = null;

  constructor(private authService: FirebaseAuthService) {}

  sendVerificationCode() {
    this.authService.sendSmsVerificationCode(`+1${this.phoneNumber}`)
      .then(verificationId => {
        this.verificationId = verificationId;
      })
      .catch(error => console.error(error));
  }

  verifySmsCode() {
    if (this.verificationId && this.smsCode) {
      this.authService.verifySmsCode(this.verificationId, this.smsCode)
        .then(() => {
          console.log('Phone number verified successfully!');
        })
        .catch(error => console.error(error));
    }
  }
}
