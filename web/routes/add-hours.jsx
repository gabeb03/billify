import React from "react";
import { Button, Card } from "@shopify/polaris";
import { AutoForm } from "@gadgetinc/react/auto/polaris";
import { api } from "../api";
import { useUser } from "@gadgetinc/react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@shopify/polaris-icons";

export const AddHours = () => {
  const user = useUser(api);
  return (
    <div style={{ width: "50%", paddingTop: "50px" }}>
      <Button icon={ArrowLeftIcon}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/signed-in"
        >
          Back
        </Link>
      </Button>
      <div style={{ paddingBottom: "20px" }}></div>
      <Card>
        <AutoForm
          action={api.billableHour.create}
          exclude={["contractor"]}
          defaultValues={{ billableHour: { contractorId: user.id } }}
        />
      </Card>
    </div>
  );
};
