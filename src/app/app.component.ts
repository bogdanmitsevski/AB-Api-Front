import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DevicesService } from '../shared/services/devices.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  aSub!: Subscription
  localStorage!: Storage
  buttonColor!: string

  constructor(private service: DevicesService, private router: Router) {

  }

  startExperimentNewToken() {
    this.aSub = this.service.addDevice(uuid.v4()).subscribe(
      (res) => {
        this.router.navigate(['/']);
        this.buttonColor = res.experimentValue
      },
      error => {
        console.warn(error)
      }
    )
  }

  startExperimentOldToken() {
    this.aSub = this.service.addDevice(this.service.getToken() || "").subscribe(
      (res) => {
        this.router.navigate(['/']);
        this.buttonColor = res.experimentValue
        console.log(this.buttonColor);
      },
      error => {
        console.warn(error)
      }
    )
  }

  startExperiment() {
    console.log(this.localStorage)
    if (this.service.checkIfTokenExists() == false) {
      this.startExperimentNewToken();
    }

    else {
      this.startExperimentOldToken();
      alert('This is old Device. Experiment is impossible');
    }
  }


  deleteDeviceToken() {
    this.service.removeToken()
  }

}
