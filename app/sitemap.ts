import { coursesList, Course } from "./(courses)/courses/coursesList";

export const dynamic = "force-static";

const BASE_URL = "https://3alearningsolutions.com";
const lastModified = new Date().toISOString().split("T")[0];

export default async function sitemap() {
  const staticRoutes = [
    "",
    "/courses",
    "/corporate",
    "/individual",
    "/e-learning",
    "/events",
    "/calendar",
    "/join-us",
    "/contact",
    "/programs",
    "/about",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
  }));

  const courseRoutes = coursesList.map((course: Course) => ({
    url: `${BASE_URL}${course.link}`,
    lastModified,
  }));

  return [...staticRoutes, ...courseRoutes];
}
