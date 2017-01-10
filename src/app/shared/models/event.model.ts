import { IVenue } from './venue.model';

export class IEvent {
    title: string;
    startDate: Date;
    endDate: Date;
    organizer: string;
    imageUrl: string;
    description: string;
    venue : IVenue;
}