import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../services/notes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {


  @Input() notes: Note[] = [];

  @Input() header: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  move(note: Note) {
    this.router.navigate(['view', note.id])
  }
}
