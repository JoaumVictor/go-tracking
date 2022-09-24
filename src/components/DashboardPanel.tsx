import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import icon from '../../assets/gpsIcon.png'

export default function DashboardPanel() {
  const [status, setStatus] = React.useState(false)
  const handleStatus = () => setStatus(!status)

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Image source={icon} style={styles.icon} />
        <View>
          <Text style={styles.title}>My GPS - GoTracking</Text>
          <Text
            style={status ? styles.on : styles.off}
          >
            {status ? 'Online' : "Offline"}
          </Text>
        </View>
      </View>
      <View style={styles.middleBox}>
        <View>
          <Text>Status do Serviço</Text>
          <Text style={styles.subtitle}>{status ? 'Serviço Ativo' : "Serviço Inativo"}</Text>
        </View>
        <Switch
          trackColor={{ false: "#E4E4EB", true: "#E4E4EB" }}
          thumbColor={status ? "#0FBC02" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleStatus}
          value={status}
      />
      </View>
      <View style={styles.bottomBox}>
        <Text>Intervalo de comunicação</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#F9F8FF',
    height: '90%',
    width: '100%',
  },
  topBox: {
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
  },
  subtitle: {
    marginTop: 5,
    color: 'gray',
  },
  middleBox: {
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '80%',
  },
  bottomBox: {
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  on: {
    color: '#0FBC02',
  },
  off: {
    color: '#F00',
  }
})
