import {StudentTableListProps} from './props.ts'
import {StudentRow} from '../student-row'
import {StudentTableHeader} from '../student-table-header'

export function StudentTableList(props: StudentTableListProps) {
  return (
    <table style={{
      width: '100%',
    }}>
      <thead>
        <StudentTableHeader/>
      </thead>
      <tbody style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        backgroundColor: '#FFFFFF',
        padding: '26px 20px',
        borderRadius: '6px'
      }}>
        {
          props.students.map(item => (
            <StudentRow key={item.id} student={item}/>
          ))
        }
      </tbody>
    </table>
  )
}
