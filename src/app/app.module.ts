import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxsModule } from "@ngxs/store";
import { AppState } from "./app-state/app.state";
import { ScribblePadComponent } from "./views/scribble-pad/scribble-pad.component";
import { NoteDisplayCardComponent } from "./views/note-display-card/note-display-card.component";
import { NotesComponent } from "./notes/notes.component";
import { FooterComponent } from "./views/footer/footer.component";
import { HeaderComponent } from "./views/header/header.component";
import { AppMaterialModule } from "./material.module";
import { FormsModule } from "@angular/forms";
import { NotesHeaderComponent } from './views/notes-header/notes-header.component';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
@NgModule({
  declarations: [
    AppComponent,
    ScribblePadComponent,
    NoteDisplayCardComponent,
    NotesComponent,
    FooterComponent,
    HeaderComponent,
    NotesHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([AppState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    AppMaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
