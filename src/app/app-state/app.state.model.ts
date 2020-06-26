import { Guid } from "guid-typescript";
export interface AppStateModel {
  notes: Note[];
}
export interface Note {
  id: Guid;
  heading: string;
  timeStamp: string;
  notes: string;
}
export enum NoteHeaderActions {
  DELETE = "DELETE",
  ADD = "ADD",
}
