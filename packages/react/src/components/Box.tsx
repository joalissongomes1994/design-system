import { VariantProps } from '@stitches/react'
import { styled } from '../styles'
import { ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  background: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxComponentProps extends ComponentProps<typeof Box> {}
export interface BoxProps extends VariantProps<BoxComponentProps> {}

Box.displayName = 'Box'
