// Fetches a YouTube channel's latest uploads from its public RSS feed.
// No API key required — YouTube exposes an Atom feed per channel that always
// reflects the newest uploads, so the section auto-updates on each revalidate.

const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || "UCEyZMBLNHVrhZC_svyBIOwg";

export type YouTubeVideo = {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
  url: string;
};

// The channel URL we link the "View channel" button to.
export function youtubeChannelUrl(): string | null {
  return YOUTUBE_CHANNEL_ID ? `https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}` : null;
}

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function firstMatch(block: string, re: RegExp): string | null {
  const m = block.match(re);
  return m ? m[1] : null;
}

export async function getChannelVideos(limit = 6): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_CHANNEL_ID) return [];

  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`,
      // Re-fetch at most once an hour so new uploads appear automatically
      // without hammering YouTube on every request.
      { next: { revalidate: 3600, tags: ["youtube-videos"] } },
    );

    if (!res.ok) return [];

    const xml = await res.text();
    const entries = xml.split("<entry>").slice(1);

    const videos: YouTubeVideo[] = [];
    for (const entry of entries) {
      const id = firstMatch(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/);
      const title = firstMatch(entry, /<title>([\s\S]*?)<\/title>/);
      const published = firstMatch(entry, /<published>([^<]+)<\/published>/);
      if (!id) continue;

      videos.push({
        id,
        title: title ? decodeEntities(title.trim()) : "Untitled",
        published: published ?? "",
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${id}`,
      });

      if (videos.length >= limit) break;
    }

    return videos;
  } catch {
    return [];
  }
}
