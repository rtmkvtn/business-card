import { BrowserRouter, Route, Routes } from 'react-router'
import { Main } from '../../pages/main'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}
