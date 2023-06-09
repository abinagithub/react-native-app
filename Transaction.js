import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

function Transaction() {
  const data = [
    ["Receipt Number", "Date", "Payment Type", "Amount"],
    ["001001", "May 15,2023", "Monthly Fee", "100"],
    ["001002", "May 16,2023", "Registration Fee", "200"],
    ["001001", "May 17,2023", "Monthly Fee", "100"],
    ["001002", "May 18,2023", "Registration Fee", "100"],
    ["001001", "May 19,2023", "Monthly Fee", "100"],
  ];

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {data.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <View key={cellIndex} style={[styles.cell, { width: 100 }]}>
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
    width: '100%'
  },
  row: { 
    flexDirection: 'row',
    width: '100%'
  },
  cell: {
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Transaction;