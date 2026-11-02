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
        className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-10"
      />
    </Link>
  );
}
