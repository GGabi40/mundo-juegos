/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'img.gamemonetize.com',
        },
        ],
    },
};

export default nextConfig;
