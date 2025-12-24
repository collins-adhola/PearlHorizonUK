import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IntakeApiService {
  private readonly apiUrl = `${environment.apiBaseUrl}/api/intakes`;

  constructor(private http: HttpClient) {}

  /**
   * Submit intake form data to the backend API
   * @param payload - The intake form payload
   * @returns Observable with the API response
   */
  submitIntake(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}

