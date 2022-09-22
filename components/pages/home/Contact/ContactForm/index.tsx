import React from "react";
import ButtonPrimary from "../../../../ui/button/ButtonPrimary";
import { Input } from "../../../../ui/Input";

const ContactForm = () => {
  return (
    <form className="contact__form">
      <h4 className="contact__form-title">Yêu cầu tư vấn</h4>
      <p className="contact__form-desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        ducimus in, dicta aliquam quos quia non nemo. Nemo, et laborum molestias
        nihil odit sunt ipsam sit recusandae impedit corrupti quasi!
      </p>
      <div className="contact__form-item">
        <Input.Text placeholder="Họ và tên" />
      </div>
      <div className="contact__form-item">
        <Input.Text placeholder="Email" />
      </div>
      <div className="contact__form-item">
        <Input.Text placeholder="Số điện thoại" />
      </div>
      <div className="contact__form-item">
        <Input.Text placeholder="Chọn dịch vụ" />
      </div>
      <div className="contact__form-item">
        <Input.Area placeholder="Nội dung" rows={5} />
      </div>
      <ButtonPrimary>Gửi yêu cầu</ButtonPrimary>
    </form>
  );
};

export default ContactForm;
