import {StudentListWidgetProps} from '../model/props.ts'
import {StudentListWidgetDesktop} from './student-list-widget-desktop.tsx'
import {StudentListWidgetMobile} from './student-list-widget-mobile.tsx'
import {ClassNames} from '../model/class-names.ts'
import {StudentListWidgetContainer} from './styles.ts'
import {useEffect, useState} from 'react'
import {applyAllFilters} from '../model/filters.ts'
import {studentArrayToObject} from '../model/student-array-to-object.ts'

export function StudentListWidget(props: StudentListWidgetProps) {
  const [students, setStudents] = useState(studentArrayToObject(props.students))

  const [searchName, setSearchName] = useState('')
  const [filterOptionIndex, setFilterOptionIndex] = useState(0)
  const [filteredStudents, setFilteredStudents]
    = useState(applyAllFilters(Object.values(students), searchName, filterOptionIndex))

  useEffect(() => {
    setFilteredStudents(applyAllFilters(Object.values(students), searchName, filterOptionIndex))
  }, [filterOptionIndex, searchName, students])

  const onNameChange = (name: string) => setSearchName(name)
  const onFilterChange = (optionIndex: number) => {
    setFilterOptionIndex(optionIndex)
  }
  const onDeleteStudent = (index: number) => {
    const student = filteredStudents[index]
    const id = student.id
    const newStudents = {...students}
    delete newStudents[id]
    setStudents(newStudents)
  }

  return (
    <StudentListWidgetContainer>
      <div className={ClassNames.desktop}>
        <StudentListWidgetDesktop
          students={filteredStudents}
          onNameChange={onNameChange}
          onFilterChange={onFilterChange}
          onDeleteStudent={onDeleteStudent}
        />
      </div>
      <div className={ClassNames.smartphonePortrait}>
        <StudentListWidgetMobile
          students={filteredStudents}
          onNameChange={onNameChange}
          onFilterChange={onFilterChange}
          onDeleteStudent={onDeleteStudent}
        />
      </div>
    </StudentListWidgetContainer>
  )
}
