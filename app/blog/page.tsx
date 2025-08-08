import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Transforming Skincare Routine with AI Technology",
    excerpt:
        "Discover how artificial intelligence is revolutionizing personal skincare routines and helping people achieve healthier skin.",
    category: "AI Technology",
    author: "Dr. Sarah Chen",
    date: "2024-12-15",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
    external: false,
  },
  // ... other internal posts ...
  {
    id: 10,
    title: "Comprehensive List of Skin Diseases - Mayo Clinic",
    excerpt:
        "Explore a full list of skin diseases, symptoms, and treatments as compiled by Mayo Clinic dermatology experts.",
    category: "Education",
    author: "Mayo Clinic Staff",
    date: "2024-08-28",
    readTime: "10 min read",
    image: "/mayo-skin-diseases.jpg",
    url: "https://www.mayoclinic.org/departments-centers/dermatology/sections/conditions-treated/orc-20420534",
    external: true,
  },
  {
    id: 11,
    title: "Skin Diseases: Symptoms, Treatment & Prevention - Cleveland Clinic",
    excerpt:
        "Cleveland Clinic explains types, symptoms, and treatments for common and rare skin diseases.",
    category: "Education",
    author: "Cleveland Clinic Staff",
    date: "2025-06-02",
    readTime: "8 min read",
    image: "/cleveland-skin-diseases.jpg",
    url: "https://my.clevelandclinic.org/health/diseases/21573-skin-diseases",
    external: true,
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-4">
              SOLVIA <span className="text-orange-500">Blog</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Expert insights, skincare tips, and the latest developments in AI-powered dermatology. Stay informed about your skin health.
            </p>
          </header>

          {/* Featured Post */}
          {featuredPost && (
              <section className="mb-20">
                <Badge variant="outline" className="bg-orange-100 text-orange-800 mb-4 inline-block">
                  Featured Article
                </Badge>
                <Card className="flex flex-col md:flex-row overflow-hidden shadow-lg">
                  <div className="relative h-64 md:h-auto md:w-1/2">
                    <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        priority
                    />
                  </div>
                  <div className="p-8 md:w-1/2 flex flex-col justify-between">
                    <div>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 mb-2 inline-block">
                        {featuredPost.category}
                      </Badge>
                      <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                      <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-6 gap-6">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" /> {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`} passHref>
                      <a
                          className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-full transition"
                          title={`Read full article: ${featuredPost.title}`}
                      >
                        Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Link>
                  </div>
                </Card>
              </section>
          )}

          {/* Blog Posts Grid */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {regularPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <Badge variant="outline" className="bg-gray-100 text-gray-800 w-fit mb-2 inline-block">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" /> {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <Link href={post.external ? post.url : `/blog/${post.id}`} passHref>
                          <a
                              target={post.external ? "_blank" : undefined}
                              rel={post.external ? "noopener noreferrer" : undefined}
                              className="inline-block text-orange-600 border border-orange-200 px-4 py-2 rounded hover:bg-orange-50 text-sm font-medium"
                              title={post.external ? `Open external article: ${post.title}` : `Read more: ${post.title}`}
                          >
                            {post.external ? "Read Article" : "Read More"}
                          </a>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
  )
}
