export interface Device {
    id: string
    uuid: string
    experimentId: string
    newdevice: boolean
    updatedAt: string
    createdAt: string
}

export interface NewDeviceResponse {
    device: Device
    experimentValue: string
}

export interface OldDeviceResponse {
    token: string
    experimentValue: string
}
