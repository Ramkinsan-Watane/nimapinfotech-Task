import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(page: number, pageSize: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
  }

  addProduct(name: string, categoryId: number): Observable<any> {
    return this.http.post(this.apiUrl, { name, categoryId });
  }
}
