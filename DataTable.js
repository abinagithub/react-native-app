import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

function DataTable() {
  const data = [
    ["Subject", "First Semister", "Second Semister", "AVG"],
    ["Mathematics", "44", "56", "49"],
    ["Science", "84", "53", "65"],
    ["Language Arts (English)", "75", "85", "79"],
    ["Social Studies", "39", "57", "30"],
    ["Physical Education", "100", "92", "90"],
    ["Art", "41", "85", "62"],
    ["Music", "87", "69", "73"]
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
    width: '100%',
    
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
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24
  }
});


export default DataTable
