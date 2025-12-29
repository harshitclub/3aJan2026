import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://3alearningsolutions.com/sitemap.xml",
    host: "https://3alearningsolutions.com",
  };
}
