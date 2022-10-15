import React from "react";
import Container from "../../../../layouts/Container";
import FieldItem from "./FieldItem";
import Icon from "../../../../assets/icons/configuration.png";
import Image from "next/image";

const About = () => {
  return (
    <Container>
      <div className="about">
        <div className="about__content">
          <div className="about__path">
            <div className="about__title">Về chúng tôi</div>
            <div className="about__detail-text">
              <p>
                Thang máy Hưng Phú Gia là một trong những công ty được thành lập
                với đội ngũ kỹ sư cán bộ – nhân viên trẻ giỏi chuyên môn, đạo
                đức tốt, làm việc hiệu quả trong môi trường chuyên nghiệp và
                hiện đại.
              </p>
              <p>
                Chúng tôi là đơn vị chuyên sản xuất, lắp ráp, bảo trì, sửa chữa
                đảm nhận các sản phẩm và dịch vụ thang máy trên thị trường Việt
                Nam. Các sản phẩm của chúng tôi thường xuyên có mặt tại các công
                trình nhà ở, căn hộ cao cấp, chung cư, nhà xưởng cũng như bệnh
                viện…
              </p>
              <p>
                Với hy vọng được phục vụ cho quý khách đồng thời cam kết cung
                cấp lắp đặt những sản phẩm chất lượng cao, giá thành hợp lý, và
                đáp ứng đầy đủ các tiêu chuẩn về kỹ thuật, chất lượng cũng như
                một dịch vụ hậu mãi tốt nhất theo khách hàng đề ra.
              </p>
            </div>
          </div>
          <div className="about__path">
            <div className="about__title">Lĩnh vực hoạt động</div>
            <div className="about__detail-card">
              <FieldItem
                icon={
                  <Image
                    width={40}
                    height={40}
                    src={Icon}
                    alt="Icon lĩnh vực hoạt động"
                  />
                }
                title="Lĩnh vực 1"
              />
              <FieldItem
                icon={
                  <Image
                    width={40}
                    height={40}
                    src={Icon}
                    alt="Icon lĩnh vực hoạt động"
                  />
                }
                title="Lĩnh vực 1"
              />
              <FieldItem
                icon={
                  <Image
                    width={40}
                    height={40}
                    src={Icon}
                    alt="Icon lĩnh vực hoạt động"
                  />
                }
                title="Lĩnh vực 1"
              />
              <FieldItem
                icon={
                  <Image
                    width={40}
                    height={40}
                    src={Icon}
                    alt="Icon lĩnh vực hoạt động"
                  />
                }
                title="Lĩnh vực 1"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
