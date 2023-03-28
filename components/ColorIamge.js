import {View} from "react-native";
import tw from 'argc';

export function ColorImage() {
    return (
        <View style={tw`flex-1 bg-blue-100`}>
            <View style={tw`flex-row flex-1 bg-pink-100`}>
                <View style={{width: 50, height: "100%", backgroundColor: "pink"}}/>
                <View style={{width: 100, height: "100%", backgroundColor: "orange"}}/>
                <View style={{width: 200, height: "100%", backgroundColor: "coral"}}/>
                <View style={{width: 150, height: "100%", backgroundColor: "bisque"}}/>
            </View>
            <View style={tw`flex-row flex-1 bg-pink-300`}>
                <View style={{width: 100, height: "100%", backgroundColor: "light-salmon"}}/>
                <View style={{width: 50, height: "100%", backgroundColor: "light-blue"}}/>
            </View>
            <View style={tw`flex-row flex-1 bg-pink-300`}>
                <View style={{width: "25%", height: "100%", backgroundColor: "moccasin"}}/>
                <View style={{width: "50%", height: "100%", backgroundColor: "peach-puff"}}/>
                <View style={{width: 150, height: "100%", backgroundColor: "plum"}}/>
            </View>
            <View style={[tw`flex-row bg-pink-100`, {height: 100}]}>
                <View style={{width: 200, height: "100%", backgroundColor: "tomato"}}/>
                <View style={{width: "100%", height: "100%", backgroundColor: "violet"}}/>
            </View>
        </View>
    );
}