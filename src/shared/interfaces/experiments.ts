export interface ExperimentsResponse {
    allExperimentsArray: any
    totalNewDevices: number
    totalDevicesByGroupA: number
    totalDevicesByGroupB: number
    totalDevicesByGroupC: number
    allExperiments: [{
        id: number,
        key: string,
        value: string,
    }]
}
