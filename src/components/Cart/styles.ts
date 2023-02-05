import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  background: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px rgba(0,0,0,0.8)',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontWeight: 700,
    fontSize: '$lg',
    color: '$gray100',
    marginBottom: '2rem',
  },

  '::-webkit-scrollbar': {
    width: '0.6rem',
  },
  '::-webkit-scrollbar-track': {
    background: '$gray300',
    borderRadius: '4rem',
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: '4rem',
    background: '$green500',
  },
})

export const CartSection = styled(Dialog.Description, {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  flex: 1,
  overflowY: 'auto',
})

export const CartClose = styled(Dialog.Close, {
  border: 'none',
  color: '$gray500',
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',

  cursor: 'pointer',
})

export const CartProduct = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
  height: '5.8125rem',
})

export const CartProductImage = styled('div', {
  width: '6.3125rem',
  height: '5.8125rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const CartProductDetails = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  p: {
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    marginTop: 4,
    fontSize: '$md',
    fontWeight: 700,
  },

  button: {
    marginTop: 'auto',
    width: 'max-content',
    background: 'none',
    border: 'none',
    color: '$green500',
    fontSize: '$sm',
    fontWeight: 700,
    transition: 'all 150ms',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const CartFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  button: {
    width: '100%',
    background: '$green500',
    color: '$white',
    height: '4.3125rem',
    fontSize: '$md',
    border: 'none',
    borderRadius: 8,
    fontWeight: 700,

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$green300',
    },
  },
})

export const FooterDetails = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginBottom: 55,

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    p: {
      fontSize: '$md',
      color: '$gray100',
    },

    '&:last-child': {
      fontWeight: 'bold',

      span: {
        fontSize: '$md',
      },

      p: {
        color: '$gray100',
        fontSize: '$xl',
      },
    },
  },
})
