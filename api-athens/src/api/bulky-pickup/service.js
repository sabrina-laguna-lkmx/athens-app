import { sendEmail } from "../../service/email-service.js";
import { bulkyPickupTemplate } from "../../template/bulky-pickup.js";

const email = process.env.BULKY_PICKUP_MAIL;

export async function sendBulkyPickup(ctx) {
  const body = ctx.request.body;

  if (body.pickup_info && body.pickup_info.company) {
    body.pickup_info.residential_service =
      body.pickup_info.company === "CV" ? "Residential" : "MultiFamily";
  }

  await sendEmail(
    email,
    `Bulky Pickup Request`,
    `A new request has been submitted from the Bulky Pickup form.`,
    bulkyPickupTemplate(body)
  );

  ctx.response.status = 200;
}
