import {Meta, StoryObj} from '@storybook/react'
import {StudentTableList} from './student-table-list.tsx'
import {StudentTableListProps} from './props.ts'
import PlaceholderImage from '../../../../../shared/assets/placeholders/square_image.jfif'
import {StudentSex} from '../../../../../shared/model/student.ts'

const meta = {
  title: 'Features/Student Table List/Student Table List',
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

export const LongTextData: Story = {
  args: {
    students: [
      {
        id: 1,
        email: 'example@mail.ru',
        name: 'Экзамплов Экзампл Экзамплович',
        color: 'red',
        rating: 66,
        group: 'РИ-019',
        speciality: 'Прикладная информатика',
        sex: StudentSex.Male,
        birthday: new Date('1999-03-12'),
        avatar: PlaceholderImage
      },
      {
        id: 2,
        email: 'another@gmail.ru',
        name: 'Иван Грозный',
        color: 'blue',
        rating: 3,
        group: 'МТ-204',
        speciality: 'Машинное обучение и анализ данных',
        sex: StudentSex.Female,
        birthday: new Date('2000-04-04'),
        avatar: PlaceholderImage
      },
      {
        id: 3,
        email: 'mmm@ya.ru',
        name: 'Емельян Пугачев',
        color: 'green',
        rating: 100,
        group: 'ПИ-101',
        speciality: 'Без образования',
        sex: StudentSex.Male,
        birthday: new Date('2005-09-19'),
        avatar: PlaceholderImage
      }
    ]
  }
}
