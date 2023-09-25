import React from 'react'

const Authlayout = ({
    children
} : { children: React.ReactNode }) => {
  return (
    <div className='bg-primary h-full flex justify-center items-center'>
      {children}
    </div>
  )
}

export default Authlayout
