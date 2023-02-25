import { StyleSheet, Text, View, Button} from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/actions/cart.action'

const DetailsScreen = ({navigation, route}) => {
const dispach = useDispatch()
  const bread = useSelector(state=>state.products.selected)
  useEffect(()=>{
    console.log(route.params)
  },[])

  const handleAddItem=()=>{
    dispach(addItem(bread))
  }
  
  return (
    <View style={styles.container}>
      <Text>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>{bread.price}</Text>
      <Button title='add to cart'
      onPress={handleAddItem}/>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
})