import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { App as AppComponent } from './App'

export default {
  title: 'Pages/App',
  component: AppComponent,
  decorators: [(Story) => <Story />]
} as ComponentMeta<typeof AppComponent>

export const App: ComponentStory<typeof AppComponent> = (args) => (
  <AppComponent />
)
App.parameters = {}
