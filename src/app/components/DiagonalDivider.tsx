type Props = {
  from?: string;
  to?: string;
  compact?: boolean;
  reverse?: boolean;
  showUpdated?: boolean;
};

export default function DiagonalDivider({
  from = "#000000",
  to = "var(--background)",
  compact = false,
  reverse = false,
  showUpdated = false,
}: Props) {
  return (
    <div className="relative overflow-hidden" style={{ background: to }}>
      <svg
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        className={`block w-full ${compact ? "h-[90px] sm:h-[130px]" : "h-[140px] sm:h-[210px] lg:h-[280px]"}`}
        aria-hidden="true"
        focusable="false"
      >
        <rect width="1440" height="300" fill={from} />
        <g transform={reverse ? "translate(1440 0) scale(-1 1)" : undefined}>
          <polygon points="0,218 1440,0 1440,300 0,300" fill={to} />
          <polygon points="0,256 250,218 250,256 0,294" fill="var(--accent-soft, #eaf3b9)" />
          <polygon points="0,214 370,158 370,200 0,256" fill="var(--accent)" />
          <polygon points="0,174 120,156 120,194 0,212" fill="none" stroke="var(--accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <polygon points="1320,18 1440,0 1440,42 1320,60" fill="var(--accent-soft, #eaf3b9)" />
        </g>
      </svg>
      {showUpdated && (
        <div className="mx-auto max-w-7xl px-5 pb-4 pt-3 sm:px-6 md:px-12">
          <p className="inline-block border-b-[3px] border-[var(--accent)] pb-3 text-sm font-bold sm:ml-[20%] sm:text-base">
            Updated: <time dateTime="2026-10-13">13th of October, 2026</time>
          </p>
        </div>
      )}
    </div>
  );
}
