const withNextIntl = require("next-intl/plugin")("./config/i18n.ts")

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withNextIntl(nextConfig)
