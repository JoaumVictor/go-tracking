import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// tipagem das rotas públicas
export type propsPublicNavigationStack = {
  Dashboard: undefined
  Status: undefined
}
export type propsPublicStack =
  NativeStackNavigationProp<propsPublicNavigationStack>