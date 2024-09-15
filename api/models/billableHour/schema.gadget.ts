import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "billableHour" model, go to https://billify.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "Cw0ZQ82KaeuP",
  fields: {
    activity: { type: "string", storageKey: "KS0Qw1dED9zu" },
    contractor: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "Lynj3MKX8U3d",
    },
    rate: { type: "number", decimals: 2, storageKey: "aWNdlxQD-YGz" },
    status: {
      type: "enum",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["Paid", "Unpaid"],
      storageKey: "Gyc4VBVw813i",
    },
    time: {
      type: "number",
      decimals: 2,
      validations: { required: true },
      storageKey: "6uv4BAi44JGO",
    },
  },
};
