import React from "react";
import Container from "../../../../layouts/Container";
import ContactForm from "./ContactForm";
import ContactImage from "../../../../assets/images/thang-may-ngoai-troi.jpg";
import styled from "styled-components";

const ContactBox = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(51, 51, 51, 0.8),
      rgba(51, 51, 51, 0.5),
      rgba(51, 51, 51, 0.8)
    ),
    url(${ContactImage.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Contact = () => {
  return (
    <ContactBox className="contact">
      <Container className="contact__container">
        <h4 className="contact__helps-text">
          Chúng tôi có thể giúp gì cho bạn?
        </h4>
        <ContactForm />
      </Container>
    </ContactBox>
  );
};

export default Contact;
