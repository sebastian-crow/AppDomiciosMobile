import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { colors, device, fonts } from '../constants';

const CustomDrawerContent = () => (
  <View style={styles.container}>
    <View style={styles.containerApp}>
      <Text style={styles.appText}>Ordenes</Text>
      <Text style={styles.appText}>Editar Usuario</Text>
  </View>
    <View style={styles.containerVersion}>
       <Text style={styles.versionText}>{`v${Constants.manifest.version}`}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  containerApp: {
    position: 'absolute',
    top: '10%',
    width:'100%'
  },
  containerVersion: {
    bottom: device.iPhoneNotch ? 40 : 16,
    paddingHorizontal: 38,
    position: 'absolute',
    width: '100%'
  },
  appText: {
    color: colors.white,
    fontFamily: fonts.uberRegular,
    fontSize: 25,
    textAlign: 'left'
  },
  versionText: {
    color: colors.grey,
    fontFamily: fonts.uberRegular,
    fontSize: 20,
    textAlign: 'right'
  }
});

export default CustomDrawerContent;
