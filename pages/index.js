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
    <Layout title="Oficina de Oração">
      <div className="space-y-8">
        {/* Featured Post */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Destaque</h2>
          <FeaturedPost post={featuredPost} />
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Postagens Recentes</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="rounded-lg bg-secondary/30 p-6">
          <h2 className="mb-6 text-2xl font-bold">Explorar por Categoria</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <a href="/category/antigo-testamento" className="rounded-lg bg-white p-4 text-center shadow-sm transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-primary">Antigo Testamento</h3>
              <p className="text-sm text-muted-foreground">Narrativas e personagens bíblicos</p>
            </a>
            <a href="/category/rei-davi" className="rounded-lg bg-white p-4 text-center shadow-sm transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-primary">Rei Davi</h3>
              <p className="text-sm text-muted-foreground">Lições da vida de Davi</p>
            </a>
            <a href="/category/obediencia" className="rounded-lg bg-white p-4 text-center shadow-sm transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-primary">Obediência a Deus</h3>
              <p className="text-sm text-muted-foreground">Reflexões sobre obediência</p>
            </a>
            <a href="/category/palavra-do-dia" className="rounded-lg bg-white p-4 text-center shadow-sm transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-primary">Palavra do Dia</h3>
              <p className="text-sm text-muted-foreground">Meditações diárias</p>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}
