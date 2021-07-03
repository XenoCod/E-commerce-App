import styled from "styled-components";

function Footer() {
  return (
    <div className="  overflow-hidden  ">
      <Container>
        <FooterSection className="sm:text-xs xl:text-base">
          <Group>
            <h1>Get to know us</h1>
            <li> About us </li>
            <li> Careers </li>
            <li> Press Releases </li>
            <li>Amazon cares</li>
            <li> Gift a Smile</li>
          </Group>
          <Group>
            <h1>Connect with Us</h1>
            <li> Facebook</li>
            <li> Twitter </li>
            <li> Instagram </li>
          </Group>

          <Group>
            <h1>Make money with Us</h1>
            <li> Sell on Amazon </li>
            <li> Self under Amazon Accelator </li>
            <li> Amazon Global Selling </li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </Group>

          <Group>
            <h1>Let Us Help You</h1>
            <li> COVID-19 and Amazon </li>
            <li> Your Account </li>
            <li>Returns Centre </li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Advertise Your Products</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </Group>
        </FooterSection>
      </Container>
      <Bottom>
        <FooterSection>
          <Group>
            <h6>AbeBooks</h6>
            <li>Books &</li>
            <li>Collections</li>
          </Group>
          <Group>
            <h6>Amazon Web Services</h6>
            <li>Scalable Cloud</li>
            <li>Computing Services</li>
          </Group>
          <Group>
            <h6>Audible</h6>
            <li>Download</li>
            <li>Audio Books</li>
          </Group>
          <Group>
            <h6>DPReview</h6>
            <li>Digital</li>
            <li>Photography</li>
          </Group>
        </FooterSection>
      </Bottom>
      <Copyright>Made with &#10084; by Aditya Singh</Copyright>
    </div>
  );
}

export default Footer;

const Container = styled.div`
  /* height; */
  width: 100vw;
  background-color: #232f3e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bottom = styled.div`
  width: 100vw;
  height: 15vh;
  background-color: #131a22;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 200;
  padding-bottom: 20px;
`;

const Group = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  color: white;
  list-style: none;
  box-sizing: border-box;

  li {
    font-weight: 200;
    cursor: pointer;
  }
  li:hover {
    text-decoration: underline;
  }
  > h1 {
    font-weight: 700;
  }
`;

const FooterSection = styled.div`
  height: fit-content;
  width: 70vw;
  padding-top: 50px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Copyright = styled.div`
  position: inherit;
  bottom: 0;
  text-align: center;
  width: 100%;
  background-color: #131a22;
  height: 20px;
  color: white;
  font-size: 0.8rem;
`;
