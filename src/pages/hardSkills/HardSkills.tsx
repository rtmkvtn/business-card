import styles from './HardSkills.module.scss'
import classNames from 'classnames'
import Title from '../../shared/basic/ui/title/Title'

type IProps = {
  className?: string
}

const HardSkillsPage = ({ className }: IProps) => {
  return (
    <div className={classNames(styles.wrapper, className && className)}>
      <Title>Hard Skills</Title>
    </div>
  )
}

export default HardSkillsPage
