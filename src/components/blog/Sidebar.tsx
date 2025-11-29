import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Category {
  name: string;
  count: number;
}

interface PopularPost {
  title: string;
  image: string;
  date: string;
}

interface SidebarProps {
  categories: Category[];
  popularPosts: PopularPost[];
}

const Sidebar = ({ categories, popularPosts }: SidebarProps) => {
  return (
    <aside className="space-y-6">
      {/* Categories Card */}
      <div className="bg-card rounded-2xl border border-border p-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <h3 className="text-xl font-bold text-foreground mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between py-2 border-b border-border last:border-0 cursor-pointer hover:text-primary transition-colors"
            >
              <span className="text-sm text-foreground">{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Posts Card */}
      <div className="bg-card rounded-2xl border border-border p-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <h3 className="text-xl font-bold text-foreground mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div
              key={index}
              className="flex gap-3 pb-4 border-b border-border last:border-0 cursor-pointer group"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Card */}
      <div className="bg-gradient-to-br from-primary via-highlight to-primary/60 rounded-2xl p-6 text-white animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <h3 className="text-xl font-bold mb-2">Subscribe to Newsletter</h3>
        <p className="text-sm text-white/90 mb-4">
          Get the latest AI insights delivered to your inbox.
        </p>
        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-white/50"
          />
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            Subscribe
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
