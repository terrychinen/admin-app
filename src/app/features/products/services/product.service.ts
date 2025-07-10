// Angular framework imports
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs';

// Interfaces
import { Product } from '@products/interfaces';

// Environments
import { environment } from '@environments/environment';


@Injectable({ providedIn: 'root' })
export class ProductService {
  private _http = inject(HttpClient);
  private _apiUrl = `${environment.apiUrl}/products`;

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._apiUrl);
  }
}
