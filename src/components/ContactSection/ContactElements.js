import styled from "styled-components";
import { Form } from "formik";

export const ContactSectionContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 5rem 0;
  background-color: #020001;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const ContactGridContainer = styled.div`
  width: 100%;
  max-width: 820px;

  /* background-color: #fff; */
  border-radius: 10px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);

  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
  background-color: #fff;
`;

export const ContactFormContainer = styled.div`
  background-color: #666666;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    background-color: #666666;
    transform: rotate(45deg);
    top: 50px;
    left: -13px;
  }

  @media screen and (max-width: 768px) {
    &::before {
      top: -13px;
      left: initial;
      right: 70px;
    }
  }
`;

export const ContactTitle = styled.h3`
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;
  text-align: center;
`;

export const ContactForm = styled(Form)`
  padding: 2.3rem 2.2rem;
  /* z-index: 10; */
  overflow: hidden;
  position: relative;
`;

export const ContactInputContainer = styled.div`
  position: relative;
  margin: 2rem 0;

  & label {
    display: none;
  }
`;

export const ContactInput = styled.input`
  width: 100%;
  outline: none;
  border: ${(props) => props.border};
  background: none;
  padding: 0.6rem 1.2rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 25px;
  transition: 0.3s;

  &::placeholder {
    color: #fff;
    opacity: 0.8;
  }
`;

export const ContactTextArea = styled.textarea`
  padding: 0.8rem 1.2rem;
  min-height: 150px;
  border-radius: 22px;
  resize: none;
  overflow-y: auto;
  width: 100%;
  outline: none;
  border: ${(props) => props.border};
  background: none;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  transition: 0.3s;

  &::placeholder {
    color: #fff;
    opacity: 0.8;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.6rem 1.3rem;
  background-color: #fff;
  border: 2px solid #fff;
  width: 100%;
  font-size: 1rem;

  color: #002350;
  line-height: 1;
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;

  &:hover {
    background: transparent;
    color: #fff;
  }
`;

export const ContactInfoTitle = styled.h3`
  color: #020001;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;
  text-align: center;
`;

export const ContactInfoContainer = styled.div`
  padding: 2.3rem 2.2rem;
  /* z-index: 10; */
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactInfoParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.2;
  letter-spacing: 0.5px;
  margin: 1rem 0 0 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.a`
  font-size: 2rem;
  padding: 10px 0;
`;
