import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  public getProfile = () => {
    const response = this.getJSON(`${environment.url}/profile.json`);
    return response;
  }

  public getSchedule = () => {
    const response = this.getJSON(`${environment.url}/schedule.json`);
    return response;
  }

  private getJSON = async (url: string): Promise<any> => {
    const result = await this.http.get<any>(url).toPromise();
    return result;
  }
}
