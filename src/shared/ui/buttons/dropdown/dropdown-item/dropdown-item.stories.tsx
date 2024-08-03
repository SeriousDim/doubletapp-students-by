import {Meta, StoryObj} from '@storybook/react'
import {DropdownItemProps} from './props.ts'
import {DropdownItem} from './dropdown-item.tsx'

const meta = {
  title: 'UI/Dropdown/Dropdown Item',
  component: DropdownItem,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div style={{width: '180px'}}>
        <Story/>
      </div>
    )
  ],
  tags: ['autodocs'],
  args: {
    children: 'Пункт элемента'
  }
} satisfies Meta<typeof DropdownItem>

export default meta

type Story = StoryObj<DropdownItemProps>

export const Unchecked: Story = {
  args: {
    checked: false
  }
}

export const Checked: Story = {
  args: {
    checked: true
  }
}

export const CheckedWithLongText: Story = {
  args: {
    checked: true,
    children: 'Очень длинный текст должен обрезаться'
  }
}
