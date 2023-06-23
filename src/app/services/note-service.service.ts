import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../models/notes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoteServiceService {
note_url:string="http://localhost:3000/notes";
  constructor(private http:HttpClient) { } //Injectiong the HttpClient service 

  getNotes():Observable<Note[]>{
    return this.http.get<Note[]>(this.note_url); //Declaration of getNotes()

  }

  addNote(note:Note):Observable<Note>{
    return this.http.post<Note>(this.note_url,note); //Decalaration of addNote function()

  }
}
