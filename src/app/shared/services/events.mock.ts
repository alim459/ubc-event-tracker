import { IEvent } from '../models/event.model'

export const EVENTS: IEvent[] = [
    {
        "title": "UBC Fun Event",
        "startDate": new Date('2512-01-04T14:00:00'),
        "endDate": new Date('2512-01-04T14:00:00'),
        "imageUrl":"http://res.cloudinary.com/dog8swgml/image/upload/v1480230302/sample.jpg",
        "organizer": "UBC",
        "description": "Hello world description is placed here",
        "venue": {
            "id": 1,
            "name": "UBC",
            "lat": 49.28036117553711,
            "lon": 123.12133026123047,
            "address": "123 Agronomy Road",
            "city": "Vancouver",
            "country": "ca",
            "state": "bc",
        }
    }
];
      
