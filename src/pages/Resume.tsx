import { useState } from "react";
import { Download, Maximize2, Minimize2 } from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { PageWrapper, Section, SectionLabel } from "@/components/Section";
import { profile } from "@/data/profile";

export default function Resume() {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <PageWrapper>
      <div className={fullScreen ? "fixed inset-0 z-50 bg-background" : ""}>
        <Section fullWidth={fullScreen} className={fullScreen ? "py-0 h-full flex flex-col" : ""}>
          {!fullScreen && <SectionLabel>Resume</SectionLabel>}

          <FadeIn>
            <div className="flex items-center justify-between mb-4">
              {!fullScreen && (
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground">
                  <span className="font-serif italic font-normal text-primary">CV</span>
                </h1>
              )}
              <div className="flex items-center gap-0 border border-border ml-auto">
                <a
                  href={profile.resumeUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-wider text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border-r border-border"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
                <button
                  onClick={() => setFullScreen(!fullScreen)}
                  className="flex items-center gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-wider text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {fullScreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                  {fullScreen ? "Exit" : "Expand"}
                </button>
              </div>
            </div>
          </FadeIn>

          <div
            className="border border-border overflow-hidden"
            style={{
              width: fullScreen ? "100vw" : "100%",
              height: fullScreen ? "100vh" : "75vh",
            }}
          >
            <iframe
              src={`${profile.resumeUrl}#zoom=page-width`}
              className="w-full h-full"
              title="Resume"
            />
          </div>
        </Section>
      </div>
    </PageWrapper>
  );
}
