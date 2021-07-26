import {Component, OnInit} from '@angular/core';
import {Importance, Note, NotesService, Urgency} from "../../services/notes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  note: Note = {} as Note;
  urgencies = [{name: 'Urgent', code: Urgency.URGENT}, {name: 'Not Urgent', code: Urgency.NOT_URGENT}];
  importancies = [{name: 'Important', code: Importance.IMPORTANT}, {
    name: 'Not Important',
    code: Importance.NOT_IMPORTANT
  }];
  urgency: any;
  importance: any;

  constructor(private noteService: NotesService, private router: Router, private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id && "" !== id)
      this.noteService.findById(id ? +id : 0).subscribe(note => {
        this.note = note;
        this.urgency = {name: Urgency.URGENT === note.urgency ? 'Urgent' : 'Not Urgent' ,code: note.urgency};
        this.importance = {name: Importance.IMPORTANT === note.importance ? 'Important' : 'Not Important' ,code: note.importance};
      });
  }

  ngOnInit(): void {
  }

  public save() {
    this.note.createdAt = new Date();
    this.note.urgency = this.urgency.code;
    this.note.importance = this.importance.code;
    if (this.note.id) {
      this.noteService.update(this.note).subscribe({
        complete: () => {
          this.note = {} as Note;
          this.router.navigate(['']);
        }
      });
    } else
      this.noteService.save(this.note).subscribe({
        complete: () => {
          this.note = {} as Note;
          this.router.navigate(['']);
        }
      });

  }

}
