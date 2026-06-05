
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/lovable-uploads/logo_clinica.png",
  schema,
}: SEOProps) => {
  const fullTitle = `${title} | Clínica PlanVida — Redenção PA`;
  const siteUrl = "https://www.clinicaplanvida.com.br";
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Clínica PlanVida",
    url: siteUrl,
    telephone: "+55-94-99296-1300",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Evangelizadora Neusa Dourado, 226",
      addressLocality: "Redenção",
      addressRegion: "PA",
      postalCode: "68553-200",
      addressCountry: "BR",
    },
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
    sameAs: [
      "https://www.instagram.com/clinicaplanvida/",
      "https://www.facebook.com/clinicaplanvida/",
    ],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:locale" content="pt_BR" />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schema ?? orgSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
