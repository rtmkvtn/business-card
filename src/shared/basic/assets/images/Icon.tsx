import githubIcon from './ui/github-icon.svg'
import GithubIcon from './ui/github-icon.svg?react'
import { FunctionComponent, SVGProps } from 'react'

type SvgIconComponent = FunctionComponent<SVGProps<SVGSVGElement>>

export type IconTypes = 'github'

type IProps = {
  tag?: 'svg' | 'img'
  alt?: string
  type: IconTypes
  className?: string
  color?: string
  size?: number
  width?: number
  height?: number
}

const Icon = ({
  tag = 'svg',
  alt = '',
  type,
  className,
  color,
  size = 28,
  width = size,
  height = size,
}: IProps) => {
  const isSvg = tag === 'svg'

  let result: { img: string; svg: SvgIconComponent | null } = {
    img: '',
    svg: null,
  }

  if (type === 'github') result = { img: githubIcon, svg: GithubIcon }

  if (isSvg && result.svg) {
    return (
      <result.svg
        width={width}
        height={height}
        className={className}
        color={color}
      />
    )
  }

  if (result.img) {
    return (
      <img
        src={result.img}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    )
  }

  return null
}

export default Icon
