import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react/src'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: null },
    },
  },
  args: {
    children: <Text>Exemple Box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
