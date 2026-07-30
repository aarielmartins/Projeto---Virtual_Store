class Product {
  id: number
  image: string
  category: string
  name: string
  price: string
  discount?: string

  constructor(
    id: number,
    image: string,
    category: string,
    name: string,
    price: string,
    discount: string
  ) {
    this.id = id
    this.image = image
    this.category = category
    this.name = name
    this.price = price
    this.discount = discount
  }
}
export default Product
