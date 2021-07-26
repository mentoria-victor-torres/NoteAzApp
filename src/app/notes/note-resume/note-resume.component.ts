import {Component, OnInit} from '@angular/core';
import {Importance, Note, NotesService, Urgency} from "../../services/notes.service";

@Component({
  selector: 'app-note-resume',
  templateUrl: './note-resume.component.html',
  styleUrls: ['./note-resume.component.css']
})
export class NoteResumeComponent implements OnInit {

  notes: Note[] = [];
  important = Importance.IMPORTANT;
  notImportant = Importance.NOT_IMPORTANT;
  urgent = Urgency.URGENT;
  notUrgent = Urgency.NOT_URGENT;

  constructor(private noteService: NotesService) {
  }

  ngOnInit(): void {
    this.noteService.findAll().subscribe(notes => this.notes = notes);
  }

  filter(importance: Importance, urgency: Urgency) {
    return this.notes.filter(n => n.importance === importance && n.urgency === urgency);
  }

}
