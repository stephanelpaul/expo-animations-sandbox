import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ScrollAnimationScreen } from './scroll-animation/ScrollAnimationScreen'

const Stack = createNativeStackNavigator()

export const Navigator = () => {
    return (
        <Stack.Navigator>
         <Stack.Screen name="flatlist-scroll-animation" component={ScrollAnimationScreen}/>
        </Stack.Navigator>
    )
}