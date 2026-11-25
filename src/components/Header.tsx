import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Briefcase, FileText, FolderGit2, GraduationCap, Home, Menu, Moon, Sun, Trophy, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/", icon: Home },
  { label: "Experience", path: "/experience", icon: Briefcase },
  { label: "Projects", path: "/projects", icon: FolderGit2 },
  { label: "Education", path: "/education", icon: GraduationCap },
  { label: "Achievements", path: "/achievements", icon: Trophy },
  { label: "Resume", path: "/resume", icon: FileText },
];

export function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const themeLabel = darkMode ? "Switch to light mode" : "Switch to dark mode";

  return (
    <>
      {/* Desktop: fixed left dock */}
      <nav aria-label="Main" className="fixed left-0 top-0 bottom-0 w-14 z-50 hidden lg:flex flex-col items-center justify-between py-6 border-r border-border bg-background">
        <Link to="/" aria-label="Maksym Lan, home" className="w-8 h-8 border-2 border-primary flex items-center justify-center text-xs font-mono font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
          ML
        </Link>

        <div className="flex flex-col items-center gap-1">
          {navLinks.map(({ label, path, icon: Icon }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                aria-label={label}
                aria-current={active ? "page" : undefined}
                className={`w-10 h-10 flex items-center justify-center border transition-colors relative group ${
                  active
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
                <span className="absolute left-full ml-3 px-2 py-1 bg-foreground text-background text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 pointer-events-none transition-opacity">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label={themeLabel}
          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          {darkMode ? <Sun className="w-4 h-4" strokeWidth={1.5} /> : <Moon className="w-4 h-4" strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile: top bar */}
      <nav aria-label="Main" className="fixed top-0 left-0 right-0 z-50 lg:hidden border-b border-border bg-background">
        <div className="flex items-center justify-between h-12 px-4">
          <Link to="/" className="text-sm font-medium text-foreground">
            Maksym Lan
          </Link>
          <div className="flex items-center gap-1">
            <button onClick={() => setDarkMode(!darkMode)} aria-label={themeLabel} className="p-2 text-muted-foreground">
              {darkMode ? <Sun className="w-4 h-4" strokeWidth={1.5} /> : <Moon className="w-4 h-4" strokeWidth={1.5} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="p-2 text-foreground"
            >
              {mobileOpen ? <X className="w-4 h-4" strokeWidth={1.5} /> : <Menu className="w-4 h-4" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="border-t border-border">
            <div className="grid grid-cols-3 gap-px bg-border">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 text-sm text-center transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground font-medium"
                      : "bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
