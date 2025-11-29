import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, TrendingUp } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  keyInsight?: string;
  isTrending?: boolean;
  index: number;
}

const ArticleCard = ({
  title,
  description,
  image,
  tags,
  author,
  date,
  keyInsight,
  isTrending,
  index,
}: ArticleCardProps) => {
  return (
    <article
      className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="grid md:grid-cols-[300px,1fr] gap-6">
        {/* Image */}
        <div className="relative h-48 md:h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {isTrending && (
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              Trending
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
            {title}
          </h2>

          {/* Key Insight */}
          {keyInsight && (
            <div className="mb-4 p-4 bg-secondary/50 border border-border rounded-lg">
              <p className="text-sm font-medium text-foreground">
                <span className="text-primary">Key Insight:</span> {keyInsight}
              </p>
            </div>
          )}

          {/* Description */}
          <p className="text-muted-foreground mb-6 flex-grow">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">{author.name}</p>
                <p className="text-xs text-muted-foreground">{date}</p>
              </div>
            </div>
            <a
              href="#"
              className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
