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
      profileUrl: "emergent-labs-inc.html",
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
      profileUrl: "murf-ai.html",
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
      profileUrl: "nextiva.html",
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
      profileUrl: "amplitude.html",
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
      profileUrl: "reclaim-ai.html",
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
      profileUrl: "softr.html",
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
      profileUrl: "apollo.html",
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
      profileUrl: "clay.html",
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
      profileUrl: "fireflies-ai.html",
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
      profileUrl: "grammarly.html",
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
      profileUrl: "intercom.html",
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
      profileUrl: "pipedrive.html",
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
      profileUrl: "posthog.html",
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
      profileUrl: "relevance-ai.html",
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
      profileUrl: "typeform.html",
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
      profileUrl: "zapier.html",
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
      profileUrl: "n8n.html",
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
      profileUrl: "jotform.html",
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
      profileUrl: "webflow.html",
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
      profileUrl: "framer.html",
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
      profileUrl: "bubble.html",
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
      profileUrl: "retell-ai.html",
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
      profileUrl: "vapi.html",
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
      profileUrl: "bland-ai.html",
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
      profileUrl: "twilio.html",
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
      profileUrl: "glide.html",
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
      profileUrl: "retool.html",
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
      profileUrl: "qdrant.html",
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
      profileUrl: "weaviate.html",
      lastVerified: "2026-08",
      handsOnReview: false
    }
  }

];