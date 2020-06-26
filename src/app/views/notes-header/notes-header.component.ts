import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NoteHeaderActions } from "src/app/app-state/app.state.model";
import {} from "protractor";

@Component({
  selector: "app-notes-header",
  templateUrl: "./notes-header.component.html",
  styleUrls: ["./notes-header.component.scss"],
})
export class NotesHeaderComponent implements OnInit {
  headerActions = NoteHeaderActions;
  @Output() headerActionTrigger: EventEmitter<
    NoteHeaderActions
  > = new EventEmitter<NoteHeaderActions>();
  constructor() {}

  ngOnInit(): void {}
  actionTrigger(actionType: NoteHeaderActions): void {
    this.headerActionTrigger.emit(actionType);
  }
}
