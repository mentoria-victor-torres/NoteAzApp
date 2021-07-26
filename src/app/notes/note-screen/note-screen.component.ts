import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-note-screen',
  templateUrl: './note-screen.component.html',
  styleUrls: ['./note-screen.component.css']
})
export class NoteScreenComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  addNote() {
    this.router.navigate(['','form']);
  }
}
