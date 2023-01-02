import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { NewDeviceResponse, OldDeviceResponse } from "../interfaces/devices";
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

    addOldDevice(token: string): Observable<OldDeviceResponse> {
        return this.http.post<OldDeviceResponse>('api/', null, {
            headers: new HttpHeaders({
                'Device-Token': token
            })
        })
            .pipe(
                tap(
                    ({ token }) => {
                        sessionStorage.setItem('device-token', token )
                    }
                )
            )
    }



    removeToken() {
        localStorage.removeItem('device-token');
    }

    checkIfTokenExists() {
        return !!this.getToken();
    }

    getToken() {
        return sessionStorage.getItem('device-token');
    }

    async getResponse() {
        let response = await fetch('/api/send');
        return await response.json();
    }
}