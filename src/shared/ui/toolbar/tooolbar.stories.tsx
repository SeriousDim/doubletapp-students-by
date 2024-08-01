import {Toolbar} from './toolbar.tsx'
import {Meta, StoryObj} from '@storybook/react'
import {ToolbarProps} from './props.ts'
import {ContentPlaceholder} from '../storybook/content-placeholder'

const meta = {
  title: 'UI/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    horizontalPadding: { control: 'text' },
  },
  args: {
    children: (<ContentPlaceholder/>)
  }
} satisfies Meta<typeof Toolbar>

export default meta

type Story = StoryObj<ToolbarProps>

export const WithContent: Story = {

}
