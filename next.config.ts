import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "table-flow.de" }],
        destination: "https://www.table-flow.de/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
