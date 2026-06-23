export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.write(`User-agent: *
Allow: /

Sitemap: https://treeidentifier.com/api/sitemap
`);
  res.end();
}
