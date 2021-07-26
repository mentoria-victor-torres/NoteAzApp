import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {Importance, Note, Urgency} from "../services/notes.service";

@Directive({
  selector: '[appColorChangeByNote]'
})
export class ColorChangeByNoteDirective implements OnInit {

  @Input() colorFromNote: Note = {urgency: Urgency.NOT_URGENT, importance: Importance.NOT_IMPORTANT} as Note;

  constructor(private elementRef: ElementRef) {
    this.apply();
  }

  private apply() {
    if (this.colorFromNote.urgency === Urgency.URGENT && this.colorFromNote.importance === Importance.IMPORTANT) {
      this.elementRef.nativeElement.style.backgroundColor = 'red';
    } else if (this.colorFromNote.urgency === Urgency.URGENT && this.colorFromNote.importance === Importance.NOT_IMPORTANT) {
      this.elementRef.nativeElement.style.backgroundColor = 'orange';
    } else if (this.colorFromNote.urgency === Urgency.NOT_URGENT && this.colorFromNote.importance === Importance.IMPORTANT) {
      this.elementRef.nativeElement.style.backgroundColor = 'pink';
    } else if (this.colorFromNote.urgency === Urgency.NOT_URGENT && this.colorFromNote.importance === Importance.NOT_IMPORTANT) {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
  }

  ngOnInit(): void {
    this.apply();
  }

}
