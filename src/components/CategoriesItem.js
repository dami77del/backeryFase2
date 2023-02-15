import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
const CategoriesItem = ({ item, onSelected }) => {
    return (
        <View style={{...styles.categoriesItem, ...{backgroundColor:item.color}}}>
            <TouchableOpacity style={styles.container} onPress={()=> onSelected(item)}>
                <View style={styles.textContainer}>
                    <Text>{item.title}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri:item.img }}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoriesItem

const styles = StyleSheet.create({
    categoriesItem: {
       flex:1,
        height: 130,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowOffset:{width:0, height:2},
        shadowRadius:10,
        elevation:5,
    },
    container: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:"center", 
        paddingLeft:15,
        flex: 1,
    },
    textContainer: {
        height: "100%",
        width: '60%',
        justifyContent:'center',
        alignItems:"center", 
    },
    imageContainer: {
        width: "40%",
        height: "100%",
      
    },
    image:{
        width:'100%',
        height:'100%',
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    }
})
