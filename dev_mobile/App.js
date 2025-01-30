import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import Hello from './components/Exo1/Hello';
import HelloChildren from './components/Exo2/HelloChildren';
import HelloComplet from './components/Exo3/HelloComplet';
import MyButton from './components/Exo4/MyButton';
import HelloStyle from './components/Exo5/HelloStyle';
import ExternalStyle from './components/Exo6/ExternalStyle';
import FlexBox from './components/Exo7/FlexBox';

export default function App() {
  return (
    <View style={styles.container}>
      <Hello name="John" />
      <HelloStyle name="John" age="25" ville="Paris"> et toi ?</HelloStyle>
      <ExternalStyle name="John" age="25" ville="Paris"> et toi ?</ExternalStyle>
      <FlexBox />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
