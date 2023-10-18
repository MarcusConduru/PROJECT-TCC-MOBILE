import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Loading: React.FC = () => {
  return (
    <View style={styles.Loading}>
      <ActivityIndicator size={200} color={'#000'} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  Loading: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    justifyContent: 'center',
    opacity: 0.7,
  },
});
