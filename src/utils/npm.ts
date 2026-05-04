/** Fetches last-week download total from the npm downloads API (build-time). */
export const fetchNpmWeeklyDownloads = async (
  packageName: string,
): Promise<number | null> => {
  try {
    const url = `https://api.npmjs.org/downloads/point/last-week/${encodeURIComponent(packageName)}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = (await res.json()) as { downloads?: unknown };
    const raw = data.downloads;
    if (typeof raw === "number" && Number.isFinite(raw)) return Math.trunc(raw);
    if (typeof raw === "string") {
      const n = Number(raw);
      return Number.isFinite(n) ? Math.trunc(n) : null;
    }
    return null;
  } catch {
    return null;
  }
};

/** Latest semver from the npm registry (for display next to download stats). */
export const fetchNpmLatestVersion = async (
  packageName: string,
): Promise<string | null> => {
  try {
    const url = `https://registry.npmjs.org/${encodeURIComponent(packageName)}/latest`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = (await res.json()) as { version?: unknown };
    return typeof data.version === "string" ? data.version : null;
  } catch {
    return null;
  }
};

/** Higher weekly downloads first; missing stats last. */
export const sortByNpmWeeklyDownloadsDesc = <
  T extends { npmWeeklyDownloads: number | null },
>(
  rows: T[],
): T[] => {
  const key = (n: number | null) =>
    typeof n === "number" && Number.isFinite(n) ? n : -1;
  return [...rows].sort((a, b) => key(b.npmWeeklyDownloads) - key(a.npmWeeklyDownloads));
};

export const formatNpmDownloads = (n: number): string => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M`;
  if (n >= 10_000) return `${Math.round(n / 1000)}K`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toLocaleString("en-US");
};
