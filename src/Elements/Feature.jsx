import React from 'react'

function Feature({logo, title, description, className=''}) {
  return (
    <div className={`flex flex-col gap-5 justify-between items-center`+ className}>
      <div className="h-[6.375rem] w-[6.375rem] rounded-[1.625rem] bg-primary shadow-lg"></div>
    </div>
  )
}

export default Feature
