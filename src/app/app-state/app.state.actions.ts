import { Note } from "./app.state.model";
import { Guid } from "guid-typescript";
export class AddNote {
  static readonly type = "[Add Note] add a new note";
  constructor(public note: Note) {}
}
export class UpdateNote {
  static readonly type = "[Update Note] update note";
  constructor(public data: string, public id: Guid) {}
}
export class DeleteNote {
  static readonly type = "[Delete Note] delete note";
  constructor(public id: Guid) {}
}
