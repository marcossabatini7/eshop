import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataService {
  public baseUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  public authenticate(data: any) {
    return this.http.post<any>(`${this.baseUrl}/v1/login`, data);
  }

  public getMonthlySalesChartData() {
    return this.http.get<any>(`${this.baseUrl}/v1/reports/ms`);
  }

  public getOrders() {
    return this.http.get<any>(`${this.baseUrl}/v1/orders`);
  }

  public getOrder(order: string) {
    return this.http.get<any>(`${this.baseUrl}/v1/orders/${order}`);
  }
}
