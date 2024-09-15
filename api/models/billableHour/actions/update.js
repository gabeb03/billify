import { applyParams, save, ActionOptions, UpdateBillableHourActionContext } from "gadget-server";

/**
 * @param { UpdateBillableHourActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await save(record);
};

/**
 * @param { UpdateBillableHourActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update",
};
