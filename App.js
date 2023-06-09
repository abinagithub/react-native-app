import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DataTable from './DataTable';
import Transaction from './Transaction';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Data Table" component={DataTable} />
        <Tab.Screen name="Transaction" component={Transaction} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
