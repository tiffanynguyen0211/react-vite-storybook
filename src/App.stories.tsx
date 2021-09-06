import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { App as AppComponent } from './App';
import { gql } from '@apollo/client';

export default {
  title: 'Pages/App',
  component: AppComponent,
  decorators: [(Story) => <Story />]
} as ComponentMeta<typeof AppComponent>;

export const App: ComponentStory<typeof AppComponent> = (args) => (
  <AppComponent />
);
App.parameters = {
  apolloClient: {
    // do not put MockedProvider here, you can, but its preferred to do it in preview.js
    mocks: [
      {
        request: {
          query: gql`
            {
              rates(currency: "USD") {
                currency
                rate
              }
            }
          `
        },
        result: {
          data: {
            rates: []
          }
        }
      }
    ]
  }
};
