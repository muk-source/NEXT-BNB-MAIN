/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["links.papareact.com"]
  },
  env:{
    MapboxAccessToken:'pk.eyJ1IjoibXVrdW5kMjIiLCJhIjoiY2xmamkxMmw1MDEzYzNzbHF1ZGM2bWEzbiJ9.Lg289a5himM-QiCFpEKmgg'
  }
}

module.exports = nextConfig
