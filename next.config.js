/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    headers:{
        headers: [
            {
              key: 'Cache-Control',
              value: 'no-store',
            },
          ],
    }
}

module.exports = nextConfig
