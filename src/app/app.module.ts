import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PanelModule} from "primeng/panel";
import {RouterModule} from "@angular/router";
import { NoteScreenComponent } from './notes/note-screen/note-screen.component';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {SplitButtonModule} from "primeng/splitbutton";
import {CarouselModule} from "primeng/carousel";
import {EditorModule} from "primeng/editor";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {SelectButtonModule} from "primeng/selectbutton";
import { NoteResumeComponent } from './notes/note-resume/note-resume.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteFormComponent } from './notes/note-form/note-form.component';
import { NoteViewComponent } from './notes/note-view/note-view.component';
import { ColorChangeByNoteDirective } from './directives/color-change-by-note.directive';

@NgModule({
  declarations: [
    AppComponent,
    NoteScreenComponent,
    NoteResumeComponent,
    NoteListComponent,
    NoteFormComponent,
    NoteViewComponent,
    ColorChangeByNoteDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PanelModule,
    ToolbarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    SplitButtonModule,
    CarouselModule,
    EditorModule,
    FormsModule,
    InputTextModule,
    SelectButtonModule,
    CardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
