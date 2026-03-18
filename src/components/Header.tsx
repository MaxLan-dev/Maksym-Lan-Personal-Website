import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "IDX", path: "/", short: "00" },
  { label: "EXP", path: "/experience", short: "01" },
  { label: "PRJ", path: "/projects", short: "02" },
  { label: "EDU", path: "/education", short: "03" },
  { label: "ACH", path: "/achievements", short: "04" },
  { label: "PDF", path: "/resume", short: "05" },
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

  return (
    <>
      {/* Desktop: fixed left dock */}
      <nav className="fixed left-0 top-0 bottom-0 w-14 z-50 hidden lg:flex flex-col items-center justify-between py-6 border-r border-border bg-background/80 backdrop-blur-sm">
        <Link to="/" className="w-8 h-8 border-2 border-primary flex items-center justify-center text-xs font-mono font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
          ML
        </Link>

        <div className="flex flex-col items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`w-10 h-10 flex items-center justify-center text-[10px] font-mono font-bold transition-all relative group ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {location.pathname === link.path && (
                <motion.div layoutId="nav-active" className="absolute inset-1 border border-primary" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <span className="relative z-10">{link.short}</span>
              <div className="absolute left-full ml-3 px-2 py-1 bg-foreground text-background text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                {link.label}
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>
      </nav>

      {/* Mobile: top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="flex items-center justify-between h-12 px-4">
          <Link to="/" className="text-xs font-mono font-bold text-primary tracking-widest">
            MAKSYM.LAN
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-muted-foreground">
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-foreground font-mono text-xs font-bold"
            >
              {mobileOpen ? "[×]" : "[≡]"}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden border-t border-border"
            >
              <div className="grid grid-cols-3 gap-px bg-border">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 text-xs font-mono text-center transition-colors ${
                      location.pathname === link.path
                        ? "bg-primary text-primary-foreground font-bold"
                        : "bg-background text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
