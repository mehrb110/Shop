import { View, StyleSheet, Text } from 'react-native';

const Spacer = () => {
  return (
    <View style={styles.container} />
  )
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  }
})

export default Spacer;
