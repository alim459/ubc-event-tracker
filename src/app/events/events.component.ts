import { Component, OnInit } from '@angular/core';
import { EventDataService } from '../shared/services/event-data.service';
import { IEvent } from '../shared/models/event.model';
import { EVENTS } from '../shared/services/mock-events';
import { AppToggleService} from '../shared/services/app-toggle.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: IEvent[];

  constructor(private _eventDataService: EventDataService, private _appToggleService: AppToggleService) { }

  ngOnInit() {
    if (this._appToggleService.isMockMode) {
      this.events = EVENTS;
    } else {
      this._eventDataService.getEventsFromServer()
        .subscribe(events => this.events = events);
    }
  }
}
