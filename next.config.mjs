import "./config/env/server.mjs"

import createNextIntlWrapper from "next-intl/plugin"

const withNextIntl = createNextIntlWrapper("./config/i18n.ts")

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withNextIntl(nextConfig)
