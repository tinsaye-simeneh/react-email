import {
  Body,
  Button,
  Container,
  Hr,
  Link,
  Section,
  Text,
  Column,
  Row,
} from "@react-email/components";

const MuyalogyWelcomeEmail = () => {
  return (
    <html>
      <Body
        style={{
          backgroundColor: "#f6f9fc",
          fontFamily:
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
        }}
      >
        <Container
          style={{
            backgroundColor: "#e5e5f7",
            opacity: "0.8",
            backgroundImage: "radial-gradient(0a9bf1 0.5px, #e5e5f7 0.5px)",
            backgroundSize: "10px 10px",
          }}
        >
          <Section style={sectionPro}>
            <img
              src={`https://media.licdn.com/dms/image/C4E0BAQEMcadahiB7nw/company-logo_200_200/0/1673614179115?e=2147483647&v=beta&t=QkEWuRQskGVKkg5HydVj1_Jh-XQ8q0yll-PA5P4M648 `}
              alt="logo"
              style={{ width: "100px" }}
            />
            <h1 style={header}>
              ONLINE
              <br />
              <span> COURSES</span>
              <Text>PROVIDE BY MUYALOGY</Text>
            </h1>
            <ul>
              <li style={list}>
                <Text>- Watch professionally Produced courses</Text>
              </li>
              <li style={list}>
                <Text>- Learn from the best professionals</Text>
              </li>
              <li style={list}>
                <Text>- Learn with out language barrier</Text>
              </li>
            </ul>
            <Section style={sectionPro}>
              <Button style={button} pX={12} pY={12}>
                <strong>Register Now</strong>
              </Button>
            </Section>
            <img
              src={`https://www.muyalogy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmuyalogy-landing-2.ff422eb7.jpg&w=1920&q=75`}
              alt="hero"
              style={imagePro}
            />

            <Text style={header2}>Courses</Text>
            <Row style={section}>
              <Column style={courseColumn}>
                <Section style={CourseSection}>
                  <img
                    src="https://w7.pngwing.com/pngs/285/477/png-transparent-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry-sphere.png"
                    style={iconImage}
                  />
                  <Link href="https://www.muyalogy.com/register">
                    <Text style={CourseTitle}>Web Development</Text>
                  </Link>
                </Section>
                <Section style={CourseSection}>
                  <img
                    src="https://w7.pngwing.com/pngs/285/477/png-transparent-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry-sphere.png"
                    style={iconImage}
                  />
                  <Link href="https://www.muyalogy.com/register">
                    <Text style={CourseTitle}>Starting a business</Text>
                  </Link>
                </Section>
                <Section style={CourseSection}>
                  <img
                    src="https://w7.pngwing.com/pngs/285/477/png-transparent-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry-sphere.png"
                    style={iconImage}
                  />
                  <Link href="https://www.muyalogy.com/register">
                    <Text style={CourseTitle}>Youtube mastery</Text>
                  </Link>
                </Section>
                <Section style={CourseSection}>
                  <img
                    src="https://w7.pngwing.com/pngs/285/477/png-transparent-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry-sphere.png"
                    style={iconImage}
                  />
                  <Link href="https://www.muyalogy.com/register">
                    <Text style={CourseTitle}>Digital Marketing</Text>
                  </Link>
                </Section>
                <Section style={CourseSection}>
                  <img
                    src="https://w7.pngwing.com/pngs/285/477/png-transparent-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry-sphere.png"
                    style={iconImage}
                  />
                  <Link href="https://www.muyalogy.com/register">
                    <Text style={CourseTitle}>Interior Design</Text>
                  </Link>
                </Section>
                <Section style={CourseSection}>
                  <img
                    src="https://w7.pngwing.com/pngs/285/477/png-transparent-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry-sphere.png"
                    style={iconImage}
                  />
                  <Link href="https://www.muyalogy.com/register">
                    <Text style={CourseTitle}>learn English</Text>
                  </Link>
                </Section>
              </Column>
              <Column style={courseColumn}>
                <Section style={CourseSection}>
                  <img
                    src="https://w7.pngwing.com/pngs/285/477/png-transparent-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry-sphere.png"
                    style={iconImage}
                  />
                  <Link href="https://www.muyalogy.com/register">
                    <Text style={CourseTitle}>Entrepreneurship</Text>
                  </Link>
                </Section>
                <Section style={CourseSection}>
                  <img
                    src="https://w7.pngwing.com/pngs/285/477/png-transparent-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry-sphere.png"
                    style={iconImage}
                  />
                  <Link href="https://www.muyalogy.com/register">
                    <Text style={CourseTitle}>Graphics Design</Text>
                  </Link>
                </Section>
                <Section style={CourseSection}>
                  <img
                    src="https://w7.pngwing.com/pngs/285/477/png-transparent-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry-sphere.png"
                    style={iconImage}
                  />
                  <Link href="https://www.muyalogy.com/register">
                    <Text style={CourseTitle}>Crochet</Text>
                  </Link>
                </Section>
                <Section style={CourseSection}>
                  <img
                    src="https://w7.pngwing.com/pngs/285/477/png-transparent-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry-sphere.png"
                    style={iconImage}
                  />
                  <Link href="https://www.muyalogy.com/register">
                    <Text style={CourseTitle}>Film Making</Text>
                  </Link>
                </Section>
                <Section style={CourseSection}>
                  <img
                    src="https://w7.pngwing.com/pngs/285/477/png-transparent-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry-sphere.png"
                    style={iconImage}
                  />
                  <Link href="https://www.muyalogy.com/register">
                    <Text style={CourseTitle}>Nail and lash</Text>
                  </Link>
                </Section>
                <Section style={CourseSection}>
                  <img
                    src="https://w7.pngwing.com/pngs/285/477/png-transparent-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry-sphere.png"
                    style={iconImage}
                  />
                  <Link href="https://www.muyalogy.com/register">
                    <Text style={CourseTitle}>Drawing</Text>
                  </Link>
                </Section>
              </Column>
            </Row>
            <Button style={button2} pX={12} pY={12}>
              <strong>Know more</strong>
            </Button>
          </Section>
          <Section style={sectionPro}>
            <Button href="https://www.muyalogy.com/register" style={socialLink}>
              Facebook
            </Button>
            <Button href="https://www.muyalogy.com/register" style={socialLink}>
              Tiktok
            </Button>
            <Button href="https://www.muyalogy.com/register" style={socialLink}>
              Twitter
            </Button>
            <Button href="https://www.muyalogy.com/register" style={socialLink}>
              Youtube
            </Button>
            <Button href="https://www.muyalogy.com/register" style={socialLink}>
              Linkedin
            </Button>
            <Button href="https://www.muyalogy.com/register" style={socialLink}>
              Instagram
            </Button>
          </Section>
          <Hr />
          <Section style={footer}>
            <Text style={footerText}>
              You can adjust your{" "}
              <Link style={footerLink}>email preferences</Link> any time, or{" "}
              <Link style={footerLink}>instantly opt out</Link> of emails of
              this kind. Need help with anything? Hit up{" "}
              <Link style={footerLink}>support</Link>.
            </Text>
          </Section>
        </Container>
      </Body>
    </html>
  );
};

export default MuyalogyWelcomeEmail;

const section = {
  margin: "0",
  padding: "0 24px",
};

const header = {
  display: "block",
  textAlign: "left" as const,
  color: "#0a9bf1",
  fontSize: "50px",
  fontWeight: "700",
  marginBottom: "0px",
  marginLeft: "55px",
};

const list = {
  color: "#000000",
  fontSize: "15px",
  fontWeight: 400,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  listStyle: "none",
  marginLeft: "20px",
  textAlign: "left" as const,
};

const header2 = {
  display: "inline-block",
  color: "black",
  fontSize: "30px",
  fontWeight: "700",
  marginBottom: "20px",
  marginTop: "30px",
};

const CourseTitle = {
  color: "#000000",
  fontSize: "15px",
  fontWeight: 400,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const courseColumn = {
  width: "50%",
  paddingRight: "10px",
  paddingTop: "30px",
};

const sectionPro = {
  marginTop: "20px",
  marginBottom: "20px",
  textAlign: "center" as const,
  color: "#fff",
  padding: "35px 20px 30px 20px",
};
const CourseSection = {
  marginTop: "0px",
  textAlign: "center" as const,
  color: "#fff",
  padding: "0 24px",
};

const socialLink = {
  background: "#0a9bf1",
  color: "#fff",
  border: "0",
  fontSize: "15px",
  lineHeight: "18px",
  cursor: "pointer",
  borderRadius: "4px",
  marginRight: "10px",
  marginBottom: "10px",
};

const button = {
  background: "#0a9bf1",
  color: "#fff",
  border: "0",
  fontSize: "15px",
  cursor: "pointer",
  borderRadius: "4px",
  marginTop: "20px",
  marginBottom: "0px",
};

const button2 = {
  background: "#0a9bf1",
  color: "#fff",
  border: "0",
  fontSize: "15px",
  cursor: "pointer",
  borderRadius: "4px",
  marginTop: "30px",
  marginBottom: "0px",
};

const imagePro = {
  width: "80%",
  display: "block",
  margin: "0 auto",
  marginTop: "0px",
};

const iconImage = {
  width: "10%",
  height: "auto",
  display: "block",
  margin: "0 auto",
};

const footer = {
  background: "#0a9bf1",
  color: "#fff",
  padding: "0 24px",
  marginBottom: "4px",
  textAlign: "center" as const,
  width: "100%",
};

const footerText = {
  fontSize: "13px",
};

const footerLink = {
  textDecoration: "underline",
  color: "#fff",
  cursor: "pointer",
};
