import { z } from "zod";

/**
 * Single source of truth for environment variables.
 * Validated with zod at module load time — fails loud if misconfigured.
 *
 * Server-only secrets stay server-side; client-safe values are exposed
 * via NEXT_PUBLIC_ prefix and exported separately.
 */

const serverSchema = z.object({
  RESEND_API_KEY: z.string().min(1).optional(),
  RESEND_FROM: z.string().min(3).optional(),
  CONTACT_WEBHOOK_URL: z.string().url().optional(),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

const clientSchema = z.object({
  NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1).optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url().optional(),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().regex(/^\d{10,15}$/).optional(),
  NEXT_PUBLIC_CAL_LINK: z.string().url().optional(),
});

const _serverEnv = serverSchema.safeParse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM: process.env.RESEND_FROM,
  CONTACT_WEBHOOK_URL: process.env.CONTACT_WEBHOOK_URL,
  NODE_ENV: process.env.NODE_ENV,
});

const _clientEnv = clientSchema.safeParse({
  NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  NEXT_PUBLIC_CAL_LINK: process.env.NEXT_PUBLIC_CAL_LINK,
});

if (!_serverEnv.success) {
  // eslint-disable-next-line no-console
  console.error("[env] Invalid server environment variables:");
  // eslint-disable-next-line no-console
  console.error(_serverEnv.error.flatten().fieldErrors);
  throw new Error("Invalid server environment variables — see console.");
}

if (!_clientEnv.success) {
  // eslint-disable-next-line no-console
  console.error("[env] Invalid client environment variables:");
  // eslint-disable-next-line no-console
  console.error(_clientEnv.error.flatten().fieldErrors);
  throw new Error("Invalid client environment variables — see console.");
}

export const env = {
  ..._serverEnv.data,
  ..._clientEnv.data,
};

export type Env = typeof env;
