import {Meta, StoryObj} from '@storybook/react'
import {StudentCardList} from './student-card-list.tsx'
import {StudentCardListProps} from './props.ts'
import PlaceholderImage from '../../../../../shared/assets/placeholders/square_image.jfif'

const meta = {
  title: 'Features/Student List/Student Card List',
  component: StudentCardList,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{width: '335px'}}>
        <Story/>
      </div>
    )
  ],
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }
} satisfies Meta<typeof StudentCardList>

export default meta

type Story = StoryObj<StudentCardListProps>

export const Standard: Story = {
  args: {
    students: [
      {
        name: 'Григорьева Светлана Аркадьевна',
        rating: 56,
        color: 'green',
        avatar: PlaceholderImage,
        group: 'ПИ-101',
        speciality: 'Прикладная информатика',
        birthday: new Date('2001-04-03')
      },
      {
        name: 'Григорьева Светлана Аркадьевна',
        rating: 56,
        color: 'green',
        avatar: PlaceholderImage,
        group: 'ПИ-101',
        speciality: 'Прикладная информатика',
        birthday: new Date('2001-04-03')
      },
      {
        name: 'Григорьева Светлана Аркадьевна',
        rating: 56,
        color: 'green',
        avatar: PlaceholderImage,
        group: 'ПИ-101',
        speciality: 'Прикладная информатика',
        birthday: new Date('2001-04-03')
      }
    ]
  }
}
