/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'flagcdn.com',
          port: '',
          pathname: '/w40/**',
        },
      ],
    },
    async headers() {
      return [
        {
          source: "/actions.json",
          headers: [
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
            { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
            { key: "Access-Control-Max-Age", value: "86400" },
          ],
        },
        {
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
            { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
            { key: "Access-Control-Max-Age", value: "86400" },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;