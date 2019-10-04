import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {

  private _eventsUrl = "../../assets/mockData/events.json";
  private _specialEventsUrl = "http://localhost:3000/specialEvents";

  constructor(private http: HttpClient) { }

  getEvents() {
    console.log(this._eventsUrl);
    return this.http.get<any>(this._eventsUrl);
  }

  getSpecialEvents() {
    console.log(this._specialEventsUrl);
    return this.http.get<any>(this._specialEventsUrl);
  }
}
