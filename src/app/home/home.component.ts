import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DevicesService } from 'src/shared/services/devices.service';

import * as uuid from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  aSub!: Subscription
  localStorage!: Storage
  buttonColor!: string
  sessionToken!: any

  constructor(private service: DevicesService, private router: Router) {

  }

  startExperimentNewToken() {
    this.aSub = this.service.addNewDevice(uuid.v4()).subscribe(
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
    this.aSub = this.service.addOldDevice(this.sessionToken || '').subscribe(
      (res) => {
        this.router.navigate(['/']);
        this.buttonColor = res.experimentValue;
      },
      error => {
        console.warn(error)
      }
    )
  }

  ngOnInit() {
    if (this.service.checkIfTokenExists() == false) {
      this.startExperimentNewToken();
    }

    else {
      this.sessionToken = this.service.getToken();
      this.startExperimentOldToken();
    }
  }

}
