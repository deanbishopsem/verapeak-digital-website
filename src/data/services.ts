export interface ServicePage {
  slug: string;
  name: string; // short name for cards/nav
  tag: string; // category label
  title: string; // <title>
  description: string; // meta description
  headline: string; // H1
  intro: string; // hero lead paragraph
  cardDesc: string; // short description on the /services grid
  includes: { h: string; p: string }[]; // what's included
  outcomes: { value: string; label: string }[]; // why it matters
  faqs: { q: string; a: string }[];
}

export const services: ServicePage[] = [
  {
    slug: 'seo',
    name: 'Search Engine Optimization',
    tag: 'Organic',
    title: 'SEO Services for Small Business | Verapeak Digital (Knoxville)',
    description:
      'Transparent SEO services for small businesses, from a Knoxville agency serving clients nationwide. Technical SEO, content, local SEO, and link building that compounds.',
    headline: 'SEO that compounds, not vanishes.',
    intro:
      'Most small businesses get sold "SEO" and never see what it bought them. We build durable organic growth with technical SEO, content, and authority, and we show you the rankings, traffic, and revenue it drives, in plain English.',
    cardDesc:
      'Technical SEO, content, and authority building that compounds into durable organic growth.',
    includes: [
      { h: 'Technical & on-page SEO', p: 'Site health, speed, crawlability, schema, and on-page optimization so search engines and AI can actually read your pages.' },
      { h: 'Content strategy', p: 'Keyword and intent research mapped to pages and posts that answer what your customers are searching for.' },
      { h: 'Local SEO', p: 'Google Business Profile, local citations, and location pages so you show up when nearby customers search.' },
      { h: 'Digital PR & links', p: 'Earned links and mentions that build the authority Google needs to rank you for competitive terms.' },
      { h: 'Reporting you can read', p: 'A live dashboard tying rankings and organic traffic to leads and revenue, with no jargon.' },
    ],
    outcomes: [
      { value: '2x', label: 'Organic traffic target, year one' },
      { value: '4-12 wks', label: 'To first local ranking movement' },
      { value: '100%', label: 'Visibility into what we are doing' },
    ],
    faqs: [
      { q: 'How long does SEO take to work?', a: 'Local terms can move in 4 to 12 weeks; competitive national terms compound over several months. You will see progress in your dashboard the whole way, not just at the finish line.' },
      { q: 'Do you do local SEO for Knoxville businesses?', a: 'Yes. We optimize your Google Business Profile, citations, and local pages, and we do the same for clients in their own cities nationwide.' },
    ],
  },
  {
    slug: 'paid-media',
    name: 'Paid Media & PPC',
    tag: 'Acquisition',
    title: 'PPC & Paid Media Management for Small Business | Verapeak',
    description:
      'PPC and paid media management for small businesses. Google Ads, Meta, and more, run by a transparent Knoxville agency that shows you exactly where every dollar goes.',
    headline: 'Every ad dollar, accounted for.',
    intro:
      'If you have ever run ads and had no idea what actually worked, this is for you. We run high-intent paid media across search and social, and tie every dollar of spend to conversions and revenue in one live dashboard.',
    cardDesc:
      'High-intent campaigns across search and social, engineered for return on every dollar.',
    includes: [
      { h: 'Google & Microsoft Ads', p: 'Search, Performance Max, and shopping campaigns built around the keywords your buyers actually use.' },
      { h: 'Meta & LinkedIn ads', p: 'Paid social that finds the right audiences and brings them back, without torching your budget.' },
      { h: 'Retargeting', p: 'Win back the visitors who did not convert the first time with sequenced, sensible retargeting.' },
      { h: 'Landing pages & tracking', p: 'Conversion-focused pages and clean tracking, so the numbers you see are the numbers that are real.' },
      { h: 'Weekly optimization', p: 'We prune what is not working and scale what is, every week, not once a quarter.' },
    ],
    outcomes: [
      { value: '4x+', label: 'Return on ad spend we target' },
      { value: 'Weekly', label: 'Optimization, not set-and-forget' },
      { value: 'Live', label: 'Spend-to-revenue dashboard' },
    ],
    faqs: [
      { q: 'How much should a small business spend on ads?', a: 'It depends on your goals and margins, but we will recommend a starting budget that can actually generate signal, and we never bill a percentage that hides the real numbers.' },
      { q: 'Will I be able to see where my ad budget goes?', a: 'Yes. Every client gets a live dashboard tying spend to conversions and revenue by channel. No black boxes.' },
    ],
  },
  {
    slug: 'web-design',
    name: 'Web Design & Development',
    tag: 'Conversion',
    title: 'Conversion-Focused Web Design for Small Business | Verapeak',
    description:
      'Fast, conversion-focused web design and development for small businesses. Knoxville-built sites and landing pages that load quickly, rank well, and turn traffic into revenue.',
    headline: 'Websites built to convert, not just look nice.',
    intro:
      'A pretty site that does not convert is a liability. We design and build fast, search-friendly websites and landing pages that turn the traffic you are already paying for into booked revenue.',
    cardDesc:
      'Fast, conversion-first sites and landing pages that turn traffic into booked revenue.',
    includes: [
      { h: 'Conversion-first design', p: 'Pages structured around the action you want visitors to take, backed by real UX principles.' },
      { h: 'Fast, modern build', p: 'Astro, Webflow, or WordPress builds that pass Core Web Vitals and load in a blink.' },
      { h: 'Landing pages', p: 'Campaign-specific pages that match your ads and lift conversion rates.' },
      { h: 'SEO-ready foundation', p: 'Clean markup, schema, and structure so the site can rank from day one.' },
      { h: 'Ongoing CRO', p: 'We keep testing and improving after launch, not just hand off and disappear.' },
    ],
    outcomes: [
      { value: '+30%', label: 'Conversion lift we aim for' },
      { value: '<2.5s', label: 'Target largest contentful paint' },
      { value: 'SEO', label: 'Ready out of the box' },
    ],
    faqs: [
      { q: 'Do you redesign existing websites or only build new ones?', a: 'Both. We can evolve what is working on your current site or start fresh, depending on what gets you results fastest.' },
      { q: 'Will my new site be good for SEO?', a: 'Yes. Speed, clean structure, and schema are built in, so the site is ready to rank instead of fighting against it.' },
    ],
  },
  {
    slug: 'analytics',
    name: 'Analytics & Reporting',
    tag: 'Measurement',
    title: 'Marketing Analytics & Attribution for Small Business | Verapeak',
    description:
      'Marketing analytics, attribution, and reporting for small businesses. Clean GA4 tracking and a live dashboard so you always know what is working and where your money goes.',
    headline: 'One source of truth for your marketing.',
    intro:
      'You cannot improve what you cannot see. We set up clean tracking and a single live dashboard that ties spend to leads and revenue, so every decision is backed by real numbers instead of guesswork.',
    cardDesc:
      'Clean tracking and clear dashboards so every decision is backed by real numbers.',
    includes: [
      { h: 'GA4 & server-side tracking', p: 'Accurate, privacy-aware tracking that survives ad blockers and iOS changes.' },
      { h: 'Live KPI dashboards', p: 'A single dashboard everyone can read, tying channels to conversions and revenue.' },
      { h: 'Attribution modeling', p: 'Understand which channels actually drive sales, not just which got the last click.' },
      { h: 'Conversion tracking', p: 'Proper goal and event tracking so your numbers are trustworthy.' },
      { h: 'Experimentation', p: 'Structured A/B testing so improvements are proven, not assumed.' },
    ],
    outcomes: [
      { value: '1', label: 'Source of truth, not five tabs' },
      { value: '100%', label: 'Spend-to-revenue visibility' },
      { value: 'Plain', label: 'English reporting, no jargon' },
    ],
    faqs: [
      { q: 'I already have Google Analytics. Why do I need this?', a: 'Most GA4 setups are incomplete or mistracked. We make sure the data is accurate and, more importantly, turn it into a dashboard that actually answers your questions.' },
      { q: 'Can you show me where my marketing money is going?', a: 'That is the entire point. You get a live view tying every dollar of spend to leads and revenue by channel.' },
    ],
  },
  {
    slug: 'email-marketing',
    name: 'Email & Lifecycle',
    tag: 'Lifecycle',
    title: 'Email & Lifecycle Marketing for Small Business | Verapeak',
    description:
      'Email and lifecycle marketing for small businesses. Automated journeys, newsletters, and segmentation that nurture leads and turn one-time buyers into repeat customers.',
    headline: 'Turn one-time buyers into regulars.',
    intro:
      'The cheapest growth you have is the customers you already earned. We build automated email and lifecycle journeys that nurture leads, recover lost sales, and bring buyers back, on autopilot.',
    cardDesc:
      'Automated journeys that nurture leads and turn one-time buyers into loyal, repeat customers.',
    includes: [
      { h: 'Lifecycle automation', p: 'Welcome, nurture, abandoned-cart, and win-back flows that run while you sleep.' },
      { h: 'Newsletters', p: 'Regular campaigns that keep you top of mind without being annoying.' },
      { h: 'Segmentation', p: 'The right message to the right people, based on behavior and intent.' },
      { h: 'Deliverability', p: 'Setup and hygiene so your emails actually land in the inbox.' },
      { h: 'Klaviyo & HubSpot', p: 'We work in the tools you have, or recommend the right one for your stage.' },
    ],
    outcomes: [
      { value: 'Owned', label: 'Audience you actually control' },
      { value: 'Auto', label: 'Revenue that runs in the background' },
      { value: '6.2x', label: 'Example ROAS for a lifecycle channel' },
    ],
    faqs: [
      { q: 'Is email still worth it for a small business?', a: 'Yes. It is one of the highest-return channels because you own the audience and the cost per send is tiny. The trick is automation and relevance, which is what we set up.' },
      { q: 'Which email platform should I use?', a: 'We will recommend one based on your business, commonly Klaviyo for ecommerce and HubSpot for services, and set it up properly.' },
    ],
  },
  {
    slug: 'brand-strategy',
    name: 'Brand & Strategy',
    tag: 'Positioning',
    title: 'Brand & Marketing Strategy for Small Business | Verapeak',
    description:
      'Brand and marketing strategy for small businesses. Positioning, messaging, and go-to-market from a Knoxville agency that makes your brand impossible to ignore.',
    headline: 'Get clear before you get loud.',
    intro:
      'Marketing without a strategy just spends money faster. We help small businesses nail their positioning, messaging, and go-to-market plan, so every campaign points in the same direction.',
    cardDesc:
      'Positioning, messaging, and creative that make your brand impossible to ignore.',
    includes: [
      { h: 'Positioning', p: 'A clear, defensible answer to why a customer should choose you over the alternatives.' },
      { h: 'Messaging', p: 'Words that land, from your homepage headline to your ad copy, all consistent.' },
      { h: 'Creative & ads', p: 'On-brand creative that performs, not just looks good in a portfolio.' },
      { h: 'Go-to-market', p: 'A prioritized plan for which channels to run and in what order.' },
      { h: 'Competitive research', p: 'Know exactly where you fit and where the opening is.' },
    ],
    outcomes: [
      { value: 'Clarity', label: 'Before you spend a dollar' },
      { value: '1', label: 'Message, every channel' },
      { value: 'Plan', label: 'You can actually execute' },
    ],
    faqs: [
      { q: 'Do I need strategy if I just want more leads?', a: 'A little strategy up front makes every lead-gen dollar work harder. We keep it lean and practical, not a 60-page deck you never open.' },
      { q: 'Can you help with our messaging and positioning?', a: 'Yes. Clarifying who you are for and why you are different is often the single biggest lever for a small business.' },
    ],
  },
];
