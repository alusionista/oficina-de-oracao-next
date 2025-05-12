import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostDetail({ post }) {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Post Header */}
      <div className="mb-8">
        {post.category && (
          <Link 
            href={`/category/${post.category.toLowerCase()}`}
            className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/20"
          >
            {post.category}
          </Link>
        )}
        <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{post.date}</span>
          {post.author && (
            <>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </>
          )}
        </div>
      </div>
      
      {/* Featured Image */}
      {post.coverImage && (
        <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}
      
      {/* Post Content */}
      <div className="prose prose-lg max-w-none">
        {post.content}
      </div>
      
      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 border-t pt-6">
          <h3 className="mb-3 text-lg font-semibold">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link 
                key={tag}
                href={`/tag/${tag.toLowerCase()}`}
                className="rounded-md bg-secondary px-3 py-1 text-xs text-secondary-foreground hover:bg-secondary/80"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Share */}
      <div className="mt-8 border-t pt-6">
        <h3 className="mb-3 text-lg font-semibold">Share</h3>
        <div className="flex space-x-4">
          <button className="rounded-md bg-[#1DA1F2] px-4 py-2 text-sm font-medium text-white hover:bg-[#1DA1F2]/90">
            Twitter
          </button>
          <button className="rounded-md bg-[#4267B2] px-4 py-2 text-sm font-medium text-white hover:bg-[#4267B2]/90">
            Facebook
          </button>
          <button className="rounded-md bg-[#0077B5] px-4 py-2 text-sm font-medium text-white hover:bg-[#0077B5]/90">
            LinkedIn
          </button>
        </div>
      </div>
    </article>
  );
}