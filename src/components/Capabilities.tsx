import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export const Capabilities: React.FC<Props> = ({ children }) => {
  return <div className="w-full bg-amber-100">{children}</div>
}
