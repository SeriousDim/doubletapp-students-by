import {Meta, StoryObj} from '@storybook/react'
import {StudentListWidget} from './student-list-widget.tsx'
import {StudentListWidgetProps} from '../model/props.ts'
import PlaceholderImage from '../../../shared/assets/placeholders/square_image.jfif'
import {StudentSex} from '../../../shared/model/student.ts'

const meta = {
  title: 'Widgets/Student List Widget',
  component: StudentListWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
    students: [
      {
        id: 1,
        name: 'Григорьева Светлана Аркадьевна',
        rating: 56,
        color: 'green',
        avatar: PlaceholderImage,
        group: 'ПИ-101',
        speciality: 'Прикладная информатика',
        birthday: new Date('2001-04-03'),
        sex: StudentSex.Male,
        email: 'grid@mail.ru'
      },
      {
        id: 2,
        name: 'Григорьева Светлана Аркадьевна',
        rating: 56,
        color: 'green',
        avatar: PlaceholderImage,
        group: 'ПИ-101',
        speciality: 'Прикладная информатика',
        birthday: new Date('2001-04-03'),
        sex: StudentSex.Male,
        email: 'grid@mail.ru'
      },
      {
        id: 3,
        name: 'Григорьева Светлана Аркадьевна',
        rating: 56,
        color: 'green',
        avatar: PlaceholderImage,
        group: 'ПИ-101',
        speciality: 'Прикладная информатика',
        birthday: new Date('2001-04-03'),
        sex: StudentSex.Male,
        email: 'grid@mail.ru'
      },
    ]
  }
} satisfies Meta<typeof StudentListWidget>

export default meta

type Story = StoryObj<StudentListWidgetProps>

export const DesktopShort: Story = {
  decorators: [
    (Story) => (
      <div style={{width: '800px'}}>
        <Story/>
      </div>
    )
  ]
}

export const DesktopWide: Story = {
  decorators: [
    (Story) => (
      <div style={{width: '1200px'}}>
        <Story/>
      </div>
    )
  ]
}

export const MobilePortrait: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
