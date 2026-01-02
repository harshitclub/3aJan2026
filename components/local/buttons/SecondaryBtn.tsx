import Link from "next/link";

type SecondaryButtonProps = {
  text: string;
  href: string;
  className?: string;
};

export default function SecondaryButton({
  text,
  href,
  className = "",
}: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-sm bg-(--color-brand-accent) px-5 py-4 text-sm text-white hover:opacity-90 transition ${className}`}
    >
      {text}
    </Link>
  );
}
