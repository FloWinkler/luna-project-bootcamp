import styled from "styled-components";

export const AuthForm = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f2f2f2;
  padding: 1% 0;
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 5%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background-color: #e47d31;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
`;

export const Basic = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 25% 25% 35% 15%;
  width: 100%;
  height: 160px;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: #4C4C4C;


`;

export const LabelText = styled.label`
  border-radius: 3px;
  font-weight: 700;
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  height: 100%;
  font-size: 20px;
  
  color: #979797;
`;

export const InputText = styled.input.attrs({
  autocomplete: "off",
})`
  border: 1px solid #ebebeb;
  border-radius: 3px;
  width: 100%;
  text-indent: 1rem;
  height: 100%;
  

  font-style: normal;
  font-weight: 200;
  font-size: 22px;
  line-height: 26px;
  color: #787878;
`;

export const InputSelect = styled.select`
  height: 2.5rem;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  width: 100%;
  text-indent: 1rem;
  height: 100%;


  font-style: normal;
  font-weight: 200;
  font-size: 22px;
  line-height: 26px;
  color: #787878;

`;

export const InputField = styled.input`
  margin: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  font-weight: 700;
  width: 95%;
  text-indent: 1rem;
`;

export const RequiredField = styled.span.attrs({
  className: "RequiredField",
})`
  text-align: left;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  /* identical to box height */

  color: #B00000;
`;


export const AddImageDiv = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width: 70%;
`



