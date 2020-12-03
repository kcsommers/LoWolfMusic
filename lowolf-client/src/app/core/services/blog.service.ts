import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BlogPost } from '../model/blog/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _http: HttpClient) {
  }

  public getBlogPosts(): Observable<any> {
    return this._http.get<BlogPost[]>(`${environment.apiUrl}/blog`);
  }
}
