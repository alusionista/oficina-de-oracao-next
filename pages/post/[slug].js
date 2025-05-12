import { useRouter } from 'next/router';
import Layout from '@components/layout/Layout';
import BlogPostDetail from '@components/blog/BlogPostDetail';
import { posts } from '../../data/posts';

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the post with the matching slug
  const post = posts.find((post) => post.slug === slug);

  // If the post doesn't exist or the page is still loading, show a loading state
  if (!post && !router.isFallback) {
    return (
      <Layout title="Post Not Found">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="mb-4 text-3xl font-bold">Post Not Found</h1>
          <p className="mb-8 text-muted-foreground">
            The post you are looking for does not exist or has been removed.
          </p>
          <button
            onClick={() => router.push('/')}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Return to Homepage
          </button>
        </div>
      </Layout>
    );
  }

  // If the page is still loading (router.isFallback is true), show a loading state
  if (router.isFallback) {
    return (
      <Layout title="Loading...">
        <div className="flex items-center justify-center py-20">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  // Parse the HTML content to render it properly
  // First, trim any extra whitespace from the template literal
  const trimmedContent = post.content.trim();
  const contentHtml = { __html: trimmedContent };

  // Create a post object with the content as a React component
  const postWithHtmlContent = {
    ...post,
    content: <div dangerouslySetInnerHTML={contentHtml} />
  };

  return (
    <Layout title={post.title}>
      <BlogPostDetail post={postWithHtmlContent} />
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  // Find the post with the matching slug
  const post = posts.find((post) => post.slug === params.slug);

  // If no post is found, return 404
  if (!post) {
    return {
      notFound: true,
    };
  }

  // Pass post data to the page via props
  return {
    props: { post },
  };
}
