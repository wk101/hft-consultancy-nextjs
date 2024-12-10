/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://hftconsultancy.com', // Replace with your actual site URL
  generateRobotsTxt: true, // Generate robots.txt
  exclude: ['/admin', '/api', '/drafts'], // Exclude specific paths
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/drafts'], // Paths you want to block
      },
    ],
  },
};

module.exports = config;
