import React from 'react'

const Title = ({title1, title2, title3}) => {
  return (
    <div>
        <h1 className='text-[24px] md:text-[32px] xl:text-[48px] text-[#333333] font-bold'>{title1} <span className='text-primary'>{title2}</span> {title3} </h1>
    </div>
  )
}

export default Title