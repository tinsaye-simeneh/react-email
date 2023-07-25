import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Column,
  Row,
} from "@react-email/components";
import * as React from "react";
import {
  Businessplan,
  World,
  PhotoEdit,
  BrandYoutube,
  HandStop,
  HomeHand,
  Speakerphone,
  Pencil,
  Movie,
  Language,
  AtOff,
  BrandFacebook,
  BrandTiktok,
  BrandTwitter,
  BrandLinkedin,
  BrandInertia,
  BrandInstagram,
} from "tabler-icons-react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const MuyalogyWelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>Welcome to Muyalogy!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Section
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <img
              src={`
            https://www.muyalogy.com/logo.png
            `}
              alt="logo"
              style={{ width: "100px" }}
            />
          </Section>
          <h1
            style={{
              display: "inline-block",
              color: "#0a9bf1",
              fontSize: "50px",
              fontWeight: "700",
              marginBottom: "0px",
              marginLeft: "20px",
            }}
          >
            ONLINE
            <br />
            <span> COURSES</span>
            <Text
              style={{
                color: "#0a9bf1",
                fontSize: "25px",
                fontWeight: "normal",
                fontFamily: "Roboto",
              }}
            >
              PROVIDE BY MUYALOGY
            </Text>
          </h1>
          <ul>
            <li>
              <Text style={paragraph}>
                Watch professionally Produced courses
              </Text>
            </li>
            <li>
              <Text style={paragraph}>Learn from the best professionals</Text>
            </li>
            <li>
              <Text style={paragraph}>Learn with out language barrier</Text>
            </li>
          </ul>
          <Section
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <Button
              pX={30}
              pY={10}
              style={{
                backgroundColor: "#0a9bf1",
                borderRadius: "20px",
                color: "#fff",
                fontSize: "20px",
                fontWeight: "bold",
                textDecoration: "none",
                margin: "0 auto",
                textAlign: "center" as const,
                boxShadow: "0 2px 5px 0 rgb(0 0 0 / 20%)",
              }}
              href="https://www.muyalogy.com/register"
            >
              Register Now
            </Button>
          </Section>
        </Section>

        <Section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "60px",
          }}
        >
          <img
            src={`https://www.muyalogy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmuyalogy-landing-2.ff422eb7.jpg&w=1920&q=75`}
            alt="hero"
            style={{ width: "450px", height: "auto", margin: "0 auto" }}
          />
        </Section>
        <Section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "60px",
            marginBottom: "40px",
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: "40px",
              fontWeight: 400,
              fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
            }}
          >
            Courses
          </Text>
        </Section>

        <Section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Column>
            <Column style={col}>
              <World
                size={30}
                strokeWidth={2}
                color={"#0a9bf1"}
                style={{
                  margin: "0 auto",
                  alignItems: "center",
                }}
              />
              <Link href="https://www.muyalogy.com/register">
                <Text
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
                  }}
                >
                  Web Development
                </Text>
              </Link>
            </Column>
            <Column style={col}>
              <Businessplan size={30} strokeWidth={2} color={"#0a9bf1"} />
              <Link href="https://www.muyalogy.com/register">
                <Text
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
                  }}
                >
                  Starting a business
                </Text>
              </Link>
            </Column>
            <Column style={col}>
              <BrandYoutube size={30} strokeWidth={2} color={"#0a9bf1"} />
              <Link href="https://www.muyalogy.com/register">
                <Text
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
                  }}
                >
                  Tiktok & Youtube mastery
                </Text>
              </Link>
            </Column>
            <Column style={col}>
              <Speakerphone size={30} strokeWidth={2} color={"#0a9bf1"} />
              <Link href="https://www.muyalogy.com/register">
                <Text
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
                  }}
                >
                  Digital Marketing
                </Text>
              </Link>
            </Column>
            <Column style={col}>
              <HomeHand size={30} strokeWidth={2} color={"#0a9bf1"} />
              <Link href="https://www.muyalogy.com/register">
                <Text
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
                  }}
                >
                  Interior Design
                </Text>
              </Link>
            </Column>
            <Column style={col}>
              <Language size={30} strokeWidth={2} color={"#0a9bf1"} />
              <Link href="https://www.muyalogy.com/register">
                <Text
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
                  }}
                >
                  learn English
                </Text>
              </Link>
            </Column>
          </Column>
          <Column>
            <Column style={col}>
              <Businessplan size={30} strokeWidth={2} color={"#0a9bf1"} />
              <Link href="https://www.muyalogy.com/register">
                <Text
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
                  }}
                >
                  Entrepreneurship
                </Text>
              </Link>
            </Column>
            <Column style={col}>
              <PhotoEdit size={30} strokeWidth={2} color={"#0a9bf1"} />
              <Link href="https://www.muyalogy.com/register">
                <Text
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
                  }}
                >
                  Graphics Design
                </Text>
              </Link>
            </Column>
            <Column style={col}>
              <AtOff size={30} strokeWidth={2} color={"#0a9bf1"} />
              <Link href="https://www.muyalogy.com/register">
                <Text
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
                  }}
                >
                  Crochet
                </Text>
              </Link>
            </Column>
            <Column style={col}>
              <Movie size={30} strokeWidth={2} color={"#0a9bf1"} />
              <Link href="https://www.muyalogy.com/register">
                <Text
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
                  }}
                >
                  Film Making
                </Text>
              </Link>
            </Column>
            <Column style={col}>
              <HandStop size={30} strokeWidth={2} color={"#0a9bf1"} />
              <Link href="https://www.muyalogy.com/register">
                <Text
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
                  }}
                >
                  Nail and lash
                </Text>
              </Link>
            </Column>
            <Column style={col}>
              <Pencil size={30} strokeWidth={2} color={"#0a9bf1"} />
              <Link href="https://www.muyalogy.com/register">
                <Text
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
                  }}
                >
                  Drawing
                </Text>
              </Link>
            </Column>
          </Column>
        </Section>
        <Section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <Button
            pX={30}
            pY={10}
            style={{
              backgroundColor: "#0a9bf1",
              borderRadius: "20px",
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
              textDecoration: "none",
              margin: "0 auto",
              marginBottom: "40px",
              textAlign: "center" as const,
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 20%)",
            }}
            href="https://www.muyalogy.com/register"
          >
            Know More
          </Button>
        </Section>

        <Section style={footer}>
          <Section
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Button href="https://www.muyalogy.com/register">
              <BrandFacebook
                size={30}
                strokeWidth={2}
                color={"#ffffff"}
                style={{
                  margin: "0 5px",
                  padding: "0 5px",
                }}
              />
            </Button>
            <Button href="https://www.muyalogy.com/register">
              <BrandTiktok
                size={30}
                strokeWidth={2}
                color={"#ffffff"}
                style={{
                  margin: "0 5px",
                  padding: "0 5px",
                }}
              />
            </Button>
            <Button href="https://www.muyalogy.com/register">
              <BrandTwitter
                size={30}
                strokeWidth={2}
                color={"#ffffff"}
                style={{
                  margin: "0 5px",
                  padding: "0 5px",
                }}
              />
            </Button>
            <Button href="https://www.muyalogy.com/register">
              <BrandYoutube
                size={30}
                strokeWidth={2}
                color={"#ffffff"}
                style={{
                  margin: "0 5px",
                  padding: "0 5px",
                }}
              />
            </Button>
            <Button href="https://www.muyalogy.com/register">
              <BrandLinkedin
                size={30}
                strokeWidth={2}
                color={"#ffffff"}
                style={{
                  margin: "0 5px",
                  padding: "0 5px",
                }}
              />
            </Button>
            <Button href="https://www.muyalogy.com/register">
              <BrandInstagram
                size={30}
                strokeWidth={2}
                color={"#ffffff"}
                style={{
                  margin: "0 5px",
                  padding: "0 5px",
                }}
              />
            </Button>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            You received this email because you signed up for Muyalogy. If you
            don't want to receive these emails in the future, you can{" "}
            <Link
              href={`https://www.muyalogy.com/unsubscribe`}
              style={{
                color: "#ffffff",
                textDecoration: "underline",
              }}
            >
              unsubscribe
            </Link>{" "}
          </Text>
          <Text style={footer}>
            Muyalogy Digital Services SC. Mambuk Building 7th floor, Gabon St,
            Addis Ababa
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default MuyalogyWelcomeEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const col = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  margin: "10px",
  width: "200px",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "30px",
  marginBottom: "64px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#000000",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "0px",
  textAlign: "left" as const,
};

const footer = {
  backgroundColor: "#0a9bf1",
  color: "#ffffff",
  fontSize: "12px",
  lineHeight: "16px",
  paddingRight: "20px",
  paddingLeft: "20px",
  marginTop: "30px",
};
