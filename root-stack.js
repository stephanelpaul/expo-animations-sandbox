import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ScrollAnimationScreen } from './animation/ScrollAnimationScreen'
import { HomeScreen } from './screens/HomeScreen'

const Stack = createNativeStackNavigator()

export const Navigator = () => {
    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={HomeScreen}/>
            <Stack.Screen name="flatlist-scroll-animation" component={ScrollAnimationScreen}/>
        </Stack.Navigator>
    )
}