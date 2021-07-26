import {ColorChangeByNoteDirective} from './color-change-by-note.directive';
import {ElementRef} from "@angular/core";

describe('ColorChangeByNoteDirective', () => {
  it('should create an instance', () => {
    const directive = new ColorChangeByNoteDirective({nativeElement: {style: {}}} as ElementRef);

    expect(directive).toBeTruthy();
  });
});
