import React from "react";
import { Formik, useField, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaFacebookSquare } from "react-icons/fa";
import axios from "axios";

import {
  ContactSectionContainer,
  ContactGridContainer,
  ContactInfo,
  ContactFormContainer,
  ContactTitle,
  ContactForm,
  ContactInputContainer,
  ContactInput,
  ContactTextArea,
  SubmitButton,
  ContactInfoTitle,
  ContactInfoContainer,
  ContactInfoParagraph,
  TextWrapper,
  IconWrapper,
  Icon,
} from "./ContactElements";
import {} from "react-icons/fa";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <ContactInputContainer>
        <label htmlFor={props.id || props.name}>{label}</label>
        <ContactInput
          {...field}
          {...props}
          border={
            meta.touched && meta.error ? "2px solid #020001" : "2px solid #fff"
          }
        />
        <ErrorMessage
          component="span"
          name={props.name}
          render={(msg) => <span className="errors">{msg}</span>}
        />
      </ContactInputContainer>
    </React.Fragment>
  );
};
const MyTextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <ContactInputContainer>
        <label htmlFor={props.id || props.name}>{label}</label>
        <ContactTextArea
          {...field}
          {...props}
          border={
            meta.touched && meta.error ? "2px solid orange" : "2px solid #fff"
          }
        />
        <ErrorMessage
          component="span"
          name={props.name}
          render={(msg) => <span className="errors">{msg}</span>}
        />
      </ContactInputContainer>
    </React.Fragment>
  );
};

const sendMail = async (values, actions) => {
  let response = await axios.post("https://cyberstreets.herokuapp.com/send", {
    data: values,
  });

  console.log(response.data);
  if (response.data.status === "success") {
    alert("Message sent!");
    actions.resetForm();
    actions.setSubmitting(false);
  } else if (response.data.status === "fail") {
    actions.setSubmitting(false);
  }
};

const Contact = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(40, "Must be 40 characters or less")
          .required("Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        message: Yup.string().max(400, "Must be 400 characters or less"),
      })}
      onSubmit={sendMail}
    >
      {(props) => (
        <React.Fragment>
          <ContactSectionContainer id="contact">
            <ContactGridContainer>
              <ContactInfo>
                <ContactInfoContainer>
                  <ContactInfoTitle>Connect with us</ContactInfoTitle>
                  <TextWrapper>
                    <div>
                      <ContactInfoParagraph>
                        {" "}
                        If you have any questions, please fill out this form. We
                        will get back to you as soon as possible. We look
                        forward in helping to empower your community!{" "}
                      </ContactInfoParagraph>
                    </div>
                    <div>
                      <ContactInfoParagraph>
                        {" "}
                        Follow us on social media to find out more about Cyber
                        Streets impact on the community.
                      </ContactInfoParagraph>
                      <IconWrapper>
                        <Icon
                          href="https://www.facebook.com/CyberStreets/"
                          target="_blank"
                        >
                          <FaFacebookSquare color="#000" />
                        </Icon>
                        {/* <Icon href="https://www.youtube.com/" target="_blank">
                          <FaYoutube color="#000" />
                        </Icon> */}
                      </IconWrapper>
                    </div>
                  </TextWrapper>
                </ContactInfoContainer>
              </ContactInfo>
              <ContactFormContainer>
                <ContactForm>
                  <ContactTitle>Contact Us</ContactTitle>
                  <MyTextInput
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                  />
                  <MyTextInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <MyTextInput
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                  />
                  <MyTextArea
                    label="Message:"
                    name="message"
                    type="message"
                    as="textarea"
                    placeholder="Enter message here..."
                  />
                  <SubmitButton type="submit">Submit</SubmitButton>
                </ContactForm>
              </ContactFormContainer>
            </ContactGridContainer>
          </ContactSectionContainer>
        </React.Fragment>
      )}
    </Formik>
  );
};

export default Contact;
