import {Meta, StoryObj} from '@storybook/react'
import {DefaultInputs} from './default-inputs.tsx'
import {DefaultInputsProps} from './props.ts'

const meta = {
  title: 'Features/Student List/Default Inputs',
  component: DefaultInputs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => <div style={{height: '250px'}}>
      <Story/>
    </div>
  ],
  argTypes: {

  },
  args: {
    filterOptions: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4']
  }
} satisfies Meta<typeof DefaultInputs>

export default meta

type Story = StoryObj<DefaultInputsProps>

export const ExampleWithCallbacks: Story = {
  args: {
    onFilterChange: index => console.log(index),
    onNameChange: name => console.log(name)
  }
}

export const DropdownIconOnly: Story = {
  decorators: [
    Story => <div style={{width: '335px'}}>
      <Story/>
    </div>
  ],
  args: {
    showDropdownIconOnly: true
  }
}
