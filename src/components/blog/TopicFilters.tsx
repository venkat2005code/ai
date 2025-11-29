import { Button } from "@/components/ui/button";

interface TopicFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const topics = [
  "All Topics",
  "Machine Learning",
  "NLP",
  "Computer Vision",
  "AI Ethics",
  "Tutorials",
];

const TopicFilters = ({ activeFilter, onFilterChange }: TopicFiltersProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        {topics.map((topic) => (
          <Button
            key={topic}
            variant={activeFilter === topic ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(topic)}
            className={
              activeFilter === topic
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "border-border hover:bg-secondary"
            }
          >
            {topic}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopicFilters;
