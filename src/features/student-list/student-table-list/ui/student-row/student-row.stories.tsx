import {Meta, StoryObj} from '@storybook/react'
import {StudentSex} from '../../../../../shared/model/student.ts'
import PlaceholderImage from '../../../../../shared/assets/placeholders/square_image.jfif'
import {StudentRowProps} from './props.ts'
import {StudentRow} from './student-row.tsx'
import {CSSProperties} from 'react'

type StudentRowWrapperProps = {
  width?: CSSProperties['width']
} & StudentRowProps
const StudentRowWrapper = ({width, ...props}: StudentRowWrapperProps) => (
  <div style={{width: width}}>
    <StudentRow {...props}/>
  </div>
)

const meta = {
  title: 'Features/Student Table List/Student Row',
  component: StudentRowWrapper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' }
  },
  args: {
    width: '1200px'
  }
} satisfies Meta<typeof StudentRowWrapper>

export default meta

type Story = StoryObj<StudentRowWrapperProps>

export const StandardRow: Story = {
  args: {
    student: {
      id: 1,
      email: 'example@mail.ru',
      name: 'Экзампл Экзамплович',
      color: 'red',
      rating: 66,
      group: 'РИ-019',
      speciality: 'Прикладная информатика',
      sex: StudentSex.Male,
      birthday: new Date('2001-10-24'),
      avatar: PlaceholderImage
    }
  }
}
