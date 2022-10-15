import Head from "next/head";
import React from "react";
import ProductBanner from "../components/pages/productDetail/ProductBanner";
import Header from "../layouts/Header";

const Introduction = () => {
  return (
    <>
      <Head>
        <title>Hưng Phú Gia - Sản phẩm</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <ProductBanner />
      <div id="vpage-about">
        <section className="vp-about-block v-block-1">
          <div className="container">
            <div className="vp-about-body">
              <div className="vp-about-item v-left">
                <div className="v-block-title">
                  <h2>Khái quát &amp; lịch sử hình thành</h2>
                </div>
                <div className="vp-about-content">
                  <p>
                    <strong>“MỘT CHẤT LƯỢNG TRỌN NIỀM TIN”</strong>
                  </p>
                  <p>
                    Thang máy Hưng Phú Gia là một trong những công ty được thành
                    lập với đội ngũ kỹ sư cán bộ – nhân viên trẻ giỏi chuyên
                    môn, đạo đức tốt, làm việc hiệu quả trong môi trường chuyên
                    nghiệp và hiện đại.
                  </p>
                  <p>
                    Chúng tôi là đơn vị chuyên sản xuất, lắp ráp, bảo trì, sửa
                    chữa đảm nhận các sản phẩm và dịch vụ thang máy trên thị
                    trường Việt Nam. Các sản phẩm của chúng tôi thường xuyên có
                    mặt tại các công trình nhà ở, căn hộ cao cấp, chung cư, nhà
                    xưởng cũng như bệnh viện…
                  </p>
                  <p>
                    Với hy vọng được phục vụ cho quý khách đồng thời cam kết
                    cung cấp lắp đặt những sản phẩm chất lượng cao, giá thành
                    hợp lý, và đáp ứng đầy đủ các tiêu chuẩn về kỹ thuật, chất
                    lượng cũng như một dịch vụ hậu mãi tốt nhất theo khách hàng
                    đề ra.
                  </p>
                </div>
              </div>
              <div className="vp-about-item v-right">
                <img
                  src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/lich-su-hinh-thanh.png"
                  alt="Khái quát & lịch sử hình thành"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="vp-about-block v-block-2">
          <div className="container">
            <div className="v-block-title">
              <h2>Tầm nhìn và sứ mệnh</h2>
            </div>
            <div className="vp-about-content">
              <h3>
                <strong>Tầm nhìn</strong>
              </h3>
              <p>
                Công ty&nbsp;quyết tâm trở thành nhà sản xuất và bảo trì thang
                máy hàng đầu tại Việt Nam, là người tiên phong trong các lĩnh
                vực công nghệ không gian chiều thẳng đứng, có mặt mọi lúc mọi
                nơi với những giải pháp tối ưu cho khách hàng, an toàn và&nbsp;
                thẩm mỹ cho&nbsp; công trình.
              </p>
            </div>
          </div>
          <div className="vp-about-img">
            <img
              src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/slide-thang-may-1-1.jpg"
              alt="Tầm nhìn và sứ mệnh"
            />
          </div>
          <div className="container">
            <div className="vp-about-content">
              <h3>
                <strong>Mục tiêu</strong>
              </h3>
              <p>
                Mục tiêu của Công ty là đáp ứng một cách đầy đủ nhất tất cả
                những nhu cầu của khách hàng bằng cách cung cấp các thiết bị
                thang máy với tính năng kỹ thuật ưu việt, an toàn và tinh tế.
                Bảo đảm tính bền vững của thiết bị so với tuổi thọ của tòa nhà
                thông qua dịch vụ bảo trì tin cậy với số lượng cuộc gọi sửa chữa
                thấp nhất và thời gian đáp ứng cuộc gọi nhanh nhất. Luôn xem
                quyền lợi của khách hàng như của chính mình để xứng đáng với vai
                trò là người bạn đối tác thân thiết và lâu dài.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="vp-about-item-col">
              <div className="vp-about-content">
                <h3>
                  <strong>
                    Khách hàng là thước đo sự thành công của công ty
                  </strong>
                </h3>
                <p>
                  Với uy tín hơn 10 năm hoạt động, Công ty đã thu hút được một
                  số lượng lớn khách hàng trên khắp cả nước và có cả khách hàng
                  ở thị trường nước ngoài. Chúng tôi luôn phấn đấu trở thành một
                  công ty lớn mạnh và dẫn đầu. Vì vậy, chúng tôi luôn tâm niệm
                  rằng khách hàng sẽ luôn là một trong những nhân tố quan trọng
                  nhất, góp phần vào sự thành công của chúng tôi.
                </p>
                <p>&nbsp;</p>
                <h3>
                  <strong>Nâng cao chất lượng sản xuất</strong>
                </h3>
                <p>
                  Với sự đa dạng của các sản phẩm thang máy do chúng tôi sản
                  xuất (từ thang tải khách, tải hàng, tải giường bệnh cho đến
                  các loại thang tải thực phẩm ), chúng tôi luôn đầu tư những
                  công nghệ kỹ thuật tiên tiến và hiện đại nhất của Việt Nam
                  cũng như của thế giới, để luôn cải tiến và nâng cao chất lượng
                  sản phẩm.
                </p>
              </div>
              <div className="vp-about-img mb-0">
                <img
                  src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/tam-nhin-Hung-Phu-Gia.jpg"
                  alt="Tầm nhìn và sứ mệnh"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="vp-about-block v-block-4">
          <div className="container">
            <div className="v-block-title">
              <span>Dịch vụ</span>
              <h2>Của thanh máy Hưng Phú Gia</h2>
            </div>
            <div className="vp-about-content">
              <p>
                Công ty thang máy Hưng Phú Gia là một công ty hoạt động chuyên
                nghiệp trong lĩnh vực thang máy tại Việt Nam. Lĩnh vực hoạt động
                của chúng tôi bao gồm:
              </p>
              <ul>
                <li>
                  <strong>
                    Tư vấn – thiết kế và sản xuất – lắp đặt các loại thang máy
                    dân dụng, công nghiệp và chuyên dụng.
                  </strong>
                </li>
                <li>
                  <strong>
                    Bảo trì- sửa chữa và nâng cấp tất cả các loại thang máy.
                  </strong>
                </li>
                <li>
                  <strong>
                    Các dịch vụ về kiểm tra và kiểm định an toàn thang máy.
                  </strong>
                </li>
              </ul>
            </div>
          </div>
          <div className="v-block-img-style-1">
            <div className="v-block-img">
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/2.jpg"
                alt="Dịch vụ"
              />
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/5.jpg"
                alt="Dịch vụ"
              />
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/3.jpg"
                alt="Dịch vụ"
              />
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/6.jpg"
                alt="Dịch vụ"
              />
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/1.jpg"
                alt="Dịch vụ"
              />
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/4.jpg"
                alt="Dịch vụ"
              />
            </div>
          </div>
          <div className="container">
            <div className="vp-about-content">
              <p>
                Chúng tôi xác định rằng thang máy là sản phẩm có liên quan trực
                tiếp&nbsp; đến sự an toàn của người sử dụng. Vì vậy, tất cả các
                thiết bị chính của chúng tôi đều được nhập khẩu trực tiếp từ các
                nhà sản xuất thiết bị thang máy nổi tiếng trên thế giới. Các
                công đoạn sản xuất tuân thủ nghiêm khắc theo các tiêu chuẩn an
                toàn của Việt Nam. Sản phẩm được ứng dụng các công nghệ an toàn
                mới nhất hiện nay nhằm bảo đảm tuyệt đối an toàn cho người sử
                dụng.
              </p>
              <p>
                Chúng tôi luôn phấn đấu không ngừng nghỉ nhằm mang lại sự an
                toàn, tiện nghi và hài lòng cho khách hàng cùng với mục tiêu là
                sự phát triển bền vững và lâu dài cho thương hiệu. Phương châm
                chiến lược của&nbsp;Hưng Phú Gia: “Một Chất Lượng Trọn Niềm Tin”
                .
              </p>
            </div>
          </div>
          <div className="container">
            <div className="vp-about-item-col">
              <div className="vp-about-img mb-0">
                <img
                  src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/7.jpg"
                  alt="Giới thiệu"
                />
              </div>
              <div className="vp-about-content"></div>
            </div>
            <div className="vp-about-content"></div>
          </div>
          <div className="vp-about-img">
            <img
              src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/slide-thang-may-5.jpg"
              alt="Giới thiệu"
            />
          </div>
        </section>
        <section className="vp-about-block v-block-6">
          <div className="container">
            <div className="v-block-title">
              <h2>Đội ngũ &amp; cơ sở vật chất</h2>
            </div>
            <div className="vp-about-content"></div>
          </div>
          <div className="v-block-img-style-2">
            <div className="v-block-img">
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-6.jpg"
                alt="Đội ngũ & cơ sở vật chất"
              />
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-4.jpg"
                alt="Đội ngũ & cơ sở vật chất"
              />
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-2.jpg"
                alt="Đội ngũ & cơ sở vật chất"
              />
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-5.jpg"
                alt="Đội ngũ & cơ sở vật chất"
              />
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-9.jpg"
                alt="Đội ngũ & cơ sở vật chất"
              />
            </div>
            <div className="v-block-img-right">
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-3.jpg"
                alt="Đội ngũ & cơ sở vật chất"
              />
            </div>
          </div>
          <div className="container">
            <div className="vp-about-content"></div>
            <div className="v-block-img-style-3">
              <div className="v-block-img">
                <img
                  src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-8.jpg"
                  alt="Đội ngũ & cơ sở vật chất"
                />
                <img
                  src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-7.jpg"
                  alt="Đội ngũ & cơ sở vật chất"
                />
                <img
                  src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-10.jpg"
                  alt="Đội ngũ & cơ sở vật chất"
                />
                <img
                  src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-11.jpg"
                  alt="Đội ngũ & cơ sở vật chất"
                />
                <img
                  src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-13.jpg"
                  alt="Đội ngũ & cơ sở vật chất"
                />
                <img
                  src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-12.jpg"
                  alt="Đội ngũ & cơ sở vật chất"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="vp-about-block v-block-7">
          <div className="container">
            <div className="v-block-title">
              <h2>Thông tin liên hệ</h2>
            </div>
            <div className="vp-about-content">
              <h3 style={{ textAlign: "left" }}>
                <span style={{ fontSize: "36px", color: "#11b4fa" }}>
                  CÔNG TY TNHH THANG MÁY HƯNG PHÚ GIA
                </span>
              </h3>
              <h3>Địa chỉ: 207/12 Nguyễn Văn Đậu Phường 11, Quận Bình Thạnh</h3>
              <h3>Hotline: 0968 09 7777</h3>
              <h3>Email: hungphugiaelevator@gmail.com</h3>
              <h3>Website: hungphugiaelevator.com</h3>
            </div>
          </div>
          <div className="v-block-img-style-4">
            <div className="v-block-img">
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-19.jpg"
                alt="Thông tin liên hệ"
              />
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-15.jpg"
                alt="Thông tin liên hệ"
              />
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-16.jpg"
                alt="Thông tin liên hệ"
              />
              <img
                src="https://hungphugiaelevator.com/wp-content/uploads/2021/07/doi-ngu-va-co-so-vat-chat-Hung-Phu-Gia-20.jpg"
                alt="Thông tin liên hệ"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Introduction;
