import styles from './Layout.module.scss'
import { Header } from '@widgets/index'

type IProps = {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.pageViewport}>{children}</div>
    </div>
  )
}

export default Layout
