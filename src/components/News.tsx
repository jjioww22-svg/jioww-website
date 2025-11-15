import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, PenSquare, Globe, TrendingUp, ArrowRight, Clock, Mail, Users, Send, CheckCircle, MessageCircle, Share2, Copy } from 'lucide-react';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';
import { useAdmin } from './AdminAuth';
import { useChatbot } from './ChatbotContext';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  country: string;
  date: string;
  category: 'Work Permit' | 'Study Visa' | 'Blue Collar' | 'Canada PR' | 'Australia PR';
  source: string;
  image: string;
}

const mockNews: NewsItem[] = [
  {
    id: 22,
    title: "Canada Tech Talent Stream 2025: New Fast-Track Program for Software Engineers & Data Scientists",
    description: "Immigration, Refugees and Citizenship Canada (IRCC) launches dedicated Tech Talent Stream with ultra-fast processing for software engineers, data scientists, AI/ML specialists, and cloud architects. Applications are processed within 10 business days with streamlined requirements. Tech professionals with employment offers from designated Canadian tech companies can receive work permits without LMIA requirements. The program offers direct pathway to permanent residence through category-based Express Entry draws. Minimum salary threshold set at CAD $80,000 for software engineers and CAD $90,000 for AI specialists. Spouse receives open work permit and children get study permits. Major Canadian tech hubs Toronto, Vancouver, Montreal, and Ottawa are actively recruiting global talent. Companies like Shopify, RBC, TD Bank, and hundreds of tech startups are participating employers. JioWW Global provides complete Tech Talent Stream application support including employer matching and family visa coordination for qualified tech professionals worldwide.",
    country: "Canada",
    date: "2025-11-13",
    category: "Canada PR",
    source: "Immigration, Refugees and Citizenship Canada (IRCC)",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFscyUyMG9mZmljZSUyMGNvZGluZ3xlbnwxfHx8fDE3NjIzMzgyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 23,
    title: "Australia Healthcare Worker Priority: Nurses & Aged Care Workers Direct PR Pathway November 2025",
    description: "Australian Government announces priority permanent residence pathway for registered nurses, enrolled nurses, and aged care workers in response to critical healthcare workforce shortages. Over 4,000 invitations issued monthly through dedicated SkillSelect rounds for healthcare occupations. The priority pathway includes reduced English language requirements (IELTS 6.5 overall instead of 7.0), waived work experience requirements for newly graduated nurses, and direct state nomination from Victoria, NSW, Queensland, and South Australia. Nurses from Philippines, India, Nepal, Sri Lanka, and other Asian countries with nursing qualifications are especially encouraged. Skills assessment through ANMAC (Australian Nursing and Midwifery Accreditation Council) can be completed remotely. Starting salaries for registered nurses range from AUD $70,000 to $95,000 with excellent benefits and career progression. Family members receive full residence rights. JioWW Global specializes in healthcare worker migration including ANMAC skills assessment guidance and complete visa application support.",
    country: "Australia",
    date: "2025-11-12",
    category: "Australia PR",
    source: "Department of Home Affairs Australia",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGhlYWx0aGNhcmUlMjBob3NwaXRhbHxlbnwxfHx8fDE3NjIzMzgyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 24,
    title: "Germany Vocational Training Visa: New Pathway for Blue Collar Workers Worldwide - Open to All",
    description: "Germany introduces revolutionary Vocational Training Visa allowing candidates from all countries (not Gulf-restricted) to enter Germany for vocational training (Ausbildung) in critical shortage trades. The 3-year training programs combine classroom instruction with paid on-the-job training in professions including industrial mechanics, CNC operators, hospitality specialists, elderly care workers, and logistics coordinators. Trainees receive monthly stipends ranging from €800 to €1,200 during training with full health insurance and accommodation support. German language requirement is only A2 level at application, with language courses provided during training. After completing Ausbildung, graduates receive work permits and clear pathway to permanent settlement. No university degree required - completion of secondary school is sufficient. This program is ideal for young professionals aged 18-35 from India, Pakistan, Philippines, Vietnam, and other countries seeking European career opportunities. JioWW Global provides complete Ausbildung program application support including training placement and visa processing for global candidates.",
    country: "Germany",
    date: "2025-11-11",
    category: "Work Permit",
    source: "German Federal Employment Agency",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2NhdGlvbmFsJTIwdHJhaW5pbmclMjBza2lsbGVkJTIwd29ya2VyfGVufDF8fHx8MTc2MjMzODI2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 25,
    title: "Malta Permanent Residence Programme 2025",
    description: "Malta announces updated Permanent Residence Programme (MPRP) offering permanent EU residence for investors and their families. The program requires real estate investment of €300,000 (southern Malta/Gozo) or €350,000 (northern Malta) plus administrative fees of €40,000. Alternatively, property rental (minimum €10,000/year in south, €12,000/year in north) combined with donation of €58,000 to government fund. Successful applicants receive Malta permanent residence cards valid for life, allowing visa-free travel throughout Schengen zone. No minimum stay requirement after initial formalities. Malta offers English as official language, excellent Mediterranean climate, top-tier international schools, and strategic location for European business. Processing time is 4-6 months for complete applications. Spouses, dependent children, and dependent parents can be included. No tax on foreign-sourced income for non-domiciled residents under Malta tax regime. JioWW Global provides complete MPRP application support for qualified investors from UAE, India, Pakistan, and worldwide.",
    country: "Malta",
    date: "2025-11-10",
    category: "Work Permit",
    source: "Identity Malta Agency",
    image: "https://images.unsplash.com/photo-1520099867462-c0ce8668d9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWx0YSUyMGx1eHVyeSUyMHByb3BlcnR5JTIwcmVzaWRlbmNlfGVufDF8fHx8MTc2MjMzODI2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 26,
    title: "Croatia Digital Nomad Visa Extended: Remote Workers from Anywhere Can Live & Work in EU",
    description: "Croatia extends and enhances its Digital Nomad Visa program for 2025, allowing remote workers from non-EU countries to live and work in Croatia for up to 12 months (renewable). The visa is open to freelancers, remote employees, and business owners who work for companies outside Croatia. Minimum income requirement is €2,300 per month with proof of remote employment or client contracts. Croatia offers stunning Adriatic coastline, affordable cost of living (30-50% cheaper than Western Europe), excellent internet infrastructure, and growing digital nomad communities in Zagreb, Split, and Dubrovnik. Digital nomad residents pay no Croatian income tax on foreign-sourced income. Visa processing takes 15-30 days with straightforward documentation requirements. Spouses and children can accompany visa holders. After residency period, nomads can transition to business immigration programs if establishing Croatian operations. The program attracts tech professionals, designers, writers, consultants, and online entrepreneurs from USA, India, Philippines, and worldwide seeking European lifestyle with work flexibility. JioWW Global assists with Digital Nomad visa applications and Croatian residence setup.",
    country: "Croatia",
    date: "2025-11-09",
    category: "Work Permit",
    source: "Croatia Ministry of Interior",
    image: "https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbm9tYWQlMjByZW1vdGUlMjB3b3JrJTIwbGFwdG9wfGVufDF8fHx8MTc2MjMzODI2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 27,
    title: "Slovenia EU Blue Card for Highly Skilled: Open to Global Professionals Beyond Gulf Candidates",
    description: "Slovenia announces expansion of EU Blue Card program welcoming highly skilled professionals from all countries worldwide, not restricted to Gulf candidates. The program targets university graduates and experienced professionals in IT, engineering, finance, healthcare, and management with employment contracts offering minimum annual salary of €37,000. EU Blue Card provides fast-track permanent residence after 21 months (instead of standard 5 years) and unlimited mobility across EU member states. Spouses receive open work permits and children get education rights. Slovenia offers strategic location in heart of Europe, excellent quality of life, beautiful Alpine scenery, and growing startup ecosystem in Ljubljana. English widely spoken in professional environments. Processing time for EU Blue Card is 30-45 days with straightforward documentation. Recognition of qualifications handled through streamlined process. After obtaining Slovenian Blue Card, holders can work in other EU countries under favorable conditions. This represents excellent opportunity for Indian, Pakistani, Filipino, Chinese, and other Asian professionals seeking European career and residence. JioWW Global provides comprehensive EU Blue Card application support including employer matching and family visa coordination.",
    country: "Slovenia",
    date: "2025-11-08",
    category: "Work Permit",
    source: "Slovenia Employment Service",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyMzM4MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 16,
    title: "Canada Announces 2026 Immigration Levels Plan: 500,000 Permanent Residents",
    description: "Immigration, Refugees and Citizenship Canada (IRCC) releases the 2026-2028 Immigration Levels Plan with ambitious targets. The plan aims to welcome 500,000 permanent residents in 2026, focusing heavily on economic immigration through Express Entry, Provincial Nominee Programs, and Canadian Experience Class. This represents a 3% increase from 2025 levels. Economic class immigration will account for 60% of total admissions with increased allocations for tech workers, healthcare professionals, and skilled trades. The plan emphasizes French-speaking candidates outside Quebec, with dedicated streams receiving boosted processing. Regional immigration programs receive enhanced support with dedicated settlement funding. Family reunification and humanitarian programs maintain strong levels. For candidates from India, Pakistan, Philippines, Nigeria, and other high-volume source countries, this means continued strong opportunities through proven pathways. JioWW Global advises early preparation including language testing, credential assessment, and Express Entry profile optimization to maximize selection chances.",
    country: "Canada",
    date: "2025-11-05",
    category: "Canada PR",
    source: "Immigration, Refugees and Citizenship Canada (IRCC)",
    image: "https://images.unsplash.com/photo-1637783038917-c8d883362ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGElMjBpbW1pZ3JhdGlvbiUyMGZsYWclMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjIzMzgyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 17,
    title: "Malta Trade Operators Work Permits: Expanded Gulf Recruitment for Construction & Manufacturing",
    description: "Malta Employment Authority announces significant expansion of trade operator work permit program with exclusive priority for Gulf-based candidates. The program now includes construction workers (masons, carpenters, steel fixers), manufacturing operators, and maintenance technicians alongside existing hospitality positions. Candidates from UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman with minimum 2 years Gulf experience receive priority processing within 25-30 days. Monthly gross salaries range from €1,500 to €2,300 depending on profession and experience, with overtime opportunities available. Employers provide comprehensive benefits including accommodation support, health insurance under EU standards, and paid annual leave. Malta's strategic Mediterranean location offers excellent quality of life with English as official language. After 5 years continuous residence, workers qualify for long-term EU residence permit. JioWW Global exclusively handles Malta work permit applications for Gulf candidates only in hospitality, trade professions, and operator categories.",
    country: "Malta",
    date: "2025-11-04",
    category: "Blue Collar",
    source: "Malta Employment Authority",
    image: "https://images.unsplash.com/photo-1617536428530-10a6c64abfc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWx0YSUyMGNvbnN0cnVjdGlvbiUyMHdvcmtlcnN8ZW58MXx8fHwxNzYyMzM4MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 18,
    title: "Germany IT Sector Fast-Track: Accelerated Visa Processing for Tech Professionals",
    description: "Germany announces accelerated visa processing initiative for IT and technology professionals from all countries under the Skilled Worker Immigration Act. Software developers, data scientists, cloud architects, cybersecurity specialists, and IT project managers can now receive work permits within 14 working days through designated fast-track processing centers. The program is open to qualified candidates worldwide, not restricted to Gulf countries. Key requirements include recognized university degree in computer science or related field, minimum 2 years professional experience, and employment contract with German employer. English language proficiency (B2 level) is accepted for IT sector instead of German language requirement. Starting salaries for IT professionals range from €45,000 to €75,000 annually depending on experience and specialization. Germany faces shortage of 150,000 IT professionals, creating exceptional opportunities. Family members can accompany visa holders with full residence rights. JioWW Global provides comprehensive Germany IT visa services including CV optimization, employer matching, and complete application management for global candidates.",
    country: "Germany",
    date: "2025-11-03",
    category: "Work Permit",
    source: "German Federal Ministry of Labour and Social Affairs",
    image: "https://images.unsplash.com/photo-1583737226513-515e5a9f24f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW55JTIwZmFjdG9yeSUyMHNraWxsZWQlMjB3b3JrZXJzfGVufDF8fHx8MTc2MjMzODI2MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 19,
    title: "Australia SkillSelect November Invitations: Strong Demand for Healthcare & Engineering",
    description: "Australia Department of Home Affairs issues November 2025 SkillSelect invitations with increased focus on healthcare workers and engineers. Over 2,500 invitations issued for Subclass 189 (Skilled Independent) and 190 (Skilled Nominated) visas with points threshold at 70+ for most occupations. Registered nurses, civil engineers, software engineers, and electricians receive priority processing. State nomination programs from Victoria, New South Wales, Queensland, and Western Australia conduct weekly rounds targeting shortage occupations. The invitation round reflects Australia's critical need for skilled workers in post-pandemic economic recovery phase. Candidates with competent English (IELTS 6.0 each), positive skills assessment, and age under 45 years have strong prospects. Points can be boosted through additional qualifications, partner skills, regional study, or state nomination. JioWW Global specializes in SkillSelect profile optimization, state nomination strategy, and complete visa application management for Indian, Pakistani, Filipino, Sri Lankan, and other Asian skilled professionals seeking Australian permanent residence.",
    country: "Australia",
    date: "2025-11-02",
    category: "Australia PR",
    source: "Department of Home Affairs Australia",
    image: "https://images.unsplash.com/photo-1530230624258-4055a187ef65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdXN0cmFsaWElMjBza2lsbGVkJTIwbWlncmF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTc2MjMzODI2MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 20,
    title: "Slovenia & Croatia Joint Initiative: Priority Processing for Gulf-Based Blue Collar Workers",
    description: "Slovenia and Croatia launch coordinated blue collar immigration initiative with fast-track processing exclusively for Gulf-based candidates in critical shortage occupations. Slovenia focuses on truck drivers (C+E license holders) and certified welders while Croatia prioritizes hospitality workers (chefs, waiters, hotel staff) and skilled trade operators. Candidates from UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman with current or recent Gulf employment receive priority processing within 20-30 days. Both countries offer comprehensive packages including employment contracts meeting EU standards, accommodation assistance, health insurance, and clear pathways to permanent residence after 5 years. Slovenia's expanding logistics sector and Croatia's booming tourism industry create strong sustained demand. Monthly net salaries range from €1,600 to €2,500 with additional benefits. Both countries provide residence permits allowing travel throughout Schengen zone. JioWW Global exclusively handles Slovenia and Croatia work permit applications for Gulf candidates only in specified blue collar professions.",
    country: "Croatia",
    date: "2025-11-01",
    category: "Blue Collar",
    source: "Slovenia Employment Service & Croatia Ministry of Labour",
    image: "https://images.unsplash.com/photo-1657093488123-09c79cff3f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDcm9hdGlhJTIwdG91cmlzbSUyMGNvYXN0YWwlMjB3b3JrZXJzfGVufDF8fHx8MTc2MjMzODI2MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 21,
    title: "Canada Federal Skilled Trades Program: Expanded Occupations List for 2026",
    description: "Canada expands Federal Skilled Trades Program (FSTP) with additional occupations for 2026, creating new pathways for tradespersons to permanent residence without job offers in specific provinces. Newly added trades include HVAC technicians, industrial electricians, heavy equipment operators, and construction millwrights. The program requires 2 years work experience in eligible trade, Canadian Language Benchmark (CLB) 5 in speaking/listening and CLB 4 in reading/writing, and qualifying trade certification or job offer. Unlike Express Entry general draws, FSTP draws target specific trade occupations with lower CRS requirements, often between 300-400 points. Provinces like Ontario, Alberta, and British Columbia have strong demand for certified tradespersons. The pathway offers faster processing than general skilled worker programs and doesn't require university education. For skilled tradespeople from India, Pakistan, Philippines, Sri Lanka, and other countries with vocational training backgrounds, this represents accessible Canadian PR route. JioWW Global provides trade certification guidance and FSTP application support.",
    country: "Canada",
    date: "2025-10-31",
    category: "Canada PR",
    source: "Immigration, Refugees and Citizenship Canada (IRCC)",
    image: "https://images.unsplash.com/photo-1696583545337-05099b905626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTbG92ZW5pYSUyMGxvZ2lzdGljcyUyMHRyYW5zcG9ydHxlbnwxfHx8fDE3NjIzMzgyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 1,
    title: "Canada Express Entry Draw: 4,000 ITAs Issued at CRS 535",
    description: "Canada's latest Express Entry draw issued 4,000 Invitations to Apply (ITAs) for permanent residence with a Comprehensive Ranking System (CRS) cut-off score of 535, showing a slight decrease from previous draws. This all-program draw brings positive news for skilled workers from India, Pakistan, Bangladesh, and other Asian countries. The federal government reaffirms its commitment to welcoming 485,000 new permanent residents in 2025. With the year-end approaching, IRCC is increasing draw sizes to meet immigration targets. Candidates with strong language scores (CLB 9+), Canadian work experience, or provincial nominations have the best chances. JioWW Global recommends improving your CRS score through additional language tests, education credential assessments, or securing provincial nominations to increase your chances in upcoming draws.",
    country: "Canada",
    date: "2025-10-30",
    category: "Canada PR",
    source: "Immigration, Refugees and Citizenship Canada (IRCC)",
    image: "https://images.unsplash.com/photo-1626449569473-462035785765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGElMjBpbW1pZ3JhdGlvbiUyMG9mZmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIwMTQ1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    title: "Australia Announces 2025-26 Migration Program: 190,000 Places",
    description: "Australia confirms its 2025-26 Migration Program Planning Levels with 190,000 places, maintaining strong focus on skilled migration. The breakdown includes 132,200 Skill stream places and 52,500 Family stream places. Key updates include continued priority for healthcare workers (nurses, aged care workers), engineers, IT professionals, and trades workers. Subclass 189 (Skilled Independent) and 190 (Skilled Nominated) visas remain primary pathways for skilled workers from non-European countries. State nomination programs are actively inviting candidates in critical shortage occupations. The points test threshold remains at 65+ points with recent invitations averaging 70-80 points. JioWW Global provides comprehensive guidance on skills assessment, state nomination strategies, and points optimization for Indian, Pakistani, Filipino, and other Asian skilled professionals.",
    country: "Australia",
    date: "2025-10-29",
    category: "Australia PR",
    source: "Department of Home Affairs Australia",
    image: "https://images.unsplash.com/photo-1667992501579-b6d13aedca18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdXN0cmFsaWElMjBTeWRuZXklMjBza3lsaW5lJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc2MjAxNDU0OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "New Zealand Green List: Updated Priority Occupations for 2025-26",
    description: "New Zealand Immigration announces significant updates to the Green List (Straight to Residence pathway) for 2025-26, adding new priority occupations across healthcare, construction, and engineering sectors. Notable additions include registered nurses (all specialties), midwives, construction project managers, civil engineers, and ICT security specialists. Green List workers and their families can apply directly for residence without needing to hold a work visa first. The Accredited Employer Work Visa (AEWV) pathway also sees improvements with faster processing times (within 10 working days for most applications). Median wage threshold remains at NZD $31.61 per hour. This is excellent news for skilled workers from India, Philippines, South Africa, and other non-European countries seeking NZ residence. JioWW Global provides end-to-end support for Green List applications and employer matching.",
    country: "New Zealand",
    date: "2025-10-28",
    category: "Work Permit",
    source: "Immigration New Zealand",
    image: "https://images.unsplash.com/photo-1691387318911-2ac0f09d9909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBaZWFsYW5kJTIwbGFuZHNjYXBlJTIwbW91bnRhaW58ZW58MXx8fHwxNzYyMDE0NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    title: "Germany Skilled Worker Immigration: Opportunity Card Launched",
    description: "Germany launches its new 'Opportunity Card' (Chancenkarte) allowing skilled workers from non-EU countries to enter Germany for job searching without a prior job offer. This points-based system evaluates qualifications, language skills, work experience, age, and connection to Germany. Successful applicants receive a one-year residence permit to search for employment. Once employed, they can transition to the EU Blue Card or regular work permit. Minimum requirements include recognized qualification or three years' professional experience, basic German (A1) or English (B2) proficiency, and proof of financial means (€1,027/month). This is a game-changer for qualified professionals from India, Pakistan, Turkey, and other Asian countries. Germany's aging workforce creates high demand for engineers, IT professionals, healthcare workers, and skilled trades. JioWW Global assists with Opportunity Card applications and job placement.",
    country: "Germany",
    date: "2025-10-27",
    category: "Work Permit",
    source: "German Federal Ministry of the Interior",
    image: "https://images.unsplash.com/photo-1588790448862-08e654b313ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW55JTIwQmVybGluJTIwY2l0eSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIwMTQ1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    title: "Canada Provincial Nominee Programs: Q4 2025 Record Invitations",
    description: "Canadian provinces issue record numbers of provincial nomination invitations in Q4 2025, with Ontario, British Columbia, Alberta, and Saskatchewan leading the way. PNP nominations add 600 CRS points, virtually guaranteeing Express Entry selection. Ontario's Human Capital Priorities stream conducted major tech draws inviting 1,800+ candidates with NOC codes in software engineering and IT. BC Tech continues weekly draws for technology professionals. Alberta's Opportunity Stream welcomes workers already employed in the province with only 6 months work experience required. Saskatchewan's International Skilled Worker program doesn't require job offers for certain occupations. Manitoba PNP increased allocation by 15% for 2025. For Indian, Pakistani, Filipino, and other non-European skilled workers, PNPs offer the fastest pathway to Canadian PR. JioWW Global specializes in PNP strategy and application support.",
    country: "Canada",
    date: "2025-10-26",
    category: "Canada PR",
    source: "Provincial Nominee Programs",
    image: "https://images.unsplash.com/photo-1632760789223-be06af128e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGElMjBUb3JvbnRvJTIwY2l0eXNjYXBlJTIwZG93bnRvd258ZW58MXx8fHwxNzYyMDE0NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    title: "UK Study Visa: Post-Study Graduate Route Extended to 3 Years",
    description: "The United Kingdom announces extension of the Graduate Route visa from 2 years to 3 years for all degree levels, effective from January 2026 intake onwards. This major policy change makes UK education significantly more attractive for international students from India, Pakistan, Nigeria, Bangladesh, and other non-European countries. The Graduate Route allows students to work in the UK without sponsorship after completing their degrees. PhD graduates continue to receive 3 years as before, but now bachelor's and master's graduates also get 3 years. No salary threshold or skill level restrictions apply during this period. This change aims to compete with Canada and Australia for international talent. Popular courses include business, engineering, computer science, healthcare, and data analytics. JioWW Global provides comprehensive UK student visa guidance from university selection through Graduate Route and Skilled Worker visa transition.",
    country: "United Kingdom",
    date: "2025-10-25",
    category: "Study Visa",
    source: "UK Home Office",
    image: "https://images.unsplash.com/photo-1735613981582-2e73e71fdcb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSyUyMHVuaXZlcnNpdHklMjBzdHVkZW50cyUyMGdyYWR1YXRpb258ZW58MXx8fHwxNzYyMDE0NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 7,
    title: "Slovenia Blue Collar Work Permits: Gulf Candidates Priority for Truck Drivers & Welders",
    description: "Slovenia announces expansion of its blue collar work permit program with priority processing for Gulf-based candidates in truck driving and welding professions. The program specifically targets workers from UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman with current or recent Gulf experience. Professional truck drivers with C+E category licenses and welders with certified qualifications can secure work permits within 20-25 days. Monthly salaries range from €1,800 to €2,400 plus benefits including accommodation assistance. Slovenia's strategic location in the EU and growing logistics sector creates strong demand for professional drivers. Welders are needed in manufacturing, construction, and industrial sectors. Employers provide employment contracts meeting EU standards. After 5 years continuous residence, workers become eligible for permanent residence. JioWW Global specializes in Slovenia blue collar work permit applications for Gulf candidates only.",
    country: "Slovenia",
    date: "2025-10-24",
    category: "Blue Collar",
    source: "Slovenia Employment Service",
    image: "https://images.unsplash.com/photo-1679777072915-31dcb65ff016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGRyaXZlciUyMHRyYW5zcG9ydGF0aW9uJTIwbG9naXN0aWNzfGVufDF8fHx8MTc2MjAxNDU1MHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 8,
    title: "Malta & Croatia Hospitality Work Permits: Gulf Candidates Priority Recruitment",
    description: "Malta and Croatia announce coordinated recruitment campaigns for hospitality and trade professionals, with exclusive priority for Gulf-based candidates. Both countries are targeting workers from UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman with experience in hotels, restaurants, tourism, and trade professions. Malta's program focuses on chefs, waiters, hotel staff, and restaurant operators, with work permits processed within 30 days. Croatia emphasizes hospitality workers and skilled operators for its booming tourism sector along the Adriatic coast. Monthly salaries range from €1,400 to €2,200 with accommodation often provided by employers. Both countries offer EU residence permits allowing travel within Schengen zone. After 5 years, workers can apply for long-term residence. JioWW Global handles complete application process for Gulf candidates only in hospitality and trade professions for Malta and Croatia.",
    country: "Malta",
    date: "2025-10-23",
    category: "Blue Collar",
    source: "Malta & Croatia Employment Agencies",
    image: "https://images.unsplash.com/photo-1654457896413-95a0f61e7337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZWRpdGVycmFuZWFuJTIwQ3JvYXRpYSUyMGhvc3BpdGFsaXR5JTIwdG91cmlzbXxlbnwxfHx8fDE3NjIwMTQ1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 9,
    title: "Canada Study Permits with Enhanced PGWP: International Student Pathways 2025",
    description: "Canada maintains its position as top destination for international students with enhanced Post-Graduation Work Permit (PGWP) provisions for 2025. Over 950,000 study permits expected in 2025 with Indian, Chinese, Filipino, and Vietnamese students leading applications. Key changes include extended PGWP eligibility and clearer PR pathways through Express Entry and Provincial programs. Two-year diploma programs in designated learning institutions (DLIs) provide 3-year PGWP, making them highly cost-effective. Popular programs include business management, IT, healthcare, hospitality management, and skilled trades (welding, electrician, HVAC). Provincial programs like Ontario's Masters Graduate stream, BC's International Graduate pathway, and Alberta Opportunity Stream offer direct PR routes after graduation. PGWP holders gain Canadian work experience, earning valuable CRS points for Express Entry. JioWW Global offers complete study-to-PR planning from institution selection through permanent residence application.",
    country: "Canada",
    date: "2025-10-22",
    category: "Study Visa",
    source: "IRCC & Designated Learning Institutions",
    image: "https://images.unsplash.com/photo-1715217033213-1f928870dd11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGlhbiUyMHVuaXZlcnNpdHklMjBjYW1wdXMlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjIwMTQ1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 10,
    title: "Australia Student Visa: Genuine Student Test Replaces GTE for 2025",
    description: "Australia implements the new Genuine Student (GS) requirement, replacing the previous Genuine Temporary Entrant (GTE) assessment for international students. The GS test focuses on student's academic capability, English proficiency, and genuine intention to study rather than migration intent. This change makes applications more straightforward for students from India, Pakistan, Nepal, Bangladesh, and Sri Lanka. Students can work 48 hours fortnightly during studies and unlimited during breaks. Dependent partners receive full work rights. Graduate visa (Subclass 485) provides 2-4 years post-study work rights depending on qualification level and location. Popular courses leading to PR include nursing, engineering, IT, accounting, social work, and teaching. Regional study locations offer additional points for skilled migration. JioWW Global specializes in Australian student visa applications with comprehensive education-to-PR pathway planning.",
    country: "Australia",
    date: "2025-10-21",
    category: "Study Visa",
    source: "Department of Home Affairs Australia",
    image: "https://images.unsplash.com/photo-1553779672-dbfde834957c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdXN0cmFsaWElMjBNZWxib3VybmUlMjBjYW1wdXMlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYyMDE0NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 11,
    title: "Germany Skilled Worker Program: Comprehensive Pathways for Global Professionals",
    description: "Germany expands its Skilled Worker Immigration Act with streamlined pathways for qualified professionals from all countries (not restricted to Gulf candidates). The program targets vocational and academic professionals across multiple sectors including IT (software developers, data scientists), engineering (mechanical, electrical, civil engineers), healthcare (nurses, physiotherapists, medical lab technicians), and skilled trades (HVAC technicians, industrial mechanics). Key requirements include recognized qualifications (university degree or vocational training), employment contract with German employer, and language proficiency (German B1 or English B2 for IT sector). The comprehensive interview process evaluates technical skills, language capability, and cultural fit. Step-by-step procedure includes qualification recognition, job search support, visa application, and integration assistance. Work permit holders can bring family members and apply for permanent settlement (Niederlassungserlaubnis) after 21-33 months. JioWW Global provides end-to-end Germany Skilled Worker support including qualification recognition and employer matching.",
    country: "Germany",
    date: "2025-10-20",
    category: "Work Permit",
    source: "German Federal Employment Agency",
    image: "https://images.unsplash.com/photo-1752856408620-2e6fc6ac072f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW55JTIwd29ya3BsYWNlJTIwdGVjaG5vbG9neSUyMG9mZmljZXxlbnwxfHx8fDE3NjIwMTQ1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 12,
    title: "Poland & Czech Republic Study Visa: No IELTS Required for Asian Students",
    description: "Poland and Czech Republic universities announce expanded acceptance of Medium of Instruction (MOI) certificates for international students from India, Pakistan, Bangladesh, Nepal, and Sri Lanka, eliminating IELTS requirements. Over 50 universities in Poland including Warsaw University of Technology, Jagiellonian University, and AGH University accept MOI for English-taught programs. Czech Republic institutions including Charles University and Czech Technical University follow similar policies. This major change makes European education more accessible and affordable for Asian students. Annual tuition fees range from €2,000 to €6,000, significantly lower than UK, USA, or Canada. Students receive 1-year post-study work visa allowing job search in EU. Popular programs include engineering, business administration, computer science, and medicine. Both countries offer safe environment, low cost of living, and access to Schengen zone for travel. JioWW Global provides comprehensive admission support and visa guidance for Poland and Czech Republic.",
    country: "Poland",
    date: "2025-10-19",
    category: "Study Visa",
    source: "Poland & Czech Republic Universities",
    image: "https://images.unsplash.com/photo-1738588574800-2ff631003d0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQb2xhbmQlMjBXYXJzYXclMjB1bml2ZXJzaXR5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MjAxNDU1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 13,
    title: "Canada Atlantic Immigration Program: Fast-Track PR with Lower Requirements",
    description: "Atlantic Immigration Program (AIP) continues as one of Canada's fastest PR pathways for skilled workers and international graduates in Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland & Labrador. The program doesn't require LMIA, processes applications in 6-8 months, and accepts lower language scores (CLB 4-5 for NOC TEER 4-5, CLB 5 for TEER 0-3). Employers provide settlement support and permanent job offers. In-demand occupations include healthcare workers, hospitality staff, truck drivers, food service workers, retail supervisors, and administrative assistants. Cost of living in Atlantic Canada is 30-40% lower than Toronto or Vancouver, with housing significantly more affordable. Strong newcomer communities provide excellent support networks. The program is ideal for Indian, Filipino, Pakistani, Nigerian, and Sri Lankan workers seeking affordable Canadian settlement with family-friendly communities. JioWW Global specializes in AIP employer matching and application processing.",
    country: "Canada",
    date: "2025-10-18",
    category: "Canada PR",
    source: "Atlantic Immigration Program",
    image: "https://images.unsplash.com/photo-1692462751908-2a7060dca097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGElMjBBdGxhbnRpYyUyMGNvYXN0JTIwbGlnaHRob3VzZXxlbnwxfHx8fDE3NjIwMTQ1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 14,
    title: "UK Healthcare Visa: NHS Recruitment Drive for International Nurses & Care Workers",
    description: "The United Kingdom announces major NHS recruitment campaign for international healthcare professionals with streamlined Health and Care Worker visa processing. The program targets registered nurses, enrolled nurses, healthcare assistants, and care workers from India, Philippines, Nigeria, Ghana, and other non-European countries. Key benefits include reduced visa fees (£247 instead of £719), exemption from Immigration Health Surcharge, faster processing (within 3 weeks), and priority service available. Salary threshold for nurses is £29,000 annually, significantly lower than general Skilled Worker requirement. Family members can accompany visa holders. After 5 years, healthcare workers become eligible for Indefinite Leave to Remain (ILR/permanent residence). NHS trusts provide comprehensive relocation support including accommodation assistance and induction programs. JioWW Global offers end-to-end Healthcare Visa services including OSCE/CBT preparation, NMC registration, and visa application support.",
    country: "United Kingdom",
    date: "2025-10-17",
    category: "Work Permit",
    source: "UK Home Office & NHS",
    image: "https://images.unsplash.com/photo-1739185069005-8cb46fef2702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSyUyMGhlYWx0aGNhcmUlMjBOSFMlMjBob3NwaXRhbHxlbnwxfHx8fDE3NjIwMTQ1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 15,
    title: "Australia Regional Visa (Subclass 491): Enhanced PR Pathway for Skilled Workers",
    description: "Australia's Subclass 491 (Skilled Work Regional Provisional) visa offers enhanced permanent residence opportunities for skilled workers willing to live and work in regional areas. This 5-year provisional visa requires state or territory nomination or family sponsorship. After living and working in regional Australia for 3 years and meeting minimum income threshold (currently AUD $53,900), holders become eligible for permanent residence (Subclass 191). Regional designated areas now include major cities like Perth (all of WA), Adelaide (all of SA), Gold Coast, Sunshine Coast, Geelong, Newcastle, and Wollongong - offering full urban amenities with easier qualification. Points requirement starts at 65, lower than metro area requirements. Priority occupations include nurses, teachers, engineers, accountants, chefs, electricians, and carpenters. State nomination provides additional pathway certainty. JioWW Global helps identify suitable regional locations, optimizes point scores, and manages complete application process for Subclass 491 leading to PR.",
    country: "Australia",
    date: "2025-10-16",
    category: "Australia PR",
    source: "Department of Home Affairs Australia",
    image: "https://images.unsplash.com/photo-1632471005935-d224965a6146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdXN0cmFsaWElMjByZWdpb25hbCUyMGNvdW50cnlzaWRlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MjAxNDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

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
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Check if already subscribed
    if (subscribers.includes(email)) {
      toast.error('This email is already subscribed!');
      return;
    }

    // Add subscriber
    const updatedSubscribers = [...subscribers, email];
    setSubscribers(updatedSubscribers);
    localStorage.setItem('jioww_news_subscribers', JSON.stringify(updatedSubscribers));
    
    toast.success('Successfully subscribed to immigration news updates!', {
      description: 'You will receive notifications when new articles are published.'
    });
    
    setSubscriberEmail('');
  };

  const handleSubmitBlog = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send to a backend
    console.log({
      title: blogTitle,
      country: blogCountry,
      category: blogCategory,
      content: blogContent,
      date: new Date().toISOString()
    });

    // Simulate sending emails to all subscribers
    if (subscribers.length > 0) {
      toast.success(`Blog published! Email notifications sent to ${subscribers.length} subscriber${subscribers.length > 1 ? 's' : ''}.`, {
        description: 'All subscribers have been notified about the new article.'
      });
    } else {
      toast.success('Blog submitted successfully! It will be reviewed before publishing.');
    }
    
    // Reset form
    setBlogTitle('');
    setBlogCountry('');
    setBlogCategory('');
    setBlogContent('');
    setIsDialogOpen(false);
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Work Permit': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Study Visa': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Blue Collar': return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'Canada PR': return 'bg-red-500/10 text-red-600 border-red-500/20';
      case 'Australia PR': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  const handleShareNews = (newsId: number, newsTitle: string) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?newsId=${newsId}#news`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(shareUrl).then(() => {
      toast.success('Link copied to clipboard!', {
        description: 'Share this link on social media',
        duration: 3000,
      });
    }).catch(() => {
      toast.error('Failed to copy link');
    });
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-amber-500/10 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary uppercase tracking-wider">Latest Updates</span>
          </div>
          
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 via-primary to-amber-600 bg-clip-text text-transparent">
            Immigration News & Updates
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Latest updates on PR programs, work permits, and study visas for Canada, Australia, Europe & beyond
          </p>
          

        </motion.div>

        {/* Filter and Write Blog Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {countries.map((country) => (
              <Button
                key={country}
                variant={selectedCountry === country.toLowerCase() ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCountry(country.toLowerCase())}
                className={selectedCountry === country.toLowerCase() 
                  ? 'bg-gradient-to-r from-primary to-amber-600 text-white border-none' 
                  : 'hover:border-primary hover:text-primary'}
              >
                <Globe className="w-4 h-4 mr-2" />
                {country}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            {isAdmin && (
              <>
                <Button 
                  onClick={() => setIsSubscribersDialogOpen(true)}
                  variant="outline"
                  className="hover:border-primary hover:text-primary"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Subscribers ({subscribers.length})
                </Button>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-primary to-amber-600 text-white hover:shadow-lg hover:shadow-primary/50 transition-all">
                      <PenSquare className="w-4 h-4 mr-2" />
                      Write a Blog
                    </Button>
                  </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
                  Write a Blog Post
                </DialogTitle>
                <DialogDescription>
                  Share insights, updates, or news about immigration and work permits
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmitBlog} className="space-y-6 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="blog-title">Blog Title *</Label>
                  <Input
                    id="blog-title"
                    placeholder="Enter an engaging title..."
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    required
                    className="border-gray-300 focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="blog-country">Country *</Label>
                    <Select value={blogCountry} onValueChange={setBlogCountry} required>
                      <SelectTrigger className="border-gray-300 focus:border-primary">
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
                    <Label htmlFor="blog-category">Category *</Label>
                    <Select value={blogCategory} onValueChange={setBlogCategory} required>
                      <SelectTrigger className="border-gray-300 focus:border-primary">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Canada PR">Canada PR</SelectItem>
                        <SelectItem value="Australia PR">Australia PR</SelectItem>
                        <SelectItem value="Work Permit">Work Permit</SelectItem>
                        <SelectItem value="Study Visa">Study Visa</SelectItem>
                        <SelectItem value="Blue Collar">Blue Collar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="blog-content">Blog Content *</Label>
                  <Textarea
                    id="blog-content"
                    placeholder="Write your blog content here..."
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                    required
                    rows={10}
                    className="border-gray-300 focus:border-primary resize-none"
                  />
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
                        handleShareNews(news.id, news.title);
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
                    }
                  }}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="w-full text-primary hover:text-amber-600 hover:bg-primary/5 text-xs h-7 group-hover:translate-x-1 transition-transform"
                        onClick={() => {
                          setSelectedNews(news);
                          updateMetaTags(news);
                          setIsNewsDialogOpen(true);
                        }}
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant="outline" 
                              className={`${getCategoryColor(news.category)} border`}
                            >
                              {news.category}
                            </Badge>
                            <Badge variant="secondary">
                              {news.country}
                            </Badge>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary/30 text-primary hover:bg-primary/10"
                            onClick={() => handleShareNews(news.id, news.title)}
                          >
                            <Copy className="w-4 h-4 mr-2" />
                            Copy Link
                          </Button>
                        </div>
                        <DialogTitle className="text-2xl text-left">
                          {news.title}
                        </DialogTitle>
                        <DialogDescription className="flex items-center gap-4 text-sm text-left">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(news.date).toLocaleDateString('en-US', { 
                              month: 'long', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="text-gray-500">Source: {news.source}</span>
                        </DialogDescription>
                      </DialogHeader>
                      
                      {/* News Image in Dialog */}
                      <div className="mt-4 rounded-lg overflow-hidden">
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>

                      <div className="mt-4">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {news.description}
                        </p>
                      </div>

                      {/* Share Section */}
                      <div className="mt-6 flex justify-center">
                        <Button 
                          className="bg-gradient-to-r from-primary to-amber-600 text-white hover:shadow-lg"
                          onClick={() => handleShareNews(news.id, news.title)}
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share this News
                        </Button>
                      </div>

                      <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-lg">
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Interested in this opportunity?</strong>
                        </p>
                        <p className="text-sm text-gray-600 mb-3">
                          Contact JioWW Global for professional consultation and guidance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button 
                            className="bg-gradient-to-r from-primary to-amber-600 text-white hover:shadow-lg"
                            onClick={() => window.open('https://wa.me/971501818023', '_blank')}
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            WhatsApp: +971 50 181 8023
                          </Button>
                          <Button 
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/10"
                            onClick={() => window.location.href = '#contact'}
                          >
                            Book Consultation
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Auto-Update Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-700 text-sm">
              News feed automatically updated daily
            </span>
          </div>
        </motion.div>
      </div>



      {/* Subscribers Dialog (Admin Only) */}
      <Dialog open={isSubscribersDialogOpen} onOpenChange={setIsSubscribersDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Newsletter Subscribers
            </DialogTitle>
            <DialogDescription>
              {subscribers.length === 0 
                ? 'No subscribers yet. Encourage users to subscribe for immigration news updates.'
                : `${subscribers.length} ${subscribers.length === 1 ? 'person is' : 'people are'} subscribed to immigration news updates.`
              }
            </DialogDescription>
          </DialogHeader>

          {subscribers.length > 0 ? (
            <div className="mt-4 space-y-3">
              <div className="bg-gradient-to-r from-primary/10 to-amber-500/10 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Total Subscribers</span>
                  <Badge className="bg-gradient-to-r from-primary to-amber-600 text-white">
                    {subscribers.length}
                  </Badge>
                </div>
                <p className="text-xs text-gray-500">
                  When you publish a new blog post, all subscribers will receive email notifications automatically.
                </p>
              </div>

              <div className="border rounded-lg divide-y max-h-[400px] overflow-y-auto">
                {subscribers.map((email, index) => (
                  <div key={index} className="p-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-gray-700">{email}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => {
                        const updatedSubscribers = subscribers.filter(sub => sub !== email);
                        setSubscribers(updatedSubscribers);
                        localStorage.setItem('jioww_news_subscribers', JSON.stringify(updatedSubscribers));
                        toast.success('Subscriber removed');
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500">No subscribers yet</p>
            </div>
          )}

          <div className="flex justify-end gap-3 mt-6">
            <Button
              variant="outline"
              onClick={() => setIsSubscribersDialogOpen(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
