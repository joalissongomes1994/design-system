import type { Preview } from "@storybook/react";
import {themes} from '@storybook/theming'

import '../globalStyle.css'

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
