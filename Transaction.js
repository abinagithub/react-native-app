import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';

function Transaction() {
  const data = [
    // ["Receipt Number", "Date", "Payment Type", "Amount"],
    ["001001", "May 15,2023", "Monthly Fee", "100"],
    ["001002", "May 16,2023", "Registration Fee", "200"],
    ["001001", "May 17,2023", "Monthly Fee", "100"],
    ["001002", "May 18,2023", "Registration Fee", "100"],
    ["001001", "May 19,2023", "Monthly Fee", "100"],
  ];

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
      <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 26  }}>
      <Image
                source={require('./assets/icons8-full-stop-30.png')}
                style={{ }}
              />
          We confirm receipt of your payment, and your
          </Text>
      <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 29 }}> child's school fees have been updated in .</Text>
      <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 32 }}>our systemThank you for your prompt payment, </Text>
      <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 34 }}>and please do not hesitate to contact us if you </Text>
      <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 36 }}>have any questions or concerns about your </Text>
      <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 36, marginBottom: 20 }}>account. </Text>
      <View style={styles.topRow}>
          <Text style={[styles.cell, { marginLeft:20, width: 90,  backgroundColor: '#ccc',color: 'blue' }]}>Receipt Number</Text>
          <Text style={[styles.cell, {  width: 90,  backgroundColor: '#ccc', color: 'blue' }]}>Date</Text>
          <Text style={[styles.cell, { width: 90,  backgroundColor: '#ccc', color: 'blue' }]}>Payment Type</Text>
          <Text style={[styles.cell, { width: 90, backgroundColor: '#ccc', color: 'blue' }]}>Amount</Text>
      </View> 
        {data.map((row, rowIndex) => (
          <View key={rowIndex} style={[styles.row, { marginLeft: 20 }]}>
            {row.map((cell, cellIndex) => (
              <View key={cellIndex} style={[styles.cell, { width: 90 }]}>
                <Text>{cell}</Text>
              </View>
            ))}
          </View>
          
        ))}
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'column',
    width: '100%',
  
    
  },
  topRow: {
    flexDirection: 'row',
    // width: '60%',
    // backgroundColor: '#ccc'
  },
  row: { 
    flexDirection: 'row',
    width: '100%',
  
    
  },
  cell: {
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Transaction;

