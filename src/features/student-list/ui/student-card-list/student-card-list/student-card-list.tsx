import {StudentCardListProps} from './props.ts'
import {StudentCard} from '../student-card'

export function StudentCardList(props: StudentCardListProps) {
  return (
    <section style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
      {props.students.map(item =>
        <StudentCard {...item}/>)}
    </section>
  )
}
