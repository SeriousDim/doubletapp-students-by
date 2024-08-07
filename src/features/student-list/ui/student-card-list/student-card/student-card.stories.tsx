import {Meta, StoryObj} from '@storybook/react'
import {StudentCard} from './student-card.tsx'
import {StudentCardProps} from './props.ts'
import PlaceholderImage from '../../../../../shared/assets/placeholders/square_image.jfif'

const meta = {
  title: 'Features/Student List/Student Card',
  component: StudentCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }
} satisfies Meta<typeof StudentCard>

export default meta

type Story = StoryObj<StudentCardProps>

export const Standard: Story = {
  args: {
    name: 'Григорьева Светлана Аркадьевна',
    rating: 56,
    color: 'green',
    avatar: PlaceholderImage,
    group: 'ПИ-101',
    speciality: 'Прикладная информатика',
    birthday: new Date('2001-04-03')
  }
}

export const ShortCard: Story = {
  decorators: [
    (Story) => (
      <div style={{width: '300px'}}>
        <Story/>
      </div>
    )
  ],
  args: {
    name: 'Григорьева Светлана Аркадьевна',
    rating: 56,
    color: 'green',
    avatar: PlaceholderImage,
    group: 'ПИ-101',
    speciality: 'Прикладная информатика',
    birthday: new Date('2001-04-03')
  }
}

export const ShorterCard: Story = {
  decorators: [
    (Story) => (
      <div style={{width: '210px'}}>
        <Story/>
      </div>
    )
  ],
  args: {
    name: 'Григорьева Светлана Аркадьевна',
    rating: 56,
    color: 'green',
    avatar: PlaceholderImage,
    group: 'ПИ-101',
    speciality: 'Прикладная информатика',
    birthday: new Date('2001-04-03')
  }
}
