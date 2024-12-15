/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://hftconsultancy.com', // Replace with your actual site URL
  generateRobotsTxt: true, // Generate robots.txt
  exclude: ['/admin', '/api', '/drafts', '/staging', '/test-environment'], // Paths to exclude
  robotsTxtOptions: {
    policies: [
      // General policy for all bots
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/api',
          '/drafts',
          '/staging',
          '/test-environment',
          '/*.pdf$',
          '/*.docx$',
          '/images/private/*',
        ],
        crawlDelay: 5, // Optional: Prevent server overload
      },
      // Specific policy for Googlebot
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin', '/drafts', '/test-environment'],
      },
      // Specific policy for Bingbot
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api', '/drafts', '/staging'],
        crawlDelay: 10, // Bing supports crawl-delay
      },
      // Specific policy for DuckDuckBot (DuckDuckGo)
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/private', '/testing'],
      },
      // Specific policy for YandexBot
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/admin', '/drafts', '/test-environment'],
      },
      // Specific policy for Baiduspider (Baidu)
      {
        userAgent: 'Baiduspider',
        disallow: '/', // Block Baidu entirely
      },
      // Block AhrefsBot (SEO tool crawler)
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      // Block SemrushBot (SEO tool crawler)
      {
        userAgent: 'SemrushBot',
        disallow: ['/private', '/drafts'],
      },
    ],
    // Main sitemap
    additionalSitemaps: [
      'https://hftconsultancy.com/sitemap.xml', // Include only the main sitemap
    ],
  },
};

module.exports = config;
