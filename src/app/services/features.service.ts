import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://localhost:7229';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  constructor(private http: HttpClient) { }

  public getFeatures(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/features`);
  }
}
