import {Table} from '@tanstack/react-table'
import {CSSProperties} from 'react'
import {StudentTableRowData} from './student-table-row-data.ts'

export type TableWrapperStyles = {
  width?: CSSProperties['width']
}

export type ReactTableWrapperProps<T> = {
  table: Table<T>,
  styles?: TableWrapperStyles
}

export type StudentTableListProps = {
  students: StudentTableRowData[]
}
