import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const routes = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/certifications",
  "/contact",
];

const hostname =
  process.env.VITE_SITE_URL || "https://andrew3d-portfolio.onrender.com";

const generateSitemap = async () => {
  try {
    const routeObjects = routes.map((route) => ({
      url: route,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.8,
      lastmod: new Date().toISOString().split("T")[0],
    }));

    const stream = new SitemapStream({
      hostname,
    });

    const data = await streamToPromise(
      Readable.from(routeObjects).pipe(stream)
    ).then((result) => result.toString());

    const publicDir = "./public";
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync("./public/sitemap.xml", data);
    console.log("Sitemap generated successfully.");
  } catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1);
  }
};

generateSitemap();
