/**
 * Get the correct asset path for static files
 * Prepends basePath in production for GitHub Pages
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production'
    ? '/faceit-demo-auto-manager-landing-site'
    : '';

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}
