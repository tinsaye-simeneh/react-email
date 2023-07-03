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
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const MuyalogyWelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>Welcome to Muyalogy!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Section style={headerSection} bgcolor="#fff">
            <Link href={`https://www.muyalogy.com`}>
              <img
                src={`https://yt3.googleusercontent.com/ZucYF6S_1cbxW6Mxg7qw1NlUs011gTfDJBPSSCkFupPO1ETiHg00M_Py0VSpdSLloMOZsQjL=s900-c-k-c0x00ffffff-no-rj`}
                alt="logo"
                width={100}
              />
              <Text style={companyname}>Muyalogy</Text>
            </Link>
          </Section>
          <Hr style={hr} />
          <Text style={paragraph}>
            <h1>
              Hi
              <span style={{ color: "#0a9bf1" }}> Tinsaye,</span>
            </h1>
            Welcome to <Link href={`https://www.muyalogy.com`}>Muyalogy</Link>!
            We're so excited to have you on board
          </Text>
          <Text style={paragraph}>
            We're confident that you'll find{" "}
            <Link href={`https://www.muyalogy.com`}>Muyalogy</Link> to be a
            valuable resource for your learning. We're here to help you every
            step of the way.
          </Text>
          <Text style={paragraph}>
            To get started, we recommend that you check out our{" "}
            <Link href={`https://www.muyalogy.com/courses`}>Courses Page</Link>.
            These courses are a great way to get a feel for what{" "}
            <Link href={`https://www.muyalogy.com`}>Muyalogy</Link> has to
            offer.
          </Text>
          <Text style={title}>Get Unlimited access to all popular courses</Text>
          <Section style={course} bgcolor="#ffffff">
            <Column style={col}>
              <img
                src={`https://www.muyalogy.com/_next/image?url=https%3A%2F%2Fiuenrktegcxhmvoeyhjh.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcourse-tn%2Fshoot-like-a-pro-photography-starting-from-mobile-to-digital-camera.jpg%3Fv%3D4&w=1920&q=75`}
                alt="course"
                width={150}
                height={100}
              />
              <Text style={description}>
                <Link
                  href={`https://www.muyalogy.com/course/shoot-like-a-pro-photography-starting-from-mobile-to-digital-camera`}
                >
                  Shoot Like a Pro: Photography Starting from Mobile to Digital
                  Camera
                </Link>
              </Text>
            </Column>
            <Column style={col}>
              <img
                src={`https://www.muyalogy.com/_next/image?url=https%3A%2F%2Fiuenrktegcxhmvoeyhjh.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcourse-tn%2Fplay-guitar-like-a-rockstar-learn-the-basics-of-playing-guitar.jpg%3Fv%3D4&w=1920&q=75`}
                alt="course"
                width={150}
                height={100}
              />
              <Text style={description}>
                <Link
                  href={`https://www.muyalogy.com/course/play-guitar-like-a-rockstar-learn-the-basics-of-playing-guitars`}
                >
                  Play Guitar Like a Rockstar: Learn the Basics of Playing
                  Guitar
                </Link>
              </Text>
            </Column>
            <Column style={col}>
              <img
                src={`https://www.muyalogy.com/_next/image?url=https%3A%2F%2Fiuenrktegcxhmvoeyhjh.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcourse-tn%2Fdevelop-your-first-mobile-app-a-step-by-step-guide-to-mobile-app-development.jpg%3Fv%3D4&w=1920&q=75`}
                alt="course"
                width={150}
                height={100}
              />
              <Text style={description}>
                <Link
                  href={`https://www.muyalogy.com/course/develop-your-first-mobile-app-a-step-by-step-guide-to-mobile-app-development`}
                >
                  Develop Your First Mobile App: A Step-by-Step Guide to Mobile
                  App Development
                </Link>
              </Text>
            </Column>
          </Section>

          <Button
            pX={10}
            pY={10}
            style={button}
            href="https://www.muyalogy.com/courses"
          >
            Browse all courses
          </Button>
          <Text style={paragraph}>
            We're excited to see what you accomplish on{" "}
            <Link href={`https://www.muyalogy.com`}>Muyalogy.</Link> Happy
            learning!
          </Text>
          <Text style={paragraph}>— The Muyalogy team</Text>
          <Hr style={hr} />

          <Text style={footer}>
            You received this email because you signed up for Muyalogy. If you
            don't want to receive these emails in the future, you can{" "}
            <Link href={`https://www.muyalogy.com/unsubscribe`}>
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

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const description = {
  color: "#525f7f",
  fontSize: "14px",
  fontWeight: 400,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "20px",
  letterSpacing: "0",
  lineHeight: "20px",
  margin: "16px 8px 8px 8px",
  textAlign: "center" as const,
};

const headerSection = {
  textAlign: "center" as const,
};

const col = {
  paddingRight: "5px",
  width: "33.33%",
  margin: "0 auto",
};

const title = {
  color: "#32325d",
  fontSize: "20px",
  fontWeight: 500,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "24px",
  letterSpacing: "0",
  lineHeight: "24px",
  margin: "16px 8px 8px 8px",
  textAlign: "center" as const,
};

const companyname = {
  color: "#0a9bf1",
  fontSize: "11px",
  fontWeight: 700,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "16px",
  letterSpacing: "0",
  lineHeight: "16px",
  margin: "16px 8px 8px 8px",
  textTransform: "uppercase" as const,
  textAlign: "center" as const,
};

const box = {
  padding: "0 48px",
};

const course = {
  margin: "0 auto",
  alignItems: "center",
  marginTop: "40px",
  marginBottom: "80px",
  width: "100%",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#0a9bf1",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  marginTop: "40px",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
