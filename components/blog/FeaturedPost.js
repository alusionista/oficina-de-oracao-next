import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedPost({ post }) {
  return (
    <div className="group relative mb-8 overflow-hidden rounded-xl">
      <div className="relative h-[400px] w-full overflow-hidden">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          {post.category && (
            <span className="mb-3 inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              {post.category}
            </span>
          )}
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">{post.title}</h2>
          <p className="mb-4 text-sm text-gray-200 md:text-base">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-300 md:text-sm">
              {post.date}
            </span>
            <Link 
              href={`/post/${post.slug}`}
              className="rounded-md bg-white px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white md:text-sm"
            >
              Read Article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}