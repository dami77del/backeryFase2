import { FlatList, StyleSheet,View } from 'react-native'
import React from 'react'
import CategoriesItem from '../components/CategoriesItem'
import {selectedCategory} from '../store/actions/category.action'
import { useSelector, useDispatch } from 'react-redux'

const CategoriesScreen = ({ navigation }) => {
  const categories =useSelector(state=>state.categories.categories)
  const dispach = useDispatch()


  const handleSelectedCategory = item => {
    dispach(selectedCategory(item.id))
    navigation.navigate("Products", {
      title: item.title,
    })
  }

  const renderCategoriesItem = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory} />
    </View>
  )
  return (
    <View style={styles.container}>
      <FlatList data={categories} 
      renderItem={renderCategoriesItem} 
      keyExtractor={item => item.id} />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'white'
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
  }
})