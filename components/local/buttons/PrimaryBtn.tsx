import Link from "next/link";

type PrimaryButtonProps = {
  text: string;
  href: string;
  className?: string;
  external?: boolean;
};

export default function PrimaryButton({
  text,
  href,
  className = "",
  external = false,
}: PrimaryButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-sm bg-[var(--color-brand-primary)] px-5 py-4 text-sm text-white hover:opacity-90 transition";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
      >
        {text}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${className}`}>
      {text}
    </Link>
  );
}
