// Forma da chamada: <CustomButton>Entrar</CustomButton>
import { CustomButtonContainer, IconContainer } from "./custom-buttom.styles";
import { ButtonHTMLAttributes } from "react";

// A interface herda os atributos html de botão através do HTMLButtonElement e são passadas por meio do '..rest'
// Obs: o mesmo vale para input etc...
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
   startIcon?: React.ReactNode;
 }
  
const CustomButton: React.FC<Props> = ({ children, startIcon, ...rest }) => {
   return <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
   </CustomButtonContainer>
}
   
export default CustomButton;