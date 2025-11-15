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

function AppContent() {
  const { isOpen, setIsOpen, initialMessage } = useChatbot();

  return (
    <div className="min-h-screen bg-background">
      <MetaTags />
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