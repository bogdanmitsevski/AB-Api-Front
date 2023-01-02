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

export interface CurrentDeviceResponse {
    token: string
    experimentValue: string
}
