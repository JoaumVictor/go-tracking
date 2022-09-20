import { StatusBar } from 'react-native'

const formatName = (name: string) => {
  const arrName = name.split(' ')
  if (arrName.length === 1) {
    return name
  } else {
    return `${arrName[0]} ${arrName[1]}`
  }
}

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64

export { formatName, statusBarHeight }
