import { useState } from 'react'

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue)
  const onChange = (event: { target: HTMLInputElement }) => {
    setValue(event.target.value)
  }
  return { value, onChange }
}
