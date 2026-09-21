import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Product from '../../models/Product'

//cria um novo tipo de cartItem com quantidade
export type CartItem = Product & {
  quantity: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // adiciona um produto ao carrinho, se já existir, incrementa a quantidade
    add: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      const itemExistente = state.items.find((item) => item.id === product.id)

      if (itemExistente) {
        itemExistente.quantity += 1
      } else {
        state.items.push({ ...product, quantity: 1 })
      }
    },
    // remove um produto do carrinho, se a quantidade for maior que 1, decrementa a quantidade
    // caso contrário remove o item do carrinho
    remove: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (!item) return

      item.quantity -= 1

      if (item.quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== action.payload)
      }
    },
    //abre o carrinho
    open: (state) => {
      state.isOpen = true
    },
    //fecha o carrinho
    close: (state) => {
      state.isOpen = false
    },
    //limpa o carrinho
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer
