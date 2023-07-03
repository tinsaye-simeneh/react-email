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
          <Section style={box} bgcolor="#0a9bf1">
            <Text style={companyname}>Muyalogy</Text>
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
            We know you're here because you're passionate about learning, and
            we're here to help you achieve your educational goals. We offer a
            wide variety of courses, from beginner to advanced, so you can find
            something that's right for you.{" "}
          </Text>
          <Text style={paragraph}>
            We also have a team of experienced{" "}
            <Link href={`https://www.muyalogy.com/instructor`}>
              instructors
            </Link>{" "}
            who are dedicated to helping you succeed. They're available to
            answer your questions, provide feedback, and help you stay on track.
          </Text>
          <Text style={paragraph}>
            We're confident that you'll find{" "}
            <Link href={`https://www.muyalogy.com`}>Muyalogy</Link> to be a
            valuable resource for your learning. We're here to help you every
            step of the way.
          </Text>
          <Text style={paragraph}>
            To get started, we recommend that you check out our . These courses
            are a great way to get a feel for what{" "}
            <Link href={`https://www.muyalogy.com`}>Muyalogy</Link> has to
            offer.
            <Button
              pX={10}
              pY={10}
              style={button}
              href="https://www.muyalogy.com/courses"
            >
              Browse all courses
            </Button>
          </Text>

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

const companyname = {
  color: "#ffffff",
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
  marginTop: "20px",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
