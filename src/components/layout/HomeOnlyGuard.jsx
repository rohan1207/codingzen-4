"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * Homepage-only mode: every link / CTA / menu item goes to `/` (top).
 */
export default function HomeOnlyGuard() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      router.replace("/");
    }
  }, [pathname, router]);

  useEffect(() => {
    const goHome = () => {
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      router.replace("/");
    };

    const onClick = (e) => {
      const anchor = e.target.closest?.("a[href]");
      if (!anchor) return;

      e.preventDefault();
      e.stopPropagation();
      goHome();
    };

    const onSubmit = (e) => {
      e.preventDefault();
      e.stopPropagation();
      goHome();
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, [router]);

  return null;
}
