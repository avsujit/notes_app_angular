import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-note-display-card",
  templateUrl: "./note-display-card.component.html",
  styleUrls: ["./note-display-card.component.scss"],
})
export class NoteDisplayCardComponent implements OnInit {
  @Input() data: string;
  constructor() {}

  ngOnInit(): void {}
}
