import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) {
  }

  private readonly _url = 'http://localhost:8080';

  findAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this._url);
  }

  findById(id: number): Observable<Note> {
    return this.http.get<Note>(this._url + `/${id}`);
  }

  delete(id: number): Observable<Note> {
    return this.http.delete<Note>(this._url + `/${id}`);
  }

  save(note: Note): Observable<Note> {
    return this.http.post<Note>(this._url, note);
  }

  update(note: Note): Observable<Note> {
    return this.http.put<Note>(this._url, note);
  }

}

export enum Urgency {
  URGENT, NOT_URGENT
}

export enum Importance {
  IMPORTANT, NOT_IMPORTANT
}

export interface Note {
  id: number;
  title: String;
  content: String;
  createdAt: Date;
  urgency: Urgency;
  importance: Importance;
}
