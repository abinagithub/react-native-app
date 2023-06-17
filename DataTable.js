// import React from 'react';
// import { ScrollView, View, Text, StyleSheet } from 'react-native';

// function DataTable() {
//   const data = [
//     ["Subject", "First Semister", "Second Semister", "AVG"],
//     ["Mathematics", "44", "56", "49"],
//     ["Science", "84", "53", "65"],
//     ["Language Arts (English)", "75", "85", "79"],
//     ["Social Studies", "39", "57", "30"],
//     ["Physical Education", "100", "92", "90"],
//     ["Art", "41", "85", "62"],
//     ["Music", "87", "69", "73"]
//   ];

//   return (
   
//     <ScrollView horizontal>
//        <View style={styles.container}>
//       <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 29 }}> Student: Abenezer Abraham</Text>
//       <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 32 }}>Department: Agriculture </Text>
//       <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 34 }}>Id: 1402607 </Text>
//       <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 34 }}>Academical year: 2023 </Text>
//       <View style={styles.container}>
//         {data.map((row, rowIndex) => (
//           <View key={rowIndex} style={styles.row}>
//             {row.map((cell, cellIndex) => (
//               <View key={cellIndex} style={[styles.cell, { width: 100 }]}>
//                 <Text>{cell}</Text>
//               </View>
//             ))}
//           </View>
//         ))}
//       </View>
//       </View>

//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { 
//     flexDirection: 'column',
//     width: '100%',
    
//   },
//   row: { 
//     flexDirection: 'row',
//     width: '100%'
//   },
//   cell: {
//     padding: 10,
//     borderWidth: StyleSheet.hairlineWidth,
//     borderColor: 'gray',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 24,
//     color: 'blue'
//   }
// });


// export default DataTable


import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';

function DataTable() {
  const data = [
    // ["Receipt Number", "Date", "Payment Type", "Amount"],
    ["Mathematics", "92", "43", "93"],
    ["Science", "29", "73", "37"],
    ["Social Studies", "83", "27", "100"],
    ["Art", "83", "29", "36"],
    ["Music", "45", "47", "72"],
  ];

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
      
      <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 20, marginTop: 20 }}> Student: Abenezer Abraham</Text>
      <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 20,marginTop: 4 }}> Department: Agriculture</Text>
      <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 24,marginTop: 4 }}>Id: 1402607  </Text>
      <Text numberOfLines={1} style={{ fontSize: 16, marginLeft: 24,marginBottom: 20, marginTop: 4 }}>Academical year: 2023</Text>
      
      <View style={styles.topRow}>
          <Text style={[styles.cell, { marginLeft:20, width: 90,  backgroundColor: '#ccc',color: 'blue' }]}>Subject</Text>
          <Text style={[styles.cell, {  width: 90,  backgroundColor: '#ccc', color: 'blue' }]}>First Semister</Text>
          <Text style={[styles.cell, { width: 90,  backgroundColor: '#ccc', color: 'blue' }]}>Second Semister</Text>
          <Text style={[styles.cell, { width: 90, backgroundColor: '#ccc', color: 'blue' }]}>AVG</Text>
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

export default DataTable;

