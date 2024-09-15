import { useActionForm, useAuth } from "@gadgetinc/react";
import { api } from "../api";
import { useLocation, Link } from "react-router-dom";
import { Form, TextField, Button, Text } from "@shopify/polaris";

export default function () {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const {
    submit,
    register,
    watch,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useActionForm(api.user.resetPassword, {
    defaultValues: { code: params.get("code") },
  });
  const { configuration } = useAuth();

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
          Password reset successfully.{" "}
          <Link to={configuration.signInPath}>Sign in now</Link>
        </Text>
      ) : (
        <Form onSubmit={submit}>
          <Text variant="headingXl" as="h1">
            Reset password
          </Text>
          <div style={{ paddingBottom: "20px" }}></div>
          <TextField
            type="password"
            label="New password"
            {...register("password")}
            error={errors?.user?.password?.message}
          />
          <div style={{ paddingBottom: "20px" }}></div>
          <TextField
            type="password"
            label="Confirm password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === watch("password") || "The passwords do not match",
            })}
            error={errors?.confirmPassword?.message}
          />
          {errors?.root?.message && (
            <p className="format-message error">{errors.root.message}</p>
          )}
          <div style={{ paddingBottom: "20px" }}></div>
          <Button disabled={isSubmitting} submit>
            Reset password
          </Button>
        </Form>
      )}
    </div>
  );
}
