import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NoteScreenComponent} from "../notes/note-screen/note-screen.component";
import {NoteResumeComponent} from "../notes/note-resume/note-resume.component";
import {NoteFormComponent} from "../notes/note-form/note-form.component";
import {NoteViewComponent} from "../notes/note-view/note-view.component";

const routes: Routes = [{
  path: '', component: NoteScreenComponent, children: [
    {
      path: '', component: NoteResumeComponent
    },
    {
      path: 'form', component: NoteFormComponent
    },
    {
      path: 'form/:id', component: NoteFormComponent
    },
    {
      path: 'view/:id', component: NoteViewComponent
    }
  ]
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
