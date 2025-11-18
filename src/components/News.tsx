import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, PenSquare, Globe, TrendingUp, ArrowRight, Clock, Mail, Users, Send, CheckCircle, MessageCircle, Share2, Copy, Info, MessageSquare } from 'lucide-react';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';
import { useAdmin } from './AdminAuth';
import { useChatbot } from './ChatbotContext';
import { newsData as mockNews, type NewsItem} from '../data/newsData';

export function News() {
  const { isAdmin } = useAdmin();
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isNewsDialogOpen, setIsNewsDialogOpen] = useState(false);
  const [isSubscribersDialogOpen, setIsSubscribersDialogOpen] = useState(false);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogCountry, setBlogCountry] = useState('');
  const [blogCategory, setBlogCategory] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscribers, setSubscribers] = useState<string[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Load subscribers from localStorage
  useEffect(() => {
    const storedSubscribers = localStorage.getItem('jioww_news_subscribers');
    if (storedSubscribers) {
      setSubscribers(JSON.parse(storedSubscribers));
    }
  }, []);

  // Check if current email is already subscribed
  useEffect(() => {
    if (subscriberEmail) {
      setIsSubscribed(subscribers.includes(subscriberEmail.toLowerCase()));
    }
  }, [subscriberEmail, subscribers]);

  // Function to update meta tags for social sharing
  const updateMetaTags = (news: NewsItem | null) => {
    const baseUrl = window.location.origin + window.location.pathname;
    
    if (news) {
      // Update document title
      document.title = `${news.title} | JioWW Global Immigration News`;
      
      // Update or create meta tags
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
      updateMetaTag('og:title', news.title);
      updateMetaTag('og:description', news.description.substring(0, 200) + '...');
      updateMetaTag('og:image', news.image + '&w=1200&h=630&fit=crop');
      updateMetaTag('og:image:width', '1200');
      updateMetaTag('og:image:height', '630');
      updateMetaTag('og:url', `${baseUrl}?newsId=${news.id}#news`);
      updateMetaTag('og:type', 'article');
      updateMetaTag('og:site_name', 'JioWW Global Immigration News');
      
      // Twitter Card tags
      updateMetaTag('twitter:card', 'summary_large_image', false);
      updateMetaTag('twitter:title', news.title, false);
      updateMetaTag('twitter:description', news.description.substring(0, 200) + '...', false);
      updateMetaTag('twitter:image', news.image + '&w=1200&h=630&fit=crop', false);
      
      // Additional meta tags
      updateMetaTag('description', news.description.substring(0, 160) + '...', false);
    } else {
      // Reset to default meta tags
      document.title = 'Latest Immigration News | JioWW Global';
      
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

      updateMetaTag('og:title', 'Latest Immigration News - JioWW Global');
      updateMetaTag('og:description', 'Stay updated with the latest immigration news, visa updates, and PR programs from Canada, Australia, Germany, and European countries.');
      updateMetaTag('og:image', 'https://images.unsplash.com/photo-1626449569473-462035785765?w=1200');
      updateMetaTag('og:url', baseUrl);
      updateMetaTag('og:type', 'website');
      
      updateMetaTag('twitter:card', 'summary_large_image', false);
      updateMetaTag('twitter:title', 'Latest Immigration News - JioWW Global', false);
      updateMetaTag('twitter:description', 'Stay updated with the latest immigration news, visa updates, and PR programs.', false);
      updateMetaTag('twitter:image', 'https://images.unsplash.com/photo-1626449569473-462035785765?w=1200', false);
    }
  };

  // Check URL for newsId parameter and auto-open that news
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('newsId');
    
    if (newsId) {
      const news = mockNews.find(n => n.id === parseInt(newsId));
      if (news) {
        setSelectedNews(news);
        updateMetaTags(news);
        // Small delay to ensure component is mounted
        setTimeout(() => {
          setIsNewsDialogOpen(true);
        }, 100);
      }
    } else {
      updateMetaTags(null);
    }
  }, []);

  const countries = ['All', 'Canada', 'Australia', 'Germany', 'United Kingdom', 'New Zealand', 'Slovenia', 'Malta', 'Croatia'];

  const filteredNews = selectedCountry === 'all' 
    ? mockNews 
    : mockNews.filter(news => news.country.toLowerCase() === selectedCountry.toLowerCase());

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    const email = subscriberEmail.toLowerCase().trim();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    if (!email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    if (subscribers.includes(email)) {
      toast.info('You are already subscribed to our newsletter!');
      return;
    }
    
    const updatedSubscribers = [...subscribers, email];
    setSubscribers(updatedSubscribers);
    localStorage.setItem('jioww_news_subscribers', JSON.stringify(updatedSubscribers));
    
    toast.success('Successfully subscribed! You will receive immigration news updates.');
    setSubscriberEmail('');
  };

  const handleSubmitBlog = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send to a backend
    toast.success('News article published successfully!');
    
    // Reset form
    setBlogTitle('');
    setBlogCountry('');
    setBlogCategory('');
    setBlogContent('');
    setIsDialogOpen(false);
  };

  const handleOpenNewsDialog = (news: NewsItem) => {
    setSelectedNews(news);
    updateMetaTags(news);
    setIsNewsDialogOpen(true);
    
    // Update URL with newsId for social sharing
    const newUrl = `${window.location.pathname}?newsId=${news.id}#news`;
    window.history.pushState({}, '', newUrl);
  };

  const handleCloseNewsDialog = () => {
    setIsNewsDialogOpen(false);
    setSelectedNews(null);
    updateMetaTags(null);
    
    // Remove newsId from URL
    window.history.pushState({}, '', window.location.pathname);
  };

  const handleShareNews = async (news: NewsItem) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?newsId=${news.id}#news`;
    const shareText = `${news.title} - ${news.description.substring(0, 100)}...`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: news.title,
          text: shareText,
          url: shareUrl
        });
        toast.success('Shared successfully!');
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          // Fallback to copying link
          await navigator.clipboard.writeText(shareUrl);
          toast.success('Link copied to clipboard!');
        }
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Link copied to clipboard!');
    }
  };

  const handleStartChatAboutNews = (news: NewsItem) => {
    const { openChat } = useChatbot();
    const message = `I want to know more about this news: ${news.title}. Can you provide more details?`;
    openChat(message);
    // Close the news dialog when starting chat
    setIsNewsDialogOpen(false);
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Work Permit': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Study Visa': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Blue Collar': return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      case 'Canada PR': return 'bg-red-500/10 text-red-600 border-red-500/20';
      case 'Australia PR': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'Policy Update': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4"
      style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(217, 174, 102, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(217, 174, 102, 0.1) 0%, transparent 50%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-amber-500/10 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Latest Immigration Updates</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white via-primary to-amber-500 bg-clip-text text-transparent">
            Immigration News & Updates
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay informed with the latest immigration news, policy updates, and opportunities from around the world
          </p>
        </motion.div>

        {/* Country Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {countries.map((country) => (
            <Button
              key={country}
              onClick={() => setSelectedCountry(country.toLowerCase())}
              variant={selectedCountry === country.toLowerCase() ? 'default' : 'outline'}
              className={`
                ${selectedCountry === country.toLowerCase() 
                  ? 'bg-gradient-to-r from-primary to-amber-500 text-black border-none' 
                  : 'border-primary/20 text-primary hover:bg-primary/10'
                }
              `}
            >
              <Globe className="w-4 h-4 mr-2" />
              {country}
            </Button>
          ))}
        </motion.div>

        {/* Admin Post Blog Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex justify-center gap-4">
            {isAdmin && (
              <>
           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-primary to-amber-600 text-white hover:shadow-lg hover:shadow-primary/50">
                <PenSquare className="w-4 h-4 mr-2" />
                Post New Article
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Post New Immigration News Article</DialogTitle>
                <DialogDescription>
                  Share the latest immigration news and updates with your audience
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmitBlog} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Article Title *</Label>
                  <Input
                    id="title"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    placeholder="e.g., Canada Express Entry Draw Results"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select value={blogCountry} onValueChange={setBlogCountry} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Canada">Canada</SelectItem>
                        <SelectItem value="Australia">Australia</SelectItem>
                        <SelectItem value="Germany">Germany</SelectItem>
                        <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                        <SelectItem value="New Zealand">New Zealand</SelectItem>
                        <SelectItem value="Slovenia">Slovenia</SelectItem>
                        <SelectItem value="Malta">Malta</SelectItem>
                        <SelectItem value="Croatia">Croatia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={blogCategory} onValueChange={setBlogCategory} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Canada PR">Canada PR</SelectItem>
                        <SelectItem value="Australia PR">Australia PR</SelectItem>
                        <SelectItem value="Work Permit">Work Permit</SelectItem>
                        <SelectItem value="Blue Collar">Blue Collar (Gulf Only)</SelectItem>
                        <SelectItem value="Study Visa">Study Visa</SelectItem>
                        <SelectItem value="Policy Update">Policy Update</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Article Content *</Label>
                  <Textarea
                    id="content"
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                    placeholder="Write your news article here..."
                    className="min-h-[200px]"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Write detailed information about the immigration news. Include key points, requirements, and how JioWW Global can assist.
                  </p>
                </div>

                <div className="flex justify-end gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-amber-600 text-white"
                  >
                    Submit Blog
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
              </>
            )}
          </div>
        </motion.div>

        {/* Newsletter Subscription & WhatsApp Channel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-primary/5 via-amber-500/5 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl mb-2 bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
                  Stay Updated with Immigration News
                </h3>
                <p className="text-gray-600">
                  Choose your preferred way to receive the latest immigration updates, policy changes, and opportunities
                </p>
              </div>

              {/* Two Options Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email Newsletter */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary/50 transition-all hover:shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-primary to-amber-600 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
                        Email Newsletter
                      </h4>
                      <p className="text-sm text-gray-500">Get updates in your inbox</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={subscriberEmail}
                      onChange={(e) => setSubscriberEmail(e.target.value)}
                      required
                      className="border-gray-300 focus:border-primary"
                    />
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-amber-600 text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Subscribe Now
                    </Button>
                  </form>

                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Free • Unsubscribe anytime</span>
                  </div>
                </div>

                {/* WhatsApp Channel */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary/50 transition-all hover:shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-green-600 to-green-500 p-3 rounded-full">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                        WhatsApp Channel
                      </h4>
                      <p className="text-sm text-gray-500">Instant updates on WhatsApp</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Join our official WhatsApp Channel for instant immigration news, visa updates, and exclusive opportunities.
                    </p>
                    <a
                      href="https://whatsapp.com/channel/0029VbAFelFATRStsOkviq3Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button 
                        type="button"
                        className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white hover:shadow-lg hover:shadow-green-500/50 transition-all"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Join WhatsApp Channel
                      </Button>
                    </a>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Real-time updates • Direct to your phone</span>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  💡 <span className="font-medium">Pro Tip:</span> Subscribe to both to never miss important immigration updates!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* News Grid - Compact */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card 
                className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-primary/50 group overflow-hidden"
              >
                {/* News Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 bg-white/90 hover:bg-white hover:text-primary backdrop-blur-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShareNews(news);
                      }}
                      title="Copy shareable link"
                    >
                      <Share2 className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 left-2 flex items-center gap-1">
                    <Badge 
                      variant="outline" 
                      className={`${getCategoryColor(news.category)} border text-xs px-2 py-0 bg-white/90 backdrop-blur-sm`}
                    >
                      {news.category}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-xs px-2 py-0">
                      {news.country}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="p-3 pb-2">
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2 text-sm leading-tight min-h-[2.8rem]">
                    {news.title}
                  </CardTitle>
                  
                  <CardDescription className="flex items-center gap-1 text-xs mt-1">
                    <Clock className="w-3 h-3" />
                    {new Date(news.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric'
                    })}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-3 pt-0">
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2 leading-relaxed">
                    {news.description}
                  </p>
                  
                  <Dialog open={isNewsDialogOpen && selectedNews?.id === news.id} onOpenChange={(open) => {
                    setIsNewsDialogOpen(open);
                    if (!open) {
                      setSelectedNews(null);
                      updateMetaTags(null);
                      window.history.pushState({}, '', window.location.pathname);
                    }
                  }}>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full text-xs bg-gradient-to-r from-primary to-amber-600 text-white hover:shadow-lg hover:shadow-primary/30"
                        size="sm"
                      >
                        Read Full Article
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getCategoryColor(news.category)}>
                            {news.category}
                          </Badge>
                          <Badge variant="secondary">{news.country}</Badge>
                        </div>
                        <DialogTitle className="text-2xl pr-8">{news.title}</DialogTitle>
                        <DialogDescription className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(news.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Info className="w-4 h-4" />
                            {news.source}
                          </span>
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <div className="relative h-64 rounded-lg overflow-hidden">
                          <img 
                            src={news.image} 
                            alt={news.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="prose prose-sm max-w-none">
                          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {news.description}
                          </p>
                        </div>

                        <div className="border-t pt-6 space-y-4">
                          <h4 className="font-semibold text-lg">Share this article</h4>
                          <div className="flex gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleShareNews(news)}
                              className="flex-1"
                            >
                              <Share2 className="w-4 h-4 mr-2" />
                              Share Link
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleStartChatAboutNews(news)}
                              className="flex-1 bg-gradient-to-r from-primary/10 to-amber-500/10 border-primary/20"
                            >
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Ask About This
                            </Button>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-lg p-6 border border-primary/20">
                          <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                            <Users className="w-5 h-5 text-primary" />
                            Need Assistance?
                          </h4>
                          <p className="text-gray-700 mb-4">
                            JioWW Global provides expert guidance and advisory services for {news.country} immigration programs. 
                            Contact our consultants for personalized assistance.
                          </p>
                          <div className="flex gap-3">
                            <Button 
                              className="bg-gradient-to-r from-primary to-amber-600 text-white"
                              onClick={() => {
                                window.location.href = '#contact';
                                setIsNewsDialogOpen(false);
                              }}
                            >
                              Contact Us
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => handleStartChatAboutNews(news)}
                            >
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Chat Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* News Dialog for Detail View */}
        <Dialog open={isNewsDialogOpen && selectedNews !== null} onOpenChange={(open) => {
          if (!open) {
            handleCloseNewsDialog();
          }
        }}>
          <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
            {selectedNews && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getCategoryColor(selectedNews.category)}>
                      {selectedNews.category}
                    </Badge>
                    <Badge variant="secondary">{selectedNews.country}</Badge>
                  </div>
                  <DialogTitle className="text-2xl pr-8">{selectedNews.title}</DialogTitle>
                  <DialogDescription className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(selectedNews.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Info className="w-4 h-4" />
                      {selectedNews.source}
                    </span>
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src={selectedNews.image} 
                      alt={selectedNews.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="prose prose-sm max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedNews.description}
                    </p>
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <h4 className="font-semibold text-lg">Share this article</h4>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShareNews(selectedNews)}
                        className="flex-1"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Link
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleStartChatAboutNews(selectedNews)}
                        className="flex-1 bg-gradient-to-r from-primary/10 to-amber-500/10 border-primary/20"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Ask About This
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-lg p-6 border border-primary/20">
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Need Assistance?
                    </h4>
                    <p className="text-gray-700 mb-4">
                      JioWW Global provides expert guidance and advisory services for {selectedNews.country} immigration programs. 
                      Contact our consultants for personalized assistance.
                    </p>
                    <div className="flex gap-3">
                      <Button 
                        className="bg-gradient-to-r from-primary to-amber-600 text-white"
                        onClick={() => {
                          window.location.href = '#contact';
                          setIsNewsDialogOpen(false);
                        }}
                      >
                        Contact Us
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleStartChatAboutNews(selectedNews)}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Chat Now
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}