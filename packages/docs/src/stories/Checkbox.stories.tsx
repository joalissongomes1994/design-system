import type { Meta, StoryObj } from '@storybook/react'
<<<<<<< HEAD
import { Checkbox, CheckboxProps, Box, Text } from '@ignite-ui/react/src'
=======
import { Checkbox, CheckboxProps } from '@ignite-ui/react/src/index'
import { Box, Text } from '@ignite-ui/react'
>>>>>>> parent of 2400247 (fix: Change in Storybook preview)

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text>Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
