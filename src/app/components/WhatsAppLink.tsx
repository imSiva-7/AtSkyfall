type Props = { compact?: boolean };

export default function WhatsAppLink({ compact = false }: Props) {
  return (
    <a
      href="https://wa.me/919094688533"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Siva on WhatsApp (opens in a new tab)"
      className={`inline-flex shrink-0 items-center justify-center gap-2 border border-[var(--accent)] text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${compact ? "h-11 w-11 rounded-full lg:w-auto lg:px-4" : "rounded-2xl px-6 py-4 text-sm font-bold sm:px-8 sm:text-base"}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.6-4.6A9 9 0 1 1 21 11.5Z" />
        <path d="m8 7 2 3-1.2 1.2a9 9 0 0 0 4 4L14 14l3 2c-.5 1.5-1.5 2-3 1.5-4-1.2-6.8-4-8-8C5.5 8 6 7 8 7Z" />
      </svg>
      <span className={compact ? "hidden lg:inline text-xs font-bold tracking-normal" : ""}>WhatsApp</span>
    </a>
  );
}
