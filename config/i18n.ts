import { getRequestConfig } from "next-intl/server"

export enum Locale {
    FR = "fr",
    EN = "en",
}

export const LOCALES = Object.values(Locale)

export default getRequestConfig(async ({ locale }) => ({
    messages: (await import(`../translations/${locale}.json`)).default,
}))
