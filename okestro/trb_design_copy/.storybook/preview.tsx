import type { Preview } from '@storybook/react';
import '@assets/fonts/fonts.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // decorators: [
  //   (Story) => (
  //     <>
  //       <Story />
  //     </>
  //   ),
  // ],
};

export default preview;
