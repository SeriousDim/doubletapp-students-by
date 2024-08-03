import {Meta, StoryObj} from '@storybook/react'
import {Svg} from './svg.tsx'
import {SvgProps} from './props.ts'
import {getIcon} from '../icon/icon-names.ts'

const meta = {
  title: 'UI/Svg Element',
  component: Svg,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
  args: {
    //src: getIcon('delete')
    src: getIcon('delete')
  }
} satisfies Meta<typeof Svg>

export default meta

type Story = StoryObj<SvgProps>

export const RenderSomeIcon: Story = {
  args: {
    width: '50px',
    height: '50px'
  }
}
