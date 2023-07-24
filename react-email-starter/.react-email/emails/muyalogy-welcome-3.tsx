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
              fontWeight: "normal",
              marginBottom: "0px",
            }}
          >
            ONLINE
            <br />
            <span> COURSES,</span>
            <Text
              style={{
                color: "#0a9bf1",
                fontSize: "30px",
                fontWeight: 400,
                fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
              }}
            >
              Provided by Muyalogy
            </Text>
          </h1>
          <ul>
            <li>
              <Text style={paragraph}>
                Watch professional courses on demand, from anywhere, at any
              </Text>
            </li>
            <li>
              <Text style={paragraph}>
                Learn from industry experts who are passionate about teaching
              </Text>
            </li>
            <li>
              <Text style={paragraph}>
                Get access to practice exercises, quizzes and projects
              </Text>
            </li>
          </ul>

          <Button
            pX={10}
            pY={10}
            style={{
              backgroundColor: "#0a9bf1",
              borderRadius: "20px",
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
              textDecoration: "none",
              margin: "0 auto",
              display: "inline-block",
              width: "30%",
            }}
            href="https://www.muyalogy.com/register"
          >
            Register Now
          </Button>
        </Section>

        <Text style={paragraph}>
          We're confident that you'll find{" "}
          <Link href={`https://www.muyalogy.com`}>Muyalogy</Link> to be a
          valuable resource for your learning. We're here to help you every step
          of the way.
        </Text>
        <Text style={paragraph}>
          To get started, we recommend that you check out our{" "}
          <Link href={`https://www.muyalogy.com/courses`}>Courses Page</Link>.
          These courses are a great way to get a feel for what{" "}
          <Link href={`https://www.muyalogy.com`}>Muyalogy</Link> has to offer.
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
                Play Guitar Like a Rockstar: Learn the Basics of Playing Guitar
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
          <Link href={`https://www.muyalogy.com/unsubscribe`}>unsubscribe</Link>{" "}
        </Text>
        <Text style={footer}>
          Muyalogy Digital Services SC. Mambuk Building 7th floor, Gabon St,
          Addis Ababa
        </Text>
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
  padding: "30px",
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

const col = {
  paddingRight: "5px",
  width: "33.33%",
  margin: "0 auto",
};

const title = {
  color: "#0a9bf1",
  fontSize: "20px",
  fontWeight: 500,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "24px",
  alignItems: "left",
  letterSpacing: "0",
  margin: "0 0 16px 0",
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
