import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CartState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CartState = {
  itens: [],
  favoritos: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (state.favoritos.find((p) => p.id === favorito.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== favorito.id)
      } else {
        state.favoritos.push(favorito)
      }
    }
  }
})

export const { adicionar, favoritar } = cartSlice.actions
export default cartSlice.reducer
