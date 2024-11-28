declare module '*.svg' {
  import * as React from 'react'

  const src: string
  export default src
  export const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >
}
