import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import SearchPanel from "@/components/blog/SearchPanel";
import TopicFilters from "@/components/blog/TopicFilters";
import ArticleCard from "@/components/blog/ArticleCard";
import Sidebar from "@/components/blog/Sidebar";
import dataInsightsImg from "@/assets/data-insights.jpg";
import chatAssistantImg from "@/assets/chat-assistant.jpg";
import contentGeneratorImg from "@/assets/content-generator.jpg";
import analyticsImg from "@/assets/analytics-dashboard.jpg";
import automationImg from "@/assets/automation-flow.jpg";
import virtualAssistantImg from "@/assets/virtual-assistant.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";

const Blog = ({ isRTL, setIsRTL }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Topics");

  // Blog posts data
  const articles = [
    {
      title: "Deep Dive into Neural Networks: Understanding the Foundation of Modern AI",
      description: "Explore the architecture and mechanisms behind neural networks, from perceptrons to deep learning models that power today's AI applications.",
      image: dataInsightsImg,
      tags: ["Machine Learning", "Tutorials"],
      author: { name: "Sarah Chen", avatar: teamMember1 },
      date: "November 15, 2025",
      keyInsight: "Neural networks learn through backpropagation, adjusting weights to minimize error across millions of parameters.",
      isTrending: true,
    },
    {
      title: "Natural Language Processing: From Text to Understanding",
      description: "Learn how NLP transforms raw text into actionable insights using transformers, tokenization, and semantic analysis techniques.",
      image: chatAssistantImg,
      tags: ["NLP", "Tutorials"],
      author: { name: "Michael Torres", avatar: teamMember2 },
      date: "November 12, 2025",
      keyInsight: "Transformer models like GPT and BERT have revolutionized language understanding by processing entire sequences simultaneously.",
      isTrending: false,
    },
    {
      title: "Computer Vision Applications: Seeing Through AI Eyes",
      description: "Discover how convolutional neural networks enable machines to interpret visual data for object detection, image classification, and more.",
      image: contentGeneratorImg,
      tags: ["Computer Vision", "Machine Learning"],
      author: { name: "Emily Watson", avatar: teamMember3 },
      date: "November 8, 2025",
      keyInsight: "CNNs use hierarchical feature detection, starting from edges to complex patterns, mimicking human visual processing.",
      isTrending: true,
    },
    {
      title: "AI Ethics: Building Responsible Artificial Intelligence",
      description: "Examining the ethical considerations, bias mitigation strategies, and responsible AI development practices for modern applications.",
      image: analyticsImg,
      tags: ["AI Ethics"],
      author: { name: "Sarah Chen", avatar: teamMember1 },
      date: "November 5, 2025",
    },
    {
      title: "Optimizing ML Workflows: Best Practices for Production",
      description: "Essential techniques for deploying, monitoring, and maintaining machine learning models in production environments.",
      image: automationImg,
      tags: ["Machine Learning", "Tutorials"],
      author: { name: "Michael Torres", avatar: teamMember2 },
      date: "November 1, 2025",
    },
  ];

  // Categories data
  const categories = [
    { name: "Machine Learning", count: 24 },
    { name: "NLP", count: 18 },
    { name: "Computer Vision", count: 15 },
    { name: "AI Ethics", count: 12 },
    { name: "Tutorials", count: 32 },
    { name: "Industry News", count: 20 },
  ];

  // Popular posts data
  const popularPosts = [
    {
      title: "Getting Started with TensorFlow 2.0",
      image: virtualAssistantImg,
      date: "October 28, 2025",
    },
    {
      title: "Understanding Reinforcement Learning",
      image: dataInsightsImg,
      date: "October 25, 2025",
    },
    {
      title: "AI in Healthcare: Case Studies",
      image: chatAssistantImg,
      date: "October 20, 2025",
    },
    {
      title: "Building Chatbots with GPT",
      image: contentGeneratorImg,
      date: "October 15, 2025",
    },
  ];

  // Filter articles based on search and active filter
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter =
      activeFilter === "All Topics" ||
      article.tags.includes(activeFilter);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen">
      <Navigation isRTL={isRTL} setIsRTL={setIsRTL} />
      
      {/* Hero Section */}
      <BlogHero />

      {/* Search Panel */}
      <SearchPanel searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Topic Filters */}
      <TopicFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* Main Content: Two-Column Layout */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr,380px] gap-8">
          {/* Left Column: Article List */}
          <div className="space-y-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <ArticleCard key={article.title} {...article} index={index} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No articles found matching your criteria.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <Sidebar categories={categories} popularPosts={popularPosts} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
