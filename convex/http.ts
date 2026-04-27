import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import {WebhookEvent} from "@clerk/nextjs/server";
import { Webhook } from "svix";
import {internal} from "./_generated/api";

const validatePayload = async (req: Request): Promise<WebhookEvent | undefined> => {
  const payload = await req.text();
  const svixHeaders = {
    "svix-id": req.headers.get("svix-id") || "",
    "svix-timestamp": req.headers.get("svix-timestamp") || "",
    "svix-signature": req.headers.get("svix-signature") || "",
  }

  const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET || "")
  console.log(process.env.CLERK_WEBHOOK_SECRET)

  try {
    const event = webhook.verify(payload, svixHeaders) as WebhookEvent;
    return event
  } catch(er) {
    console.error("Failed to verify webhook", er)
    return undefined
  }
}

const handleClearUsersWebhook = httpAction(async (ctx, req) => {
  const event = await validatePayload(req)

  if (!event) {
    return new Response("Invalid payload", { status: 400 })
  }
  switch (event.type) {
    case "user.created": {
    const user = event.data;

    await ctx.runMutation(internal.user.create, {
      username: `${user.first_name ?? ""} ${user.last_name ?? ""}`,
      imageUrl: user.image_url,
      clerkId: user.id,
      email: user.email_addresses?.[0]?.email_address ?? "",
    });

    break;
  }

  // case "user.updated": {
  //   const user = event.data;

  //   await ctx.runMutation(internal.user.create, {
  //     clerkId: user.id,
  //     username: `${user.first_name ?? ""} ${user.last_name ?? ""}`,
  //     imageUrl: user.image_url,
  //     email: user.email_addresses?.[0]?.email_address ?? "",
  //   });

  //   break;
  // }

  // case "user.deleted": {
  //   await ctx.runMutation(internal, {
  //     clerkId: event.data.id,
  //   });

  //   break;
  // }
  default: {
    console.log("Unhandled event type", event.type)
  }
}
  return new Response("OK")
})

const http = httpRouter()

http.route({
  path: "/clerk-users-webhook",
  method: "POST",
  handler: handleClearUsersWebhook,
});

export default http;