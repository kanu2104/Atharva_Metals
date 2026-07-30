/** Canonical site URL used for sitemap, robots, and structured data. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://atharvametals.com"
).replace(/\/$/, "");

export const siteName = "Atharva Metals & Engineering Pvt. Ltd.";
export const siteShortName = "Atharva Metals";
export const siteDescription =
  "Atharva Metals & Engineering Pvt. Ltd. — IATF 16949:2016 certified manufacturer of precision stamped metal components and welded assemblies for global OEMs in white goods, automotive and off-road vehicles.";
