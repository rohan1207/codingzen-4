import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${className}`}
      aria-label="CodingZen home"
    >
      <Image
        src="/logo.png"
        alt="CodingZen — Think · Create · Apply"
        width={180}
        height={52}
        priority
        className="h-8 w-auto max-w-[140px] object-contain object-left transition-transform duration-300 group-hover:scale-[1.02] sm:h-10 sm:max-w-none"
      />
    </Link>
  );
}
