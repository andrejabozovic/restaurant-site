"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const redirectedPathname = (locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const isActive = (locale) => pathname.startsWith(`/${locale}`);

  return (
    <li className="nav-item d-flex align-items-center ms-lg-4 py-2 py-lg-0">
      <Link 
        href={redirectedPathname("sr")}
        style={{ 
          color: isActive("sr") ? "#c19d68" : "#fff",
          fontWeight: isActive("sr") ? "bold" : "normal",
          fontSize: "14px",
          textDecoration: "none"
        }}
      >
        SR
      </Link>
      <span style={{ color: "#555", margin: "0 8px" }}>|</span>
      <Link 
        href={redirectedPathname("en")}
        style={{ 
          color: isActive("en") ? "#c19d68" : "#fff",
          fontWeight: isActive("en") ? "bold" : "normal",
          fontSize: "14px",
          textDecoration: "none"
        }}
      >
        EN
      </Link>
    </li>
  );
}