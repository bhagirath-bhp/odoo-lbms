/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'books.google.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
                port: '',
            },
        ],
        domains: ['books.google.com', 'img.clerk.com'], // Add your domains here
    },
};

export default nextConfig;
