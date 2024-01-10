import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Introduction from '../screens/Introduction'

const Stack = createStackNavigator()

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Introduction">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Introduction" component={Introduction} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator