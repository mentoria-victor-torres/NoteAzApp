import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Note, NotesService} from "../../services/notes.service";

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  note: Note = {} as Note;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private notesService: NotesService) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.notesService.findById(id ? +id : 0).subscribe(note => this.note = note);
  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['']);
  }

  edit() {
    this.router.navigate(['form', this.note.id]);
  }
}
