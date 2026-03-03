import { ProjectEntry } from "./ProjectEntry";
import { useEffect, useState } from "react";
import { Structure } from "./Post";
import { getFrontmatter } from "../compiler/compiler";
import "./ProjectsPage.css";

interface PostMetadata {
  title?: string;
  content: string;
}

export function ProjectsPage() {
  const [json, setJson] = useState<Structure | null>(null);
  const [allTags, setAllTags] = useState<Set<string>>(new Set());
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [postMetadata, setPostMetadata] = useState<Map<string, PostMetadata>>(new Map());

  useEffect(() => {
    fetch(`/structure.json`)
      .then((res) => res.json())
      .then(async (data: Structure) => {
        setJson(data);

        const tagSet = new Set<string>();
        const metadata = new Map<string, PostMetadata>();
        
        for (const post of data.posts) {
          try {
            const res = await fetch(`/posts/${post}.md`);
            if (res.ok) {
              const markdown = await res.text();
              const frontmatter = getFrontmatter(markdown);
              
              if (frontmatter.tags && Array.isArray(frontmatter.tags)) {
                frontmatter.tags.forEach(tag => tagSet.add(tag));
              }
              
              // Store metadata for search
              metadata.set(post, {
                title: frontmatter.title || post,
                content: markdown.toLowerCase()
              });
            }
          } catch (err) {
            console.error(`Error fetching tags for ${post}:`, err);
          }
        }
        setAllTags(tagSet);
        setPostMetadata(metadata);
      })
      .catch((err) => console.error('Error getting structure JSON:', err))
  }, []);

  const toggleTag = (tag: string) => {
    const newSelected = new Set(selectedTags);
    if (newSelected.has(tag)) {
      newSelected.delete(tag);
    } else {
      newSelected.add(tag);
    }
    setSelectedTags(newSelected);
  };

  const filteredPosts = json?.posts.filter((post) => {
    const metadata = postMetadata.get(post);
    if (!metadata) return false;
    
    // Filter by search query
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery || 
      (metadata.title && metadata.title.toLowerCase().includes(searchLower)) ||
      metadata.content.includes(searchLower);
    
    if (!matchesSearch) return false;
    
    // Filter by tags
    if (selectedTags.size === 0) return true;
    return true;
  }) || [];

  return (
    <div className="App-body">
      <h1>Projects</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {allTags.size > 0 && (
          <div className="filter-buttons">
            {Array.from(allTags).sort().map((tag) => (
              <button
                key={tag}
                className={`filter-btn ${selectedTags.has(tag) ? 'active' : ''}`}
                onClick={() => toggleTag(tag)}
              >
                {tag.toUpperCase()}
              </button>
            ))}
          </div>
      )}

      {filteredPosts.length === 0 ? (
        <div className="no-results">
          No posts matched.
        </div>
      ) : (
        <div className="entry-list">
          {filteredPosts.map((page, i) =>
            <ProjectEntry
              key={i}
              index={i}
              href={page}
              selectedTags={selectedTags} />)}
        </div>
      )}
    </div>
  );
}
