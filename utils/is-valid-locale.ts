import { type Locale, LOCALES } from "@/config/i18n"

export function isValidLocale(value: string): value is Locale {
    return LOCALES.includes(value as Locale)
}
