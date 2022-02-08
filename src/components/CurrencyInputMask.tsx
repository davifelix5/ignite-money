import { ChangeEvent, HTMLProps } from "react";

interface MaskCurrencyInputProps extends HTMLProps<HTMLInputElement> {
  value: number
  setValue: (value: number) => void
}

export function CurrencyInputMask({ value, setValue, ...props }: MaskCurrencyInputProps) {
  
  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const initialValue = event.target.value
    
    const initialValueDigits = initialValue.replace(/[^0-9]/g, '')

    const paddedValue = initialValueDigits.padStart(3, '0')
    const numberValue = Number(`${paddedValue.slice(0, -2)}.${paddedValue.slice(-2)}`)

    const formatedValue = Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(numberValue)

    event.target.value = numberValue === 0 ? '' : formatedValue
    setValue(numberValue)

  }
  
  return <input type="text" onInput={handleInput} {...props} />
}