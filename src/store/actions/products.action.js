export const SELECTED_PRODUCT = 'SELECTED_PRODUCT'
export const FILTER_PRODUCT = 'FILTER_PRODUCT'


export const selectedProduct =id =>({
    type:SELECTED_PRODUCT,
    productId: id
})

export const filterProduct =id =>({
    type:FILTER_PRODUCT,
    categoryId: id
})
