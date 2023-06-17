import React from 'react';
import { View, Text, Image } from 'react-native';

function Alert() {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold',marginLeft: 33, marginTop: 30 }}>Most Recent</Text>
      <Image
                source={require('./assets/cross.png')}
                style={{  marginLeft: 330, }}
              />
      <Image
                source={require('./assets/account.png')}
                style={{ width: 30, height: 30, marginLeft: 30, }}
              />
      <Text style={{ fontSize: 14, fontWeight: 'light',marginLeft: 85, marginTop: 10 }}>Dear, Abenezer parent the monthly fee is not paid.you have a time until this weak.
other wise you have to pay extra. 
 </Text>
 <Text style={{ fontSize: 24, fontWeight: 'bold',marginLeft: 33, marginTop: 30 }}>Earlier</Text>
 <Image
                source={require('./assets/cross.png')}
                style={{  marginLeft: 330, marginTop: 20 }}
              />
      <Image
                source={require('./assets/account.png')}
                style={{ width: 30, height: 30, marginLeft: 30, }}
              />
      <Text style={{ fontSize: 14, fontWeight: 'light',marginLeft: 85, marginTop: 10 }}>Dear, Abenezer parent the monthly fee is not paid.you have a time until this weak.
other wise you have to pay extra. 
 </Text>
    </View>
  );
}

export default Alert