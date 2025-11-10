import { getRequestConfig } from "next-intl/server";
import type { GetRequestConfigParams, RequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }: GetRequestConfigParams): Promise<RequestConfig> => {
  const currentLocale = locale ?? "sv";
  try {
    const messages = (await import(`../messages/${currentLocale}.json`)).default;
    return { locale: currentLocale, messages };
  } catch {
    const fallbackMessages = (await import("../messages/sv.json")).default;
    return { locale: "sv", messages: fallbackMessages };
  }
});

