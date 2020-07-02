import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface MessageRequest {
  name: string;
  email: string;
  message: string;
}

export interface SignupRequest {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) {
  }

  public sendMessage(req: MessageRequest): Observable<any> {
    return this._http.post<any>(`${environment.apiUrl}/contact`, req);
  }

  public signup(req: SignupRequest) {
    return this._http.post<any>(`${environment.apiUrl}/contact/signup`, req);
  }
}
