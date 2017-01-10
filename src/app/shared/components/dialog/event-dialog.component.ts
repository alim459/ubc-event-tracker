import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'event-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class EventDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<EventDialogComponent>) { }

  event: Event;

  ngOnInit() {
  }

}
