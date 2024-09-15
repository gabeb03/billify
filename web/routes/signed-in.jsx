import { useUser } from "@gadgetinc/react";
import { AutoTable } from "@gadgetinc/react/auto/polaris";
import { Card, Text, TextField, Button, ButtonGroup } from "@shopify/polaris";
import { api } from "../api";

export default function () {
  const user = useUser(api);

  return user ? (
    <div style={{ width: "50%", paddingTop: "50px" }}>
      <Card>
        <Text variant="headingLg" as="h5">
          Billable Hours
        </Text>
        <AutoTable
          model={api.billableHour}
          filter={{
            contractorId: { equals: user.id },
          }}
          excludeColumns={["id", "createdAt"]}
        />
        <div
          style={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <TextField label="Customer email" />
          <Button>Send invoice</Button>
        </div>
      </Card>
    </div>
  ) : null;
}
