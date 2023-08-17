import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://section20consult.com",
      lastModified: new Date(),
    },
    {
      url: "https://section20consult.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://section20consult.com/eahac",
      lastModified: new Date(),
    },
  ];
}
