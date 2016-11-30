import { Component, OnInit } from '@angular/core';
import { EventDataService } from '../shared/services/event-data.service';
import { IEvent } from '../shared/models/event.model';
import { EVENTS } from '../shared/services/events.mock';
import { AppToggleService} from '../shared/services/app-toggle.service';
import { MdDialog, MdDialogRef} from '@angular/material';
import { DialogComponent } from '../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: IEvent[];
  dialogRef: MdDialogRef<DialogComponent>

  constructor(private _eventDataService: EventDataService, 
    private _appToggleService: AppToggleService,
    private _dialogService: MdDialog) { }

  showEvent(event) {
    this.dialogRef = this._dialogService.open(DialogComponent, {
      disableClose: false,
    });

    this.dialogRef.componentInstance.event = event;

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
