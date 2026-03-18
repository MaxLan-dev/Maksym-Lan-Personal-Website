import { useState } from "react";
import { Download, Maximize2, Minimize2 } from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { PageWrapper } from "@/components/Section";
import { profile } from "@/data/profile";

export default function Resume() {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <PageWrapper>
      <div className={`${fullScreen ? "fixed inset-0 z-50 bg-background p-4" : "max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24"}`}>
        <FadeIn>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Resume</h1>
            <div className="flex items-center gap-2">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" /> Download
              </a>
              <button
                onClick={() => setFullScreen(!fullScreen)}
                className="p-2 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Toggle fullscreen"
              >
                {fullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div className="glass rounded-2xl overflow-hidden" style={{ height: fullScreen ? "calc(100vh - 100px)" : "80vh" }}>
            <iframe
              src={profile.resumeUrl}
              className="w-full h-full"
              title="Resume"
            />
          </div>
        </FadeIn>
      </div>
    </PageWrapper>
  );
}
