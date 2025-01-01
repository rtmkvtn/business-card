import Layout from '../../shared/basic/ui/layout/Layout'
import HardSkills from '../../pages/hardSkills/HardSkills'

export const routesList = [
  {
    name: 'hardSkills',
    path: '/',
    element: (
      <Layout>
        <HardSkills />
      </Layout>
    ),
    exact: true,
  },
]
