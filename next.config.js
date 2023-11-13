// next.config.js
/** @type {import('next').NextConfig} */

  module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          pathname: '**',
        },
      ],
    },
  }
