import {StudentListWidgetProps} from '../model/props.ts'
import {StudentListWidgetDesktop} from './student-list-widget-desktop.tsx'
import {StudentListWidgetMobile} from './student-list-widget-mobile.tsx'
import {ClassNames} from '../model/class-names.ts'
import {StudentListWidgetContainer} from './styles.ts'
import {useEffect, useState} from 'react'
import {searchByName} from '../model/search-by-name.ts'
import {FilterRules} from '../model/filter-options.ts'

export function StudentListWidget(props: StudentListWidgetProps) {
  const [searchName, setSearchName] = useState('')
  const [filterOptionIndex, setFilterOptionIndex] = useState(0)
  const [filteredStudents, setFilteredStudents] = useState(FilterRules[filterOptionIndex](props.students))

  useEffect(() => {
    let newStudents = searchByName(filteredStudents, searchName)
    newStudents = FilterRules[filterOptionIndex](newStudents)
    setFilteredStudents(newStudents)
  }, [filteredStudents, searchName, filterOptionIndex])

  const onNameChange = (name: string) => setSearchName(name)
  const onFilterChange = (optionIndex: number) => {
    setFilterOptionIndex(optionIndex)
  }
  const onDeleteStudent = (index: number) => {
    const newStudents = [...filteredStudents]
    newStudents.splice(index, 1)
    setFilteredStudents(newStudents)
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
