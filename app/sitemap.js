export default function sitemap() {
    const baseUrl = 'https://codezilla.io';

    // Core routes
    const routes = [
        '',
        '/hire-back-end-engineers',
        '/hire-front-end-engineers',
        '/mobile-app-development',
        '/reviewly',
        '/skyguard',
        '/software-testing',
        '/tawkwise',
        '/ui-ux',
        '/web-development',
        '/who-we-are',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
