import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title = 'JioWW Global - Immigration & Work Permit Consultancy | Dubai & India',
  description = 'Expert immigration consultancy for Canada & Australia PR, European work permits (Slovenia, Malta, Croatia, Germany), and study visa services. Offices in Dubai & India.',
  image = 'https://images.unsplash.com/photo-1626449569473-462035785765?w=1200&h=630&fit=crop',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    const updateMetaTag = (property: string, content: string, isProperty = true) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);
    updateMetaTag('og:site_name', 'JioWW Global');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', false);
    updateMetaTag('twitter:title', title, false);
    updateMetaTag('twitter:description', description, false);
    updateMetaTag('twitter:image', image, false);
    
    // Standard meta tags
    updateMetaTag('description', description, false);
    
    // SEO meta tags for Google indexing
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1', false);
    updateMetaTag('googlebot', 'index, follow', false);
    updateMetaTag('bingbot', 'index, follow', false);
    updateMetaTag('author', 'JioWW Global Immigration Consultancy', false);
    updateMetaTag('keywords', 'immigration consultancy, Canada PR, Australia PR, Malta work permit, Croatia work permit, Slovenia work permit, Germany skilled worker, study visa, work visa, Dubai immigration, Gulf candidates', false);
    
    // Additional meta tags to prevent noindex
    updateMetaTag('referrer', 'origin-when-cross-origin', false);
    updateMetaTag('format-detection', 'telephone=no', false);
    
    // Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = url || window.location.href;
      document.head.appendChild(link);
    } else {
      canonicalLink.href = url || window.location.href;
    }
    
    // WhatsApp specific (uses Open Graph)
    updateMetaTag('og:image:width', '1200');
    updateMetaTag('og:image:height', '630');
  }, [title, description, image, url, type]);

  return null;
};