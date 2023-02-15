import { StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import ProductsItem from '../components/ProductsItem'


import { useSelector, useDispatch } from 'react-redux'
import { selectedProduct, filterProduct } from '../store/actions/products.action'

const ProductsScreen = ({ navigation, route }) => {
  const dispach = useDispatch()
  const categoryProducts = useSelector((state) => state.products.filterProduct)
  const category = useSelector(state => state.categories.selected)

  useEffect(() => {
    dispach(filterProduct(category.id))
  }, [])

  const handleSelectedProduct = item => {
    dispach(selectedProduct(item.id))
    navigation.navigate("Details", {
      name: item.name
    })
  }

  const renderProductItem = ({ item }) => <ProductsItem item={item} onSelected={handleSelectedProduct} />
  return (
    <FlatList data={categoryProducts} renderItem={renderProductItem} keyExtractor={item => item.id} numColumns={2} />
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productsContainer: {
    height: 150,
    width: 150,
  },
})