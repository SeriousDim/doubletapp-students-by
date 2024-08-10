import {StudentListWidgetProps} from '../model/props.ts'
import {StudentListWidgetDesktop} from './student-list-widget-desktop.tsx'
import {StudentListWidgetMobile} from './student-list-widget-mobile.tsx'
import {ClassNames} from '../model/class-names.ts'
import {StudentListWidgetContainer} from './styles.ts'
import {useEffect, useState} from 'react'
import {applyAllFilters} from '../model/filters.ts'

export function StudentListWidget(props: StudentListWidgetProps) {
  const [students, setStudents] = useState(props.students)

  const [searchName, setSearchName] = useState('')
  const [filterOptionIndex, setFilterOptionIndex] = useState(0)
  const [filteredStudents, setFilteredStudents]
    = useState(applyAllFilters(students, searchName, filterOptionIndex))

  useEffect(() => {
    setFilteredStudents(applyAllFilters(students, searchName, filterOptionIndex))
  }, [filterOptionIndex, searchName, students])

  // useEffect(() => {
  //   setFilteredStudents(prev => searchByName(prev, searchName))
  // }, [searchName])
  //
  // useEffect(() => {
  //   setFilteredStudents(prev => sortByFilterOption(prev, filterOptionIndex))
  // }, [filterOptionIndex])

  const onNameChange = (name: string) => setSearchName(name)
  const onFilterChange = (optionIndex: number) => {
    setFilterOptionIndex(optionIndex)
  }
  const onDeleteStudent = (index: number) => {
    const newStudents = [...students]
    newStudents.splice(index, 1)
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
