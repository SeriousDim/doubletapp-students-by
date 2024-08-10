import {useQuery} from '@tanstack/react-query'
import {Student} from '../../shared/model/student.ts'

export const useStudentsQuery = () => useQuery<unknown, any, Student[]>({
  queryKey: ['students'],
  queryFn: () => fetch(
    'https://front-assignment-api.2tapp.cc/api/persons'
  ).then(async res => {
    const parsed: { students: any } = await res.json()
    return parsed.students
  })
    .then(async res => res.map<Student[]>(item => ({
      ...item,
      birthday: new Date(item.birthday),
    })))
})
