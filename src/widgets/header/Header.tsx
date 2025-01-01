import styles from './Header.module.scss'
import classNames from 'classnames'
import Icon from '../../shared/basic/assets/images/Icon'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className={classNames(styles.wrapper)}>
      <a
        className={styles.logo}
        href={'https://t.me/fckxyz'}
        target="_blank"
        referrerPolicy="no-referrer"
      >
        t.me/fckXYZ
      </a>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationListItem}>
            <Link to={'/'}>Projects</Link>
          </li>
          <li className={styles.navigationListItem}>
            <Link to={'/'}>Hard Skills</Link>
          </li>
          <li className={styles.navigationListItem}>
            <Link to={'/'}>Experience</Link>
          </li>
          <li className={styles.navigationListItem}>
            <Link to={'/'}>_this.</Link>
          </li>
          <li className={styles.navigationListItem}>
            <Icon type={'github'} />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
