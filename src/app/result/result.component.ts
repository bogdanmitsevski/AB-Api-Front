import { Component } from '@angular/core';
import { AllExperiments, DevicesGroups } from 'src/shared/interfaces/experiments';
import { ExperimentsService } from 'src/shared/services/experiments.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  newDevices!: number;
  devicesByGroupA!: number;
  devicesByGroupB!: number;
  devicesByGroupC!: number;
  experiments!: AllExperiments;
  groups!: number;

  constructor(private service: ExperimentsService) {

  }

  ngOnInit() {
    this.service.getExperiments().subscribe(res =>{
      this.newDevices = res.totalNewDevices;
      //this.experiments = res.AllExperiments;
      this.groups = res.DevicesGroups.totalDevicesByGroupA
      
    })
    console.log(this.experiments);
  }


}
