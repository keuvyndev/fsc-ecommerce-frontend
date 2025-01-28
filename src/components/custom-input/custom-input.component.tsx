import React, { FunctionComponent, InputHTMLAttributes } from "react";

// Styles
import { CustomInputContainer } from "./custom-input.styles";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
   hasError?: boolean,
}

// Código foi alterado para passar a ref, para que o input possa ser usado em conjunto com react-form
const CustomInput:FunctionComponent<CustomInputProps> = React.forwardRef(
   (props, ref) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return <CustomInputContainer {...props} ref={ref as any} />
   }
)

CustomInput.displayName = 'Custom'

export default CustomInput;