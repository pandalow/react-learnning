import styled from "styled-components"

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({$invalid}) => ($invalid? '#fef2f2': '#fff')};
  color: ${({$invalid}) => ($invalid? '#f87171': '#4b5563')};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({$invalid}) => ($invalid? '#f87171': '#6b7280')};
`

export default function CustomInput({label, invalid, ...props}) {

    return(
        <p>
            <Label $invalid={invalid}>{label}</Label>
            <Input $invalid={invalid} {...props}/>
        </p>
    )
}