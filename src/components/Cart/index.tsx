import * as Dialog from '@radix-ui/react-dialog'
import { CartButton } from '../CartButton'
import {
  CartClose,
  CartContent,
  CartFooter,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  FooterDetails,
} from './styles'
import { X } from 'phosphor-react'
import Image from 'next/image'

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose asChild>
            <X size={24} weight="bold" />
          </CartClose>
          <Dialog.Title>Sacola de compras</Dialog.Title>
          <Dialog.Description>
            {/* <p>Parece que seu Carrinho está vazio :(</p> */}

            <CartProduct>
              <CartProductImage>
                <Image width={100} height={93} alt="" />
              </CartProductImage>

              <CartProductDetails>
                <p>Product 1</p>
                <strong>valor</strong>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </Dialog.Description>
          <CartFooter>
            <FooterDetails>
              <div>
                <span>Quantidade</span>
                <p>2 itens</p>
              </div>
              <div>
                <span>Valor Total</span>
                <p>valor</p>
              </div>
            </FooterDetails>
            <button>Finalizar compra</button>
          </CartFooter>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
