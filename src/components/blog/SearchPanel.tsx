import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchPanelProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const SearchPanel = ({ searchQuery, onSearchChange }: SearchPanelProps) => {
  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-card border border-border p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <h2 className="text-xl font-semibold text-foreground mb-4">Search Articles</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search AI insights, tutorials, and news..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
