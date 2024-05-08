import type { Meta, StoryObj } from '@storybook/react'
<<<<<<< HEAD
import { MultiStep, MultiStepProps, Box } from '@ignite-ui/react/src'
=======
import { MultiStep, MultiStepProps } from '@ignite-ui/react/src/index'
import { Box } from '@ignite-ui/react'
>>>>>>> parent of 2400247 (fix: Change in Storybook preview)

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ['autodocs'],
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
