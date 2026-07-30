import company from "@/data/company.json";
import { siteDescription, siteName, siteShortName, siteUrl } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer"],
    name: siteName,
    alternateName: [siteShortName, "Atharva Metals & Engineering"],
    legalName: siteName,
    url: `${siteUrl}/`,
    logo: `${siteUrl}/favicon.png`,
    image: `${siteUrl}/images/hero/hero-factory.jpg`,
    description: siteDescription,
    email: company.contact.email,
    telephone: company.contact.phone,
    foundingDate: String(company.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. B 31/3, Ranjangaon MIDC, Tal. Shirur",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "412209",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.contact.phone,
        email: company.contact.email,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
    ],
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
    ],
    knowsAbout: [
      "Metal stamping",
      "Sheet metal components",
      "Welded assemblies",
      "Tube bending",
      "Progressive stamping",
      "IATF 16949",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteShortName,
    url: `${siteUrl}/`,
    description: siteDescription,
    publisher: {
      "@type": "Organization",
      name: siteName,
    },
    inLanguage: "en-IN",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
