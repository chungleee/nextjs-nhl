import React, { Fragment } from 'react'
import { DatePicker } from 'antd'

const Page = ({ children }) => {
  return (
    <Fragment>
      <main>{children}</main>
      <DatePicker />
    </Fragment>
  )
}

export default Page
