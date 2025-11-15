import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface NewsMetaGeneratorProps {
  newsId?: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const NewsMetaGenerator: React.FC<NewsMetaGeneratorProps> = ({
  newsId,
  title,
  description,
  image,
  url
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title} | JioWW Global Immigration News</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="JioWW Global Immigration" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* WhatsApp (uses Open Graph) */}
      <meta property="og:image:alt" content={title} />
    </Helmet>
  );
};
