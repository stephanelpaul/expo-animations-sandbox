import { TouchableOpacity, Text, View } from "react-native"

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1, flexDirection: 'row', padding: 20}}>
            <TouchableOpacity onPress={() => navigation.push('flatlist-scroll-animation')}>
                <Text>FlatList Scroll Animation</Text>
            </TouchableOpacity>
        </View>
    )
}