import { getServerSideSitemap } from 'next-sitemap'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET(request: Request) {
  try {
    // Load all location data from static paths
    const staticPathsFile = join(process.cwd(), 'src/data/pseo/static-paths.json')
    const staticPaths = JSON.parse(readFileSync(staticPathsFile, 'utf8'))
    
    // Generate sitemap entries for all upholstery locations
    const sitemapEntries = staticPaths.map((path: { params: { location: string } }) => ({
      loc: `https://bestupholsteryorlando.com/upholstery/${path.params.location}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.6
    }))
    
    console.log(`📊 Server sitemap generating ${sitemapEntries.length} location pages`)
    
    return getServerSideSitemap(sitemapEntries)
    
  } catch (error) {
    console.error('Error generating server sitemap:', error)
    
    // Return empty sitemap on error
    return getServerSideSitemap([])
  }
}