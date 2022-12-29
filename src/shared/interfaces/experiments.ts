export interface ExperimentsResponse {
    totalNewDevices: number
    AllExperiments: AllExperiments
    DevicesGroups: DevicesGroups
}

export interface AllExperiments {
    id: number
    key: string
    value: string
}

export interface DevicesGroups {
    totalDevicesByGroupA: number
    totalDevicesByGroupB: number
    totalDevicesByGroupC: number
}