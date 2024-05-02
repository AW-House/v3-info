import { NetworkInfo, RedstoneNetworkInfo } from 'constants/networks'

export function networkPrefix(activeNewtork: NetworkInfo) {
  const isRedstone = activeNewtork === RedstoneNetworkInfo
  if (isRedstone) {
    return '/'
  }
  const prefix = '/' + activeNewtork.route.toLocaleLowerCase() + '/'
  return prefix
}
