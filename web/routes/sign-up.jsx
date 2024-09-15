import { useActionForm } from "@gadgetinc/react";
import { api } from "../api";
import { useLocation } from "react-router-dom";
import { Form, FormLayout, TextField, Button, Text } from "@shopify/polaris";

export default function () {
  const {
    register,
    submit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useActionForm(api.user.signUp);
  const { search } = useLocation();

  return (
    <div
      style={{
        width: "80%",
        maxWidth: "400px",
        padding: "20vh 0",
        margin: "0 auto",
      }}
    >
      <Form onSubmit={submit}>
        <Text variant="headingXl" as="h1">
          Create your Billify account ✨
        </Text>
        <div style={{ paddingBottom: "20px" }}></div>
        <a
          className="google-oauth-button"
          href={`/auth/google/start${search}`}
          style={{ paddingBottom: "20px" }}
        >
          <img
            src="https://assets.gadget.dev/assets/default-app-assets/google.svg"
            width={22}
            height={22}
          />{" "}
          Continue with Google
        </a>
        <div style={{ paddingBottom: "20px" }}></div>
        <TextField
          className="custom-input"
          placeholder="Email"
          {...register("email")}
        />
        {errors?.user?.email?.message && (
          <p className="format-message error">
            Email: {errors.user.email.message}
          </p>
        )}
        <div style={{ paddingBottom: "20px" }}></div>
        <TextField
          className="custom-input"
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        {errors?.user?.password?.message && (
          <p className="format-message error">
            Password: {errors.user.password.message}
          </p>
        )}
        {errors?.root?.message && (
          <p className="format-message error">{errors.root.message}</p>
        )}
        <div style={{ paddingBottom: "20px" }}></div>
        {isSubmitSuccessful && (
          <p className="format-message success">Please check your inbox</p>
        )}
        <Button disabled={isSubmitting} type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
}
