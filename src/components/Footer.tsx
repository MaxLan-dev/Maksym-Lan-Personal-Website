import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} {profile.name}.</span>
            <span className="hidden sm:inline">Built with</span>
            <Heart className="w-3 h-3 text-primary hidden sm:block" />
            <span className="hidden sm:inline">& React</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${profile.email}`} className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
