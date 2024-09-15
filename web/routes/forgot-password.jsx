import { useActionForm } from "@gadgetinc/react";
import { api } from "../api";
import { Form, TextField, Button, Text } from "@shopify/polaris";

export default function () {
  const {
    submit,
    register,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useActionForm(api.user.sendResetPassword);

  return (
    <div
      style={{
        width: "80%",
        maxWidth: "400px",
        padding: "20vh 0",
        margin: "0 auto",
      }}
    >
      {isSubmitSuccessful ? (
        <Text variant="bodyMd" as="p" color="success">
          Email has been sent. Please check your inbox.
        </Text>
      ) : (
        <Form onSubmit={submit}>
          <Text variant="headingXl" as="h1">
            Reset password
          </Text>
          <div style={{ paddingBottom: "20px" }}></div>
          <TextField
            className="custom-input"
            placeholder="Email"
            {...register("email")}
          />
          <div style={{ paddingBottom: "20px" }}></div>
          <Button disabled={isSubmitting} submit>
            Send reset link
          </Button>
        </Form>
      )}
    </div>
  );
}
