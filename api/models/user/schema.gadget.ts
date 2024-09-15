import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://billify.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "Hvc9NrrqdJre",
  fields: {
    billableHours: {
      type: "hasMany",
      children: {
        model: "billableHour",
        belongsToField: "contractor",
      },
      storageKey: "0DMepnXHp37J",
    },
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "SlVCA9y-o4aS",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "_SW8nh7iAVyD",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "FdSeb5luLsty",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "1Idh2iiUx0yH",
    },
    firstName: { type: "string", storageKey: "joHD2YdxYGIY" },
    googleImageUrl: { type: "url", storageKey: "NTTANW6xpJjE" },
    googleProfileId: { type: "string", storageKey: "yQ8o1-WQmwkd" },
    lastName: { type: "string", storageKey: "u0S_w0h-53Cy" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "hAq_AOb0ojBb",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "FR9aaEysv7qZ",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "kVlKxojI9g9v",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "MkTc6Hm0b1Ov",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "Cn4ChrtrV3aD",
    },
  },
};
