export interface NewDevice {
    id: string
    uuid: string
    experimentId: string
    newdevice: boolean
    updatedAt: string
    createdAt: string
}



export interface DeviceResponse {
    newDevice: NewDevice
    experimentValue: string
}

