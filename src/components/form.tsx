import React, { FormHTMLAttributes, forwardRef } from 'react'

interface IForm {}

export const Form = forwardRef<HTMLFormElement, FormHTMLAttributes<IForm>>(
  (props, ref) => {
    const { children } = props

    return <form ref={ref}>{children}</form>
  }
)
