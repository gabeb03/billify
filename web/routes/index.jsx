import { ButtonGroup, Text, Button } from "@shopify/polaris";
import { useAuth } from "@gadgetinc/react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "20vh",
        paddingLeft: "15vw",
      }}
    >
      <Text
        variant="heading3xl"
        as="h1"
        style={{ marginBottom: "20px", textAlign: "center" }}
      >
        Get Paid with Billify
      </Text>
      <Text variant="headingLg" as="h6" style={{ textAlign: "center" }}>
        Simple billing solution for contract workers.
      </Text>
      <div style={{ paddingTop: "20px" }}>
        <ButtonGroup>
          <Button variant="primary" size="large">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/sign-up"
            >
              Get Started
            </Link>
          </Button>
          <Button variant="secondary" size="large">
            Learn More
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
