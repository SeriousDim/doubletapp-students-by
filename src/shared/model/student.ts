import {ImgHTMLAttributes} from 'react'

export enum StudentSex {
  Male = 'm',
  Female = 'f'
}

export type StudentColors = 'red' | 'green' | 'blue'

export type Student = {
  id: number,
  email: string,
  name: string,
  sex: StudentSex,
  specialty: string,
  group: string,
  color: StudentColors,
  rating: number,
  birthday: Date,
  avatar: ImgHTMLAttributes<HTMLImageElement>['src']
}
