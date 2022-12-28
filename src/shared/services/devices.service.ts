import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { DeviceResponse } from "../interfaces/devices";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DevicesService {
    public uuid = '';


    constructor (private http: HttpClient) {

    }

    addDevice (uuid: string): Observable<DeviceResponse> {
        return this.http.post<DeviceResponse>('api/send', null, {headers: new HttpHeaders({
            'Device-Token': uuid
        })})
        .pipe(
            tap(
                ({newDevice:{uuid}}) => {
                    localStorage.setItem('device-token', uuid)
                }
            )
        )
            }
        


    removeToken () {
        localStorage.removeItem('device-token');
    }

    checkIfTokenExists () {
        if(localStorage.getItem('device-token')) {
            return true
        }
        else {
            return false
        }
    }

    getToken () {
        return localStorage.getItem('device-token');
    }

    async getResponse () {
        let response = await fetch('/api/send');
        return await response.json();
    }
}