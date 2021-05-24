/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {Button, SafeAreaView, StyleSheet, Switch} from 'react-native';
 
 const App = () => {
   const [switchState, setSwitchState] = useState(false);
   return (
     <SafeAreaView style={styles.container}>
       <Switch onValueChange={setSwitchState} value={switchState} />
       <Button title={'Toggle'} onPress={() => setSwitchState(!switchState)} />
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
 
 export default App;
 