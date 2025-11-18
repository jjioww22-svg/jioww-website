import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProfessionalCategories } from './components/ProfessionalCategories';
import { Services } from './components/Services';
import { StudyVisaServices } from './components/StudyVisaServices';
import { VisitorVisaServices } from './components/VisitorVisaServices';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { News } from './components/News';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/WhatsAppChat';
import { AIChatbot } from './components/AIChatbot';
import { SocialMediaBar } from './components/SocialMediaBar';
import { AdminProvider, AdminButton } from './components/AdminAuth';
import { ChatbotProvider, useChatbot } from './components/ChatbotContext';
import { MetaTags } from './components/MetaTags';
import { StructuredData } from './components/StructuredData';
import { newsData } from './data/newsData';
import { useEffect, useState } from 'react';

function AppContent() {
  const { isOpen, setIsOpen, initialMessage } = useChatbot();
  const [newsMetaData, setNewsMetaData] = useState<{
    title: string;
    description: string;
    image: string;
    url: string;
  } | null>(null);

  // Check for newsId in URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('newsId');
    
    if (newsId) {
      const newsArticle = newsData.find(item => item.id === parseInt(newsId));
      if (newsArticle) {
        // Create first 150 characters of description for meta
        const metaDescription = newsArticle.description.substring(0, 150) + '...';
        
        setNewsMetaData({
          title: `${newsArticle.title} | JioWW Global Immigration News`,
          description: metaDescription,
          image: newsArticle.image,
          url: window.location.href
        });
      }
    } else {
      setNewsMetaData(null);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {newsMetaData ? (
        <MetaTags 
          title={newsMetaData.title}
          description={newsMetaData.description}
          image={newsMetaData.image}
          url={newsMetaData.url}
          type="article"
        />
      ) : (
        <MetaTags />
      )}
      <StructuredData />
      <SocialMediaBar />
      <Header />
      <main>
        <Hero />
        <ProfessionalCategories />
        <Services />
        <StudyVisaServices />
        <VisitorVisaServices />
        <Testimonials />
        <About />
        <Contact />
        <News />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <AIChatbot isOpen={isOpen} onOpenChange={setIsOpen} initialMessage={initialMessage} />
      <AdminButton />
    </div>
  );
}

export default function App() {
  return (
    <AdminProvider>
      <ChatbotProvider>
        <AppContent />
      </ChatbotProvider>
    </AdminProvider>
  );
}