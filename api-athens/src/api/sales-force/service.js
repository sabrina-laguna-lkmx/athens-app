import { sendEmail, sendEmailRent } from "../../service/email-service.js";
import { customerServiceTemplate } from "../../template/customer-service.js";
import { rentContainerTemplate } from "../../template/rent-container-template.js";

const NOT_SERVICED_RESIDENTIAL_CITIES = [
  "san fernando",
  "lake forrest",
  "santa ana",
  "rosemead",
  "riverside",
  "vernon",
];

const NOT_SERVICED_COMMERCIAL_CITIES = [
  "san fernando",
  "lake forrest",
  "la verne",
  "manhattan beach",
  "santa ana",
  "rosemead",
];

const SEND_SALES_EMAIL_ROLL_OFF = [
  "rosemead",
  "santa paula",
  "riverside",
  "vernon",
  "whittier",
];

const SEND_SALES_EMAIL_TEMP = [
  "santa paula",
  "riverside",
  "vernon",
  "whittier",
];

const COMMERCIAL_SALES_CITIES = ["riverside", "vernon", "whittier"];

export async function sendSalesForce(ctx) {
  const body = ctx.request.body;

  if (!body.open_market) {
    if (
      body.serviceOption === "BUSINESS" &&
      NOT_SERVICED_COMMERCIAL_CITIES.includes(body.city.toLowerCase())
    ) {
      ctx.throw(
        400,
        JSON.stringify({
          code: "bad_request",
          message: "city is not serviced for customer service",
        })
      );
    }

    if (
      body.serviceOption === "RESIDENTIAL" &&
      NOT_SERVICED_RESIDENTIAL_CITIES.includes(body.city.toLowerCase())
    ) {
      ctx.throw(
        400,
        JSON.stringify({
          code: "bad_request",
          message: "city is not serviced for customer service",
        })
      );
    }

    if (
      body.serviceOption === "BUSINESS" &&
      COMMERCIAL_SALES_CITIES.includes(body.city.toLowerCase())
    ) {
      await sendEmail(
        process.env.SALES_RECIPIENT,
        `Customer Service Request`,
        `A new request has been submitted from the Customer Service form.`,
        customerServiceTemplate(body)
      );
    } else {
      await sendEmail(
        process.env.MAIL_RECIPIENT,
        `Customer Service Request`,
        `A new request has been submitted from the Customer Service form.`,
        customerServiceTemplate(body)
      );
    }
  } else {
    const response = await fetch(
      "http://go.athensservices.com/l/999151/2024-01-04/vfc8",
      {
        cache: "no-cache",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(body),
      }
    );

    await sendEmail(
      process.env.SALES_RECIPIENT,
      `Customer Service Request`,
      `A new request has been submitted from the Customer Service form.`,
      customerServiceTemplate(body)
    );
  }

  ctx.response.status = 200;
}

export async function sentRentContainer(ctx) {
  const body = ctx.request.body;
  const containerSise = body.container_size;
  const city = body.customer_info.city.toLowerCase();
  const attachments = body.evidence_material.map((evidence, index) => ({
    filename: evidence.name,
    content: evidence.base64,
    encoding: "base64",
    cid: `evidence-image-${index}`,
  }));

  if (body.openMarket) {
    const response = await fetch(
      "http://go.athensservices.com/l/999151/2024-01-22/w5n8",
      {
        cache: "no-cache",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(body),
      }
    );
  } else {
    if (
      containerSise === "Roll-Off" &&
      SEND_SALES_EMAIL_ROLL_OFF.includes(city)
    ) {
      await sendEmailRent(
        "miguel.herrera+sales@lkmx.io",
        `Rent A Container Confirmation`,
        "",
        rentContainerTemplate(
          body.item_type,
          body.container_size,
          body.delivery_date,
          body.removal_date,
          body.notes,
          body.evidence_material,
          body.customer_info.full_name,
          body.customer_info.account,
          body.customer_info.address,
          body.customer_info.city,
          body.customer_info.preferred_communication_method,
          body.customer_info.contact_phone,
          body.customer_info.secondary_phone,
          body.customer_info.email_address
        ),
        attachments
      );
    } else if (
      containerSise === "Front Load Bins" &&
      SEND_SALES_EMAIL_TEMP.includes(city)
    ) {
      await sendEmailRent(
        "miguel.herrera+sales@lkmx.io",
        `Rent A Container Confirmation`,
        "",
        rentContainerTemplate(
          body.item_type,
          body.container_size,
          body.delivery_date,
          body.removal_date,
          body.notes,
          body.evidence_material,
          body.customer_info.full_name,
          body.customer_info.account,
          body.customer_info.address,
          body.customer_info.city,
          body.customer_info.preferred_communication_method,
          body.customer_info.contact_phone,
          body.customer_info.secondary_phone,
          body.customer_info.email_address
        ),
        attachments
      );
    } else {
      await sendEmailRent(
        "miguel.herrera+customer@lkmx.io",
        `Rent A Container Confirmation`,
        "",
        rentContainerTemplate(
          body.item_type,
          body.container_size,
          body.delivery_date,
          body.removal_date,
          body.notes,
          body.evidence_material,
          body.customer_info.full_name,
          body.customer_info.account,
          body.customer_info.address,
          body.customer_info.city,
          body.customer_info.preferred_communication_method,
          body.customer_info.contact_phone,
          body.customer_info.secondary_phone,
          body.customer_info.email_address
        ),
        attachments
      );
    }
  }

  ctx.response.status = 200;
}
