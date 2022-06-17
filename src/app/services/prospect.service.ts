import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Prospect} from "../models/prospect.model";
import {API_URL} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProspectService {

  constructor(private http: HttpClient) {
  }

  getProspects() {
    return this.http.get<Prospect[]>(`${API_URL}/prospects`);
  }

  createProspect(prospect: Prospect) {
    return this.http.post<Prospect>(`${API_URL}/prospects`, prospect);
  }

  updateProspect(prospect: Prospect) {
    return this.http.put<Prospect>(`${API_URL}/prospects`, prospect);
  }

  deleteProspect(id: number) {
    return this.http.delete(`${API_URL}/prospects/${id}`);
  }

}
