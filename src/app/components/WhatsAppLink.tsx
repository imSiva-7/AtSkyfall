type Props = { compact?: boolean };

export default function WhatsAppLink({ compact = false }: Props) {
  return (
    <a
      href="https://wa.me/919094688533"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Siva on WhatsApp (opens in a new tab)"
      className={`inline-flex shrink-0 items-center justify-center gap-2 border border-[var(--accent)] text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${compact ? "h-11 w-11 rounded-full border-2 lg:w-auto lg:px-4" : "rounded-2xl px-6 py-4 text-sm font-bold sm:px-8 sm:text-base"}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.46 0 .1 5.35.1 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.25-1.64a11.94 11.94 0 0 0 5.8 1.48h.01c6.58 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.18-3.48-8.42ZM12.06 21.83a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.88 9.88 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.96 9.88Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.77-.73 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
      <span className={compact ? "hidden lg:inline text-xs font-bold tracking-normal" : ""}>WhatsApp</span>
    </a>
  );
}
