/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
  
    domains: ['i.ibb.co','otobi.com',"hatil.com",'kb-corporetion.s3.ap-southeast-1.amazonaws.com','res.cloudinary.com']
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
 
}

module.exports = nextConfig
