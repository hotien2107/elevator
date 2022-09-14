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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                consectetur enim alias deserunt numquam temporibus sequi animi
                nihil amet optio quaerat mollitia eius labore molestias, ea
                dolores quos veniam ipsa!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                consectetur enim alias deserunt numquam temporibus sequi animi
                nihil amet optio quaerat mollitia eius labore molestias, ea
                dolores quos veniam ipsa!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                consectetur enim alias deserunt numquam temporibus sequi animi
                nihil amet optio quaerat mollitia eius labore molestias, ea
                dolores quos veniam ipsa!
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
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                consectetur enim alias deserunt numquam "
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
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                consectetur enim alias deserunt numquam "
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
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                consectetur enim alias deserunt numquam "
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
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                consectetur enim alias deserunt numquam "
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
