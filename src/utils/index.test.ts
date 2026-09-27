import { CartItem } from '../store/reducers/cart'
import {
  totalItem,
  finalValueItens,
  priceSymbol,
  totalItens,
  dimensionAdjustment,
  colecaoLabel
} from './index'

describe('priceSymbol', () => {
  it('deve formatar um número como moeda brasileira', () => {
    expect(priceSymbol(1000)).toBe('R$\u00A01.000,00')
  })
})

describe('totalItem', () => {
  it('deve retornar o valor cheio multiplicado pela quantidade quando não há desconto', () => {
    const item = { valor: 100, quantity: 2 } as CartItem
    expect(totalItem(item)).toBe(200)
  })
})

it('deve usar o valor com desconto quando ele existir', () => {
  const item = { valor: 100, valorComDesconto: 80, quantity: 2 } as CartItem
  expect(totalItem(item)).toBe(160)
})

describe('finalValueItens', () => {
  it('deve somar o total de múltiplos itens', () => {
    const items = [
      { valor: 100, quantity: 1 },
      { valor: 50, quantity: 2 }
    ] as CartItem[]

    expect(finalValueItens(items)).toBe(200)
  })
})

it('deve retornar 0 para um carrinho vazio', () => {
  expect(finalValueItens([])).toBe(0)
})

it('deve retornar 0 quando o carrinho estiver vazio', () => {
  expect(totalItens([])).toBe(0)
})

describe('totalItens', () => {
  it('deve somar a quantidade de todos os itens do carrinho', () => {
    const items = [{ quantity: 2 }, { quantity: 3 }] as CartItem[]

    expect(totalItens(items)).toBe(5)
  })

  it('deve somar corretamente quando houver apenas um item', () => {
    const items = [{ quantity: 4 }] as CartItem[]
    expect(totalItens(items)).toBe(4)
  })
})

describe('dimensionAdjustment', () => {
  it('deve formatar altura, largura e profundidade quando todas existirem', () => {
    const dimensoes = {
      altura: '90 cm',
      largura: '210 cm',
      profundidade: '78 cm'
    }

    expect(dimensionAdjustment(dimensoes)).toBe('A90 cm x L210 cm x P78 cm')
  })

  it('deve retornar string vazia quando dimensoes for undefined', () => {
    expect(dimensionAdjustment(undefined)).toBe('')
  })
})

describe('colecaoLabel', () => {
  it('deve mapear "vestir" para "Vestir"', () => {
    expect(colecaoLabel.vestir).toBe('Vestir')
  })

  it('deve mapear "habitar" para "Habitar"', () => {
    expect(colecaoLabel.habitar).toBe('Habitar')
  })
})
