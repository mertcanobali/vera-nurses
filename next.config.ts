import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Buraya daha sonra resim domainleri (veranurses.com vb.) gelecek
};

export default withNextIntl(nextConfig);
