export function createPlaceholder(filename: string, index: number): string {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#f5f0e8"/>
      <text x="400" y="250" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#333" text-anchor="middle">#${index}</text>
      <text x="400" y="300" font-family="Arial, sans-serif" font-size="18" fill="#666" text-anchor="middle">Upload this image:</text>
      <text x="400" y="340" font-family="monospace" font-size="16" fill="#000" text-anchor="middle">${filename}</text>
      <text x="400" y="380" font-family="Arial, sans-serif" font-size="14" fill="#999" text-anchor="middle">to src/imports/ folder</text>
    </svg>
  `)}`;
}
