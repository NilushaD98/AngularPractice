import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  constructor(private auth: AngularFireAuth) {}

  sendSmsVerificationCode(phoneNumber: string) {
    const recaptchaVerifier = null;
    // return this.auth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
  }

  verifySmsCode(verificationId: string, smsCode: string) {
    return this.auth.confirmPasswordReset(verificationId, smsCode);
  }
}
