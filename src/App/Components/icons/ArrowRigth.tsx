import React, { FC } from 'react'

const ArrowRigth: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  )
}

export default ArrowRigth
