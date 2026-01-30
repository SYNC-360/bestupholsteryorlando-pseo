/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bestupholsteryorlando.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.8,
  exclude: ['/admin/*', '/api/*', '/_next/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://bestupholsteryorlando.com/server-sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Customize priority and changefreq based on page type
    let priority = 0.7;
    let changefreq = 'weekly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/locations/')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/fabric-guide') || path.startsWith('/best') || path.startsWith('/compare')) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};