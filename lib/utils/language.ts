export function getLanguageIcon(language: string | null): string {
  if (!language) return '';
  
  const languageMap: Record<string, string> = {
    'JavaScript': 'js',
    'TypeScript': 'ts',
    'Python': 'py',
    'Java': 'java',
    'C++': 'cpp',
    'C': 'c',
    'C#': 'cs',
    'Go': 'go',
    'Rust': 'rust',
    'PHP': 'php',
    'Ruby': 'ruby',
    'Swift': 'swift',
    'Kotlin': 'kotlin',
    'Dart': 'dart',
    'HTML': 'html',
    'CSS': 'css',
    'SCSS': 'scss',
    'Vue': 'vue',
    'React': 'react',
    'Angular': 'angular',
    'Node.js': 'nodejs',
    'Express': 'express',
    'Next.js': 'nextjs',
    'Nuxt.js': 'nuxtjs',
    'Svelte': 'svelte',
    'Flutter': 'flutter',
    'Docker': 'docker',
    'Kubernetes': 'kubernetes',
    'MySQL': 'mysql',
    'PostgreSQL': 'postgres',
    'MongoDB': 'mongodb',
    'Redis': 'redis',
    'Git': 'git',
    'GitHub': 'github',
    'GitLab': 'gitlab',
    'Vim': 'vim',
    'Shell': 'bash',
    'PowerShell': 'powershell',
    'Markdown': 'md',
    'JSON': 'json',
    'XML': 'xml',
    'YAML': 'yaml'
  };
  
  const iconName = languageMap[language] || language.toLowerCase();
  return `https://skillicons.dev/icons?i=${iconName}`;
}