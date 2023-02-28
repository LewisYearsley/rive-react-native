import * as React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text } from 'react-native';
import Rive, { Fit } from 'rive-react-native';

export default function MultipleArtboards() {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Square - go around</Text>
        <Rive
          autoplay={true}
          style={styles.animation}
          fit={Fit.Contain}
          artboardName={'Avatar 1'}
          animationName={'idlePreview'}
          resourceName={'avatars'}
        />

        <Text>Square - roll around</Text>
        <Rive
          autoplay={true}
          style={styles.animation}
          fit={Fit.Contain}
          artboardName={'Avatar 2'}
          resourceName={'avatars'}
        />

        <Text>Circle</Text>
        <Rive
          autoplay={true}
          style={styles.animation}
          fit={Fit.Contain}
          artboardName={'Avatar 3'}
          resourceName={'avatars'}
        />

        <Text>Star</Text>
        <Rive
          autoplay={true}
          style={styles.animation}
          fit={Fit.Contain}
          artboardName={'All Avatars'}
          resourceName={'avatars'}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
    paddingTop: 32,
  },
  animation: {
    width: '100%',
    height: 300,
    marginTop: 16,
    marginBottom: 32,
  },
});
