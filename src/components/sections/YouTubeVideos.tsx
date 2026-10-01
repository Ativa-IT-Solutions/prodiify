import { SectionHead } from "../ui/SectionHead";
import { Button } from "../ui/Button";
import { getChannelVideos, youtubeChannelUrl } from "@/lib/youtube";
import { VideoGallery } from "./VideoGallery";

export async function YouTubeVideos() {
  const videos = await getChannelVideos(6);

  // Nothing to show (misconfigured channel or feed unavailable) — skip the section.
  if (videos.length === 0) return null;

  const channelUrl = youtubeChannelUrl();

  return (
    <section className="py-24" id="videos">
      <div className="wrap">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHead
            eyebrow="From our channel"
            title="Watch Prodiify in action"
            description="Product walkthroughs, tips and updates — fresh from our YouTube channel, always up to date."
          />
          {channelUrl && (
            <div className="md:mb-12">
              <Button href={channelUrl} variant="ghost">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-[#FF0000]" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
                </svg>
                View channel
              </Button>
            </div>
          )}
        </div>
        <VideoGallery videos={videos} />
      </div>
    </section>
  );
}
