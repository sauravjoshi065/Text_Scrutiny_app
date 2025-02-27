import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  private baseUrl = 'API URL';

  constructor(private http: HttpClient) { }

  sendSms(name: string, senderNumber: string, message: string) {
    const authToken = 'AUTH_TOKEN'; // Twilio auth token
    const accountSid = 'ACC_ID'; // Twilio account SID
    const to = 'MOB_NO'; // receiver mobile number
    const from = 'FROM_NO';
    
    const body = "Hello NAME, " + name + ", whose mobile number is " + senderNumber + " has messaged you " + message;

    const url = `${this.baseUrl}`;

    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`
      }
    };

    const data = {
      To: to,
      From: from,
      Body: body
    };

    const payload = new URLSearchParams(data).toString();

    return this.http.post(url, payload, options);
  }
}

