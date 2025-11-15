import { useEffect } from 'react';

export const StructuredData = () => {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "JioWW Global",
      "alternateName": "JioWW Global Immigration Consultancy",
      "url": "https://www.jioww.com",
      "logo": "https://www.jioww.com/logo.png",
      "description": "Expert immigration consultancy specializing in Canada & Australia PR programs, European work permits (Slovenia, Malta, Croatia, Germany), and study visa services.",
      "address": [
        {
          "@type": "PostalAddress",
          "addressCountry": "AE",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai"
        },
        {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressLocality": "India"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+971-XX-XXX-XXXX",
          "contactType": "Customer Service",
          "areaServed": ["AE", "IN"],
          "availableLanguage": ["English", "Hindi", "Arabic"]
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/jioww-global",
        "https://www.facebook.com/jiowwglobal",
        "https://www.instagram.com/jiowwglobal",
        "https://twitter.com/jiowwglobal"
      ]
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Immigration Consultancy",
      "provider": {
        "@type": "Organization",
        "name": "JioWW Global"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Canada"
        },
        {
          "@type": "Country",
          "name": "Australia"
        },
        {
          "@type": "Country",
          "name": "Slovenia"
        },
        {
          "@type": "Country",
          "name": "Malta"
        },
        {
          "@type": "Country",
          "name": "Croatia"
        },
        {
          "@type": "Country",
          "name": "Germany"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Immigration Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Canada Permanent Residency (PR)",
              "description": "Expert guidance for Canada PR through Express Entry, Provincial Nominee Programs, and Canadian Experience Class"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Australia Permanent Residency (PR)",
              "description": "Skilled Migration programs including Subclass 189, 190, and 491 for Australia PR"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Malta Work Permit (Gulf Candidates Only)",
              "description": "Work permits for Gulf-based candidates in hospitality, trade professions, and operators"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Croatia Work Permit (Gulf Candidates Only)",
              "description": "Work permits for Gulf-based candidates in hospitality, trade professions, and operators"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Slovenia Work Permit (Gulf Candidates Only)",
              "description": "Work permits for Gulf-based truck drivers and welders"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Germany Skilled Worker Program",
              "description": "Comprehensive guidance for Germany skilled worker visa - open to all candidates"
            }
          }
        ]
      }
    };

    // Professional Service Schema
    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "JioWW Global Immigration Consultancy",
      "image": "https://www.jioww.com/logo.png",
      "description": "Leading immigration consultancy and recruitment advisor specializing in permanent residency programs and European work permits",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressLocality": "Dubai"
      }
    };

    // LocalBusiness Schema for Dubai Office
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "JioWW Global - Dubai Office",
      "image": "https://www.jioww.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "url": "https://www.jioww.com",
      "telephone": "+971-XX-XXX-XXXX",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      ]
    };

    // Add schemas to head
    const addSchema = (schema: object, id: string) => {
      let scriptTag = document.getElementById(id) as HTMLScriptElement;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = id;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    };

    addSchema(organizationSchema, 'organization-schema');
    addSchema(serviceSchema, 'service-schema');
    addSchema(professionalServiceSchema, 'professional-service-schema');
    addSchema(localBusinessSchema, 'local-business-schema');
  }, []);

  return null;
};
