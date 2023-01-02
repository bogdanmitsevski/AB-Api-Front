import { Component } from '@angular/core';
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
  experiments!: any;
  groupsA!: number;
  groupsB!: number;
  groupsC!: number;

  constructor(private service: ExperimentsService) {

  }

  ngOnInit() {
    this.service.getExperiments().subscribe(res => {
      this.newDevices = res.totalNewDevices;
      this.experiments = res.allExperiments;
      this.groupsA = res.totalDevicesByGroupA
      this.groupsB = res.totalDevicesByGroupB
      this.groupsC = res.totalDevicesByGroupC

    })
  }


}
