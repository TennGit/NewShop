export type DeviceType = {
  title: string,
  isSmall: boolean,
  isMedium: boolean,
  isLarge: boolean,
  isXLarge: boolean,
  isMediumUp: boolean,
  isLargeUp: boolean,
}

const deviceType = (title: string): DeviceType => {
  const device = {
    title,
    isSmall: title === 'small',
    isMedium: title === 'medium',
    isLarge: title === 'large',
    isXLarge: title === 'xLarge',
    isMediumUp: false,
    isLargeUp: false,
  }
  device.isLargeUp = device.isLarge || device.isXLarge
  device.isMediumUp = device.isMedium || device.isLargeUp
  return device
}

export const DEVICE_SMALL = deviceType('small')
export const DEVICE_MEDIUM = deviceType('medium')
export const DEVICE_LARGE = deviceType('large')
export const DEVICE_XLARGE = deviceType('xLarge')

export const ALL_DEVICES = [
  DEVICE_SMALL,
  DEVICE_MEDIUM,
  DEVICE_LARGE,
  DEVICE_XLARGE,
]

export const ORIENTATION_PORTRAIT = 'portrait'
export const ORIENTATION_LANDSCAPE = 'landscape'
