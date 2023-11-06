import React from 'react'
import { StylesSheet,Image, Text, View } from 'react-native'
import{
    useFonts,
    Monsterrat_400Regular,
    Monsterrat_600SemiBold,
    Monsterrat_700Bold
} from '@expo-google-fonts/monsterrat'
import {TouchableOpacity} from 'react-native-gesture-handler'


const Home = (props) => {
    let [FontsLoaded] = useFonts [{
        Monsterrat_400Regular,
        Monsterrat_600SemiBold,
        Monsterrat_700Bold
    }]
    return (
        <View style={styles.container}>
            <Image source={require('../img/USHER LOGO - NO BKG.png')} style={styles=img}/>
            <text style={styles.title}>USHER IRI</text>
            <Text style={styles.detail}>
                Making the world a better place.
            </Text>
            <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate("Detail")}>
                <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
            <Text>Home</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignment:"center",
        justifyContent:"Center",
        backgroundColor:"#121212"
    },
    img:{
       height:"50%",
       width:"120%",
       resizeMode:"contain",
    },
    title:{
        color:'#FFF',
        fontfamily:"Monsterrat_700Bold",
        fontsize:30,
        marginTop:20
    },
    detail:{
        color:"#FFF",
        fontfamily:"Monsterrat_400Regular",
        fontSize:18,
        fonstAlign:"center",
        paddingHorizontal:20,
        lineheight:30,
        marginTop:30
    },
    btn:{
        marginTop:80,
        backgroundColor:"#E2443B",
        paddingHorizontal:140,
        paddingVertical:10,
        borderRadius:30
    },
    text:{
        fontfamily:"Monsterrat_600Semibold",
        fontSize:30,
        color:"#FFF"
    }

});