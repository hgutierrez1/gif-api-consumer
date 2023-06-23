/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
            domains:['media3.giphy.com','media4.giphy.com','media0.giphy.com'],
            remotePatterns:[
                {
                    protocol: 'https',
                    hostname: '**.giphy.com',

                  },
            ]
    }
    
}

module.exports = nextConfig
