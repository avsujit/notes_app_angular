import { Component, OnInit } from "@angular/core";
import {
  Note,
  NoteHeaderActions,
  AppStateModel,
} from "../app-state/app.state.model";
import { Store } from "@ngxs/store";
import { AddNote, DeleteNote, UpdateNote } from "../app-state/app.state.actions";
import { Guid } from "guid-typescript";
import { Observable } from "rxjs";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"],
})
export class NotesComponent implements OnInit {
  notes$: Observable<Note[]>;
  activeNote: Note;
  constructor(readonly store: Store) {}

  ngOnInit(): void {
    this.notes$ = this.store.select((state) => state.app.notes);
  }
  handleHeaderActionTrigger(actionType: NoteHeaderActions) {
    if (actionType === NoteHeaderActions.ADD) {
      this.addNote();
    } else if (actionType === NoteHeaderActions.DELETE) {
      this.deleteNote();
    }
  }
  addNote(): void {
    this.store.dispatch(
      new AddNote({
        heading: "",
        notes: "",
        id: Guid.create().toJSON().value,
        timeStamp: new Date().toString(),
      })
    );
  }
  deleteNote(): void {
    this.store.dispatch(new DeleteNote(this.activeNote.id));
  }
}
