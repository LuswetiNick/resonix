import createClient from "openapi-fetch";
import { serverEnv } from "@/config/env/server";
import type { paths } from "@/types/chatterbox-api";

export const chatterbox = createClient<paths>({
  baseUrl: serverEnv.CHATTERBOX_API_URL,
  headers: {
    "x-api-key": serverEnv.CHATTERBOX_API_KEY,
  },
});
