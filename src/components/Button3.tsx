import React, { type ComponentProps, type ComponentPropsWithoutRef, type ComponentPropsWithRef } from 'react'


// we can access all the button properties
type ButtonProps = ComponentProps<'button'>&{
  variants?:'primary' | 'secondary'
}; 

type anchorProps = ComponentProps<'a'>; 
type inputProps = ComponentProps<'input'>; //etc///

type ButtonPropsRef=ComponentPropsWithRef<'button'> // when u wan to pass the ref
// type InputPropsRef=ComponentPropsWithoutRef<'input'>

const Button3 = ({type,autoFocus,variants,...props}:ButtonProps) => {
  return (
    <button type={type} {...props}>
      Click Me
    </button>
  )
}

export default Button3
