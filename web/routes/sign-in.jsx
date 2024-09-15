import { useActionForm } from "@gadgetinc/react";
import { api } from "../api";
import { Link, useLocation } from "react-router-dom";
import { Form, TextField, Button, Text } from "@shopify/polaris";

export default function () {
  const {
    register,
    submit,
    formState: { errors, isSubmitting },
  } = useActionForm(api.user.signIn);
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
          Sign in to Billify ✨
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
        <div style={{ paddingBottom: "20px" }}></div>
        <TextField
          className="custom-input"
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        {errors?.root?.message && (
          <p className="format-message error">{errors.root.message}</p>
        )}
        <div style={{ paddingBottom: "20px" }}></div>
        <Button disabled={isSubmitting} type="submit">
          Sign in
        </Button>
        <div style={{ paddingTop: "20px" }}>
          <Text>
            Forgot your password?{" "}
            <Link to="/forgot-password">Reset password</Link>
          </Text>
        </div>
      </Form>
    </div>
  );
}
