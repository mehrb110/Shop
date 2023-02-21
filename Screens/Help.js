import { StyleSheet, Text, View } from 'react-native';

export default function Help() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Help
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    height: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});