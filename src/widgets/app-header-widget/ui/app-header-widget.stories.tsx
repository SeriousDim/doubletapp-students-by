import {Meta, StoryObj} from '@storybook/react'
import {AppHeaderWidget} from './app-header-widget.tsx'

const meta = {
  title: 'Widgets/App Header',
  component: AppHeaderWidget,
  decorators: [
    (Story) => (
      <div style={{backgroundColor: '#fdfdfd'}}>
        <Story/>
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }
} satisfies Meta<typeof AppHeaderWidget>

export default meta

type Story = StoryObj

export const Desktop: Story = {

}

export const MobilePortrait: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
