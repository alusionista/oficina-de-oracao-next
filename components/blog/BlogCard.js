import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      <Link href={`/post/${post.slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <span className="text-muted-foreground">No image</span>
            </div>
          )}
          {post.category && (
            <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
              {post.category}
            </span>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold line-clamp-2">{post.title}</h3>
          <p className="mb-3 text-sm text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {post.date}
            </span>
            <span className="text-xs font-medium text-primary">Read more</span>
          </div>
        </div>
      </Link>
    </div>
  );
}