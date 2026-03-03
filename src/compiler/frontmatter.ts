export interface Frontmatter {
  tags?: string[];
  date?: string;
  end?: string;
  [key: string]: any;
}

export function extractFrontmatter(markdown: string): { frontmatter: Frontmatter; content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content: markdown };
  }

  const frontmatterText = match[1];
  const content = match[2];
  const frontmatter: Frontmatter = {};

  frontmatterText.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      
      if (value.startsWith('[') && value.endsWith(']')) {
        frontmatter[key.trim()] = value
          .slice(1, -1)
          .split(',')
          .map(v => v.trim().replace(/^["']|["']$/g, ''));
      } else {
        frontmatter[key.trim()] = value.replace(/^["']|["']$/g, '');
      }
    }
  });

  return { frontmatter, content };
}