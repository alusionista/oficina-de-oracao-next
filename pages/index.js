import Layout from '@components/layout/Layout'
import FeaturedPost from '@components/blog/FeaturedPost'
import BlogCard from '@components/blog/BlogCard'
import { posts } from '../data/posts'

export default function Home() {
  // Get the first post as featured post
  const featuredPost = posts[0]
  // Get the rest of the posts
  const recentPosts = posts.slice(1)

  return (
    <Layout title="Vatican News Inspired Blog">
      <div className="space-y-8">
        {/* Featured Post */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Featured Story</h2>
          <FeaturedPost post={featuredPost} />
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Recent Stories</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="rounded-lg bg-secondary/30 p-6">
          <h2 className="mb-6 text-2xl font-bold">Explore by Category</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <a href="/category/pope" className="rounded-lg bg-white p-4 text-center shadow-sm transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-primary">Pope</h3>
              <p className="text-sm text-muted-foreground">Latest from Pope Francis</p>
            </a>
            <a href="/category/vatican" className="rounded-lg bg-white p-4 text-center shadow-sm transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-primary">Vatican</h3>
              <p className="text-sm text-muted-foreground">News from the Holy See</p>
            </a>
            <a href="/category/church" className="rounded-lg bg-white p-4 text-center shadow-sm transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-primary">Church</h3>
              <p className="text-sm text-muted-foreground">Universal Church news</p>
            </a>
            <a href="/category/world" className="rounded-lg bg-white p-4 text-center shadow-sm transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-primary">World</h3>
              <p className="text-sm text-muted-foreground">Global news and events</p>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}
