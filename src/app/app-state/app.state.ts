import { AppStateModel, Note } from "./app.state.model";
import { State, Action, StateContext } from "@ngxs/store";
import { AddNote, UpdateNote, DeleteNote } from "./app.state.actions";
import { patch } from "@ngxs/store/operators";
import { Guid } from "guid-typescript";

const defaultState: AppStateModel = {
  notes: [
    {
      heading: "hello",
      id: Guid.create(),
      notes: "hello",
      timeStamp: "",
    },
  ],
};

@State<AppStateModel>({
  name: "app",
  defaults: defaultState,
})
export class AppState {
  @Action(AddNote)
  addNote(context: StateContext<AppStateModel>, { note }: AddNote): void {
    const state = context.getState();
    const allNotes = [...state.notes];
    allNotes.push(note);
    context.setState(patch({ notes: allNotes }));
  }
  @Action(UpdateNote)
  updateNote(
    context: StateContext<AppStateModel>,
    { data, id }: UpdateNote
  ): void {
    const state = context.getState();
    const allNotes = [...state.notes];
    allNotes.forEach((note) => {
      if (note.id === id) {
        note.notes = data;
        note.timeStamp = new Date().toTimeString();
      }
    });
    context.setState(patch({ notes: allNotes }));
  }
  @Action(DeleteNote)
  DeleteNote(context: StateContext<AppStateModel>, { id }: DeleteNote): void {
    const state = context.getState();
    const notes = [...state.notes];
    const updatedNotes = notes.filter(
      (note) => note.id.toString() !== id.toString()
    );
    context.setState(patch({ notes: updatedNotes }));
  }
}
