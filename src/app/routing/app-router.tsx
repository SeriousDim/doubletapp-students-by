import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {StudentListPage} from '../../pages/student-list-page'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          index
          element={<StudentListPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
