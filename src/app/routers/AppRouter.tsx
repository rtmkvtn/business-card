import { BrowserRouter, Route, Routes } from 'react-router'
import { routesList } from '../config'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesList.map((routeConfig, index) => (
          <Route
            key={routeConfig.path + index}
            path={routeConfig.path}
            element={routeConfig.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
