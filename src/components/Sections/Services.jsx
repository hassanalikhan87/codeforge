import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Services</h1>
            <p className="font13">
              At CodeForge, we combine expert talent with cutting-edge
              technology to create high-performance software solutions that fuel
              business growth.
              <br />
              CodeForge is your partner for transformative solutions and
              long-term success.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="software"
                title="Software Development"
                subtitle="At CodeForge, we specialize in building tailor-made software solutions that align with your unique business objectives. From simple applications to complex enterprise systems, our expert developers ensure scalability, security, and seamless integration with your existing infrastructure."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="web"
                title="Web Development"
                subtitle="From sleek and responsive websites to powerful web applications, our web development services ensure that your online presence is not only visually appealing but also technically robust. We use the latest technologies to build websites that enhance user engagement and drive conversions."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="mobile"
                title="Mobile Development"
                subtitle="We create high-performance mobile applications for iOS and Android that deliver an exceptional user experience. Our apps are designed to be intuitive, engaging, and functional, helping your business connect with customers on the go."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="cloud"
                title="Cloud Solutions & DevOps"
                subtitle="Optimize your IT infrastructure with CodeForge's cloud solutions and DevOps services. We help businesses transition to the cloud, implement CI/CD pipelines, and maintain scalable, high-performance systems with 24/7 support."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="uiux"
                title="UI/UX Design"
                subtitle="Our design team works closely with clients to create visually stunning and user-friendly interfaces that enhance customer engagement. We prioritize usability, aesthetics, and responsiveness to deliver designs that not only look great but also perform seamlessly across platforms."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="aiml"
                title="AI & Machine Learning"
                subtitle="Unlock the potential of AI and machine learning to transform your business processes. CodeForge develops custom AI models, predictive analytics tools, and machine learning algorithms that enable data-driven decision-making and automation."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="blockchain"
                title="Blockchain Development"
                subtitle="Leverage the power of blockchain to enhance security, transparency, and efficiency in your business operations. Our team of blockchain developers is skilled in creating decentralized applications (dApps), smart contracts, and custom blockchain solutions that empower your business."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="strategy"
                title="Consulting & IT Strategy"
                subtitle="Our consulting services help businesses align their technology strategy with their overall goals. We provide expert guidance on everything from digital transformation to IT infrastructure, ensuring that your business stays ahead of the competition"
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">A few words about company</h4>
                <h2 className="font40 extraBold">A Study of Creativity</h2>
                <p className="font12">
                Creativity is the lifeblood of everything we do at CodeForge. We approach every challenge with fresh eyes, combining technical expertise with imaginative problem-solving to create solutions that not only work but inspire. Our team thrives on innovation, turning complex ideas into user-friendly, impactful software that drives business growth and transforms industries.
                </p>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 150px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
