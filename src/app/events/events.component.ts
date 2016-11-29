import { Component, OnInit } from '@angular/core';
import { EventDataService } from '../shared/services/event-data.service';
import { IEvent } from '../shared/models/event.model';
import { EVENTS } from '../shared/services/events.mock';
import { AppToggleService} from '../shared/services/app-toggle.service';
import {MdDialog, MdDialogRef} from '@angular/material'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: IEvent[];
  dialogRef: MdDialogRef<EventDialog>

  constructor(private _eventDataService: EventDataService, 
    private _appToggleService: AppToggleService,
    private _dialogService: MdDialog) { }

  showEvent(event, domEvent) {
    this.dialogRef = this._dialogService.open(EventDialog, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe (result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    })
  }

  ngOnInit() {
    if (this._appToggleService.isMockMode) {
      this.events = EVENTS;
    } else {
      this._eventDataService.getEventsFromServer()
        .subscribe(events => this.events = events);
    }
  }
}

@Component({
  selector: 'event-dialog',
  template: `
  <button type="button" (click)="dialogRef.close('yes')">Yes</button>
  <button type="button" (click)="dialogRef.close('no')">No</button>
  `
})
export class EventDialog {
  constructor(public dialogRef: MdDialogRef<EventDialog>) { }
}
