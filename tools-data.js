const STACK_SYSTEM_TOOLS = [

  {
    id: "make",
    name: "Make.com",
    slug: "make-com",
    category: "Automation",
    subcategory: "Workflow Automation",
    description: "Visual workflow automation for connecting applications, moving information and building repeatable processes.",
    whatItIs: "A visual automation platform for connecting applications and building workflows that perform actions automatically.",
    problemSolved: "Reduces repetitive manual work by connecting applications and turning predictable processes into repeatable workflows.",
    bestFor: ["Workflow automation", "App integrations", "Business processes", "AI workflows", "No-code automation"],
    useCases: ["Lead capture", "CRM updates", "Email automation", "Data movement", "Notifications", "AI workflows"],
    capabilities: ["Visual workflow builder", "Triggers", "Modules", "Data mapping", "Filters", "Routers", "Webhooks", "AI automation"],
    systemRoles: ["Automation", "AI infrastructure", "Integration layer"],
    tags: ["automation", "workflow", "integrations", "ai", "no-code", "webhooks"],
    alternatives: ["Zapier", "n8n"],
    relatedTools: ["tally", "elevenlabs"],
    pricing: {
      currency: "USD",
      model: "Subscription + credits",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.make.com/",
    affiliateUrl: "https://www.make.com/en/register?pc=stackandsystem",
    relationship: {
      affiliate: true,
      verified: true,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Reviewed",
      profileUrl: "make-com.html",
      lastVerified: "2026-08",
      handsOnReview: true
    }
  },

  {
    id: "elevenlabs",
    name: "ElevenLabs",
    slug: "elevenlabs",
    category: "Voice",
    subcategory: "AI Voice",
    description: "AI voice technology for speech generation, voice cloning, audio production and conversational experiences.",
    whatItIs: "An AI audio platform for generating and working with synthetic speech and voice.",
    problemSolved: "Makes high-quality synthetic voice and audio production available without traditional recording workflows.",
    bestFor: ["Voice content", "AI applications", "Narration", "Audio production", "Conversational AI"],
    useCases: ["Voiceovers", "Narration", "Audiobooks", "Voice assistants", "AI agents", "Content production"],
    capabilities: ["Text to speech", "Speech to text", "Voice cloning", "Voice design", "AI agents", "Audio generation"],
    systemRoles: ["AI voice", "Content layer", "Conversational AI"],
    tags: ["ai", "voice", "speech", "audio", "voice cloning", "agents"],
    alternatives: ["OpenAI Audio", "Google Cloud Text-to-Speech"],
    relatedTools: ["make", "tally"],
    pricing: {
      currency: "USD",
      model: "Subscription + usage",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://elevenlabs.io/",
    affiliateUrl: "https://try.elevenlabs.io/9bgot6k6tgcs",
    relationship: {
      affiliate: true,
      verified: true,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Reviewed",
      profileUrl: "elevenlabs.html",
      lastVerified: "2026-08",
      handsOnReview: true
    }
  },

  {
    id: "tally",
    name: "Tally.so",
    slug: "tally",
    category: "Business",
    subcategory: "Forms",
    description: "A form builder for collecting information, leads, surveys and structured data.",
    whatItIs: "A form-building platform for collecting structured information from users.",
    problemSolved: "Provides a simple way to collect structured information without building a custom form system.",
    bestFor: ["Lead capture", "Surveys", "Applications", "Data collection", "Automation triggers"],
    useCases: ["Lead forms", "Customer surveys", "Applications", "Contact forms", "Workflow triggers"],
    capabilities: ["Form building", "Data collection", "Conditional logic", "File uploads", "Workflow integrations"],
    systemRoles: ["Input layer", "Lead capture", "Automation trigger"],
    tags: ["forms", "surveys", "lead generation", "data", "business"],
    alternatives: ["Typeform", "Google Forms"],
    relatedTools: ["make", "carrd"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://tally.so/",
    affiliateUrl: "https://tally.cello.so/bKOHpwR6kGK",
    relationship: {
      affiliate: true,
      verified: true,
      marketplace: null
    },
    editorial: {
      status: "Reviewed",
      profileUrl: "tally.html",
      lastVerified: "2026-08",
      handsOnReview: true
    }
  },

  {
    id: "carrd",
    name: "Carrd",
    slug: "carrd",
    category: "Website",
    subcategory: "Landing Pages",
    description: "A lightweight website builder for responsive one-page websites and landing pages.",
    whatItIs: "A simple website builder focused on responsive one-page sites.",
    problemSolved: "Makes it quick to publish focused landing pages and simple websites without building a larger website system.",
    bestFor: ["Landing pages", "Simple websites", "Lead capture", "Digital products", "Focused offers"],
    useCases: ["Landing pages", "Product pages", "Personal sites", "Lead generation", "Campaign pages"],
    capabilities: ["Responsive websites", "Landing pages", "Forms", "Custom domains", "Simple site publishing"],
    systemRoles: ["Website layer", "Landing page", "Lead capture"],
    tags: ["website", "landing page", "website builder", "responsive", "lead generation"],
    alternatives: ["Framer", "Webflow"],
    relatedTools: ["tally", "make"],
    pricing: {
      currency: "USD",
      model: "Subscription",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://carrd.co/",
    affiliateUrl: "https://try.carrd.co/skw4pwl8",
    relationship: {
      affiliate: true,
      verified: true,
      marketplace: null
    },
    editorial: {
      status: "Reviewed",
      profileUrl: "carrd.html",
      lastVerified: "2026-08",
      handsOnReview: true
    }
  },

  {
    id: "partnerstack",
    name: "PartnerStack",
    slug: "partnerstack",
    category: "Business",
    subcategory: "Partnerships",
    description: "A B2B SaaS partnership platform and marketplace used to discover and manage partner programmes.",
    whatItIs: "A platform used by B2B SaaS companies to operate partnership and referral programmes.",
    problemSolved: "Helps businesses manage partner relationships, referrals and partnership programmes.",
    bestFor: ["B2B SaaS partnerships", "Referral programmes", "Partner discovery", "Partnership management"],
    useCases: ["Partner programmes", "Referral management", "SaaS partnerships", "Partner discovery"],
    capabilities: ["Partner management", "Referral tracking", "Partner programmes", "Marketplace discovery"],
    systemRoles: ["Partnership layer", "Commercial discovery"],
    tags: ["saas", "partnerships", "referrals", "b2b", "affiliate", "marketplace"],
    alternatives: ["Impact", "Partnerize"],
    relatedTools: [],
    pricing: {
      currency: null,
      model: null,
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://partnerstack.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Editorial listing",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "emergent",
    name: "Emergent",
    slug: "emergent",
    category: "AI",
    subcategory: "AI App Builder",
    description: "An AI platform for building full-stack web and mobile applications from natural-language instructions.",
    whatItIs: "An agentic development platform that turns natural-language instructions into working software projects.",
    problemSolved: "Helps people move from an application idea to a working web or mobile product without starting every implementation detail manually.",
    bestFor: ["AI app building", "Prototyping", "Web apps", "Mobile apps", "Entrepreneurs"],
    useCases: ["MVPs", "Internal tools", "Web applications", "Mobile applications", "AI-powered products"],
    capabilities: ["AI coding agents", "Full-stack generation", "Web apps", "Mobile apps", "GitHub integration", "Deployment"],
    systemRoles: ["Build layer", "AI development", "Product prototyping"],
    tags: ["ai", "app builder", "vibe coding", "software", "web apps", "mobile"],
    alternatives: ["Lovable", "Bolt", "Replit"],
    relatedTools: ["netlify", "make"],
    pricing: {
      currency: "USD",
      model: "Subscription / usage",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://emergent.sh/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "lindy",
    name: "Lindy",
    slug: "lindy",
    category: "AI",
    subcategory: "AI Agents",
    description: "An AI assistant and agent platform for handling work across email, meetings, calendars and connected applications.",
    whatItIs: "A platform for building and running AI agents and workflows that can perform tasks across connected tools.",
    problemSolved: "Automates work that normally requires repeated human decisions, communication and coordination across applications.",
    bestFor: ["AI agents", "Personal productivity", "Lead workflows", "Email automation", "Meeting workflows"],
    useCases: ["Inbox management", "Meeting preparation", "Follow-ups", "Lead enrichment", "Customer workflows"],
    capabilities: ["Agents", "Workflows", "Triggers", "Actions", "Conditions", "Integrations", "Memory"],
    systemRoles: ["Agent layer", "Automation", "AI assistant"],
    tags: ["ai", "agents", "automation", "email", "productivity", "workflows"],
    alternatives: ["Zapier Agents", "Relevance AI", "CrewAI"],
    relatedTools: ["make", "elevenlabs"],
    pricing: {
      currency: "USD",
      model: "Subscription / usage",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.lindy.ai/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "lindy.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "pinecone",
    name: "Pinecone",
    slug: "pinecone",
    category: "AI",
    subcategory: "AI Infrastructure",
    description: "A managed vector database and knowledge platform for building retrieval-powered AI applications and agents.",
    whatItIs: "A managed vector database designed to store and retrieve information for AI applications.",
    problemSolved: "Provides a retrieval layer that lets AI applications search large collections of information using semantic retrieval.",
    bestFor: ["RAG", "AI agents", "Semantic search", "Knowledge bases", "AI developers"],
    useCases: ["RAG applications", "Agent knowledge", "Semantic search", "Document retrieval", "AI assistants"],
    capabilities: ["Vector database", "Semantic search", "Indexes", "Namespaces", "Embeddings", "Retrieval"],
    systemRoles: ["Knowledge layer", "AI infrastructure", "Retrieval layer"],
    tags: ["ai", "vector database", "rag", "semantic search", "agents", "infrastructure"],
    alternatives: ["Weaviate", "Qdrant", "Milvus"],
    relatedTools: ["lindy"],
    pricing: {
      currency: "USD",
      model: "Usage-based",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.pinecone.io/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "pinecone.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "turbotic",
    name: "Turbotic",
    slug: "turbotic",
    category: "Automation",
    subcategory: "AI Automation",
    description: "An AI-powered automation platform focused on building and orchestrating workflows.",
    whatItIs: "An automation platform designed to help organisations identify and implement AI-powered automation workflows.",
    problemSolved: "Helps teams move from manual processes and automation ideas toward orchestrated AI-enabled workflows.",
    bestFor: ["AI automation", "Enterprise workflows", "Process automation", "Automation discovery"],
    useCases: ["HR automation", "Finance automation", "IT automation", "Workflow orchestration"],
    capabilities: ["Automation AI", "Workflow orchestration", "Process automation", "AI readiness"],
    systemRoles: ["Automation layer", "AI orchestration"],
    tags: ["automation", "ai", "workflow", "enterprise", "orchestration"],
    alternatives: ["Make.com", "UiPath", "Zapier"],
    relatedTools: ["make", "lindy"],
    pricing: {
      currency: "USD",
      model: "Business / enterprise",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://turbotic.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "turbotic.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "netlify",
    name: "Netlify",
    slug: "netlify",
    category: "Developer",
    subcategory: "Web Development & Deployment",
    description: "A web development platform for building, deploying and operating websites and applications.",
    whatItIs: "A platform providing deployment, hosting and application infrastructure for modern web projects.",
    problemSolved: "Turns source code or AI-built projects into deployed, accessible web applications.",
    bestFor: ["Web deployment", "AI-built apps", "Static sites", "Web applications", "Developers"],
    useCases: ["Website deployment", "AI app deployment", "Preview environments", "Serverless apps", "Web projects"],
    capabilities: ["Deploy previews", "Functions", "AI Gateway", "Agent Runners", "Database", "Observability"],
    systemRoles: ["Deployment layer", "Hosting", "Application infrastructure"],
    tags: ["developer", "deployment", "hosting", "ai", "web apps", "netlify"],
    alternatives: ["Vercel", "Cloudflare Pages", "Render"],
    relatedTools: ["emergent", "carrd"],
    pricing: {
      currency: "USD",
      model: "Free + usage / paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.netlify.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "netlify.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "fullenrich",
    name: "FullEnrich",
    slug: "fullenrich",
    category: "Sales",
    subcategory: "Data Enrichment",
    description: "A B2B data enrichment platform that combines multiple data providers to find business contact information.",
    whatItIs: "A waterfall enrichment platform that checks multiple data sources to improve the chance of finding usable business contact data.",
    problemSolved: "Reduces incomplete prospect records by searching multiple enrichment sources rather than relying on one provider.",
    bestFor: ["B2B prospecting", "Lead enrichment", "Sales operations", "Outbound"],
    useCases: ["Email enrichment", "Phone enrichment", "Lead lists", "CRM enrichment", "Outbound preparation"],
    capabilities: ["Waterfall enrichment", "Email finding", "Phone finding", "API", "Bulk enrichment", "Integrations"],
    systemRoles: ["Data layer", "Sales enrichment", "Lead preparation"],
    tags: ["sales", "b2b", "data enrichment", "leads", "prospecting"],
    alternatives: ["Apollo.io", "Clay", "Hunter"],
    relatedTools: ["make"],
    pricing: {
      currency: "USD",
      model: "Usage / subscription",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://fullenrich.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "fullenrich.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "consensus",
    name: "Consensus",
    slug: "consensus",
    category: "AI",
    subcategory: "Research",
    description: "An AI search engine designed to help users find and analyse scientific research papers.",
    whatItIs: "An AI research search platform that helps users discover and understand scientific literature.",
    problemSolved: "Makes research discovery and synthesis faster by combining academic search with AI-assisted analysis.",
    bestFor: ["Research", "Literature reviews", "Evidence discovery", "Academic search"],
    useCases: ["Research questions", "Literature reviews", "Evidence checks", "Research synthesis"],
    capabilities: ["Academic search", "AI analysis", "Research summaries", "Research workflows"],
    systemRoles: ["Research layer", "Knowledge discovery"],
    tags: ["ai", "research", "academic", "papers", "search"],
    alternatives: ["Perplexity", "Elicit", "Google Scholar"],
    relatedTools: [],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://consensus.app/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "consensus.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "rank-prompt",
    name: "Rank Prompt",
    slug: "rank-prompt",
    category: "Marketing",
    subcategory: "AI Visibility",
    description: "A platform for monitoring how brands appear in AI-generated answers and citations.",
    whatItIs: "An AI visibility monitoring platform for tracking brand presence across AI search and answer systems.",
    problemSolved: "Helps businesses understand whether their brand is appearing in AI-generated answers and citations.",
    bestFor: ["AI visibility", "GEO", "AI search monitoring", "SEO teams", "Content teams"],
    useCases: ["AI visibility tracking", "Prompt monitoring", "Brand mentions", "Citation tracking"],
    capabilities: ["Prompt tracking", "AI visibility scores", "Citation monitoring", "Model tracking"],
    systemRoles: ["Measurement layer", "AI visibility", "Marketing intelligence"],
    tags: ["ai search", "geo", "seo", "visibility", "marketing"],
    alternatives: ["Semrush", "Ahrefs", "Otterly.AI"],
    relatedTools: [],
    pricing: {
      currency: "USD",
      model: "Subscription",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://rankprompt.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "rank-prompt.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "datasnipper",
    name: "DataSnipper",
    slug: "datasnipper",
    category: "Business",
    subcategory: "AI Document Automation",
    description: "AI-powered document and spreadsheet automation designed for audit, finance and related professional workflows.",
    whatItIs: "A document automation platform that helps professionals extract, match and analyse information from source documents.",
    problemSolved: "Reduces manual document checking and evidence handling in finance and audit workflows.",
    bestFor: ["Audit", "Finance", "Document workflows", "Spreadsheet analysis"],
    useCases: ["Document extraction", "Evidence matching", "Audit testing", "Spreadsheet workflows"],
    capabilities: ["AI extraction", "Document analysis", "Spreadsheet automation", "Evidence workflows"],
    systemRoles: ["Document layer", "AI analysis", "Finance automation"],
    tags: ["ai", "documents", "audit", "finance", "automation"],
    alternatives: ["Microsoft Copilot", "UiPath"],
    relatedTools: [],
    pricing: {
      currency: "USD",
      model: "Business / subscription",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.datasnipper.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "datasnipper.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "castmagic",
    name: "Castmagic",
    slug: "castmagic",
    category: "Content",
    subcategory: "AI Content Repurposing",
    description: "An AI platform for turning audio and video into written and reusable content assets.",
    whatItIs: "A content repurposing platform that processes recordings and helps turn them into multiple content formats.",
    problemSolved: "Reduces the manual work required to turn long-form recordings into useful content assets.",
    bestFor: ["Podcasters", "Creators", "Content teams", "Repurposing"],
    useCases: ["Podcast repurposing", "Show notes", "Social content", "Articles", "Content briefs"],
    capabilities: ["Transcription", "Content extraction", "Repurposing", "AI writing", "Content workflows"],
    systemRoles: ["Content layer", "AI transformation"],
    tags: ["ai", "content", "podcast", "repurposing", "video"],
    alternatives: ["Descript", "OpusClip"],
    relatedTools: ["elevenlabs", "make"],
    pricing: {
      currency: "USD",
      model: "Subscription",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.castmagic.io/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "castmagic.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "murf",
    name: "Murf AI",
    slug: "murf",
    category: "Voice",
    subcategory: "AI Voice",
    description: "AI voice technology for voiceovers, presentations, training and other audio content.",
    whatItIs: "An AI voice platform for creating voiceovers and spoken audio from text.",
    problemSolved: "Makes professional-style voice production faster without recording every line manually.",
    bestFor: ["Voiceovers", "Training", "Presentations", "Marketing content"],
    useCases: ["Video narration", "Training", "Presentations", "Marketing videos"],
    capabilities: ["Text to speech", "Voice generation", "Voiceovers", "Audio editing"],
    systemRoles: ["Voice layer", "Content production"],
    tags: ["ai", "voice", "text to speech", "audio", "content"],
    alternatives: ["ElevenLabs", "PlayHT"],
    relatedTools: ["elevenlabs"],
    pricing: {
      currency: "USD",
      model: "Subscription",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://murf.ai/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "close",
    name: "Close",
    slug: "close",
    category: "Sales",
    subcategory: "CRM & Sales Automation",
    description: "A CRM and sales platform combining communication, automation, coaching and reporting for customer-facing teams.",
    whatItIs: "A sales-focused CRM that combines customer records with communication and sales workflow features.",
    problemSolved: "Brings prospect management, communication and sales activity into one system.",
    bestFor: ["Sales teams", "SMBs", "Outbound sales", "CRM workflows"],
    useCases: ["Lead management", "Email outreach", "Calling", "Sales pipelines", "Follow-ups"],
    capabilities: ["CRM", "Calling", "Email", "SMS", "Automation", "Reporting"],
    systemRoles: ["CRM layer", "Sales execution"],
    tags: ["crm", "sales", "outbound", "automation", "pipeline"],
    alternatives: ["HubSpot", "Pipedrive", "Apollo"],
    relatedTools: ["fullenrich", "make"],
    pricing: {
      currency: "USD",
      model: "Subscription",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://close.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "close.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "nextiva",
    name: "Nextiva",
    slug: "nextiva",
    category: "Business",
    subcategory: "Communications",
    description: "A cloud communications platform combining business phone and related communication services.",
    whatItIs: "A business communications platform focused on cloud-based phone and communication services.",
    problemSolved: "Consolidates business communications into cloud-based services rather than traditional phone infrastructure.",
    bestFor: ["Business communications", "Phone systems", "Customer communication"],
    useCases: ["Business phone", "Customer calls", "Team communication", "Contact centre workflows"],
    capabilities: ["Business phone", "VoIP", "Messaging", "Communications"],
    systemRoles: ["Communication layer"],
    tags: ["communications", "phone", "voip", "business"],
    alternatives: ["Quo", "RingCentral", "Dialpad"],
    relatedTools: ["make"],
    pricing: {
      currency: "USD",
      model: "Subscription",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.nextiva.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "soona",
    name: "soona",
    slug: "soona",
    category: "Content",
    subcategory: "Creative Production",
    description: "A creative production platform for commerce brands combining photography, video, UGC and AI tools.",
    whatItIs: "A creative production service and platform for creating visual commerce content.",
    problemSolved: "Helps brands produce product photography, video and creator content at scale.",
    bestFor: ["E-commerce", "Product content", "UGC", "Creative teams"],
    useCases: ["Product photography", "Product video", "UGC", "Creative testing"],
    capabilities: ["Photography", "Video", "UGC", "AI creative tools"],
    systemRoles: ["Creative layer", "Commerce content"],
    tags: ["content", "ecommerce", "ugc", "video", "photography", "ai"],
    alternatives: ["Canva", "Photoroom"],
    relatedTools: ["castmagic"],
    pricing: {
      currency: "USD",
      model: "Service / subscription",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://soona.co/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "soona.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "meetgeek",
    name: "MeetGeek",
    slug: "meetgeek",
    category: "AI",
    subcategory: "Meeting Intelligence",
    description: "An AI meeting platform for recording, transcribing and extracting insights from meetings.",
    whatItIs: "An AI meeting assistant that turns meetings into searchable transcripts, summaries and insights.",
    problemSolved: "Reduces the manual work involved in taking notes and remembering meeting decisions and actions.",
    bestFor: ["Meetings", "Sales teams", "Remote teams", "Meeting notes"],
    useCases: ["Meeting transcription", "Summaries", "Action items", "Sales intelligence"],
    capabilities: ["Recording", "Transcription", "Summaries", "Meeting insights"],
    systemRoles: ["Knowledge layer", "Meeting automation"],
    tags: ["ai", "meetings", "transcription", "notes", "sales"],
    alternatives: ["Fireflies.ai", "Otter.ai", "Fathom"],
    relatedTools: ["lindy", "make"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://meetgeek.ai/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "meetgeek.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  
    },

  {
    id: "tidio",
    name: "Tidio",
    slug: "tidio",
    category: "Customer Service",
    subcategory: "AI Customer Support",
    description: "A customer service platform combining live chat, ticketing, automation and an AI support agent.",
    whatItIs: "A customer communication platform designed to handle support conversations through live chat and AI.",
    problemSolved: "Helps businesses answer customer questions and automate repetitive support interactions.",
    bestFor: ["Customer support", "Small businesses", "E-commerce", "AI chat"],
    useCases: ["Customer questions", "Support automation", "Live chat", "Lead capture"],
    capabilities: ["AI agent", "Live chat", "Ticketing", "Automation"],
    systemRoles: ["Customer service layer", "AI agent"],
    tags: ["ai", "customer service", "chat", "support", "automation"],
    alternatives: ["Intercom", "Zendesk", "Crisp"],
    relatedTools: ["make", "lindy"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.tidio.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "tidio.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "amplitude",
    name: "Amplitude",
    slug: "amplitude",
    category: "Business",
    subcategory: "Product Analytics",
    description: "A digital analytics platform for understanding product usage and customer journeys.",
    whatItIs: "A product analytics platform that helps teams analyse how users interact with digital products.",
    problemSolved: "Turns product usage data into information teams can use to improve digital experiences.",
    bestFor: ["Product teams", "SaaS", "Digital products", "Analytics"],
    useCases: ["Product analytics", "User journeys", "Conversion analysis", "Experimentation"],
    capabilities: ["Product analytics", "User behaviour analysis", "Experimentation", "AI analytics"],
    systemRoles: ["Measurement layer", "Analytics"],
    tags: ["analytics", "product", "saas", "data", "ai"],
    alternatives: ["Mixpanel", "PostHog", "GA4"],
    relatedTools: ["make"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://amplitude.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "quillbot",
    name: "QuillBot",
    slug: "quillbot",
    category: "Content",
    subcategory: "AI Writing",
    description: "AI writing tools for rewriting, improving and working with written content.",
    whatItIs: "A suite of AI-assisted writing and language tools.",
    problemSolved: "Helps users rewrite, refine and improve written communication more quickly.",
    bestFor: ["Writing", "Students", "Content creators", "Editing"],
    useCases: ["Paraphrasing", "Editing", "Summaries", "Writing assistance"],
    capabilities: ["Paraphrasing", "Grammar", "Summarisation", "AI writing"],
    systemRoles: ["Content layer", "Writing assistance"],
    tags: ["ai", "writing", "content", "paraphrasing", "editing"],
    alternatives: ["Grammarly", "Jasper", "ChatGPT"],
    relatedTools: ["castmagic"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://quillbot.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "quillbot.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "reclaim",
    name: "Reclaim AI",
    slug: "reclaim",
    category: "AI",
    subcategory: "Productivity",
    description: "AI-powered scheduling and calendar optimisation software designed to protect time and organise work.",
    whatItIs: "An AI scheduling tool that helps organise calendars around priorities, meetings and tasks.",
    problemSolved: "Reduces calendar friction by automatically finding and protecting time for important work.",
    bestFor: ["Time management", "Scheduling", "Knowledge workers", "Teams"],
    useCases: ["Calendar planning", "Focus time", "Task scheduling", "Meeting management"],
    capabilities: ["AI scheduling", "Calendar automation", "Task scheduling", "Focus time"],
    systemRoles: ["Productivity layer", "Scheduling automation"],
    tags: ["ai", "calendar", "scheduling", "productivity"],
    alternatives: ["Motion", "Clockwise", "Lindy"],
    relatedTools: ["lindy"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://reclaim.ai/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "softr",
    name: "Softr",
    slug: "softr",
    category: "Business",
    subcategory: "No-Code Apps",
    description: "A no-code platform for building portals, internal tools and operational applications with AI assistance.",
    whatItIs: "A visual application builder for creating business tools and portals without traditional software development.",
    problemSolved: "Lets business teams create useful internal and customer-facing applications without building everything from scratch.",
    bestFor: ["Internal tools", "Portals", "No-code apps", "Small businesses"],
    useCases: ["Client portals", "Internal tools", "Business apps", "Operational systems"],
    capabilities: ["AI app building", "Portals", "Databases", "Business logic", "No-code development"],
    systemRoles: ["Application layer", "Internal tools"],
    tags: ["ai", "no-code", "apps", "portals", "business"],
    alternatives: ["Glide", "Bubble", "Retool"],
    relatedTools: ["make", "emergent"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.softr.io/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "apollo",
    name: "Apollo.io",
    slug: "apollo",
    category: "Sales",
    subcategory: "Sales Intelligence",
    description: "A sales intelligence and engagement platform combining prospect data, enrichment and outbound workflows.",
    whatItIs: "A sales platform that combines a large B2B contact database with prospecting and outreach tools.",
    problemSolved: "Helps sales teams find potential customers and manage outbound prospecting from one platform.",
    bestFor: ["B2B sales", "Lead generation", "Outbound", "Prospecting"],
    useCases: ["Lead generation", "Prospecting", "Email outreach", "Contact enrichment", "Sales sequences"],
    capabilities: ["B2B database", "Contact search", "Email sequences", "Enrichment", "Sales engagement"],
    systemRoles: ["Sales intelligence", "Lead generation", "Outbound layer"],
    tags: ["sales", "b2b", "prospecting", "leads", "outbound", "crm"],
    alternatives: ["Clay", "ZoomInfo", "Cognism"],
    relatedTools: ["fullenrich", "make"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.apollo.io/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "clay",
    name: "Clay",
    slug: "clay",
    category: "Sales",
    subcategory: "Data & GTM Automation",
    description: "A data enrichment and go-to-market automation platform for researching and activating business prospects.",
    whatItIs: "A research and data orchestration platform that combines enrichment providers and automation.",
    problemSolved: "Connects fragmented prospect data sources so teams can research and build targeted outbound workflows.",
    bestFor: ["GTM teams", "Prospecting", "Data enrichment", "Outbound automation"],
    useCases: ["Lead research", "Data enrichment", "Account research", "Outbound personalisation"],
    capabilities: ["Data enrichment", "Research", "Waterfall enrichment", "AI research", "Workflow automation"],
    systemRoles: ["Data layer", "Research layer", "GTM automation"],
    tags: ["sales", "gtm", "data", "enrichment", "ai", "automation"],
    alternatives: ["Apollo.io", "FullEnrich", "ZoomInfo"],
    relatedTools: ["fullenrich", "make"],
    pricing: {
      currency: "USD",
      model: "Credits / subscription",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.clay.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "descript",
    name: "Descript",
    slug: "descript",
    category: "Content",
    subcategory: "AI Audio & Video",
    description: "An audio and video editor that uses transcription and AI tools to make editing more accessible.",
    whatItIs: "A multimedia editing platform where audio and video can be edited through transcripts and visual tools.",
    problemSolved: "Makes complex audio and video editing easier by treating recordings like editable documents.",
    bestFor: ["Podcasters", "Video creators", "Content teams", "Audio editing"],
    useCases: ["Podcast editing", "Video editing", "Transcription", "Screen recording", "Content repurposing"],
    capabilities: ["Transcription", "Video editing", "Audio editing", "Screen recording", "AI editing"],
    systemRoles: ["Content production", "Media layer"],
    tags: ["video", "audio", "ai", "podcast", "editing", "transcription"],
    alternatives: ["Castmagic", "CapCut", "Adobe Premiere Pro"],
    relatedTools: ["castmagic", "elevenlabs"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.descript.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: "descript.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "fireflies",
    name: "Fireflies.ai",
    slug: "fireflies",
    category: "AI",
    subcategory: "Meeting Intelligence",
    description: "An AI meeting assistant for recording, transcribing, summarising and analysing conversations.",
    whatItIs: "An AI meeting assistant that captures conversations and turns them into searchable information.",
    problemSolved: "Reduces the need for manual meeting notes and makes previous conversations easier to retrieve.",
    bestFor: ["Meetings", "Sales teams", "Remote teams", "Knowledge management"],
    useCases: ["Meeting notes", "Transcription", "Sales calls", "Action items", "Conversation search"],
    capabilities: ["Recording", "Transcription", "Summaries", "Search", "Meeting analytics"],
    systemRoles: ["Knowledge layer", "Meeting automation"],
    tags: ["ai", "meetings", "transcription", "sales", "knowledge"],
    alternatives: ["MeetGeek", "Otter.ai", "Fathom"],
    relatedTools: ["meetgeek", "make"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://fireflies.ai/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "grammarly",
    name: "Grammarly",
    slug: "grammarly",
    category: "Content",
    subcategory: "AI Writing",
    description: "An AI-powered writing assistant for improving clarity, correctness, tone and written communication.",
    whatItIs: "A writing assistant that analyses text and provides suggestions for improving communication.",
    problemSolved: "Helps people communicate more clearly and consistently across digital writing.",
    bestFor: ["Business writing", "Content creators", "Teams", "Professional communication"],
    useCases: ["Email writing", "Editing", "Content creation", "Tone improvement", "Proofreading"],
    capabilities: ["Grammar checking", "AI writing", "Tone detection", "Rewriting", "Style guidance"],
    systemRoles: ["Content layer", "Writing quality"],
    tags: ["ai", "writing", "grammar", "content", "productivity"],
    alternatives: ["QuillBot", "Jasper", "Microsoft Editor"],
    relatedTools: ["quillbot"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.grammarly.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "intercom",
    name: "Intercom",
    slug: "intercom",
    category: "Customer Service",
    subcategory: "AI Customer Support",
    description: "A customer communications platform combining messaging, support workflows and AI agents.",
    whatItIs: "A customer service platform designed to manage conversations across support and customer engagement channels.",
    problemSolved: "Helps businesses centralise customer conversations and automate common support work.",
    bestFor: ["SaaS", "Customer support", "AI support", "Customer engagement"],
    useCases: ["Customer support", "AI agents", "Live chat", "Help centres", "Customer engagement"],
    capabilities: ["AI agents", "Messaging", "Help centre", "Ticketing", "Automation"],
    systemRoles: ["Customer service layer", "AI agent"],
    tags: ["ai", "customer service", "support", "chat", "saas"],
    alternatives: ["Tidio", "Zendesk", "Crisp"],
    relatedTools: ["tidio", "make"],
    pricing: {
      currency: "USD",
      model: "Subscription + usage",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.intercom.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "pipedrive",
    name: "Pipedrive",
    slug: "pipedrive",
    category: "Sales",
    subcategory: "CRM",
    description: "A sales CRM focused on pipeline management, activity tracking and sales workflows.",
    whatItIs: "A CRM designed around visual sales pipelines and structured sales activity.",
    problemSolved: "Gives sales teams a clear system for managing prospects, deals and follow-up activities.",
    bestFor: ["Small businesses", "Sales teams", "CRM", "Pipeline management"],
    useCases: ["Sales pipelines", "Lead management", "Deal tracking", "Follow-ups"],
    capabilities: ["CRM", "Pipeline management", "Automation", "Reporting", "Lead management"],
    systemRoles: ["CRM layer", "Sales execution"],
    tags: ["crm", "sales", "pipeline", "leads", "business"],
    alternatives: ["Close", "HubSpot", "Apollo.io"],
    relatedTools: ["make", "fullenrich"],
    pricing: {
      currency: "USD",
      model: "Subscription",
      free: { available: false },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.pipedrive.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "posthog",
    name: "PostHog",
    slug: "posthog",
    category: "Business",
    subcategory: "Product Analytics",
    description: "A product engineering platform combining analytics, experimentation, feature flags and related tools.",
    whatItIs: "A developer-focused product analytics platform for understanding and improving digital products.",
    problemSolved: "Brings product behaviour data and experimentation into a unified system for product teams.",
    bestFor: ["SaaS", "Developers", "Product teams", "Startups"],
    useCases: ["Product analytics", "Feature flags", "A/B testing", "User behaviour analysis"],
    capabilities: ["Product analytics", "Session replay", "Feature flags", "Experiments", "Data warehouse"],
    systemRoles: ["Measurement layer", "Product analytics", "Experimentation"],
    tags: ["analytics", "product", "saas", "developers", "experimentation"],
    alternatives: ["Amplitude", "Mixpanel", "Google Analytics"],
    relatedTools: ["amplitude", "make"],
    pricing: {
      currency: "USD",
      model: "Usage-based",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://posthog.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "relevance-ai",
    name: "Relevance AI",
    slug: "relevance-ai",
    category: "AI",
    subcategory: "AI Agents",
    description: "A platform for building AI agents and multi-step AI workflows for business processes.",
    whatItIs: "A platform for creating AI agents that can use tools and perform business tasks.",
    problemSolved: "Helps businesses turn repeatable processes into AI-driven agent workflows.",
    bestFor: ["AI agents", "Business automation", "Operations", "GTM"],
    useCases: ["Sales agents", "Research agents", "Operations", "Lead qualification"],
    capabilities: ["AI agents", "Tools", "Workflows", "Knowledge", "Integrations"],
    systemRoles: ["Agent layer", "Automation", "AI operations"],
    tags: ["ai", "agents", "automation", "workflows", "business"],
    alternatives: ["Lindy", "CrewAI", "n8n"],
    relatedTools: ["lindy", "make"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://relevanceai.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "typeform",
    name: "Typeform",
    slug: "typeform",
    category: "Business",
    subcategory: "Forms",
    description: "An interactive form and data collection platform designed around conversational user experiences.",
    whatItIs: "A form builder focused on engaging, visually polished data collection experiences.",
    problemSolved: "Helps businesses collect information through more engaging forms and surveys.",
    bestFor: ["Lead generation", "Surveys", "Research", "Applications"],
    useCases: ["Lead capture", "Customer research", "Surveys", "Applications", "Quizzes"],
    capabilities: ["Interactive forms", "Logic", "Integrations", "Analytics", "Embeds"],
    systemRoles: ["Input layer", "Lead capture", "Research"],
    tags: ["forms", "surveys", "lead generation", "data collection"],
    alternatives: ["Tally", "Google Forms", "Jotform"],
    relatedTools: ["tally", "make"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.typeform.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "zapier",
    name: "Zapier",
    slug: "zapier",
    category: "Automation",
    subcategory: "Workflow Automation",
    description: "An automation platform for connecting applications and automating repetitive business tasks.",
    whatItIs: "A workflow automation platform that connects thousands of applications and services.",
    problemSolved: "Allows businesses to automate repetitive tasks without building custom integrations.",
    bestFor: ["Automation", "Small businesses", "App integrations", "AI workflows"],
    useCases: ["Lead routing", "CRM updates", "Notifications", "Email automation", "AI workflows"],
    capabilities: ["Workflow automation", "App integrations", "Triggers", "Actions", "AI automation", "Agents"],
    systemRoles: ["Automation layer", "Integration layer"],
    tags: ["automation", "workflow", "integrations", "ai", "no-code"],
    alternatives: ["Make.com", "n8n", "Pipedream"],
    relatedTools: ["make", "lindy"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://zapier.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "n8n",
    name: "n8n",
    slug: "n8n",
    category: "Automation",
    subcategory: "Developer Automation",
    description: "A workflow automation platform combining visual workflows with code and self-hosting options.",
    whatItIs: "A flexible workflow automation platform for connecting applications, APIs and AI services.",
    problemSolved: "Gives technical teams more control over automation logic and infrastructure than simpler no-code tools.",
    bestFor: ["Developers", "AI workflows", "Automation", "APIs", "Self-hosting"],
    useCases: ["API workflows", "AI agents", "Data pipelines", "Business automation", "Integrations"],
    capabilities: ["Visual workflows", "Code", "APIs", "Webhooks", "AI nodes", "Self-hosting"],
    systemRoles: ["Automation layer", "Integration layer", "AI orchestration"],
    tags: ["automation", "workflow", "developers", "ai", "api", "self-hosting"],
    alternatives: ["Make.com", "Zapier", "Pipedream"],
    relatedTools: ["make", "pinecone"],
    pricing: {
      currency: "EUR",
      model: "Free self-hosted + paid cloud",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://n8n.io/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "jotform",
    name: "Jotform",
    slug: "jotform",
    category: "Business",
    subcategory: "Forms & Data Collection",
    description: "A form and workflow platform for collecting information, payments and submissions online.",
    whatItIs: "A form builder designed for collecting information and automating processes around submissions.",
    problemSolved: "Provides ready-made forms and workflows for businesses that need structured online data collection.",
    bestFor: ["Forms", "Applications", "Payments", "Business workflows"],
    useCases: ["Applications", "Lead capture", "Payments", "Registrations", "Surveys"],
    capabilities: ["Forms", "Payments", "Approvals", "Workflows", "Integrations"],
    systemRoles: ["Input layer", "Workflow trigger"],
    tags: ["forms", "business", "data", "payments", "workflow"],
    alternatives: ["Tally", "Typeform", "Google Forms"],
    relatedTools: ["tally", "make"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.jotform.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "webflow",
    name: "Webflow",
    slug: "webflow",
    category: "Website",
    subcategory: "Visual Web Development",
    description: "A visual web development platform for designing, building and publishing production websites.",
    whatItIs: "A visual website development platform combining design control with CMS and publishing capabilities.",
    problemSolved: "Allows teams to create sophisticated websites without manually coding every visual component.",
    bestFor: ["Websites", "Marketing teams", "Designers", "CMS", "Landing pages"],
    useCases: ["Business websites", "Landing pages", "Marketing sites", "CMS websites"],
    capabilities: ["Visual development", "CMS", "Hosting", "Forms", "SEO controls"],
    systemRoles: ["Website layer", "Content layer"],
    tags: ["website", "web design", "cms", "no-code", "marketing"],
    alternatives: ["Framer", "WordPress", "Carrd"],
    relatedTools: ["carrd", "tally"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://webflow.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "framer",
    name: "Framer",
    slug: "framer",
    category: "Website",
    subcategory: "Visual Web Design",
    description: "A visual website platform combining design, prototyping, CMS and publishing.",
    whatItIs: "A design-led website platform for creating responsive websites visually.",
    problemSolved: "Helps designers and creators publish high-quality websites without traditional development workflows.",
    bestFor: ["Designers", "Landing pages", "Marketing websites", "Creators"],
    useCases: ["Landing pages", "Portfolio sites", "Marketing sites", "Startup websites"],
    capabilities: ["Visual design", "CMS", "Animations", "Hosting", "SEO"],
    systemRoles: ["Website layer", "Design layer"],
    tags: ["website", "design", "landing pages", "cms", "no-code"],
    alternatives: ["Webflow", "Carrd", "Wix"],
    relatedTools: ["carrd", "tally"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.framer.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "bubble",
    name: "Bubble",
    slug: "bubble",
    category: "Developer",
    subcategory: "No-Code Application Development",
    description: "A no-code application development platform for building web applications and software products.",
    whatItIs: "A visual development environment for building web applications without traditional programming.",
    problemSolved: "Lets entrepreneurs and teams build functioning software products without assembling a conventional development stack from scratch.",
    bestFor: ["Startups", "MVPs", "Web applications", "No-code development"],
    useCases: ["MVPs", "SaaS products", "Internal tools", "Customer portals"],
    capabilities: ["Visual development", "Database", "Workflows", "Plugins", "Application logic"],
    systemRoles: ["Application layer", "Build layer"],
    tags: ["no-code", "apps", "saas", "startup", "development"],
    alternatives: ["Softr", "Glide", "Webflow"],
    relatedTools: ["softr", "make"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://bubble.io/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "retell-ai",
    name: "Retell AI",
    slug: "retell-ai",
    category: "AI",
    subcategory: "Voice Agents",
    description: "Infrastructure for building AI-powered voice agents that can handle real-time conversations.",
    whatItIs: "A developer platform for creating conversational AI voice agents.",
    problemSolved: "Provides the infrastructure needed to build voice-based AI systems without implementing the entire telephony and conversation stack from scratch.",
    bestFor: ["Voice agents", "AI developers", "Customer service", "Phone automation"],
    useCases: ["AI phone agents", "Customer support", "Appointment booking", "Lead qualification"],
    capabilities: ["Voice agents", "Telephony", "Speech processing", "Conversation workflows"],
    systemRoles: ["Voice agent layer", "AI infrastructure"],
    tags: ["ai", "voice", "agents", "telephony", "automation"],
    alternatives: ["Vapi", "Bland AI", "ElevenLabs"],
    relatedTools: ["elevenlabs", "make"],
    pricing: {
      currency: "USD",
      model: "Usage-based",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.retellai.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "vapi",
    name: "Vapi",
    slug: "vapi",
    category: "AI",
    subcategory: "Voice Agents",
    description: "A developer platform for building and deploying voice AI agents.",
    whatItIs: "Infrastructure for creating programmable voice AI agents and phone-based applications.",
    problemSolved: "Simplifies the engineering required to connect voice models, telephony and business logic into working voice agents.",
    bestFor: ["Developers", "Voice AI", "Phone agents", "AI applications"],
    useCases: ["Phone agents", "Customer service", "Outbound calls", "Appointment systems"],
    capabilities: ["Voice agents", "Telephony", "APIs", "Tool calling", "Conversation infrastructure"],
    systemRoles: ["Voice agent layer", "AI infrastructure"],
    tags: ["ai", "voice", "agents", "telephony", "api"],
    alternatives: ["Retell AI", "Bland AI", "ElevenLabs"],
    relatedTools: ["elevenlabs", "make"],
    pricing: {
      currency: "USD",
      model: "Usage-based",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://vapi.ai/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "bland-ai",
    name: "Bland AI",
    slug: "bland-ai",
    category: "AI",
    subcategory: "Voice Agents",
    description: "An AI phone agent platform for automating conversational calls.",
    whatItIs: "A platform for building AI agents that can make and receive phone calls.",
    problemSolved: "Automates phone-based conversations that would otherwise require staff to handle repetitive calls.",
    bestFor: ["Phone automation", "Sales", "Customer service", "Appointment booking"],
    useCases: ["Outbound calling", "Inbound support", "Lead qualification", "Appointment scheduling"],
    capabilities: ["AI phone agents", "Telephony", "Call automation", "Conversation workflows"],
    systemRoles: ["Voice agent layer", "Customer service automation"],
    tags: ["ai", "voice", "phone", "agents", "sales"],
    alternatives: ["Vapi", "Retell AI", "Twilio"],
    relatedTools: ["elevenlabs", "make"],
    pricing: {
      currency: "USD",
      model: "Usage-based",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.bland.ai/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "twilio",
    name: "Twilio",
    slug: "twilio",
    category: "Developer",
    subcategory: "Communications Infrastructure",
    description: "Communications infrastructure for adding messaging, voice, video and contact-centre functionality to software.",
    whatItIs: "An API platform that lets developers build communication features into applications.",
    problemSolved: "Provides programmable communication infrastructure without requiring businesses to build telecom infrastructure themselves.",
    bestFor: ["Developers", "SaaS", "Communications", "AI applications"],
    useCases: ["SMS", "Phone calls", "Verification", "Customer communication", "AI voice applications"],
    capabilities: ["SMS APIs", "Voice APIs", "Video", "Messaging", "Contact centre"],
    systemRoles: ["Communications infrastructure", "API layer"],
    tags: ["api", "communications", "sms", "voice", "developer"],
    alternatives: ["Vonage", "Telnyx", "Plivo"],
    relatedTools: ["vapi", "retell-ai"],
    pricing: {
      currency: "USD",
      model: "Usage-based",
      free: { available: null },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.twilio.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "glide",
    name: "Glide",
    slug: "glide",
    category: "Business",
    subcategory: "No-Code Apps",
    description: "A no-code platform for turning data into business applications and internal tools.",
    whatItIs: "A visual application builder that can transform structured data into usable business apps.",
    problemSolved: "Helps teams build practical internal applications without traditional software development.",
    bestFor: ["Internal tools", "Small businesses", "Operations", "No-code development"],
    useCases: ["Internal tools", "Dashboards", "Client portals", "Operational apps"],
    capabilities: ["No-code apps", "Data sources", "Workflows", "AI features", "Permissions"],
    systemRoles: ["Application layer", "Operations layer"],
    tags: ["no-code", "apps", "business", "internal tools", "ai"],
    alternatives: ["Softr", "Bubble", "Retool"],
    relatedTools: ["softr", "make"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://www.glideapps.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "retool",
    name: "Retool",
    slug: "retool",
    category: "Developer",
    subcategory: "Internal Tools",
    description: "A development platform for building internal business applications connected to company data and services.",
    whatItIs: "A low-code platform for creating internal tools and operational interfaces.",
    problemSolved: "Speeds up development of internal applications by providing reusable UI components and data integrations.",
    bestFor: ["Internal tools", "Developers", "Operations", "Data applications"],
    useCases: ["Admin panels", "Operations dashboards", "Internal apps", "Data management"],
    capabilities: ["Low-code development", "Database connections", "APIs", "Workflows", "AI"],
    systemRoles: ["Application layer", "Operations layer"],
    tags: ["developer", "low-code", "internal tools", "business", "data"],
    alternatives: ["Softr", "Glide", "Bubble"],
    relatedTools: ["make", "softr"],
    pricing: {
      currency: "USD",
      model: "Free + paid plans",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://retool.com/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "qdrant",
    name: "Qdrant",
    slug: "qdrant",
    category: "AI",
    subcategory: "Vector Database",
    description: "A vector database and similarity search engine for AI applications.",
    whatItIs: "A vector search engine designed for storing embeddings and retrieving semantically similar information.",
    problemSolved: "Provides the retrieval infrastructure required by many RAG and AI knowledge applications.",
    bestFor: ["RAG", "AI applications", "Semantic search", "Developers"],
    useCases: ["RAG", "Semantic search", "Recommendation systems", "AI knowledge bases"],
    capabilities: ["Vector search", "Embeddings", "Filtering", "Similarity search", "Cloud deployment"],
    systemRoles: ["Knowledge layer", "Retrieval layer", "AI infrastructure"],
    tags: ["ai", "vector database", "rag", "semantic search", "developer"],
    alternatives: ["Pinecone", "Weaviate", "Milvus"],
    relatedTools: ["pinecone", "relevance-ai"],
    pricing: {
      currency: "USD",
      model: "Free + usage",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://qdrant.tech/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "weaviate",
    name: "Weaviate",
    slug: "weaviate",
    category: "AI",
    subcategory: "Vector Database",
    description: "An open-source vector database for building semantic search and AI applications.",
    whatItIs: "A vector database designed for storing and retrieving information using embeddings and semantic similarity.",
    problemSolved: "Provides scalable search infrastructure for AI applications that need to retrieve relevant information.",
    bestFor: ["RAG", "Semantic search", "AI developers", "Knowledge systems"],
    useCases: ["RAG", "Semantic search", "Recommendation systems", "AI knowledge bases"],
    capabilities: ["Vector search", "Hybrid search", "Embeddings", "Generative search", "Cloud"],
    systemRoles: ["Knowledge layer", "Retrieval layer", "AI infrastructure"],
    tags: ["ai", "vector database", "rag", "search", "developer"],
    alternatives: ["Pinecone", "Qdrant", "Milvus"],
    relatedTools: ["pinecone", "qdrant"],
    pricing: {
      currency: "USD",
      model: "Open source + cloud",
      free: { available: true },
      lastVerified: "2026-08"
    },
    officialUrl: "https://weaviate.io/",
    affiliateUrl: null,
    relationship: {
      affiliate: false,
      verified: false,
      marketplace: "PartnerStack"
    },
    editorial: {
      status: "Research candidate",
      profileUrl: null,
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },

  {
    id: "adcreative-ai",
    name: "AdCreative.ai",
    category: "Marketing",
    subcategory: "Technology",
    description: "An AI creative platform for generating and evaluating advertising assets.",
    whatItIs: "An AI creative platform for generating and evaluating advertising assets.",
    problemSolved: "An AI creative platform for generating and evaluating advertising assets.",
    bestFor: ["Performance marketers and e-commerce teams producing ad variations."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.adcreative.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "adcreative-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "adwisely",
    name: "Adwisely",
    category: "Marketing",
    subcategory: "Technology",
    description: "An advertising automation platform for e-commerce brands running and optimising paid campaigns.",
    whatItIs: "An advertising automation platform for e-commerce brands running and optimising paid campaigns.",
    problemSolved: "An advertising automation platform for e-commerce brands running and optimising paid campaigns.",
    bestFor: ["Online retailers looking to automate performance marketing."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://adwisely.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "adwisely.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "airia",
    name: "Airia",
    category: "AI",
    subcategory: "Technology",
    description: "An enterprise AI platform for building, managing and deploying AI applications and agents.",
    whatItIs: "An enterprise AI platform for building, managing and deploying AI applications and agents.",
    problemSolved: "An enterprise AI platform for building, managing and deploying AI applications and agents.",
    bestFor: ["Organisations adopting AI across business workflows."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.airia.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "airia.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "aisdr-inc",
    name: "AiSDR, Inc.",
    category: "Sales",
    subcategory: "Technology",
    description: "An AI sales development platform designed to automate prospecting, outreach and follow-up.",
    whatItIs: "An AI sales development platform designed to automate prospecting, outreach and follow-up.",
    problemSolved: "An AI sales development platform designed to automate prospecting, outreach and follow-up.",
    bestFor: ["B2B teams building automated outbound systems."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Sales"],
    tags: ["sales", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://aisdr.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "aisdr-inc.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "aisq",
    name: "AISQ",
    category: "AI",
    subcategory: "Technology",
    description: "An AI search and intelligence platform designed to help users find and work with information more efficiently.",
    whatItIs: "An AI search and intelligence platform designed to help users find and work with information more efficiently.",
    problemSolved: "An AI search and intelligence platform designed to help users find and work with information more efficiently.",
    bestFor: ["Research-heavy users and teams working with large information sets."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://aisq.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "aisq.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "alidrop",
    name: "Alidrop",
    category: "Business",
    subcategory: "Technology",
    description: "An e-commerce sourcing and dropshipping platform for finding products and managing online stores.",
    whatItIs: "An e-commerce sourcing and dropshipping platform for finding products and managing online stores.",
    problemSolved: "An e-commerce sourcing and dropshipping platform for finding products and managing online stores.",
    bestFor: ["Entrepreneurs building product-based online stores."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.alidrop.co/",
    editorial: {
      status: "Research candidate",
      profileUrl: "alidrop.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "amplemarket",
    name: "Amplemarket",
    category: "Sales",
    subcategory: "Technology",
    description: "An AI sales platform for prospecting, account research and outbound execution.",
    whatItIs: "An AI sales platform for prospecting, account research and outbound execution.",
    problemSolved: "An AI sales platform for prospecting, account research and outbound execution.",
    bestFor: ["B2B sales teams building automated outbound systems."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Sales"],
    tags: ["sales", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.amplemarket.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "amplemarket.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "assembly",
    name: "Assembly",
    category: "Business",
    subcategory: "Technology",
    description: "A workplace platform focused on employee engagement, recognition and people operations.",
    whatItIs: "A workplace platform focused on employee engagement, recognition and people operations.",
    problemSolved: "A workplace platform focused on employee engagement, recognition and people operations.",
    bestFor: ["Businesses improving employee engagement and internal culture."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.assembly.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "assembly.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "atria",
    name: "Atria",
    category: "AI",
    subcategory: "Technology",
    description: "An AI technology platform focused on building intelligent workflows and agents for business use.",
    whatItIs: "An AI technology platform focused on building intelligent workflows and agents for business use.",
    problemSolved: "An AI technology platform focused on building intelligent workflows and agents for business use.",
    bestFor: ["Teams exploring agentic automation and AI workflows."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.atria.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "atria.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "backlog-by-nulab-inc",
    name: "Backlog by Nulab Inc",
    category: "Business",
    subcategory: "Technology",
    description: "A project management and issue-tracking platform for software and business teams.",
    whatItIs: "A project management and issue-tracking platform for software and business teams.",
    problemSolved: "A project management and issue-tracking platform for software and business teams.",
    bestFor: ["Teams managing projects, tasks and development work."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://backlog.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "backlog-by-nulab-inc.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "beautiful-ai",
    name: "Beautiful.ai",
    category: "Content",
    subcategory: "Technology",
    description: "An AI presentation platform designed to help teams create polished slides with less manual formatting.",
    whatItIs: "An AI presentation platform designed to help teams create polished slides with less manual formatting.",
    problemSolved: "An AI presentation platform designed to help teams create polished slides with less manual formatting.",
    bestFor: ["Teams creating business presentations quickly."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Content"],
    tags: ["content", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.beautiful.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "beautiful-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "bidx",
    name: "BidX",
    category: "Marketing",
    subcategory: "Technology",
    description: "A digital advertising technology platform focused on performance optimisation and campaign automation.",
    whatItIs: "A digital advertising technology platform focused on performance optimisation and campaign automation.",
    problemSolved: "A digital advertising technology platform focused on performance optimisation and campaign automation.",
    bestFor: ["Performance marketers managing paid acquisition."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.bidx.net/",
    editorial: {
      status: "Research candidate",
      profileUrl: "bidx.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "bitdefender",
    name: "Bitdefender",
    category: "Business",
    subcategory: "Technology",
    description: "A cybersecurity company providing protection for devices, networks and organisations.",
    whatItIs: "A cybersecurity company providing protection for devices, networks and organisations.",
    problemSolved: "A cybersecurity company providing protection for devices, networks and organisations.",
    bestFor: ["Businesses and individuals needing security software and protection."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.bitdefender.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "bitdefender.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "brand24",
    name: "Brand24",
    category: "Marketing",
    subcategory: "Technology",
    description: "A media monitoring platform for tracking brand mentions, sentiment and online conversations.",
    whatItIs: "A media monitoring platform for tracking brand mentions, sentiment and online conversations.",
    problemSolved: "A media monitoring platform for tracking brand mentions, sentiment and online conversations.",
    bestFor: ["Marketing teams monitoring reputation and market signals."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://brand24.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "brand24.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "browse-ai",
    name: "Browse AI",
    category: "Automation",
    subcategory: "Technology",
    description: "A no-code platform for extracting and monitoring information from websites.",
    whatItIs: "A no-code platform for extracting and monitoring information from websites.",
    problemSolved: "A no-code platform for extracting and monitoring information from websites.",
    bestFor: ["Researchers, marketers and operators collecting web data without coding."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Automation"],
    tags: ["automation", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.browse.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "browse-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "callilio",
    name: "Callilio",
    category: "Business",
    subcategory: "Technology",
    description: "A cloud communications platform focused on business calling, contact-centre and conversational workflows.",
    whatItIs: "A cloud communications platform focused on business calling, contact-centre and conversational workflows.",
    problemSolved: "A cloud communications platform focused on business calling, contact-centre and conversational workflows.",
    bestFor: ["Businesses managing customer calls and communication operations."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://callilio.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "callilio.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "canvas-score-by-roya-com",
    name: "Canvas Score by Roya.com",
    category: "Business",
    subcategory: "Technology",
    description: "A scoring and assessment technology platform for evaluating business or customer information.",
    whatItIs: "A scoring and assessment technology platform for evaluating business or customer information.",
    problemSolved: "A scoring and assessment technology platform for evaluating business or customer information.",
    bestFor: ["Teams using structured scoring and assessment workflows."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://roya.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "canvas-score-by-roya-com.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "checkr",
    name: "Checkr",
    category: "Business",
    subcategory: "Technology",
    description: "A technology platform for background checks and workforce screening.",
    whatItIs: "A technology platform for background checks and workforce screening.",
    problemSolved: "A technology platform for background checks and workforce screening.",
    bestFor: ["Businesses onboarding workers and managing compliance-heavy hiring workflows."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://checkr.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "checkr.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "claap",
    name: "Claap",
    category: "AI",
    subcategory: "Technology",
    description: "An AI-powered video and meeting platform for recording, analysing and coaching customer-facing teams.",
    whatItIs: "An AI-powered video and meeting platform for recording, analysing and coaching customer-facing teams.",
    problemSolved: "An AI-powered video and meeting platform for recording, analysing and coaching customer-facing teams.",
    bestFor: ["Sales and customer teams turning conversations into insights."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.claap.io/",
    editorial: {
      status: "Research candidate",
      profileUrl: "claap.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "clickup",
    name: "ClickUp",
    category: "Business",
    subcategory: "Technology",
    description: "A project and productivity platform combining tasks, docs, goals, dashboards and AI.",
    whatItIs: "A project and productivity platform combining tasks, docs, goals, dashboards and AI.",
    problemSolved: "A project and productivity platform combining tasks, docs, goals, dashboards and AI.",
    bestFor: ["Teams that want a broad operating workspace."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://clickup.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "clickup.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "confido-health",
    name: "Confido Health",
    category: "Business",
    subcategory: "Technology",
    description: "An AI healthcare technology platform focused on automating patient communication and operational workflows.",
    whatItIs: "An AI healthcare technology platform focused on automating patient communication and operational workflows.",
    problemSolved: "An AI healthcare technology platform focused on automating patient communication and operational workflows.",
    bestFor: ["Healthcare organisations improving administrative and patient-facing processes."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.confidohealth.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "confido-health.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "databox",
    name: "Databox",
    category: "Business",
    subcategory: "Technology",
    description: "A business analytics and dashboard platform for bringing performance metrics into one place.",
    whatItIs: "A business analytics and dashboard platform for bringing performance metrics into one place.",
    problemSolved: "A business analytics and dashboard platform for bringing performance metrics into one place.",
    bestFor: ["Marketing, sales and operations teams tracking KPIs."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://databox.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "databox.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "datahawk",
    name: "DataHawk",
    category: "Marketing",
    subcategory: "Technology",
    description: "An e-commerce analytics platform for tracking products, marketplaces, competitors and performance.",
    whatItIs: "An e-commerce analytics platform for tracking products, marketplaces, competitors and performance.",
    problemSolved: "An e-commerce analytics platform for tracking products, marketplaces, competitors and performance.",
    bestFor: ["Amazon and marketplace sellers managing product growth."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://datahawk.co/",
    editorial: {
      status: "Research candidate",
      profileUrl: "datahawk.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "demodesk",
    name: "Demodesk",
    category: "Sales",
    subcategory: "Technology",
    description: "A sales meeting platform for demos, coaching, scheduling and customer-facing workflows.",
    whatItIs: "A sales meeting platform for demos, coaching, scheduling and customer-facing workflows.",
    problemSolved: "A sales meeting platform for demos, coaching, scheduling and customer-facing workflows.",
    bestFor: ["Sales teams improving remote selling and enablement."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Sales"],
    tags: ["sales", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://demodesk.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "demodesk.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "devs-ai",
    name: "Devs.ai",
    category: "AI",
    subcategory: "Technology",
    description: "An AI-focused development platform designed to accelerate software engineering workflows.",
    whatItIs: "An AI-focused development platform designed to accelerate software engineering workflows.",
    problemSolved: "An AI-focused development platform designed to accelerate software engineering workflows.",
    bestFor: ["Developers and teams using AI to build software faster."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://devs.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "devs-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "distance",
    name: "Distance",
    category: "Business",
    subcategory: "Technology",
    description: "A technology platform focused on connecting operational workflows and business processes.",
    whatItIs: "A technology platform focused on connecting operational workflows and business processes.",
    problemSolved: "A technology platform focused on connecting operational workflows and business processes.",
    bestFor: ["Teams looking to simplify operational systems."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://distance.tech/",
    editorial: {
      status: "Research candidate",
      profileUrl: "distance.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "dry-ground-ai",
    name: "Dry Ground AI",
    category: "AI",
    subcategory: "Technology",
    description: "An AI solutions company focused on practical automation and intelligent business applications.",
    whatItIs: "An AI solutions company focused on practical automation and intelligent business applications.",
    problemSolved: "An AI solutions company focused on practical automation and intelligent business applications.",
    bestFor: ["Businesses looking for applied AI services and workflows."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://dryground.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "dry-ground-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "elevateforward-ai",
    name: "ElevateForward.ai",
    category: "AI",
    subcategory: "Technology",
    description: "An AI-focused business technology platform aimed at helping organisations improve workflows and productivity.",
    whatItIs: "An AI-focused business technology platform aimed at helping organisations improve workflows and productivity.",
    problemSolved: "An AI-focused business technology platform aimed at helping organisations improve workflows and productivity.",
    bestFor: ["Businesses exploring applied AI for operational improvement."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://elevateforward.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "elevateforward-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "emergent-labs-inc",
    name: "Emergent Labs Inc",
    category: "AI",
    subcategory: "Technology",
    description: "An AI platform for building full-stack web and mobile applications from natural-language instructions.",
    whatItIs: "An AI platform for building full-stack web and mobile applications from natural-language instructions.",
    problemSolved: "An AI platform for building full-stack web and mobile applications from natural-language instructions.",
    bestFor: ["Entrepreneurs and developers prototyping or launching software with AI."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://emergent.sh/",
    editorial: {
      status: "Research candidate",
      profileUrl: "emergent-labs-inc.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "evolve",
    name: "Evolve",
    category: "Business",
    subcategory: "Technology",
    description: "A business automation platform focused on improving operational workflows and process efficiency.",
    whatItIs: "A business automation platform focused on improving operational workflows and process efficiency.",
    problemSolved: "A business automation platform focused on improving operational workflows and process efficiency.",
    bestFor: ["Teams looking to reduce repetitive operational work."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://evolve.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "evolve.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "expertise-ai",
    name: "Expertise AI",
    category: "AI",
    subcategory: "Technology",
    description: "An AI-powered technology platform for turning business expertise into searchable and interactive experiences.",
    whatItIs: "An AI-powered technology platform for turning business expertise into searchable and interactive experiences.",
    problemSolved: "An AI-powered technology platform for turning business expertise into searchable and interactive experiences.",
    bestFor: ["Businesses making internal or specialist knowledge easier to access."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.expertise.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "expertise-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "fireflies-ai",
    name: "Fireflies.ai",
    category: "AI",
    subcategory: "Technology",
    description: "An AI meeting assistant that records, transcribes, summarises and analyses conversations.",
    whatItIs: "An AI meeting assistant that records, transcribes, summarises and analyses conversations.",
    problemSolved: "An AI meeting assistant that records, transcribes, summarises and analyses conversations.",
    bestFor: ["Sales and remote teams that need searchable meeting knowledge."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://fireflies.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "fireflies-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "gamma",
    name: "Gamma",
    category: "Content",
    subcategory: "Technology",
    description: "An AI presentation and document platform for turning ideas into polished visual content.",
    whatItIs: "An AI presentation and document platform for turning ideas into polished visual content.",
    problemSolved: "An AI presentation and document platform for turning ideas into polished visual content.",
    bestFor: ["Creators, founders and teams making decks, docs and presentations quickly."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Content"],
    tags: ["content", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://gamma.app/",
    editorial: {
      status: "Research candidate",
      profileUrl: "gamma.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "getresponse",
    name: "GetResponse",
    category: "Marketing",
    subcategory: "Technology",
    description: "An all-in-one marketing platform combining email, automation, landing pages and conversion tools.",
    whatItIs: "An all-in-one marketing platform combining email, automation, landing pages and conversion tools.",
    problemSolved: "An all-in-one marketing platform combining email, automation, landing pages and conversion tools.",
    bestFor: ["Creators and businesses building email-driven growth systems."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.getresponse.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "getresponse.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "ignition",
    name: "Ignition",
    category: "Marketing",
    subcategory: "Technology",
    description: "A marketing workflow platform for planning campaigns, research and execution.",
    whatItIs: "A marketing workflow platform for planning campaigns, research and execution.",
    problemSolved: "A marketing workflow platform for planning campaigns, research and execution.",
    bestFor: ["Marketing teams that want one place to organise campaign work."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.haveignition.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "ignition.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "krispcall-communications-inc",
    name: "KrispCall Communications Inc.",
    category: "Business",
    subcategory: "Technology",
    description: "A cloud business calling platform for teams that need phone, messaging and communication workflows.",
    whatItIs: "A cloud business calling platform for teams that need phone, messaging and communication workflows.",
    problemSolved: "A cloud business calling platform for teams that need phone, messaging and communication workflows.",
    bestFor: ["Sales and support teams operating remotely."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://krispcall.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "krispcall-communications-inc.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "landbot",
    name: "Landbot",
    category: "Automation",
    subcategory: "Technology",
    description: "A no-code platform for building conversational websites, forms and chat experiences.",
    whatItIs: "A no-code platform for building conversational websites, forms and chat experiences.",
    problemSolved: "A no-code platform for building conversational websites, forms and chat experiences.",
    bestFor: ["Businesses using chat to qualify leads or collect information."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Automation"],
    tags: ["automation", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://landbot.io/",
    editorial: {
      status: "Research candidate",
      profileUrl: "landbot.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "landingi",
    name: "Landingi",
    category: "Marketing",
    subcategory: "Technology",
    description: "A landing-page builder for creating, publishing and testing campaign pages without heavy development work.",
    whatItIs: "A landing-page builder for creating, publishing and testing campaign pages without heavy development work.",
    problemSolved: "A landing-page builder for creating, publishing and testing campaign pages without heavy development work.",
    bestFor: ["Marketers running campaigns and lead-generation funnels."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://landingi.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "landingi.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "logome-ai",
    name: "Logome.ai",
    category: "AI",
    subcategory: "Technology",
    description: "An AI branding and logo creation platform for generating visual identity assets.",
    whatItIs: "An AI branding and logo creation platform for generating visual identity assets.",
    problemSolved: "An AI branding and logo creation platform for generating visual identity assets.",
    bestFor: ["Founders and small businesses creating brand assets quickly."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.logome.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "logome-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "lusha",
    name: "Lusha",
    category: "Sales",
    subcategory: "Technology",
    description: "A B2B data and sales intelligence platform for finding business contacts and company information.",
    whatItIs: "A B2B data and sales intelligence platform for finding business contacts and company information.",
    problemSolved: "A B2B data and sales intelligence platform for finding business contacts and company information.",
    bestFor: ["Sales teams building prospect lists and researching accounts."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Sales"],
    tags: ["sales", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.lusha.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "lusha.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "make-com",
    name: "Make.com",
    category: "Business",
    subcategory: "Technology",
    description: "Stack & System's practical guide to Make.com: automation, AI agents, workflows, integrations, pricing, alternatives and where Make fits in an AI-powered business system.",
    whatItIs: "Stack & System's practical guide to Make.com: automation, AI agents, workflows, integrations, pricing, alternatives and where Make fits in an AI-powered business system.",
    problemSolved: "Stack & System's practical guide to Make.com: automation, AI agents, workflows, integrations, pricing, alternatives and where Make fits in an AI-powered business system.",
    bestFor: [],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "",
    editorial: {
      status: "Research candidate",
      profileUrl: "make-com.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "mindstudio",
    name: "MindStudio",
    category: "AI",
    subcategory: "Technology",
    description: "A platform for building custom AI agents and workflows without traditional software development.",
    whatItIs: "A platform for building custom AI agents and workflows without traditional software development.",
    problemSolved: "A platform for building custom AI agents and workflows without traditional software development.",
    bestFor: ["Businesses creating task-specific AI workers."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://mindstudio.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "mindstudio.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "motion",
    name: "Motion",
    category: "AI",
    subcategory: "Technology",
    description: "An AI productivity platform that combines calendars, project planning and task management.",
    whatItIs: "An AI productivity platform that combines calendars, project planning and task management.",
    problemSolved: "An AI productivity platform that combines calendars, project planning and task management.",
    bestFor: ["People and teams that want automated planning around priorities."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.usemotion.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "motion.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "murf-ai",
    name: "Murf AI",
    category: "Voice",
    subcategory: "Technology",
    description: "AI voice technology for voiceovers, presentations, training and audio content.",
    whatItIs: "AI voice technology for voiceovers, presentations, training and audio content.",
    problemSolved: "AI voice technology for voiceovers, presentations, training and audio content.",
    bestFor: ["Creators and businesses producing narrated content without recording every line."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Voice"],
    tags: ["voice", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://murf.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "murf-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "ngram",
    name: "ngram",
    category: "AI",
    subcategory: "Technology",
    description: "An AI and data technology platform focused on extracting value from language and business information.",
    whatItIs: "An AI and data technology platform focused on extracting value from language and business information.",
    problemSolved: "An AI and data technology platform focused on extracting value from language and business information.",
    bestFor: ["Teams working with text-heavy data and AI workflows."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://ngram.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "ngram.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "omniseo",
    name: "OmniSEO",
    category: "Marketing",
    subcategory: "Technology",
    description: "An SEO platform designed to help businesses research, optimise and improve search visibility.",
    whatItIs: "An SEO platform designed to help businesses research, optimise and improve search visibility.",
    problemSolved: "An SEO platform designed to help businesses research, optimise and improve search visibility.",
    bestFor: ["Site owners and marketers managing organic growth."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://omniseo.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "omniseo.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "pangram-labs",
    name: "Pangram Labs",
    category: "AI",
    subcategory: "Technology",
    description: "An AI text analysis and detection technology platform focused on identifying AI-generated or synthetic content.",
    whatItIs: "An AI text analysis and detection technology platform focused on identifying AI-generated or synthetic content.",
    problemSolved: "An AI text analysis and detection technology platform focused on identifying AI-generated or synthetic content.",
    bestFor: ["Publishers, educators and organisations assessing generated text."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.pangram.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "pangram-labs.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "plesk",
    name: "Plesk",
    category: "Developer",
    subcategory: "Technology",
    description: "A web hosting and server management platform for websites, applications and hosting businesses.",
    whatItIs: "A web hosting and server management platform for websites, applications and hosting businesses.",
    problemSolved: "A web hosting and server management platform for websites, applications and hosting businesses.",
    bestFor: ["Developers, agencies and hosting providers managing servers and sites."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Developer"],
    tags: ["developer", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.plesk.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "plesk.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "prezi",
    name: "Prezi",
    category: "Content",
    subcategory: "Technology",
    description: "A presentation platform with AI-assisted tools for creating engaging visual presentations.",
    whatItIs: "A presentation platform with AI-assisted tools for creating engaging visual presentations.",
    problemSolved: "A presentation platform with AI-assisted tools for creating engaging visual presentations.",
    bestFor: ["Business, education and creator teams making presentations."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Content"],
    tags: ["content", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://prezi.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "prezi.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "quartile",
    name: "Quartile",
    category: "Marketing",
    subcategory: "Technology",
    description: "An advertising optimisation platform using automation and AI to manage paid media performance.",
    whatItIs: "An advertising optimisation platform using automation and AI to manage paid media performance.",
    problemSolved: "An advertising optimisation platform using automation and AI to manage paid media performance.",
    bestFor: ["E-commerce and performance marketing teams."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.quartile.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "quartile.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "rebolt",
    name: "Rebolt",
    category: "AI",
    subcategory: "Technology",
    description: "An AI and automation platform aimed at helping businesses build and streamline intelligent workflows.",
    whatItIs: "An AI and automation platform aimed at helping businesses build and streamline intelligent workflows.",
    problemSolved: "An AI and automation platform aimed at helping businesses build and streamline intelligent workflows.",
    bestFor: ["Teams experimenting with AI-powered business processes."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://rebolt.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "rebolt.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "reclaim-ai",
    name: "Reclaim.ai",
    category: "AI",
    subcategory: "Technology",
    description: "AI-powered scheduling and calendar optimisation designed to protect time and organise work.",
    whatItIs: "AI-powered scheduling and calendar optimisation designed to protect time and organise work.",
    problemSolved: "AI-powered scheduling and calendar optimisation designed to protect time and organise work.",
    bestFor: ["People and teams that want automated calendar planning."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://reclaim.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "reclaim-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "reply-io",
    name: "Reply.io",
    category: "Sales",
    subcategory: "Technology",
    description: "A sales engagement platform for multichannel outreach, automation and AI-assisted prospecting.",
    whatItIs: "A sales engagement platform for multichannel outreach, automation and AI-assisted prospecting.",
    problemSolved: "A sales engagement platform for multichannel outreach, automation and AI-assisted prospecting.",
    bestFor: ["B2B teams running outbound campaigns."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Sales"],
    tags: ["sales", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://reply.io/",
    editorial: {
      status: "Research candidate",
      profileUrl: "reply-io.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "runpod",
    name: "Runpod",
    category: "Developer",
    subcategory: "Technology",
    description: "Cloud GPU infrastructure for running AI models, workloads and development environments.",
    whatItIs: "Cloud GPU infrastructure for running AI models, workloads and development environments.",
    problemSolved: "Cloud GPU infrastructure for running AI models, workloads and development environments.",
    bestFor: ["Developers and AI builders needing flexible GPU compute."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Developer"],
    tags: ["developer", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.runpod.io/",
    editorial: {
      status: "Research candidate",
      profileUrl: "runpod.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "sanebox",
    name: "SaneBox",
    category: "Business",
    subcategory: "Technology",
    description: "An email productivity platform that filters, organises and prioritises incoming messages.",
    whatItIs: "An email productivity platform that filters, organises and prioritises incoming messages.",
    problemSolved: "An email productivity platform that filters, organises and prioritises incoming messages.",
    bestFor: ["People and teams overwhelmed by email volume."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.sanebox.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "sanebox.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "seamless",
    name: "Seamless",
    category: "Sales",
    subcategory: "Technology",
    description: "A B2B prospecting and data platform for finding business contacts and building lead lists.",
    whatItIs: "A B2B prospecting and data platform for finding business contacts and building lead lists.",
    problemSolved: "A B2B prospecting and data platform for finding business contacts and building lead lists.",
    bestFor: ["Sales and recruiting teams that need contact data."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Sales"],
    tags: ["sales", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://seamless.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "seamless.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "sentaro",
    name: "Sentaro",
    category: "AI",
    subcategory: "Technology",
    description: "An AI technology platform focused on automating repetitive business processes and workflows.",
    whatItIs: "An AI technology platform focused on automating repetitive business processes and workflows.",
    problemSolved: "An AI technology platform focused on automating repetitive business processes and workflows.",
    bestFor: ["Teams looking to apply AI to operational work."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://sentaro.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "sentaro.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "shade",
    name: "Shade",
    category: "AI",
    subcategory: "Technology",
    description: "An AI technology platform focused on practical automation and intelligent business workflows.",
    whatItIs: "An AI technology platform focused on practical automation and intelligent business workflows.",
    problemSolved: "An AI technology platform focused on practical automation and intelligent business workflows.",
    bestFor: ["Businesses exploring AI-enabled operational systems."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://shade.inc/",
    editorial: {
      status: "Research candidate",
      profileUrl: "shade.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "sleekflow",
    name: "SleekFlow",
    category: "Business",
    subcategory: "Technology",
    description: "An omnichannel customer messaging and commerce platform with automation and AI.",
    whatItIs: "An omnichannel customer messaging and commerce platform with automation and AI.",
    problemSolved: "An omnichannel customer messaging and commerce platform with automation and AI.",
    bestFor: ["Businesses selling and supporting customers across messaging channels."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://sleekflow.io/",
    editorial: {
      status: "Research candidate",
      profileUrl: "sleekflow.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "snowfire-ai",
    name: "Snowfire AI",
    category: "AI",
    subcategory: "Technology",
    description: "An AI technology platform focused on applying intelligent automation to business workflows.",
    whatItIs: "An AI technology platform focused on applying intelligent automation to business workflows.",
    problemSolved: "An AI technology platform focused on applying intelligent automation to business workflows.",
    bestFor: ["Teams evaluating AI infrastructure and automation."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://snowfire.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "snowfire-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "spiky-ai",
    name: "Spiky.ai",
    category: "AI",
    subcategory: "Technology",
    description: "An AI platform focused on analysing customer conversations and improving sales performance.",
    whatItIs: "An AI platform focused on analysing customer conversations and improving sales performance.",
    problemSolved: "An AI platform focused on analysing customer conversations and improving sales performance.",
    bestFor: ["Sales teams using conversation intelligence to improve outcomes."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://spiky.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "spiky-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "stratos-development-group",
    name: "Stratos Development Group",
    category: "Developer",
    subcategory: "Technology",
    description: "A software development and technology services company supporting digital products and business systems.",
    whatItIs: "A software development and technology services company supporting digital products and business systems.",
    problemSolved: "A software development and technology services company supporting digital products and business systems.",
    bestFor: ["Businesses needing development expertise and technical delivery."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Developer"],
    tags: ["developer", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://stratosdev.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "stratos-development-group.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "synthflow-ai",
    name: "Synthflow AI",
    category: "AI",
    subcategory: "Technology",
    description: "A no-code AI voice agent platform for building automated phone conversations and workflows.",
    whatItIs: "A no-code AI voice agent platform for building automated phone conversations and workflows.",
    problemSolved: "A no-code AI voice agent platform for building automated phone conversations and workflows.",
    bestFor: ["Businesses automating inbound and outbound voice interactions."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://synthflow.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "synthflow-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "teikametrics",
    name: "Teikametrics",
    category: "Marketing",
    subcategory: "Technology",
    description: "An AI-powered platform for e-commerce advertising and marketplace performance optimisation.",
    whatItIs: "An AI-powered platform for e-commerce advertising and marketplace performance optimisation.",
    problemSolved: "An AI-powered platform for e-commerce advertising and marketplace performance optimisation.",
    bestFor: ["E-commerce brands and sellers managing paid marketplace growth."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.teikametrics.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "teikametrics.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "testdriver-ai",
    name: "TestDriver.ai",
    category: "Developer",
    subcategory: "Technology",
    description: "An AI-powered software testing platform designed to automate application testing and validation.",
    whatItIs: "An AI-powered software testing platform designed to automate application testing and validation.",
    problemSolved: "An AI-powered software testing platform designed to automate application testing and validation.",
    bestFor: ["Development teams improving test coverage and release confidence."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Developer"],
    tags: ["developer", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://testdriver.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "testdriver-ai.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "thetop",
    name: "TheTop",
    category: "Marketing",
    subcategory: "Technology",
    description: "A marketing technology platform focused on helping businesses improve growth and customer acquisition.",
    whatItIs: "A marketing technology platform focused on helping businesses improve growth and customer acquisition.",
    problemSolved: "A marketing technology platform focused on helping businesses improve growth and customer acquisition.",
    bestFor: ["Marketing teams looking for performance and growth tools."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://thetop.ai/",
    editorial: {
      status: "Research candidate",
      profileUrl: "thetop.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "thordata",
    name: "ThorData",
    category: "Business",
    subcategory: "Technology",
    description: "A web-data and proxy infrastructure platform for collecting public web information at scale.",
    whatItIs: "A web-data and proxy infrastructure platform for collecting public web information at scale.",
    problemSolved: "A web-data and proxy infrastructure platform for collecting public web information at scale.",
    bestFor: ["Developers and data teams building web-data workflows."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://thordata.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "thordata.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "tool-profile-template",
    name: "{{TOOL_NAME}}",
    category: "Business",
    subcategory: "Technology",
    description: "{{META_DESCRIPTION}}",
    whatItIs: "{{META_DESCRIPTION}}",
    problemSolved: "{{META_DESCRIPTION}}",
    bestFor: [],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "",
    editorial: {
      status: "Research candidate",
      profileUrl: "tool-profile-template.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "tradify",
    name: "Tradify",
    category: "Business",
    subcategory: "Technology",
    description: "A job-management platform for trade businesses covering quoting, scheduling, invoicing and customer management.",
    whatItIs: "A job-management platform for trade businesses covering quoting, scheduling, invoicing and customer management.",
    problemSolved: "A job-management platform for trade businesses covering quoting, scheduling, invoicing and customer management.",
    bestFor: ["Tradespeople and small field-service businesses."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.tradifyhq.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "tradify.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "typewise",
    name: "Typewise",
    category: "AI",
    subcategory: "Technology",
    description: "An enterprise AI agent platform for automating customer service and sales interactions.",
    whatItIs: "An enterprise AI agent platform for automating customer service and sales interactions.",
    problemSolved: "An enterprise AI agent platform for automating customer service and sales interactions.",
    bestFor: ["Enterprise teams automating customer and sales conversations."],
    useCases: [],
    capabilities: [],
    systemRoles: ["AI"],
    tags: ["ai", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.typewise.app/",
    editorial: {
      status: "Research candidate",
      profileUrl: "typewise.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "unbounce",
    name: "Unbounce",
    category: "Marketing",
    subcategory: "Technology",
    description: "A landing-page platform focused on conversion, testing and lead generation.",
    whatItIs: "A landing-page platform focused on conversion, testing and lead generation.",
    problemSolved: "A landing-page platform focused on conversion, testing and lead generation.",
    bestFor: ["Marketers and businesses that need high-converting campaign pages."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://unbounce.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "unbounce.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "vida-global-inc",
    name: "Vida Global Inc",
    category: "Business",
    subcategory: "Technology",
    description: "A business technology company focused on tools and services for operational workflows.",
    whatItIs: "A business technology company focused on tools and services for operational workflows.",
    problemSolved: "A business technology company focused on tools and services for operational workflows.",
    bestFor: ["Businesses looking for technology-led operational support."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://vidaglobal.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "vida-global-inc.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "vista-social",
    name: "Vista Social",
    category: "Marketing",
    subcategory: "Technology",
    description: "A social media management platform for publishing, monitoring and analysing social channels.",
    whatItIs: "A social media management platform for publishing, monitoring and analysing social channels.",
    problemSolved: "A social media management platform for publishing, monitoring and analysing social channels.",
    bestFor: ["Businesses and agencies managing multiple social profiles."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Marketing"],
    tags: ["marketing", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://vistasocial.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "vista-social.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  },
  {
    id: "weave-communications-inc",
    name: "Weave Communications Inc.",
    category: "Business",
    subcategory: "Technology",
    description: "A communications platform combining phone, messaging, scheduling and customer engagement for service businesses.",
    whatItIs: "A communications platform combining phone, messaging, scheduling and customer engagement for service businesses.",
    problemSolved: "A communications platform combining phone, messaging, scheduling and customer engagement for service businesses.",
    bestFor: ["Customer-facing businesses managing communications and appointments."],
    useCases: [],
    capabilities: [],
    systemRoles: ["Business"],
    tags: ["business", "software", "technology"],
    alternatives: [],
    relatedTools: [],
    officialUrl: "https://www.getweave.com/",
    editorial: {
      status: "Research candidate",
      profileUrl: "weave-communications-inc.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  }

];