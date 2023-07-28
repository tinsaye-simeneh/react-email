import { Button, Container, useToast } from "@chakra-ui/react";
import { sendContactForm } from "../lib/api";

export default function Home() {
  const toast = useToast();

  const onSubmit = async () => {
    try {
      await sendContactForm();
      console.log("Message sent");
      toast({
        title: "Message sent",
        description: "Your message has been sent successfully",
        status: "success",
        duration: 500,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Error",
        description: "Failed to send message",
        status: "error",
        duration: 500,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.md" mt={10}>
      <Button onClick={onSubmit}>Send email</Button>
    </Container>
  );
}
