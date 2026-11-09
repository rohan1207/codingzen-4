import BlogPage from "@/components/blog/BlogPage";

export const metadata = {
  title: "Blog",
  description:
    "Insights, ideas and inspiration for young coders — CodingZen tips, guides, AI, projects, and parent stories.",
  alternates: {
    canonical: "https://codingzen.in/blog",
  },
};

export default function BlogRoute() {
  return <BlogPage />;
}
