import type { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps, Box, Text } from '@ignite-ui/react/src'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
