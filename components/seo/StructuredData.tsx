// Lightweight JSON-LD builder (avoid depending on schema-dts types)

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://veranurses.com";
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "Vera Nurses";
const PHONE = process.env.NEXT_PUBLIC_PHONE || "+905555555555";
const SOCIALS = (process.env.NEXT_PUBLIC_SOCIALS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

type Breadcrumb = { name: string; url: string };

type Props = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  sameAs?: string[];
  breadcrumbs?: Breadcrumb[];
};

export default function StructuredData({
  title,
  description,
  url,
  image,
  sameAs,
  breadcrumbs,
}: Props) {
  const siteUrl = url || BASE_URL;
  const img = image || `${BASE_URL}/AviceRNA_Logo.png`;
  const same =
    sameAs && sameAs.length ? sameAs : SOCIALS.length ? SOCIALS : undefined;

  const organization: any = {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: SITE_NAME,
    url: BASE_URL,
    logo: img,
  };

  if (same) organization.sameAs = same;

  organization.contactPoint = [
    {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "CustomerService",
      areaServed: "TR",
      availableLanguage: ["Turkish", "English"],
    },
  ];

  const medicalBusiness: any = {
    "@type": "MedicalBusiness",
    name: SITE_NAME,
    description:
      description ||
      "Profesyonel evde sağlık, hemşirelik ve check-up hizmetleri.",
    url: BASE_URL,
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Şişli Merkez Mah.",
      addressLocality: "İstanbul",
      postalCode: "34360",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.05,
      longitude: 29.0,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  const webSite: any = {
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: SITE_NAME,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const graph: any[] = [organization, medicalBusiness, webSite];

  if (title) {
    graph.push({
      "@type": "WebPage",
      "@id": `${siteUrl}#webpage`,
      url: siteUrl,
      name: title,
      description: description,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      inLanguage: "tr",
    });
  }

  // Breadcrumbs (opsiyonel)
  if (breadcrumbs && breadcrumbs.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b: Breadcrumb, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    });
  }

  const jsonLd: any = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
