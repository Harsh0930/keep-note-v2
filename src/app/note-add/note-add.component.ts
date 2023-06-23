import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Note } from '../models/notes';
import { NoteServiceService } from '../services/note-service.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {
  note:Note={};

  @Output () noteAdded:EventEmitter<any>=new EventEmitter<any>();
  constructor(private noteService:NoteServiceService) { }

  ngOnInit(): void {
  }

  addNotes(){
    this.noteService.addNote(this.note).subscribe({
      next: observer=>{
        alert("Note Added");
        this.noteAdded.emit(this.note);
        this.note={};
      },
      error: error=>{
        alert("Failed to Add Note Due to Sever Error !!");
      }
    })

  }

}
