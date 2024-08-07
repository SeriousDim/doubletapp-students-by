import {Meta, StoryObj} from '@storybook/react'
import {StudentTableList} from './student-table-list.tsx'
import {StudentTableListProps} from './props.ts'
import PlaceholderImage from '../../../../../shared/assets/placeholders/square_image.jfif'

const meta = {
  title: 'Features/Student List/Student Table List',
  component: StudentTableList,
  decorators: [
    (Story) => (
      <div style={{backgroundColor: '#fdfdfd'}}>
        <Story/>
      </div>
    )
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }
} satisfies Meta<typeof StudentTableList>

export default meta

type Story = StoryObj<StudentTableListProps>

export const ManyRows: Story = {
  args: {
    students: [
      {
        name: 'Экзамплов Экзампл Экзамплович',
        color: 'red',
        rating: 66,
        group: 'РИ-019',
        speciality: 'Прикладная информатика',
        birthday: new Date('1999-03-12'),
        avatar: PlaceholderImage
      },
      {
        name: 'Иван Грозный',
        color: 'blue',
        rating: 3,
        group: 'МТ-204',
        speciality: 'Машинное обучение и анализ данных',
        birthday: new Date('2000-04-04'),
        avatar: PlaceholderImage
      },
      {
        name: 'Емельян Пугачев',
        color: 'green',
        rating: 100,
        group: 'ПИ-101',
        speciality: 'Без образования',
        birthday: new Date('2005-09-19'),
        avatar: PlaceholderImage
      }
    ]
  }
}

export const OneItem: Story = {
  args: {
    students: [
      {
        name: 'Экзамплов Экзампл Экзамплович',
        color: 'red',
        rating: 66,
        group: 'РИ-019',
        speciality: 'Прикладная информатика',
        birthday: new Date('1999-03-12'),
        avatar: PlaceholderImage
      }
    ]
  }
}
