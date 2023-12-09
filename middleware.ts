import createIntlMiddleware from "next-intl/middleware"

import { Locale, LOCALES } from "./config/i18n"

export default createIntlMiddleware({
    locales: LOCALES,
    defaultLocale: Locale.FR,
})

export const config = {
    matcher: ["/", "/(fr|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
}
