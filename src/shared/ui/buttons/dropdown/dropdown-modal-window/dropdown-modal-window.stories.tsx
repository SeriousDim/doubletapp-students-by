import {Meta, StoryObj} from '@storybook/react'
import {DropdownModalWindow} from './dropdown-modal-window.tsx'
import {DropdownModalWindowProps} from './props.ts'

const meta = {
  title: 'UI/Dropdown/Dropdown Modal Window',
  component: DropdownModalWindow,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    items: [
      'Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'
    ],
    selectedItemIndex: 0
  }
} satisfies Meta<typeof DropdownModalWindow>

export default meta

type Story = StoryObj<DropdownModalWindowProps>

export const FirstItemChecked: Story = {
  args: {

  }
}

export const SecondItemChecked: Story = {
  args: {
    selectedItemIndex: 1
  }
}

export const OneItem: Story = {
  args: {
    items: [
      'Пункт 1'
    ]
  }
}

export const EmptyItemList: Story = {
  args: {
    items: []
  }
}
