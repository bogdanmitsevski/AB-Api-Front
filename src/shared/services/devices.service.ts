import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { CurrentDeviceResponse, NewDeviceResponse } from "../interfaces/devices";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DevicesService {
    public uuid = '';
    public token = '';


    constructor(private http: HttpClient) {

    }

    addNewDevice(uuid: string): Observable<NewDeviceResponse> {
        return this.http.post<NewDeviceResponse>('api/', null, {
            headers: new HttpHeaders({
                'Device-Token': uuid
            })
        })
            .pipe(
                tap(
                    ({ device: { uuid } }) => {
                        sessionStorage.setItem('device-token', uuid)
                    }
                )
            )
    }

    addOldDevice(token: string): Observable<CurrentDeviceResponse> {
        return this.http.post<CurrentDeviceResponse>('api/', null, {
            headers: new HttpHeaders({
                'Device-Token': token
            })
        })
    }


    checkIfTokenExists() {
        return !!this.getToken();
    }

    getToken() {
        return sessionStorage.getItem('device-token');
    }
}
