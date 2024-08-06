import {Meta, StoryObj} from '@storybook/react'
import {StudentTableHeader} from './student-table-header.tsx'
import {CSSProperties} from 'react'

const StudentTableHeaderWrapper = ({width}: {width: CSSProperties['width']}) => (
  <div style={{width: width}}>
    <StudentTableHeader/>
  </div>
)

const meta = {
  title: 'Features/Student Table List/Student Table Header',
  component: StudentTableHeaderWrapper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
    width: '800px'
  }
} satisfies Meta<typeof StudentTableHeaderWrapper>

export default meta

type Story = StoryObj<StudentTableHeaderWrapper>

export const Example: Story = {

}
