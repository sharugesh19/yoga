import type { MetadataRoute } from "next";
import { classes, posts, instructors, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  // Static routes
  const staticPaths = [
    "",
    "/about",
    "/classes",
    "/schedule",
    "/pricing",
    "/instructors",
    "/blog",
    "/gallery",
    "/testimonials",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms",
  ];

  const staticUrls = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Dynamic class detail paths
  const classUrls = classes.map((cls) => ({
    url: `${baseUrl}/classes/${cls.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic blog post paths
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic instructor profile paths
  const instructorUrls = instructors.map((inst) => ({
    url: `${baseUrl}/instructors/${inst.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...classUrls, ...blogUrls, ...instructorUrls];
}
