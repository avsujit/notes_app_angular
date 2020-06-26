import { Component, OnInit, ViewChild, NgZone, Input } from "@angular/core";
import { take } from "rxjs/operators";
import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import { Guid } from "guid-typescript";
import { UpdateNote } from "src/app/app-state/app.state.actions";
import { Store } from "@ngxs/store";
@Component({
  selector: "app-scribble-pad",
  templateUrl: "./scribble-pad.component.html",
  styleUrls: ["./scribble-pad.component.scss"],
})
export class ScribblePadComponent implements OnInit {
  constructor(private _ngZone: NgZone, readonly store: Store) {}
  @Input() data: string;
  @ViewChild("autosize") autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit(): void {}
  updateNote(id: Guid, data: string) {
    this.store.dispatch(new UpdateNote(data, id));
  }
}
