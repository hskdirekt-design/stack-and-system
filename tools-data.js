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
      profileUrl: "partnerstack.html",
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
      profileUrl: "apollo-io.html",
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
,


  // PartnerStack marketplace expansion (source: supplied PartnerStack marketplace export)
  {
    "id": "kit_formerly_convertkit",
    "name": "Kit (formerly ConvertKit)",
    "slug": "kit-formerly-convertkit",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Kit helps creators work smarter—not harder—with email, automation, and monetization tools that work together to drive continuous growth.",
    "whatItIs": "Kit helps creators work smarter—not harder—with email, automation, and monetization tools that work together to drive continuous growth.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 50% recurring commission for customer's 1st year",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "kit-formerly-convertkit.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "monday_com",
    "name": "monday.com",
    "slug": "monday-com",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "monday.com is a centralized platform for teams to manage every detail of their work, from high-level roadmap planning to specifics tasks.",
    "whatItIs": "monday.com is a centralized platform for teams to manage every detail of their work, from high-level roadmap planning to specifics tasks.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Partners: Earn up to 20% commission on every closed deal. Affiliates: Earn $10+ per signup",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "monday-com.html",
      "logo": "assets/partnerstack-logos/monday-com.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "brevo",
    "name": "Brevo",
    "slug": "brevo",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Brevo is an all-in-one marketing platform trusted by 600,000 businesses. Email, SMS, Chat, CRM, Marketing Automation, and more",
    "whatItIs": "Brevo is an all-in-one marketing platform trusted by 600,000 businesses. Email, SMS, Chat, CRM, Marketing Automation, and more",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $100 for every paying customer you refer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "brevo.html",
      "logo": "assets/partnerstack-logos/brevo.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "manychat",
    "name": "Manychat",
    "slug": "manychat",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Ever seen \"Comment X to get Y\" on Instagram? That's Manychat! We’re the go-to chat marketing platform for creators and businesses, driving growth with automation and meaningful connections. Partner with us and and earn up to 50% recurring commissions!",
    "whatItIs": "Ever seen \"Comment X to get Y\" on Instagram? That's Manychat! We’re the go-to chat marketing platform for creators and businesses, driving growth with automation and meaningful connections. Partner with us and and earn up to 50% recurring commissions!",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30-50% in recurring commissions",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "manychat.html",
      "logo": "assets/partnerstack-logos/manychat.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "leadpages",
    "name": "Leadpages",
    "slug": "leadpages",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Tell your audience about Leadpages. Leadpages helps you create high-converting landing pages, capture leads, and optimize with A/B testing and AI-powered insights. Whether you’re scaling a business or launching a campaign, we put CRO at your fingertips.",
    "whatItIs": "Tell your audience about Leadpages. Leadpages helps you create high-converting landing pages, capture leads, and optimize with A/B testing and AI-powered insights. Whether you’re scaling a business or launching a campaign, we put CRO at your fingertips.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "30% recurring commission for referrals first 12 months.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "leadpages.html",
      "logo": "assets/partnerstack-logos/leadpages.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "callrail",
    "name": "CallRail",
    "slug": "callrail",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "CallRail's AI-powered lead intelligence platform helps 220,000+ businesses attract and convert more customers. We attribute every call, text, chat, and form to your marketing, provide conversation insights, and use AI to capture every opportunity 24/7.",
    "whatItIs": "CallRail's AI-powered lead intelligence platform helps 220,000+ businesses attract and convert more customers. We attribute every call, text, chat, and form to your marketing, provide conversation insights, and use AI to capture every opportunity 24/7.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $50 for every customer you help discover CallRail",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "callrail.html",
      "logo": "assets/partnerstack-logos/callrail.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "gorgias",
    "name": "Gorgias",
    "slug": "gorgias",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "To grow your brand, you need to offer experiences that build loyalty. Meet the automated CX platform that delights customers, empowers your team, and drives your business forward.",
    "whatItIs": "To grow your brand, you need to offer experiences that build loyalty. Meet the automated CX platform that delights customers, empowers your team, and drives your business forward.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn a 10% commission indefinitely!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "gorgias.html",
      "logo": "assets/partnerstack-logos/gorgias.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "deel",
    "name": "Deel",
    "slug": "deel",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Hire the best talent in 150 countries in minutes, without worrying about compliance, payroll or HR admin.",
    "whatItIs": "Hire the best talent in 150 countries in minutes, without worrying about compliance, payroll or HR admin.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $1500 for every new paying customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "deel.html",
      "logo": "assets/partnerstack-logos/deel.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "airwallex",
    "name": "Airwallex",
    "slug": "airwallex",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Airwallex is a leading global payments fintech, transforming the way businesses move, manage and accept money domestically and across international borders seamlessly. Become an Airwallex partner and empower your clients to expand globally.",
    "whatItIs": "Airwallex is a leading global payments fintech, transforming the way businesses move, manage and accept money domestically and across international borders seamlessly. Become an Airwallex partner and empower your clients to expand globally.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $400 for each new Customer Referral!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "airwallex.html",
      "logo": "assets/partnerstack-logos/airwallex.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "quickbooks",
    "name": "QuickBooks",
    "slug": "quickbooks",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "QuickBooks is the world's #1 accounting software for small businesses!",
    "whatItIs": "QuickBooks is the world's #1 accounting software for small businesses!",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Offer your customer 30% off a new QuickBooks Online or QuickBooks Online Payroll subscriptions for 6 months",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "quickbooks.html",
      "logo": "assets/partnerstack-logos/quickbooks.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "aircall_inc",
    "name": "Aircall Inc.",
    "slug": "aircall-inc",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Aircall is the intelligent platform for customer conversations. By unifying conversations, context, and real-time intelligence, Aircall automates routine workflows, lets AI handle repetitive interactions, and provides in-the-moment coaching. Trusted by more than 21,000 companies worldwide—including Pipedrive, Burton, and 1Password—Aircall helps growing businesses exceed customer expectations, increase revenue, strengthen loyalty, and scale operations, all without adding headcount.",
    "whatItIs": "Aircall is the intelligent platform for customer conversations. By unifying conversations, context, and real-time intelligence, Aircall automates routine workflows, lets AI handle repetitive interactions, and provides in-the-moment coaching. Trusted by more than 21,000 companies worldwide—including Pipedrive, Burton, and 1Password—Aircall helps growing businesses exceed customer expectations, increase revenue, strengthen loyalty, and scale operations, all without adding headcount.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $75 per qualified lead!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "aircall-inc.html",
      "logo": "assets/partnerstack-logos/aircall-inc.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "thinkific",
    "name": "Thinkific",
    "slug": "thinkific",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Thinkific’s powerful, all-in-one learning platform makes it easy to build your dream learning business through online courses, digital products & communities. Share your knowledge, grow your audience, & scale the business you already love with Thinkific!",
    "whatItIs": "Thinkific’s powerful, all-in-one learning platform makes it easy to build your dream learning business through online courses, digital products & communities. Share your knowledge, grow your audience, & scale the business you already love with Thinkific!",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn recurring referral commissions: 30% on Standard plans and $150/month on Plus plans.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "thinkific.html",
      "logo": "assets/partnerstack-logos/thinkific.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "xero",
    "name": "Xero",
    "slug": "xero",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Xero's easy-to-use, beautifully designed accounting software helps small businesses and their advisors manage finances effortlessly - bringing everything into one powerful platform and automating routine tasks so they can focus on what matters most.",
    "whatItIs": "Xero's easy-to-use, beautifully designed accounting software helps small businesses and their advisors manage finances effortlessly - bringing everything into one powerful platform and automating routine tasks so they can focus on what matters most.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $200 per qualified purchase!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "xero.html",
      "logo": "assets/partnerstack-logos/xero.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "unbounce",
    "name": "Unbounce",
    "slug": "unbounce",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "The best landing page builder with AI features for reducing turnaround time & converting more traffic.",
    "whatItIs": "The best landing page builder with AI features for reducing turnaround time & converting more traffic.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 35% commissions on all customer transactions in the first year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "unbounce-2.html",
      "logo": "assets/partnerstack-logos/unbounce-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "bright_data",
    "name": "Bright Data",
    "slug": "bright-data",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Over 10K businesses use Bright Data to collect and structure any public web data as well as to see the Web accurately from any location without getting blocked or misled thanks to a wide proxy network",
    "whatItIs": "Over 10K businesses use Bright Data to collect and structure any public web data as well as to see the Web accurately from any location without getting blocked or misled thanks to a wide proxy network",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 50% revenue share up to $1K per customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "bright-data.html",
      "logo": "assets/partnerstack-logos/bright-data.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "learnworlds_top_user_rated_online_course_platform_and_lms",
    "name": "LearnWorlds - Top User-rated Online Course Platform & LMS",
    "slug": "learnworlds-top-user-rated-online-course-platform-and-lms",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Do you have an audience of entrepreneurs, business owners, executives or creators? Earn 30% recurring revenue, every month, for life, in the exploding market for e-learning and online courses.",
    "whatItIs": "Do you have an audience of entrepreneurs, business owners, executives or creators? Earn 30% recurring revenue, every month, for life, in the exploding market for e-learning and online courses.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% recurring commissions",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "learnworlds-top-user-rated-online-course-platform-and-lms.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "lemlist",
    "name": "lemlist",
    "slug": "lemlist",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Partner with us and earn commissions on the new lemlist, lemwarm and lemcal customers you bring us. Lemlist is a cold email outreach platform that helps users personalize, automate, and track email campaigns to boost engagement and improve lead generation.",
    "whatItIs": "Partner with us and earn commissions on the new lemlist, lemwarm and lemcal customers you bring us. Lemlist is a cold email outreach platform that helps users personalize, automate, and track email campaigns to boost engagement and improve lead generation.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 25% commission for the first 12 months of each paying customer you refer.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "lemlist.html",
      "logo": "assets/partnerstack-logos/lemlist.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "kartra_webinarjam_and_everwebinar",
    "name": "Kartra, WebinarJam & EverWebinar",
    "slug": "kartra-webinarjam-and-everwebinar",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Kartra's all-in-one platform is built to help creators and entrepreneurs grow their audience, monetize content, and scale with confidence. WebinarJam & EverWebinar are the most powerful and trusted live and automated webinar platforms worldwide.",
    "whatItIs": "Kartra's all-in-one platform is built to help creators and entrepreneurs grow their audience, monetize content, and scale with confidence. WebinarJam & EverWebinar are the most powerful and trusted live and automated webinar platforms worldwide.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 40% recurring commission on every referral for their first 12 months!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "kartra-webinarjam-and-everwebinar.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "sps_revenue_recovery",
    "name": "SPS Revenue Recovery",
    "slug": "sps-revenue-recovery",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "SPS Revenue Recovery helps brands identify, recover, and prevent lost revenue across major retailers and marketplaces, strengthening retailer compliance while protecting margin.",
    "whatItIs": "SPS Revenue Recovery helps brands identify, recover, and prevent lost revenue across major retailers and marketplaces, strengthening retailer compliance while protecting margin.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn commissions on your customer transactions",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "sps-revenue-recovery.html",
      "logo": "assets/partnerstack-logos/sps-revenue-recovery.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "adcreative_ai",
    "name": "AdCreative.ai",
    "slug": "adcreative-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Generate conversion-focused ad creatives using artificial intelligence. The most-used AI tool for advertising and the third fastest-growing product in the world in 2023 and 2024, according to G2.",
    "whatItIs": "Generate conversion-focused ad creatives using artificial intelligence. The most-used AI tool for advertising and the third fastest-growing product in the world in 2023 and 2024, according to G2.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% commission on every transaction + $2000 rewards!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "adcreative-ai-2.html",
      "logo": "assets/partnerstack-logos/adcreative-ai-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "vibe",
    "name": "Vibe",
    "slug": "vibe",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "The #1 self-serve CTV Ad Platform.",
    "whatItIs": "The #1 self-serve CTV Ad Platform.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "vibe.html",
      "logo": "assets/partnerstack-logos/vibe.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "spocket",
    "name": "Spocket",
    "slug": "spocket",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Spocket is a leading dropshipping platform connecting retailers with fast-shipping US/EU suppliers. With one-click import, branded invoicing, and automation, it helps users scale with ease. Trusted by 200K+ entrepreneurs. Partners earn lifetime recurring commissions by promoting real value.",
    "whatItIs": "Spocket is a leading dropshipping platform connecting retailers with fast-shipping US/EU suppliers. With one-click import, branded invoicing, and automation, it helps users scale with ease. Trusted by 200K+ entrepreneurs. Partners earn lifetime recurring commissions by promoting real value.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Lifetime earnings up to 40%. Become a Spocket affiliate!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "spocket.html",
      "logo": "assets/partnerstack-logos/spocket.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "printify",
    "name": "Printify",
    "slug": "printify",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Printify is the leading print-on-demand platform that helps you become an entrepreneur without big investments",
    "whatItIs": "Printify is the leading print-on-demand platform that helps you become an entrepreneur without big investments",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 5% commission on each sale your referrals make for 12 months. Average $3000 per customer.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "printify.html",
      "logo": "assets/partnerstack-logos/printify.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "pandadoc",
    "name": "PandaDoc",
    "slug": "pandadoc",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "Close more deals with PandaDoc sales proposal software. Create, send, track, and eSign beautiful proposals and quotes.",
    "whatItIs": "Close more deals with PandaDoc sales proposal software. Create, send, track, and eSign beautiful proposals and quotes.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25–40% of revenue from first-year sales",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "pandadoc.html",
      "logo": "assets/partnerstack-logos/pandadoc.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "circle",
    "name": "Circle",
    "slug": "circle",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Circle is the AI-powered home for your community. From a branded website to discussions, courses, events, payments, email marketing, AI agents, and more, Circle gives you everything you need to build and scale your community-led business.",
    "whatItIs": "Circle is the AI-powered home for your community. From a branded website to discussions, courses, events, payments, email marketing, AI agents, and more, Circle gives you everything you need to build and scale your community-led business.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $100 + up to 20% recurring commission",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "circle.html",
      "logo": "assets/partnerstack-logos/circle.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "nexcess",
    "name": "Nexcess",
    "slug": "nexcess",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Nexcess delivers specialty cloud, managed hosting, bare metal and enterprise AI infrastructure for performance-sensitive and regulated workloads. Partners choose us for co-selling support, technical architects, compliance-ready environments and expert engineering that reduces delivery risk, protects services revenue and helps close and retain clients.",
    "whatItIs": "Nexcess delivers specialty cloud, managed hosting, bare metal and enterprise AI infrastructure for performance-sensitive and regulated workloads. Partners choose us for co-selling support, technical architects, compliance-ready environments and expert engineering that reduces delivery risk, protects services revenue and helps close and retain clients.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% Monthly Residual Payments",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "nexcess.html",
      "logo": "assets/partnerstack-logos/nexcess.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "dripify",
    "name": "Dripify",
    "slug": "dripify",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Dripify outreach automation tool, currently ranked #1 globally for LinkedIn automation. We empower businesses by streamlining their hiring, sales, and marketing processes, enhancing efficiency and effectiveness in every interaction.",
    "whatItIs": "Dripify outreach automation tool, currently ranked #1 globally for LinkedIn automation. We empower businesses by streamlining their hiring, sales, and marketing processes, enhancing efficiency and effectiveness in every interaction.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 20% commission on all paid subscriptions ($3000/month avg)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "dripify.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "ignition",
    "name": "Ignition",
    "slug": "ignition",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Win clients. Get paid. Every time. Ignition makes it simple to engage clients, get paid and run your accounting or professional services business on autopilot.",
    "whatItIs": "Win clients. Get paid. Every time. Ignition makes it simple to engage clients, get paid and run your accounting or professional services business on autopilot.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Get rewarded for every referral that closes, with earnings based on customer size: $100 for Core, $300 for Pro and Pro+, and 10% commission for Enterprise.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "ignition-2.html",
      "logo": "assets/partnerstack-logos/ignition-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "sendcloud",
    "name": "Sendcloud",
    "slug": "sendcloud",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Shipping software for e-commerce",
    "whatItIs": "Shipping software for e-commerce",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 100% on your referrals' first month",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "sendcloud.html",
      "logo": "assets/partnerstack-logos/sendcloud.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "tellent",
    "name": "Tellent",
    "slug": "tellent",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Tellent's modular ATS, HRIS, and performance management solutions drive smarter, data-driven people decisions - across every stage of the employee journey. Trusted by 7,000+ companies, 200K+ active users, and 500+ partners globally.",
    "whatItIs": "Tellent's modular ATS, HRIS, and performance management solutions drive smarter, data-driven people decisions - across every stage of the employee journey. Trusted by 7,000+ companies, 200K+ active users, and 500+ partners globally.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% of every sale in year 1",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "tellent.html",
      "logo": "assets/partnerstack-logos/tellent.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "trainual",
    "name": "Trainual",
    "slug": "trainual",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Trainual is an AI-powered training, learning, and knowledge management software designed to get teams up to speed — and keep them there. By bridging the gap between documentation and execution, Trainual delivers role-specific training, built-in accountability, and progress tracking. Knowing what to do is one thing — building a team that gets it right, every time, is everything.",
    "whatItIs": "Trainual is an AI-powered training, learning, and knowledge management software designed to get teams up to speed — and keep them there. By bridging the gap between documentation and execution, Trainual delivers role-specific training, built-in accountability, and progress tracking. Knowing what to do is one thing — building a team that gets it right, every time, is everything.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Affiliates: earn 10% commission. Partners: earn 20% commission.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "trainual.html",
      "logo": "assets/partnerstack-logos/trainual.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "respond_io",
    "name": "respond.io",
    "slug": "respond-io",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Respond.io: AI-powered messaging software for B2C companies, shared inbox, advanced automation, broadcast and supervisor dashboard analytics.",
    "whatItIs": "Respond.io: AI-powered messaging software for B2C companies, shared inbox, advanced automation, broadcast and supervisor dashboard analytics.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% commission for the customer’s lifetime",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "respond-io.html",
      "logo": "assets/partnerstack-logos/respond-io.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "instantly",
    "name": "Instantly",
    "slug": "instantly",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Instantly helps you find warm leads, scale email campaigns, reach primary inboxes, engage smarter and win more with AI.",
    "whatItIs": "Instantly helps you find warm leads, scale email campaigns, reach primary inboxes, engage smarter and win more with AI.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Up to 40% Lifetime Commissions For Software Sales | VIP Referrals: 10% Commissions for High-Ticket Service Sales",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "instantly.html",
      "logo": "assets/partnerstack-logos/instantly.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "gamma",
    "name": "Gamma",
    "slug": "gamma",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Gamma is your AI design partner for creating presentations, websites, social media, and more. All at the speed of thought.",
    "whatItIs": "Gamma is your AI design partner for creating presentations, websites, social media, and more. All at the speed of thought.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% for the customer's first year",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "gamma-2.html",
      "logo": "assets/partnerstack-logos/gamma-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "thryv",
    "name": "Thryv",
    "slug": "thryv",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Thryv automates your tasks and puts your customers at the center of your business, with one easy-to-use software.",
    "whatItIs": "Thryv automates your tasks and puts your customers at the center of your business, with one easy-to-use software.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Referral Partners: Earn 15% for 12 months",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "thryv.html",
      "logo": "assets/partnerstack-logos/thryv.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "quo_formerly_openphone",
    "name": "Quo (formerly OpenPhone)",
    "slug": "quo-formerly-openphone",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Win more customers with Quo. The next-generation phone system to engage customers, collaborate with your team, and scale your reach with AI — without losing the personal touch. Rated #1 in customer satisfaction on G2 and trusted by 90,000+ companies, Quo brings calls, texts, and customer information into one easy-to-use, AI-powered platform.",
    "whatItIs": "Win more customers with Quo. The next-generation phone system to engage customers, collaborate with your team, and scale your reach with AI — without losing the personal touch. Rated #1 in customer satisfaction on G2 and trusted by 90,000+ companies, Quo brings calls, texts, and customer information into one easy-to-use, AI-powered platform.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% of purchase price for 12 months!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "quo-formerly-openphone.html",
      "logo": "assets/partnerstack-logos/quo-formerly-openphone.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "sunsama",
    "name": "Sunsama",
    "slug": "sunsama",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Sunsama is a daily planner assistant for busy professionals. Plan sustainable, focused, and calm workdays with our daily planning flow. Work-Life balance is no longer an elusive dream!",
    "whatItIs": "Sunsama is a daily planner assistant for busy professionals. Plan sustainable, focused, and calm workdays with our daily planning flow. Work-Life balance is no longer an elusive dream!",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $100 for every upgrade.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "sunsama.html",
      "logo": "assets/partnerstack-logos/sunsama.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "aspire",
    "name": "Aspire",
    "slug": "aspire",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Aspire offers businesses a unified suite of financial services including international payments, corporate cards, payable and receivable management - accessible via a single, user-friendly account.",
    "whatItIs": "Aspire offers businesses a unified suite of financial services including international payments, corporate cards, payable and receivable management - accessible via a single, user-friendly account.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Get US100 per successful referral for new Aspire account sign ups",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "aspire.html",
      "logo": "assets/partnerstack-logos/aspire.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "credit_repair_cloud",
    "name": "Credit Repair Cloud",
    "slug": "credit-repair-cloud",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Welcome to the Credit Repair Cloud affiliate program!",
    "whatItIs": "Welcome to the Credit Repair Cloud affiliate program!",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "30.00% of every sale made by each customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "credit-repair-cloud.html",
      "logo": "assets/partnerstack-logos/credit-repair-cloud.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "entreprenista",
    "name": "Entreprenista",
    "slug": "entreprenista",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "For founders who are ready to make meaningful connections that lead to real business growth and success.",
    "whatItIs": "For founders who are ready to make meaningful connections that lead to real business growth and success.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Get $50 for each person who joins The Entreprenista League with your link.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "entreprenista.html",
      "logo": "assets/partnerstack-logos/entreprenista.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "leadfeeder",
    "name": "Leadfeeder",
    "slug": "leadfeeder",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Leadfeeder identifies the companies behind your clients' anonymous website traffic and turns that data into pipeline. It reveals which companies visit, prioritises them by ICP fit and intent, activates leads into CRM and workflows automatically, and proves which campaigns actually drive revenue.",
    "whatItIs": "Leadfeeder identifies the companies behind your clients' anonymous website traffic and turns that data into pipeline. It reveals which companies visit, prioritises them by ICP fit and intent, activates leads into CRM and workflows automatically, and proves which campaigns actually drive revenue.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "$100 commission after 2 monthly payments",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "leadfeeder.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "bolt_for_business",
    "name": "Bolt for Business",
    "slug": "bolt-for-business",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Bolt for Business simplifies company travel - managing rides, car sharing, and micromobility in one place with automated billing and reports, powered by 4M+ driver network from Bolt.",
    "whatItIs": "Bolt for Business simplifies company travel - managing rides, car sharing, and micromobility in one place with automated billing and reports, powered by 4M+ driver network from Bolt.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn €150 for every new company that takes a ride with Bolt for Business and customers can earn 25% off 20 rides!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "bolt-for-business.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "clickup",
    "name": "ClickUp",
    "slug": "clickup",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "ClickUp is a versatile project management and productivity platform that centralizes tasks, docs, goals, and communication in one place. It's designed to streamline workflows, improve team collaboration, and boost efficiency across various industries.",
    "whatItIs": "ClickUp is a versatile project management and productivity platform that centralizes tasks, docs, goals, and communication in one place. It's designed to streamline workflows, improve team collaboration, and boost efficiency across various industries.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "$28 Signup (T1 countries) | $10 Signup (T2 countries) | $2.50 Signup (T3 countries)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "clickup-2.html",
      "logo": "assets/partnerstack-logos/clickup-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "surfer",
    "name": "Surfer",
    "slug": "surfer",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Surfer is an all-in-one platform for keyword research, content creation, and optimization. We have been synonymous with SEO since 2017, and with the launch of Surfer AI, we've made scaling and ranking content easier than ever before.",
    "whatItIs": "Surfer is an all-in-one platform for keyword research, content creation, and optimization. We have been synonymous with SEO since 2017, and with the launch of Surfer AI, we've made scaling and ranking content easier than ever before.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 125% CPA commission simplifying SEO!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "surfer.html",
      "logo": "assets/partnerstack-logos/surfer.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "doola",
    "name": "doola",
    "slug": "doola",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "doola (YCombinator S20) helps global entrepreneurs launch and maintain their U.S. LLCs. Join our Affiliate Program. Choose the product that best fits you.",
    "whatItIs": "doola (YCombinator S20) helps global entrepreneurs launch and maintain their U.S. LLCs. Join our Affiliate Program. Choose the product that best fits you.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Refer customers to form their U.S. companies and get help with compliance, and earn up to $899 per referral (30% commission on any doola plan with no cap on commissions).",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "doola.html",
      "logo": "assets/partnerstack-logos/doola.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "socialbee",
    "name": "SocialBee",
    "slug": "socialbee",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "SocialBee is a social media management platform & digital marketing agency that helps businesses make the most out of their online presence.",
    "whatItIs": "SocialBee is a social media management platform & digital marketing agency that helps businesses make the most out of their online presence.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% lifetime recurring commission on each sale",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "socialbee.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "wati_io",
    "name": "Wati.io",
    "slug": "wati-io",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Grow your business on WhatsApp Personalize communication and sell more with the WhatsApp Business API platform that automates marketing, sales, service and support.",
    "whatItIs": "Grow your business on WhatsApp Personalize communication and sell more with the WhatsApp Business API platform that automates marketing, sales, service and support.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "30% Total MRR (subs + add-ons)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "wati-io.html",
      "logo": "assets/partnerstack-logos/wati-io.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "getida",
    "name": "Getida",
    "slug": "getida",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Getida is the global leader in Amazon FBA auditing & reimbursement solutions for sellers worldwide. It's more than money back — it's the way forward.",
    "whatItIs": "Getida is the global leader in Amazon FBA auditing & reimbursement solutions for sellers worldwide. It's more than money back — it's the way forward.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% of the recovery fee for the first 12 months of the customers lifetime!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "getida.html",
      "logo": "assets/partnerstack-logos/getida.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "ownr",
    "name": "Ownr",
    "slug": "ownr",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Canada's leading Business Registration & Incorporation platform. Ownr has empowered over 270,000+ Canadians to navigate business registrations, complete incorporations, compliance management, and more—all in one digital platform.",
    "whatItIs": "Canada's leading Business Registration & Incorporation platform. Ownr has empowered over 270,000+ Canadians to navigate business registrations, complete incorporations, compliance management, and more—all in one digital platform.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $50 for each referral and 15% off our incorporation services",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "ownr.html",
      "logo": "assets/partnerstack-logos/ownr.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "drip",
    "name": "Drip",
    "slug": "drip",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "As a customer-centric marketing automation platform, Drip empowers brands to understand their customers and boost revenue through the seamless integration of email, popups, and automation. Drip is the go-to platform for streamlining automated marketing!",
    "whatItIs": "As a customer-centric marketing automation platform, Drip empowers brands to understand their customers and boost revenue through the seamless integration of email, popups, and automation. Drip is the go-to platform for streamlining automated marketing!",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 25% as a Drip Partner!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "drip.html",
      "logo": "assets/partnerstack-logos/drip.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "rokt_aftersell",
    "name": "Rokt Aftersell",
    "slug": "rokt-aftersell",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Aftersell helps Shopify brands drive more incremental revenue after checkout with one-click upsells and relevant partner offers through Rokt Thanks. Join over 40,000+ Shopify brands that use Rokt Aftersell to boost AOV with every sale",
    "whatItIs": "Aftersell helps Shopify brands drive more incremental revenue after checkout with one-click upsells and relevant partner offers through Rokt Thanks. Join over 40,000+ Shopify brands that use Rokt Aftersell to boost AOV with every sale",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% of every transaction made",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "rokt-aftersell.html",
      "logo": "assets/partnerstack-logos/rokt-aftersell.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "freshdesk_by_freshworks",
    "name": "Freshdesk by Freshworks",
    "slug": "freshdesk-by-freshworks",
    "category": "Customer Service",
    "subcategory": "Customer Service",
    "description": "Freshdesk is a cloud-based customer support software. With 150+ integrations, we make it simple for businesses to provide superior support.",
    "whatItIs": "Freshdesk is a cloud-based customer support software. With 150+ integrations, we make it simple for businesses to provide superior support.",
    "problemSolved": "",
    "bestFor": [
      "Customer service",
      "Support"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Customer Service"
    ],
    "tags": [
      "customer service"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "$30 CPL per trial submitted in Geo: US, UK, AU, CA, and NZ",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "freshdesk-by-freshworks.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "motive",
    "name": "Motive",
    "slug": "motive",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Motive builds technology to improve the safety, productivity and profitability of businesses that power the physical economy.",
    "whatItIs": "Motive builds technology to improve the safety, productivity and profitability of businesses that power the physical economy.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn a $150 flat fee or 10% commission on the annual contract value for every paying customer you refer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "motive.html",
      "logo": "assets/partnerstack-logos/motive.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "reply_io",
    "name": "Reply.io",
    "slug": "reply-io",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Reply is an AI Sales Engagement platform, combining lead generation, email warm-up, email validation, data scraping, multichannel outreach and much more. It's an an one-stop shop designed to automate your personalized outreach at scale.",
    "whatItIs": "Reply is an AI Sales Engagement platform, combining lead generation, email warm-up, email validation, data scraping, multichannel outreach and much more. It's an an one-stop shop designed to automate your personalized outreach at scale.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "15% for 1 year from all sales, 15% lifetime on Jason AI SDR sales",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "reply-io-2.html",
      "logo": "assets/partnerstack-logos/reply-io-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "moosend",
    "name": "Moosend",
    "slug": "moosend",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Become a Moosend affiliate! Help businesses by promoting one of the best email marketing and marketing automation tools, and earn recurring commissions.",
    "whatItIs": "Become a Moosend affiliate! Help businesses by promoting one of the best email marketing and marketing automation tools, and earn recurring commissions.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 40% recurring commission for every transaction!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "moosend.html",
      "logo": "assets/partnerstack-logos/moosend.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "postscript",
    "name": "Postscript",
    "slug": "postscript",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Postscript is the leading SMS marketing tool for Shopify brands. With their solution, you can make SMS your #1 revenue channel.",
    "whatItIs": "Postscript is the leading SMS marketing tool for Shopify brands. With their solution, you can make SMS your #1 revenue channel.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% in the customers first year on Postscript!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "postscript.html",
      "logo": "assets/partnerstack-logos/postscript.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "kisi",
    "name": "Kisi",
    "slug": "kisi",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Kisi provides a cloud-based access control system that lets organizations manage building entry digitally. Using mobile credentials, keycards, and connected hardware, businesses can control, monitor, and automate who can access their spaces. It’s built for offices, coworking spaces, and multi-site properties seeking modern security",
    "whatItIs": "Kisi provides a cloud-based access control system that lets organizations manage building entry digitally. Using mobile credentials, keycards, and connected hardware, businesses can control, monitor, and automate who can access their spaces. It’s built for offices, coworking spaces, and multi-site properties seeking modern security",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "As a Platinum Tier Partner, you’ll earn a 25% revenue share on all end client business you refer to us. That means for every successful referral that turns into a paying customer, you’ll receive 25% of the software revenue generated.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "kisi.html",
      "logo": "assets/partnerstack-logos/kisi.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "kixie",
    "name": "Kixie",
    "slug": "kixie",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Kixie is a sales engagement platform that boosts sales and service team performance with ultra-reliable, easily automated, calling & texting features fully integrated into your CRM of choice.",
    "whatItIs": "Kixie is a sales engagement platform that boosts sales and service team performance with ultra-reliable, easily automated, calling & texting features fully integrated into your CRM of choice.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% reward on transaction value*",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "kixie.html",
      "logo": "assets/partnerstack-logos/kixie.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "katana_cloud_inventory",
    "name": "Katana Cloud Inventory",
    "slug": "katana-cloud-inventory",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Give your clients an end-to-end inventory solution. Businesses rely on Katana as a system of record, connecting with best-in-class ecommerce and accounting solutions to build the ultimate ecosystem of business tools.",
    "whatItIs": "Give your clients an end-to-end inventory solution. Businesses rely on Katana as a system of record, connecting with best-in-class ecommerce and accounting solutions to build the ultimate ecosystem of business tools.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% from the revenue of all referred customers for 24 months",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "katana-cloud-inventory.html",
      "logo": "assets/partnerstack-logos/katana-cloud-inventory.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "quadient",
    "name": "Quadient",
    "slug": "quadient",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Quadient's leading accounts receivable and accounts payable automation solutions help finance and accounting teams improve productivity, reduce costs and get paid faster - from anywhere.",
    "whatItIs": "Quadient's leading accounts receivable and accounts payable automation solutions help finance and accounting teams improve productivity, reduce costs and get paid faster - from anywhere.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $250 for each new lead that turns into an opportunity",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "quadient.html",
      "logo": "assets/partnerstack-logos/quadient.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "instapage",
    "name": "Instapage",
    "slug": "instapage",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "Build and optimize landing pages that convert—all without a developer. Instapage enables marketers to improve their digital ad campaign performance at scale, resulting in higher conversions and better ROAS.",
    "whatItIs": "Build and optimize landing pages that convert—all without a developer. Instapage enables marketers to improve their digital ad campaign performance at scale, resulting in higher conversions and better ROAS.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 40% on the first year of a customer's annual subscription; 15% of a customer's annual subscription after the first year; 30% on the first year of a customer's monthly subscription",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "instapage.html",
      "logo": "assets/partnerstack-logos/instapage.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "amplemarket",
    "name": "Amplemarket",
    "slug": "amplemarket",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Amplemarket's mission is to help companies grow and do business smarter. Amplemarket offers an unrivaled all-in-one compound solution that leverages cutting-edge AI and machine learning to streamline B2B sales processes and turn sales reps into super reps.",
    "whatItIs": "Amplemarket's mission is to help companies grow and do business smarter. Amplemarket offers an unrivaled all-in-one compound solution that leverages cutting-edge AI and machine learning to streamline B2B sales processes and turn sales reps into super reps.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "**Our average ACV is $10K!** Earn up to 20% commission of each paying customer you refer. No cap on earnings!!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "amplemarket-2.html",
      "logo": "assets/partnerstack-logos/amplemarket-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "activecampaign",
    "name": "ActiveCampaign",
    "slug": "activecampaign",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "ActiveCampaign is an autonomous marketing platform that uses AI to help businesses grow. The platform unifies email marketing, CRM, and marketing automation to optimize customer journeys, manage relationships, and deliver personalized experiences across multiple channels like email, SMS, and WhatsApp.",
    "whatItIs": "ActiveCampaign is an autonomous marketing platform that uses AI to help businesses grow. The platform unifies email marketing, CRM, and marketing automation to optimize customer journeys, manage relationships, and deliver personalized experiences across multiple channels like email, SMS, and WhatsApp.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Join ActiveCampaign's Affiliate Program to earn 30% commissions for every referral.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "activecampaign.html",
      "logo": "assets/partnerstack-logos/activecampaign.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "keap",
    "name": "Keap",
    "slug": "keap",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Get found online, win more customers, and drive repeat business with our AI-powered marketing platform.",
    "whatItIs": "Get found online, win more customers, and drive repeat business with our AI-powered marketing platform.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% recurring commission on all paid subscriptions for 1 year",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "keap.html",
      "logo": "assets/partnerstack-logos/keap.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "whatconverts",
    "name": "WhatConverts",
    "slug": "whatconverts",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Lead Tracking for Marketing Agencies and Clients",
    "whatItIs": "Lead Tracking for Marketing Agencies and Clients",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% on subscription for 2 years. Lifetime commission for Premium Affiliates!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "whatconverts.html",
      "logo": "assets/partnerstack-logos/whatconverts.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "quartile",
    "name": "Quartile",
    "slug": "quartile",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "The World's Largest E-Commerce Cross Channel Ad Platform. Thousands of sellers trust Quartile’s full-funnel optimization approach to unlock the full potential of their selling and advertising.",
    "whatItIs": "The World's Largest E-Commerce Cross Channel Ad Platform. Thousands of sellers trust Quartile’s full-funnel optimization approach to unlock the full potential of their selling and advertising.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% on 1st Year Subscription Revenue. Average $4,800 commission per customer.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "quartile-2.html",
      "logo": "assets/partnerstack-logos/quartile-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "melio",
    "name": "Melio",
    "slug": "melio",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Melio is a free & simple bill pay solution for small businesses, accountants, and bookkeepers. Pay any business expense with just a few clicks.",
    "whatItIs": "Melio is a free & simple bill pay solution for small businesses, accountants, and bookkeepers. Pay any business expense with just a few clicks.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Melio - First Completed Payment - FTP - HG $400",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "melio.html",
      "logo": "assets/partnerstack-logos/melio.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "stamped",
    "name": "Stamped",
    "slug": "stamped",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Stamped is a retention platform that guides customers to their next purchase. We automate post-purchase interactions to deliver delightful, personalized experiences at scale—from collecting high-quality reviews to personalizing loyalty programs to streamlining lifecycle flows.",
    "whatItIs": "Stamped is a retention platform that guides customers to their next purchase. We automate post-purchase interactions to deliver delightful, personalized experiences at scale—from collecting high-quality reviews to personalizing loyalty programs to streamlining lifecycle flows.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% on every customer purchase for life!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "stamped.html",
      "logo": "assets/partnerstack-logos/stamped.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "runpod",
    "name": "Runpod",
    "slug": "runpod",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Runpod is a cloud platform that empowers small teams to deploy customized full-stack AI apps without managing complex infrastructure. By leveraging high-performance GPU resources on demand, it's easy to launch, train, and optimize AI workloads at scale.",
    "whatItIs": "Runpod is a cloud platform that empowers small teams to deploy customized full-stack AI apps without managing complex infrastructure. By leveraging high-performance GPU resources on demand, it's easy to launch, train, and optimize AI workloads at scale.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% for 6 months on payments for customers you refer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "runpod-2.html",
      "logo": "assets/partnerstack-logos/runpod-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "connecteam",
    "name": "Connecteam",
    "slug": "connecteam",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Connecteam is an all-in-one company app where businesses can communicate, manage, and train their non-desk employees. Easy to use, easy to customize, and easy to scale.",
    "whatItIs": "Connecteam is an all-in-one company app where businesses can communicate, manage, and train their non-desk employees. Easy to use, easy to customize, and easy to scale.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $200 for every business that signs up for a monthly plan Earn $300 for every business that signs up for a yearly plan.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "connecteam.html",
      "logo": "assets/partnerstack-logos/connecteam.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "simpletexting",
    "name": "SimpleTexting",
    "slug": "simpletexting",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "We make it easy, fast and affordable to send SMS marketing campaigns or engage in 1-on-1 conversations with customers.",
    "whatItIs": "We make it easy, fast and affordable to send SMS marketing campaigns or engage in 1-on-1 conversations with customers.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% on monthly plan purchases!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "simpletexting.html",
      "logo": "assets/partnerstack-logos/simpletexting.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "landbot",
    "name": "Landbot",
    "slug": "landbot",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "The most intuitive chatbot builder for websites and WhatsApp — automate lead capturing, customer support, surveys, and more!",
    "whatItIs": "The most intuitive chatbot builder for websites and WhatsApp — automate lead capturing, customer support, surveys, and more!",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "💸 Earn 20% of every sale (recurring for 2 years)!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "landbot-2.html",
      "logo": "assets/partnerstack-logos/landbot-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "capsule_and_transpond",
    "name": "Capsule and Transpond",
    "slug": "capsule-and-transpond",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Help your customers and audience grow their small businesses with a complete CRM and Marketing solution. Capsule is an easy-to-implement and use CRM, and Transpond is the perfect companion for it.",
    "whatItIs": "Help your customers and audience grow their small businesses with a complete CRM and Marketing solution. Capsule is an easy-to-implement and use CRM, and Transpond is the perfect companion for it.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20-30% commission for every referred paying customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "capsule-and-transpond.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "qoyod",
    "name": "Qoyod",
    "slug": "qoyod",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Don’t let financial complexities hinder your business growth. Qoyod is designed to be your ultimate financial co-pilot, navigating the complexities of your business efficiency.",
    "whatItIs": "Don’t let financial complexities hinder your business growth. Qoyod is designed to be your ultimate financial co-pilot, navigating the complexities of your business efficiency.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 50% commission per paid customer (avg transaction $200)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "qoyod.html",
      "logo": "assets/partnerstack-logos/qoyod.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "simplepractice",
    "name": "SimplePractice",
    "slug": "simplepractice",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "SimplePractice is the all-in-one HIPAA-compliant practice management solution trusted by 225,000+ health and wellness practitioners. From starting to growing a thriving practice, SimplePractice streamlines your workflow with fully integrated features.",
    "whatItIs": "SimplePractice is the all-in-one HIPAA-compliant practice management solution trusted by 225,000+ health and wellness practitioners. From starting to growing a thriving practice, SimplePractice streamlines your workflow with fully integrated features.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $100 per new paid account referral on SimplePractice. Unlock bonus commission by referring more!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "simplepractice.html",
      "logo": "assets/partnerstack-logos/simplepractice.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "landingi",
    "name": "Landingi",
    "slug": "landingi",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Landing Page Automation Platform that helps improve marketing workflows, boost campaign results thanks to A/B testing, and deliver a great user experience with personalization. All delivered on a secure and fast infrastructure with human support.",
    "whatItIs": "Landing Page Automation Platform that helps improve marketing workflows, boost campaign results thanks to A/B testing, and deliver a great user experience with personalization. All delivered on a secure and fast infrastructure with human support.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "15% for 1-month subscription",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "landingi-2.html",
      "logo": "assets/partnerstack-logos/landingi-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "zoominfo",
    "name": "ZoomInfo",
    "slug": "zoominfo",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "ZoomInfo is how business goes to market (GTM). Powered by real-time data and insights, our unified engagement platform helps sales and marketing teams find, acquire, and grow customers.",
    "whatItIs": "ZoomInfo is how business goes to market (GTM). Powered by real-time data and insights, our unified engagement platform helps sales and marketing teams find, acquire, and grow customers.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% in Year 1 Annual Contract Value (ACV) **Our Average ACV is ~$20K**",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "zoominfo.html",
      "logo": "assets/partnerstack-logos/zoominfo.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "shore",
    "name": "Shore",
    "slug": "shore",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Shore empowers service and retail businesses to grow — online and in-store. With smart booking, marketing, and an integrated POS system with Shore Pay, Shore offers a flexible all-in-one platform. POS and payment solutions are currently available in DACH region only",
    "whatItIs": "Shore empowers service and retail businesses to grow — online and in-store. With smart booking, marketing, and an integrated POS system with Shore Pay, Shore offers a flexible all-in-one platform. POS and payment solutions are currently available in DACH region only",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 40% commission from Europes leading complete solution for service and retail businesses!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "shore.html",
      "logo": "assets/partnerstack-logos/shore.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "sellfy",
    "name": "Sellfy",
    "slug": "sellfy",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Create your online store and sell your goods effortlessly with Sellfy, an easy-to-use e-commerce platform. Sellers worldwide have earned over $175,000,000 through Sellfy.",
    "whatItIs": "Create your online store and sell your goods effortlessly with Sellfy, an easy-to-use e-commerce platform. Sellers worldwide have earned over $175,000,000 through Sellfy.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "25-40% lifetime commission",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "sellfy.html",
      "logo": "assets/partnerstack-logos/sellfy.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "shippo",
    "name": "Shippo",
    "slug": "shippo",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Shippo simplifies shipping for businesses of all sizes by offering discounted rates, easy label printing, and seamless integrations with major e-commerce platforms. As a partner you can earn $60 for every new Pro Plan subscriber!",
    "whatItIs": "Shippo simplifies shipping for businesses of all sizes by offering discounted rates, easy label printing, and seamless integrations with major e-commerce platforms. As a partner you can earn $60 for every new Pro Plan subscriber!",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Receive $60 for every new paid Pro plan subscriber",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "shippo.html",
      "logo": "assets/partnerstack-logos/shippo.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "livestorm",
    "name": "Livestorm",
    "slug": "livestorm",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Livestorm is the leading European webinar platform. The most secure, reliable, and easy to use webinar software to scale your marketing webinars, product demos, and training sessions.",
    "whatItIs": "Livestorm is the leading European webinar platform. The most secure, reliable, and easy to use webinar software to scale your marketing webinars, product demos, and training sessions.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 20% commission on deals closed",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "livestorm.html",
      "logo": "assets/partnerstack-logos/livestorm.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "nicejob",
    "name": "NiceJob",
    "slug": "nicejob",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "NiceJob is reputation marketing automation for busy and budget-conscious home service business owners, helping increase online reviews by 4X and sales by up to 60%. We automate review generation & referrals so owners can focus on running their business.",
    "whatItIs": "NiceJob is reputation marketing automation for busy and budget-conscious home service business owners, helping increase online reviews by 4X and sales by up to 60%. We automate review generation & referrals so owners can focus on running their business.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% Commission: For every successful paid customer you make, with the potential to increase your rate by advancing through our tiered system.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "nicejob.html",
      "logo": "assets/partnerstack-logos/nicejob.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "housecall_pro",
    "name": "Housecall Pro",
    "slug": "housecall-pro",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Housecall Pro is a top-rated platform helping home service Pros manage every aspect of their business. Become a referral partner and begin earning rewards for referring qualified leads our way.",
    "whatItIs": "Housecall Pro is a top-rated platform helping home service Pros manage every aspect of their business. Become a referral partner and begin earning rewards for referring qualified leads our way.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $320 for every qualified lead you refer. Start earning today!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "housecall-pro.html",
      "logo": "assets/partnerstack-logos/housecall-pro.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "breezy_hr",
    "name": "Breezy HR",
    "slug": "breezy-hr",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Modernize your recruiting process with Breezy! End-to-end recruiting software to attract & hire great employees with less effort.",
    "whatItIs": "Modernize your recruiting process with Breezy! End-to-end recruiting software to attract & hire great employees with less effort.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% revenue share for new subscribers for the first year on ATS Subscriptions (excluding Pro Plans).",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "breezy-hr.html",
      "logo": "assets/partnerstack-logos/breezy-hr.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "ticket_tailor",
    "name": "Ticket Tailor",
    "slug": "ticket-tailor",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "At Ticket Tailor, our mission is to empower a diverse range of event creators by making it easy and affordable to sell tickets. Our flexible and fair pricing helps event budgets go further and our first-class customer care means support is always on hand.",
    "whatItIs": "At Ticket Tailor, our mission is to empower a diverse range of event creators by making it easy and affordable to sell tickets. Our flexible and fair pricing helps event budgets go further and our first-class customer care means support is always on hand.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% of all Ticket Tailor fees generated from your referral, forever",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "ticket-tailor.html",
      "logo": "assets/partnerstack-logos/ticket-tailor.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "seamless",
    "name": "Seamless",
    "slug": "seamless",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "The AI sales platform that delivers verified prospects, automated outreach, and the speed your team needs to grow revenue.",
    "whatItIs": "The AI sales platform that delivers verified prospects, automated outreach, and the speed your team needs to grow revenue.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% on every transaction",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "seamless-2.html",
      "logo": "assets/partnerstack-logos/seamless-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "coffee_and_contracts",
    "name": "Coffee and Contracts",
    "slug": "coffee-and-contracts",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "C&C is the go-to marketing platform for real estate agents. We give agents the content, tools, and strategy to grow their brand online, attract more clients, and show up confidently — without spending hours creating from scratch.",
    "whatItIs": "C&C is the go-to marketing platform for real estate agents. We give agents the content, tools, and strategy to grow their brand online, attract more clients, and show up confidently — without spending hours creating from scratch.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% for the lifetime of the customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "coffee-and-contracts.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "jane",
    "name": "Jane",
    "slug": "jane",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Jane is a clinic management software and EMR for health and wellness providers that helps them open, run, and grow their businesses.",
    "whatItIs": "Jane is a clinic management software and EMR for health and wellness providers that helps them open, run, and grow their businesses.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $120 USD commission for every new clinic you refer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "jane.html",
      "logo": "assets/partnerstack-logos/jane.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "hibob",
    "name": "HiBob",
    "slug": "hibob",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Modern HR for modern business. HiBob is on a mission to transform how organizations operate in the modern world of work – globally, remotely, and collaboratively– with its intuitive, data-driven HR platform ‘Bob’. Modern HR for modern business. HiBob's intuitive, beautiful HR platform drives productivity, engagement, and performance for modern, mid-sized, multinational companies that put their people first.",
    "whatItIs": "Modern HR for modern business. HiBob is on a mission to transform how organizations operate in the modern world of work – globally, remotely, and collaboratively– with its intuitive, data-driven HR platform ‘Bob’. Modern HR for modern business. HiBob's intuitive, beautiful HR platform drives productivity, engagement, and performance for modern, mid-sized, multinational companies that put their people first.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "hibob.html",
      "logo": "assets/partnerstack-logos/hibob.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "customer_io",
    "name": "Customer.io",
    "slug": "customer-io",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Customer.io is an AI-powered customer engagement platform that helps teams turn first-party data into meaningful, personalized messages at scale. With Customer.io, teams can create, manage, and send communications across email, SMS, push, in-app, and webhooks—making it easy to build journeys that engage, convert, and grow with their customers.",
    "whatItIs": "Customer.io is an AI-powered customer engagement platform that helps teams turn first-party data into meaningful, personalized messages at scale. With Customer.io, teams can create, manage, and send communications across email, SMS, push, in-app, and webhooks—making it easy to build journeys that engage, convert, and grow with their customers.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% on every customer purchase for the first year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "customer-io.html",
      "logo": "assets/partnerstack-logos/customer-io.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "folk",
    "name": "folk",
    "slug": "folk",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "folk is like the sales assistant your team never had. Our CRM is simple, integrated, and proactive. The tool of choice for over 3000+ award-winning service businesses around the world.",
    "whatItIs": "folk is like the sales assistant your team never had. Our CRM is simple, integrated, and proactive. The tool of choice for over 3000+ award-winning service businesses around the world.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% of earned revenue in the first 24 months of the customers you referred.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "folk.html",
      "logo": "assets/partnerstack-logos/folk.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "r_e_cost_seg",
    "name": "R.E. Cost Seg",
    "slug": "r-e-cost-seg",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "R.E. Cost Seg specializes in cost segregation studies that help investment property owners accelerate depreciation, reduce tax burdens, and improve cash flow.",
    "whatItIs": "R.E. Cost Seg specializes in cost segregation studies that help investment property owners accelerate depreciation, reduce tax burdens, and improve cash flow.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "15% of total revenue",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "r-e-cost-seg.html",
      "logo": "assets/partnerstack-logos/r-e-cost-seg.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "bill",
    "name": "BILL",
    "slug": "bill",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "BILL is a leading financial operations platform for small and midsize businesses. Our integrated platform helps businesses to more efficiently control their payables, receivables and spend and expense management.",
    "whatItIs": "BILL is a leading financial operations platform for small and midsize businesses. Our integrated platform helps businesses to more efficiently control their payables, receivables and spend and expense management.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $250 for each new BILL AP/AR customer | Earn $75-$600 for each new BILL Spend & Expense customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "bill.html",
      "logo": "assets/partnerstack-logos/bill.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "brevo_pushowl",
    "name": "Brevo PushOwl",
    "slug": "brevo-pushowl",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "PushOwl is the top-rated omnichannel app on Shopify - powered by Brevo. It packs powerful automation pre-sets, including smart email pop ups, newsletters, abandoned cart recovery, checkout alerts, back in stock reminders & much more! With infinite list size, powerful segmentation enginer, with 100+ integrations & world-class support - it is a powerhouse to store owners and agencies",
    "whatItIs": "PushOwl is the top-rated omnichannel app on Shopify - powered by Brevo. It packs powerful automation pre-sets, including smart email pop ups, newsletters, abandoned cart recovery, checkout alerts, back in stock reminders & much more! With infinite list size, powerful segmentation enginer, with 100+ integrations & world-class support - it is a powerhouse to store owners and agencies",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 16-25% recurring commission",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "brevo-pushowl.html",
      "logo": "assets/partnerstack-logos/brevo-pushowl.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "navan",
    "name": "Navan",
    "slug": "navan",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Navan is the one-stop shop for business travel. Companies and their employees book flights, hotels, and more while saving time and money.",
    "whatItIs": "Navan is the one-stop shop for business travel. Companies and their employees book flights, hotels, and more while saving time and money.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $1,000 for every qualified customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "navan.html",
      "logo": "assets/partnerstack-logos/navan.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "restream",
    "name": "Restream",
    "slug": "restream",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Restream is a powerful live streaming service that allows you to broadcast live content to multiple streaming channels simultaneously.",
    "whatItIs": "Restream is a powerful live streaming service that allows you to broadcast live content to multiple streaming channels simultaneously.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "🔴 Up to 30% of all payments — For every new streamer.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "restream.html",
      "logo": "assets/partnerstack-logos/restream.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "motion",
    "name": "Motion",
    "slug": "motion",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Learn which ad creatives are working best and share your findings with visual reports that are easy to digest.",
    "whatItIs": "Learn which ad creatives are working best and share your findings with visual reports that are easy to digest.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% of revenue share for up to 2 years!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "motion-2.html",
      "logo": "assets/partnerstack-logos/motion-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "proof",
    "name": "Proof",
    "slug": "proof",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Want to boost your website conversions? Proof shows real people taking real actions. Trusted by Oprah, Lottery, Speedo & 20K+ businesses.",
    "whatItIs": "Want to boost your website conversions? Proof shows real people taking real actions. Trusted by Oprah, Lottery, Speedo & 20K+ businesses.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "30% of every sale made",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "proof.html",
      "logo": "assets/partnerstack-logos/proof.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "1password",
    "name": "1Password",
    "slug": "1password",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "1Password makes it simple to create and share unique, strong passwords. More than 100,000 companies trust 1Password to to secure their business.",
    "whatItIs": "1Password makes it simple to create and share unique, strong passwords. More than 100,000 companies trust 1Password to to secure their business.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% commission on first year signups!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "1password.html",
      "logo": "assets/partnerstack-logos/1password.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "readymode",
    "name": "Readymode",
    "slug": "readymode",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "Readymode is a cloud based all-in-one predictive dialer software that intelligently connects sales and call center agents with more leads in less time. Make more connections, and maximize agent productivity - all at an affordable cost.",
    "whatItIs": "Readymode is a cloud based all-in-one predictive dialer software that intelligently connects sales and call center agents with more leads in less time. Make more connections, and maximize agent productivity - all at an affordable cost.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% of first-year revenue for every referral made",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "readymode.html",
      "logo": "assets/partnerstack-logos/readymode.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "streak_crm_for_gmail",
    "name": "Streak - CRM for Gmail",
    "slug": "streak-crm-for-gmail",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "CRM + Email power tools entirely inside Gmail. 7,000+ companies use Streak to track sales, partnerships, support, hiring, deal flow, and much more without leaving their inbox.",
    "whatItIs": "CRM + Email power tools entirely inside Gmail. 7,000+ companies use Streak to track sales, partnerships, support, hiring, deal flow, and much more without leaving their inbox.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "$60 USD for every new paid account",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "streak-crm-for-gmail.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "outgrow",
    "name": "Outgrow",
    "slug": "outgrow",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "We help businesses boost their traffic, leads & sales via engaging calculators, quizzes, polls, contests, chatbots, recommendations, forms.",
    "whatItIs": "We help businesses boost their traffic, leads & sales via engaging calculators, quizzes, polls, contests, chatbots, recommendations, forms.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% Commission on sale, 10% Recurring Commission for Active Partners",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "outgrow.html",
      "logo": "assets/partnerstack-logos/outgrow.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "process_street",
    "name": "Process Street",
    "slug": "process-street",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "The Process Management platform for collaboration. The simple and powerful way to manage your team’s recurring workflows and procedures.",
    "whatItIs": "The Process Management platform for collaboration. The simple and powerful way to manage your team’s recurring workflows and procedures.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Additional 10% reward",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "process-street.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "sanebox",
    "name": "SaneBox",
    "slug": "sanebox",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "SaneBox is the leading AI email productivity tool that saves users 12-14 hours a month on email time. Trusted by thousands of professionals - get started today :)",
    "whatItIs": "SaneBox is the leading AI email productivity tool that saves users 12-14 hours a month on email time. Trusted by thousands of professionals - get started today :)",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "🤑 Earn up to 30% recurring commission on all sales! Average Partner earns $2,300 in 90 days.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "sanebox-2.html",
      "logo": "assets/partnerstack-logos/sanebox-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "gelato",
    "name": "Gelato",
    "slug": "gelato",
    "category": "Customer Service",
    "subcategory": "Customer Service",
    "description": "Create and sell custom products online. With local production in 32 countries, easy integration, and 24/7 customer support, Gelato is an all-in-one platform for print on demand.",
    "whatItIs": "Create and sell custom products online. With local production in 32 countries, easy integration, and 24/7 customer support, Gelato is an all-in-one platform for print on demand.",
    "problemSolved": "",
    "bestFor": [
      "Customer service",
      "Support"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Customer Service"
    ],
    "tags": [
      "customer service"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Join Gelato’s partners program and earn up to 12% commission for 1 year",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "gelato.html",
      "logo": "assets/partnerstack-logos/gelato.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "abc_trainerize",
    "name": "ABC Trainerize",
    "slug": "abc-trainerize",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "ABC Trainerize is an online coaching platform helping coaches and fitness businesses offer fitness, nutrition and habit programs online and stay connected to their clients and their audience.",
    "whatItIs": "ABC Trainerize is an online coaching platform helping coaches and fitness businesses offer fitness, nutrition and habit programs online and stay connected to their clients and their audience.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% on monthly memberships",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "abc-trainerize.html",
      "logo": "assets/partnerstack-logos/abc-trainerize.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "smartsuite",
    "name": "SmartSuite",
    "slug": "smartsuite",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "One platform for GRC, IT, projects, and business operations. SmartSuite provides a secure, scalable, AI-powered platform for standardizing workflows across your organization. Unite data, teams, and systems in one governed environment—reducing tool sprawl, improving visibility, and powering end-to-end execution with intelligent automation and enterprise-grade reliability.",
    "whatItIs": "One platform for GRC, IT, projects, and business operations. SmartSuite provides a secure, scalable, AI-powered platform for standardizing workflows across your organization. Unite data, teams, and systems in one governed environment—reducing tool sprawl, improving visibility, and powering end-to-end execution with intelligent automation and enterprise-grade reliability.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 20% your first year",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "smartsuite.html",
      "logo": "assets/partnerstack-logos/smartsuite.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "aura",
    "name": "Aura",
    "slug": "aura",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Aura is the modern Amazon repricer, powered by AI. This advanced tool takes the hassle out of micromanaging your prices, allowing you to focus on broader aspects of your Amazon business.",
    "whatItIs": "Aura is the modern Amazon repricer, powered by AI. This advanced tool takes the hassle out of micromanaging your prices, allowing you to focus on broader aspects of your Amazon business.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% revenue share for the lifetime of the subscription!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "aura.html",
      "logo": "assets/partnerstack-logos/aura.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "tapstitch",
    "name": "Tapstitch",
    "slug": "tapstitch",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Tapstitch is the fashion-forward print-on-demand platform empowering creators and brands to design, launch, and scale apparel lines people actually want to wear. We combine quality production, trend-driven design tools, and seamless fulfillment to make brand building effortless.",
    "whatItIs": "Tapstitch is the fashion-forward print-on-demand platform empowering creators and brands to design, launch, and scale apparel lines people actually want to wear. We combine quality production, trend-driven design tools, and seamless fulfillment to make brand building effortless.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% on every order your customers make for next 12 months.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "tapstitch.html",
      "logo": "assets/partnerstack-logos/tapstitch.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "freshservice_by_freshworks",
    "name": "Freshservice by Freshworks",
    "slug": "freshservice-by-freshworks",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Modernize IT and other business functions with a refreshingly easy-to-use, simple-to-configure IT service desk solution in the cloud.",
    "whatItIs": "Modernize IT and other business functions with a refreshingly easy-to-use, simple-to-configure IT service desk solution in the cloud.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "freshservice-by-freshworks.html",
      "logo": "assets/partnerstack-logos/freshservice-by-freshworks.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "mql_activation_bonus",
    "name": "MQL Activation Bonus",
    "slug": "mql-activation-bonus",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Guesty",
    "whatItIs": "Guesty",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "With Guesty’s Affiliate Program, you can earn an additional stream of income, with up to 5K per referral Help your network of hospitality pros succeed in growing their businesses with our advanced hospitality operations platform.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "mql-activation-bonus.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "50_for_per_listing",
    "name": "$50 for per Listing",
    "slug": "50-for-per-listing",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "GetResponse Services Inc.",
    "whatItIs": "GetResponse Services Inc.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "GetResponse offers all-in-one marketing software for marketers, solopreneurs, and small businesses. With 25+ years of expertise, it goes beyond email to help grow audiences, sell courses, & monetize content. Earn 40-60% recurring commission for 12 months.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "50-for-per-listing.html",
      "logo": "assets/partnerstack-logos/50-for-per-listing.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "earn_40_60_recurring_commission_for_12_months",
    "name": "Earn 40-60% recurring commission for 12 months",
    "slug": "earn-40-60-recurring-commission-for-12-months",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Oyster® Oyster® is the HR platform for globally-distributed companies. We help to hire, pay, and provide benefits to your team across borders.",
    "whatItIs": "Oyster® Oyster® is the HR platform for globally-distributed companies. We help to hire, pay, and provide benefits to your team across borders.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% monthly revenue share on all sales for the first year. Plus, get a $250 bonus for your first sale and $500 for your second.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "earn-40-60-recurring-commission-for-12-months.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "papaya_global",
    "name": "Papaya Global",
    "slug": "papaya-global",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Papaya Global unifies global workforce payments on a single platform, giving companies full control of their international payroll & payments.",
    "whatItIs": "Papaya Global unifies global workforce payments on a single platform, giving companies full control of their international payroll & payments.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $1,000 for a opportunity created and $2,000 for a closed won.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "papaya-global.html",
      "logo": "assets/partnerstack-logos/papaya-global.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "later",
    "name": "Later",
    "slug": "later",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Later is the world’s most intelligent influencer marketing company, powering the creator economy and social commerce. Later was built for creators, is trusted by brands, and designed for results. Formed by the powerhouse combination of Later, Mavrck and Mavely, Later provides high-touch influencer activations, sophisticated social media management, and creator commerce solutions, giving marketers visibility across owned, earned, and paid social in one unified platform.",
    "whatItIs": "Later is the world’s most intelligent influencer marketing company, powering the creator economy and social commerce. Later was built for creators, is trusted by brands, and designed for results. Formed by the powerhouse combination of Later, Mavrck and Mavely, Later provides high-touch influencer activations, sophisticated social media management, and creator commerce solutions, giving marketers visibility across owned, earned, and paid social in one unified platform.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% for every paid signup for its first year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "later.html",
      "logo": "assets/partnerstack-logos/later.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "b_rch_formerly_revealbot",
    "name": "Bïrch (Formerly Revealbot)",
    "slug": "b-rch-formerly-revealbot",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Advanced automation, reporting, campaign creation for Facebook, Google, and Snapchat Ads. Scale and optimize ad campaigns automatically based on their performance.",
    "whatItIs": "Advanced automation, reporting, campaign creation for Facebook, Google, and Snapchat Ads. Scale and optimize ad campaigns automatically based on their performance.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% on Every Sale Made",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "b-rch-formerly-revealbot.html",
      "logo": "assets/partnerstack-logos/b-rch-formerly-revealbot.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "brand24",
    "name": "Brand24",
    "slug": "brand24",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Discover the power of media monitoring. Get instant access to brand mentions across social, news, blogs, videos, forums, reviews and more.",
    "whatItIs": "Discover the power of media monitoring. Get instant access to brand mentions across social, news, blogs, videos, forums, reviews and more.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% recurring commision! 💸",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "brand24-2.html",
      "logo": "assets/partnerstack-logos/brand24-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "smtp2go",
    "name": "SMTP2GO",
    "slug": "smtp2go",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "SMTP2GO is a scalable, reliable email delivery solution for transactional and marketing email. Worldwide servers, a robust API, and powerful reporting set us apart.",
    "whatItIs": "SMTP2GO is a scalable, reliable email delivery solution for transactional and marketing email. Worldwide servers, a robust API, and powerful reporting set us apart.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% recurring for every transaction!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "smtp2go.html",
      "logo": "assets/partnerstack-logos/smtp2go.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "sleekflow",
    "name": "SleekFlow",
    "slug": "sleekflow",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "SleekFlow is the AI-powered Omnichannel Conversation Suite for customer engagement. The all-in-one SleekFlow platform creates seamless and personalized customer journeys across everyone’s go-to messaging channels, including WhatsApp, Instagram, live chat.",
    "whatItIs": "SleekFlow is the AI-powered Omnichannel Conversation Suite for customer engagement. The all-in-one SleekFlow platform creates seamless and personalized customer journeys across everyone’s go-to messaging channels, including WhatsApp, Instagram, live chat.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 20% commission on qualified customers (avg ACV $4000/yr)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "sleekflow-2.html",
      "logo": "assets/partnerstack-logos/sleekflow-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "optery",
    "name": "Optery",
    "slug": "optery",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Optery is automated data broker removal software for individuals, families, and businesses. Optery finds and removes personal information - home addresses, phone numbers, emails, and family details - from 600+ data broker sites that post and sell it. Individuals use Optery to protect their own privacy and physical safety. Companies use Optery to remove the employe data that fuels social engineering, reducing the human attack surface across the whole organization. Hundreds of thousands of people.",
    "whatItIs": "Optery is automated data broker removal software for individuals, families, and businesses. Optery finds and removes personal information - home addresses, phone numbers, emails, and family details - from 600+ data broker sites that post and sell it. Individuals use Optery to protect their own privacy and physical safety. Companies use Optery to remove the employe data that fuels social engineering, reducing the human attack surface across the whole organization. Hundreds of thousands of people.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "30% commission on new customers for first 12 months (~$50 estimated average per customer)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "optery.html",
      "logo": "assets/partnerstack-logos/optery.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "gusto",
    "name": "Gusto",
    "slug": "gusto",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Trusted by more than 500,000 businesses and their teams. Gusto's people platform helps growing businesses onboard, pay, insure, and support their hardworking teams with payroll, benefits, and more.",
    "whatItIs": "Trusted by more than 500,000 businesses and their teams. Gusto's people platform helps growing businesses onboard, pay, insure, and support their hardworking teams with payroll, benefits, and more.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $300 per new customer referral!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "gusto.html",
      "logo": "assets/partnerstack-logos/gusto.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "surveysparrow",
    "name": "SurveySparrow",
    "slug": "surveysparrow",
    "category": "Customer Service",
    "subcategory": "Customer Service",
    "description": "SurveySparrow lets you create and share highly engaging, mobile-first surveys that offer a chat-like experience.",
    "whatItIs": "SurveySparrow lets you create and share highly engaging, mobile-first surveys that offer a chat-like experience.",
    "problemSolved": "",
    "bestFor": [
      "Customer service",
      "Support"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Customer Service"
    ],
    "tags": [
      "customer service"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "25% of every sale, recurring over the lifetime of the customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "surveysparrow.html",
      "logo": "assets/partnerstack-logos/surveysparrow.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "help_scout",
    "name": "Help Scout",
    "slug": "help-scout",
    "category": "Customer Service",
    "subcategory": "Customer Service",
    "description": "12,000+ businesses use Help Scout to delight and retain more customers across all their support channels. With email, chat, and social conversations in one place, nothing slips through the cracks.",
    "whatItIs": "12,000+ businesses use Help Scout to delight and retain more customers across all their support channels. With email, chat, and social conversations in one place, nothing slips through the cracks.",
    "problemSolved": "",
    "bestFor": [
      "Customer service",
      "Support"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Customer Service"
    ],
    "tags": [
      "customer service"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% or 20% on every deal closed for 12 months, depending on how many customers referred",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "help-scout.html",
      "logo": "assets/partnerstack-logos/help-scout.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "bouncer",
    "name": "Bouncer",
    "slug": "bouncer",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Easy to use, yet powerful email verification service, with cool Tech and truly caring People. Helps you clean your email lists and spot invalid email address in real time too.",
    "whatItIs": "Easy to use, yet powerful email verification service, with cool Tech and truly caring People. Helps you clean your email lists and spot invalid email address in real time too.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% for every transaction!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "bouncer.html",
      "logo": "assets/partnerstack-logos/bouncer.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "cognism",
    "name": "Cognism",
    "slug": "cognism",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "Cognism is a leading B2B sales intelligence platform, trusted by revenue teams worldwide to drive growth. We provide accurate, compliant prospecting data and innovative tools to help businesses identify, connect with, and convert their ideal customers.",
    "whatItIs": "Cognism is a leading B2B sales intelligence platform, trusted by revenue teams worldwide to drive growth. We provide accurate, compliant prospecting data and innovative tools to help businesses identify, connect with, and convert their ideal customers.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "15% of sales for the first year",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "cognism.html",
      "logo": "assets/partnerstack-logos/cognism.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "owner",
    "name": "Owner",
    "slug": "owner",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Do you want to help local restaurants thrive in the digital age? With Owner.com, you can connect mom & pop restaurant owners to powerful online ordering and marketing tools, and earn rewards when they join our platform. Promote Owner.com through your audience, network, or client relationships, and we’ll equip you with tracking, resources, and support so you can maximize results. Together, we’ll help restaurants succeed.",
    "whatItIs": "Do you want to help local restaurants thrive in the digital age? With Owner.com, you can connect mom & pop restaurant owners to powerful online ordering and marketing tools, and earn rewards when they join our platform. Promote Owner.com through your audience, network, or client relationships, and we’ll equip you with tracking, resources, and support so you can maximize results. Together, we’ll help restaurants succeed.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "$50 CPL + $500 CW",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "owner.html",
      "logo": "assets/partnerstack-logos/owner.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "dext",
    "name": "Dext",
    "slug": "dext",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Dext is for small and medium size businesses to capture, automate and manage their expense and invoice records.",
    "whatItIs": "Dext is for small and medium size businesses to capture, automate and manage their expense and invoice records.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "✨ Earn 50% - 70% on the first 6 months' subscription revenue (£70-£500 per referral)!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "dext.html",
      "logo": "assets/partnerstack-logos/dext.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "plesk",
    "name": "Plesk",
    "slug": "plesk",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Plesk is a leading web hosting control panel that helps hosting providers, agencies and developers easily manage websites, WordPress, email, DNS and databases from one dashboard. It runs on most clouds and servers, automates updates, backups and security, and offers 100+ extensions so users can sell, bundle and scale hosting services faster with less technical overhead.",
    "whatItIs": "Plesk is a leading web hosting control panel that helps hosting providers, agencies and developers easily manage websites, WordPress, email, DNS and databases from one dashboard. It runs on most clouds and servers, automates updates, backups and security, and offers 100+ extensions so users can sell, bundle and scale hosting services faster with less technical overhead.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 35% commission on qualifying orders!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "plesk-2.html",
      "logo": "assets/partnerstack-logos/plesk-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "success_co",
    "name": "Success.co",
    "slug": "success-co",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "The next gen software to run EOS®: modern and fast, deeply integrated and EOS® pure. Success.co isn’t just software - it’s our mission. We’re building something enduring, for teams that are doing the same.",
    "whatItIs": "The next gen software to run EOS®: modern and fast, deeply integrated and EOS® pure. Success.co isn’t just software - it’s our mission. We’re building something enduring, for teams that are doing the same.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% commission for all paid signups",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "success-co.html",
      "logo": "assets/partnerstack-logos/success-co.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "pixel_union_and_out_of_the_sandbox",
    "name": "Pixel Union & Out of the Sandbox",
    "slug": "pixel-union-and-out-of-the-sandbox",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Promote industry leading premium Shopify themes and Shopify store management apps from Pixel Union & Out of the Sandbox today. Trusted by over 100,000 merchants and counting!",
    "whatItIs": "Promote industry leading premium Shopify themes and Shopify store management apps from Pixel Union & Out of the Sandbox today. Trusted by over 100,000 merchants and counting!",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Receive 20% of Theme Updater subscription Partner Share for a referred user's first 12 months",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "pixel-union-and-out-of-the-sandbox.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "todoist_inc",
    "name": "Todoist Inc",
    "slug": "todoist-inc",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Join 50+ million professionals who simplify work and life with the world’s #1 to-do list app on the App Store, Play Store, The Verge, PC Mag, and more.",
    "whatItIs": "Join 50+ million professionals who simplify work and life with the world’s #1 to-do list app on the App Store, Play Store, The Verge, PC Mag, and more.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 25% commission!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "todoist-inc.html",
      "logo": "assets/partnerstack-logos/todoist-inc.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "functional_diagnostic_nutrition",
    "name": "Functional Diagnostic Nutrition",
    "slug": "functional-diagnostic-nutrition",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "FDN is the recognized leader in functional health education. Our proven 'D.R.E.S.S. for Success' methodology has trained over 5,000 practitioners to escape trial-and-error and build 6- & 7-figure practices for the past 25 years. When you partner with us, you offer your audience the gold standard in functional lab training. Join us to provide life-changing education, elevate your brand, and share in the success of one of the most trusted and rewarding programs in the wellness industry.",
    "whatItIs": "FDN is the recognized leader in functional health education. Our proven 'D.R.E.S.S. for Success' methodology has trained over 5,000 practitioners to escape trial-and-error and build 6- & 7-figure practices for the past 25 years. When you partner with us, you offer your audience the gold standard in functional lab training. Join us to provide life-changing education, elevate your brand, and share in the success of one of the most trusted and rewarding programs in the wellness industry.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $1,000 for each new student who signs up under you + bonuses!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "functional-diagnostic-nutrition.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "subbly",
    "name": "Subbly",
    "slug": "subbly",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Subbly is an all-in-one subscription-first commerce platform, with everything you need to run any kind of subscription business including with transactional commerce.",
    "whatItIs": "Subbly is an all-in-one subscription-first commerce platform, with everything you need to run any kind of subscription business including with transactional commerce.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% on all recurring revenues + $100 for every 5th converted trial",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "subbly.html",
      "logo": "assets/partnerstack-logos/subbly.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "taxcycle",
    "name": "TaxCycle",
    "slug": "taxcycle",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Comprehensive professional tax software for Canadian accountants, bookkeepers and tax preparers.",
    "whatItIs": "Comprehensive professional tax software for Canadian accountants, bookkeepers and tax preparers.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $250 for every new customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "taxcycle.html",
      "logo": "assets/partnerstack-logos/taxcycle.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "marketerhire",
    "name": "MarketerHire",
    "slug": "marketerhire",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Today’s fastest-growing companies don’t get lucky with great marketing — they have MarketerHire behind the scenes. Trusted by 6,000+ companies, we help ambitious teams move faster with on-demand access to world-class marketing talent. Vetted. Flexible. ROI-obsessed. Skip the recruiters. Skip the guesswork. Get matched in days — and start with a no-risk, two-week trial.",
    "whatItIs": "Today’s fastest-growing companies don’t get lucky with great marketing — they have MarketerHire behind the scenes. Trusted by 6,000+ companies, we help ambitious teams move faster with on-demand access to world-class marketing talent. Vetted. Flexible. ROI-obsessed. Skip the recruiters. Skip the guesswork. Get matched in days — and start with a no-risk, two-week trial.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $5,000 for every new referral. Paid upfront!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "marketerhire.html",
      "logo": "assets/partnerstack-logos/marketerhire.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "inboxally",
    "name": "InboxAlly",
    "slug": "inboxally",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Help boost email deliverability and open rates. InboxAlly customers love knowing that their emails will reach the intended audience every time using their existing ESP.",
    "whatItIs": "Help boost email deliverability and open rates. InboxAlly customers love knowing that their emails will reach the intended audience every time using their existing ESP.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% on every purchase for the lifetime of the customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "inboxally.html",
      "logo": "assets/partnerstack-logos/inboxally.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "truckstop",
    "name": "TRUCKSTOP",
    "slug": "truckstop",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "We develop and deliver technology solutions and services that empower freight professionals—carriers, brokers, and shippers of all sizes—to run their businesses from start to finish.",
    "whatItIs": "We develop and deliver technology solutions and services that empower freight professionals—carriers, brokers, and shippers of all sizes—to run their businesses from start to finish.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 20% per active customer you refer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "truckstop.html",
      "logo": "assets/partnerstack-logos/truckstop.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "airslate",
    "name": "airSlate",
    "slug": "airslate",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "pdfFiller & signNow are the industry-leading solutions for creating, editing, eSigning, and managing documents & forms online, using any desktop or mobile device, empowering to digitize and automate.",
    "whatItIs": "pdfFiller & signNow are the industry-leading solutions for creating, editing, eSigning, and managing documents & forms online, using any desktop or mobile device, empowering to digitize and automate.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $80 per referred customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "airslate.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "similarweb",
    "name": "Similarweb",
    "slug": "similarweb",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Similarweb powers the world’s businesses with the best digital data. We provide insights for any website, app, industry and market. Use Similarweb to improve digital marketing strategy, generate new leads, and improve their eCommerce performance.",
    "whatItIs": "Similarweb powers the world’s businesses with the best digital data. We provide insights for any website, app, industry and market. Use Similarweb to improve digital marketing strategy, generate new leads, and improve their eCommerce performance.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Get 50% of all payments for 12 months! (up to $2400💰)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "similarweb.html",
      "logo": "assets/partnerstack-logos/similarweb.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "cloudtask",
    "name": "CloudTask",
    "slug": "cloudtask",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Hire sales, marketing, customer success, and support talent in 48 hours.",
    "whatItIs": "Hire sales, marketing, customer success, and support talent in 48 hours.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Refer remote talent to the CloudTask Marketplace and earn when they’re hired.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "cloudtask.html",
      "logo": "assets/partnerstack-logos/cloudtask.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "boulevard",
    "name": "Boulevard",
    "slug": "boulevard",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Boulevard is the business management platform purpose-built for medspas, salons, and spas. AI-powered Precision Scheduling™ fills your calendar with the right appointments, intelligent self-booking and automated reminders cut no-shows, and integrated POS, memberships, and marketing turn one-time visits into recurring revenue. Medspas get HIPAA-compliant charting, photo markup, and ePrescribe in the same system — no separate EMR required.",
    "whatItIs": "Boulevard is the business management platform purpose-built for medspas, salons, and spas. AI-powered Precision Scheduling™ fills your calendar with the right appointments, intelligent self-booking and automated reminders cut no-shows, and integrated POS, memberships, and marketing turn one-time visits into recurring revenue. Medspas get HIPAA-compliant charting, photo markup, and ePrescribe in the same system — no separate EMR required.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "$750 per demo + $750 per paying customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "boulevard.html",
      "logo": "assets/partnerstack-logos/boulevard.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "switcher_studio",
    "name": "Switcher Studio",
    "slug": "switcher-studio",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Switcher’s award-winning suite of video products empowers users to easily create, share, and monetize live and recorded videos across social media platforms and business websites to turn their domain into a private content channel.",
    "whatItIs": "Switcher’s award-winning suite of video products empowers users to easily create, share, and monetize live and recorded videos across social media platforms and business websites to turn their domain into a private content channel.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $300 for every customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "switcher-studio.html",
      "logo": "assets/partnerstack-logos/switcher-studio.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "buddy_punch",
    "name": "Buddy Punch",
    "slug": "buddy-punch",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Buddy Punch is an online time clock that takes the hassle out of employee time tracking. Use the web or our smartphone apps.",
    "whatItIs": "Buddy Punch is an online time clock that takes the hassle out of employee time tracking. Use the web or our smartphone apps.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% of every sale made within the first 12 months",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "buddy-punch.html",
      "logo": "assets/partnerstack-logos/buddy-punch.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "foxit",
    "name": "Foxit",
    "slug": "foxit",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Foxit is a global leader in PDF and eSign solutions, trusted by over 700 million users. Our powerful tools PDF Editor and eSign—help individuals and teams create, edit, and sign documents faster. With built-in AI features like summarization, Q&A, rewriting, and translation, Foxit offers a smarter, more affordable alternative to Adobe Acrobat.",
    "whatItIs": "Foxit is a global leader in PDF and eSign solutions, trusted by over 700 million users. Our powerful tools PDF Editor and eSign—help individuals and teams create, edit, and sign documents faster. With built-in AI features like summarization, Q&A, rewriting, and translation, Foxit offers a smarter, more affordable alternative to Adobe Acrobat.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% on every successful referral",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "foxit.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "fastmail",
    "name": "Fastmail",
    "slug": "fastmail",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Premium, ad-free email since 1999. An independent provider with the best designed email product on the market, where privacy is priority not a commodity. Your data remains yours whilst having the best user experience and no data harvesting.",
    "whatItIs": "Premium, ad-free email since 1999. An independent provider with the best designed email product on the market, where privacy is priority not a commodity. Your data remains yours whilst having the best user experience and no data harvesting.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% of all sales for up to 2 years and a 10% discount for your customers for the first 12 months.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "fastmail.html",
      "logo": "assets/partnerstack-logos/fastmail.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "campaigner",
    "name": "Campaigner",
    "slug": "campaigner",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Campaigner is Ziff Davis Martech’s extremely powerful email and SMS marketing solution. Campaigner will help businesses personalize their emails, enhance their customer engagement and drive their business more sales.",
    "whatItIs": "Campaigner is Ziff Davis Martech’s extremely powerful email and SMS marketing solution. Campaigner will help businesses personalize their emails, enhance their customer engagement and drive their business more sales.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "$10 CPL / $350 CPA",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "campaigner.html",
      "logo": "assets/partnerstack-logos/campaigner.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "salesflare",
    "name": "Salesflare",
    "slug": "salesflare",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "A simple yet powerful CRM for small and medium-sized businesses selling B2B. Integrates into Gmail, Outlook and LinkedIn and keeps track of customers automatically.",
    "whatItIs": "A simple yet powerful CRM for small and medium-sized businesses selling B2B. Integrates into Gmail, Outlook and LinkedIn and keeps track of customers automatically.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "30% lifetime on all revenues",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "salesflare.html",
      "logo": "assets/partnerstack-logos/salesflare.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "surveymonkey",
    "name": "SurveyMonkey",
    "slug": "surveymonkey",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "SurveyMonkey is the world’s most popular platform for surveys and forms, built for business and loved by users.",
    "whatItIs": "SurveyMonkey is the world’s most popular platform for surveys and forms, built for business and loved by users.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 20% commission on every closed deal. Earn up to $300 per qualified lead.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "surveymonkey.html",
      "logo": "assets/partnerstack-logos/surveymonkey.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "salesrabbit",
    "name": "SalesRabbit",
    "slug": "salesrabbit",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "SalesRabbit is the only all-in-one field sales platform, offering a comprehensive set of capabilities designed specifically for outside and door-to-door sales teams.",
    "whatItIs": "SalesRabbit is the only all-in-one field sales platform, offering a comprehensive set of capabilities designed specifically for outside and door-to-door sales teams.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "15% commission for the first year on an avg. $10K deal size!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "salesrabbit.html",
      "logo": "assets/partnerstack-logos/salesrabbit.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "krispcall_communications_inc",
    "name": "KrispCall Communications Inc.",
    "slug": "krispcall-communications-inc",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "KrispCall is an AI-driven cloud phone solution that unifies calls, SMS, voicemails and virtual numbers in one platform. Get local, toll-free, and international numbers from 100+ countries, connect globally, automate workflows with AI Copilot, integrate with 100+ CRMs, and scale your business communications from a single app.",
    "whatItIs": "KrispCall is an AI-driven cloud phone solution that unifies calls, SMS, voicemails and virtual numbers in one platform. Get local, toll-free, and international numbers from 100+ countries, connect globally, automate workflows with AI Copilot, integrate with 100+ CRMs, and scale your business communications from a single app.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% Lifetime commission on workspace subscription plus extra earnings for every additional member you bring in.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "krispcall-communications-inc-2.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "bar_codes_talk",
    "name": "Bar Codes Talk",
    "slug": "bar-codes-talk",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "UPC & EAN Barcode Number & Label Provider.",
    "whatItIs": "UPC & EAN Barcode Number & Label Provider.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "10% earned on first two sales per customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "bar-codes-talk.html",
      "logo": "assets/partnerstack-logos/bar-codes-talk.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "tie_previously_revenue_roll",
    "name": "Tie (previously Revenue Roll)",
    "slug": "tie-previously-revenue-roll",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Tie's real-time B2C identity resolution and enrichment platform instantly reveals names, contact details, demographic data and psychographics for over 50% of website visitors—without requiring form submissions or purchases.",
    "whatItIs": "Tie's real-time B2C identity resolution and enrichment platform instantly reveals names, contact details, demographic data and psychographics for over 50% of website visitors—without requiring form submissions or purchases.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20%+ Of Recurring Revenue - Average Of $5K Per Referral",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "tie-previously-revenue-roll.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "shor_affiliate_program",
    "name": "Shor affiliate program",
    "slug": "shor-affiliate-program",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Shor combines multiple links into a highly-conversive page. Promote a handy tool and earn up to $297 for each user you led!🔥",
    "whatItIs": "Shor combines multiple links into a highly-conversive page. Promote a handy tool and earn up to $297 for each user you led!🔥",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 50% for the whole six months",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "shor-affiliate-program.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "unitel_voice",
    "name": "Unitel Voice",
    "slug": "unitel-voice",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Unitel Voice is a virtual phone system that lets startups & entrepreneurs run their businesses from anywhere on any device.",
    "whatItIs": "Unitel Voice is a virtual phone system that lets startups & entrepreneurs run their businesses from anywhere on any device.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% for the first 12 months of every sale made",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "unitel-voice.html",
      "logo": "assets/partnerstack-logos/unitel-voice.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "vwo",
    "name": "VWO",
    "slug": "vwo",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "VWO is the market-leading A/B testing tool that fast-growing companies use for experimentation & conversion rate optimization.",
    "whatItIs": "VWO is the market-leading A/B testing tool that fast-growing companies use for experimentation & conversion rate optimization.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% on every referral",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "vwo.html",
      "logo": "assets/partnerstack-logos/vwo.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "textline",
    "name": "Textline",
    "slug": "textline",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Textline is the most secure business text messaging platform for modern customer support, sales, and logistics teams. Textline is HIPAA and SOC2 compliant. Built for teams, popular features include automations, announcements, MMS, templates, and surveys.",
    "whatItIs": "Textline is the most secure business text messaging platform for modern customer support, sales, and logistics teams. Textline is HIPAA and SOC2 compliant. Built for teams, popular features include automations, announcements, MMS, templates, and surveys.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 25% of the deal value in recurring commissions!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "textline.html",
      "logo": "assets/partnerstack-logos/textline.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "smtp_com",
    "name": "SMTP.com",
    "slug": "smtp-com",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "SMTP.com is Ziff Davis Martech's transactional email and email API service. We are the industry leader in deliverability. Experience SMTP.com for yourself to see why our customers love us.",
    "whatItIs": "SMTP.com is Ziff Davis Martech's transactional email and email API service. We are the industry leader in deliverability. Experience SMTP.com for yourself to see why our customers love us.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "$5 CPL / $100 CPA",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "smtp-com.html",
      "logo": "assets/partnerstack-logos/smtp-com.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "time_doctor",
    "name": "Time Doctor",
    "slug": "time-doctor",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Time Doctor is a workforce analytics platform that empowers managers to lead with trust, not control. It delivers AI-enhanced, actionable insights and makes productivity data transparent and accessible, helping teams work smarter, no matter where they're located. We run two partner programs, one for Affiliates and one for Resellers. See which one fits how you work and apply at https://www.timedoctor.com/partner",
    "whatItIs": "Time Doctor is a workforce analytics platform that empowers managers to lead with trust, not control. It delivers AI-enhanced, actionable insights and makes productivity data transparent and accessible, helping teams work smarter, no matter where they're located. We run two partner programs, one for Affiliates and one for Resellers. See which one fits how you work and apply at https://www.timedoctor.com/partner",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Affiliate Partner Program: earn 30% recurring commission for up to 3 years on every paid customer you refer. Reseller Partner Program: earn on every Time Doctor deal you close. Your Partner Account Manager covers the earnings structure during onboarding.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "time-doctor.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "top_echelon_software",
    "name": "Top Echelon Software",
    "slug": "top-echelon-software",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Top Echelon is an applicant tracking and recruiting software designed to help businesses streamline their hiring process.",
    "whatItIs": "Top Echelon is an applicant tracking and recruiting software designed to help businesses streamline their hiring process.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% revenue share on your customer's first year purchases!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "top-echelon-software.html",
      "logo": "assets/partnerstack-logos/top-echelon-software.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "marketing_360",
    "name": "Marketing 360®",
    "slug": "marketing-360",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Marketing 360® delivers an all-in-one platform for digital marketing and marketing services to help small businesses grow their brand. Trusted by over 15,000 SMBs, we are excited to work with you to help small businesses grow and local communities glow!",
    "whatItIs": "Marketing 360® delivers an all-in-one platform for digital marketing and marketing services to help small businesses grow their brand. Trusted by over 15,000 SMBs, we are excited to work with you to help small businesses grow and local communities glow!",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% on every customer purchase!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "marketing-360.html",
      "logo": "assets/partnerstack-logos/marketing-360.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "tenable",
    "name": "Tenable",
    "slug": "tenable",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "The Tenable Performance Marketing Program is designed for partners looking to earn commission promoting cutting-edge cybersecurity solutions.",
    "whatItIs": "The Tenable Performance Marketing Program is designed for partners looking to earn commission promoting cutting-edge cybersecurity solutions.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Accelerate your earnings with Tenable! 5% Commission & $4,500 AOV",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "tenable.html",
      "logo": "assets/partnerstack-logos/tenable.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "flippa_com",
    "name": "Flippa.com",
    "slug": "flippa-com",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Flippa is the #1 platform for online M&A. Combing expert advisory services with innovative tech, we help entrepreneurs all around the world exit online businesses and acquire their next opportunity.",
    "whatItIs": "Flippa is the #1 platform for online M&A. Combing expert advisory services with innovative tech, we help entrepreneurs all around the world exit online businesses and acquire their next opportunity.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% every time your friends sell, buy or list a business on Flippa",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "flippa-com.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "cometchat",
    "name": "CometChat",
    "slug": "cometchat",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "CometChat is a full-stack communication and AI platform that lets product teams embed chat, voice and video calling, moderation, and AI agents directly into their apps — fast. From real-time messaging and live calls to contextual moderation and custom AI copilots, CometChat provides production-ready SDKs, UI kits, and end-to-end infrastructure so teams can launch reliable, compliant, and engaging in-app experiences without building from scratch.",
    "whatItIs": "CometChat is a full-stack communication and AI platform that lets product teams embed chat, voice and video calling, moderation, and AI agents directly into their apps — fast. From real-time messaging and live calls to contextual moderation and custom AI copilots, CometChat provides production-ready SDKs, UI kits, and end-to-end infrastructure so teams can launch reliable, compliant, and engaging in-app experiences without building from scratch.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% of new customer subscription revenue for one year",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "cometchat.html",
      "logo": "assets/partnerstack-logos/cometchat.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "bugherd",
    "name": "BugHerd",
    "slug": "bugherd",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "BugHerd is a website feedback and bug tracking tool designed for web development teams, either agency or in-house. It’s easy to give and collect feedback which automatically moves to a Kanban board making it simple to track and manage tasks.",
    "whatItIs": "BugHerd is a website feedback and bug tracking tool designed for web development teams, either agency or in-house. It’s easy to give and collect feedback which automatically moves to a Kanban board making it simple to track and manage tasks.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% recurring revenue for every new customer you refer to BugHerd.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "bugherd.html",
      "logo": "assets/partnerstack-logos/bugherd.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "8am",
    "name": "8am™",
    "slug": "8am",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "The 8am™ MyCase Consultant Program supports consultants, accountants, and IT professionals who work with law firms to ensure their success with 8am MyCase, the all-in-one legal case management solution.",
    "whatItIs": "The 8am™ MyCase Consultant Program supports consultants, accountants, and IT professionals who work with law firms to ensure their success with 8am MyCase, the all-in-one legal case management solution.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% of the annual contract value when client signs up on a annual subscription",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "8am.html",
      "logo": "assets/partnerstack-logos/8am.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "healthie",
    "name": "Healthie",
    "slug": "healthie",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Industry-leading EMR, Scheduling, and Client Engagement platform for modern healthcare delivery.",
    "whatItIs": "Industry-leading EMR, Scheduling, and Client Engagement platform for modern healthcare delivery.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $150 for each new eligible paid account on Healthie! Bonus commissions available through challenges and tier structure.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "healthie.html",
      "logo": "assets/partnerstack-logos/healthie.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "uniqode",
    "name": "Uniqode",
    "slug": "uniqode",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "Uniqode is a QR Code generator for businesses. Create, customize, and manage dynamic QR Codes with built-in tracking and enterprise-grade security. Rated the highest in its category, Uniqode lets you update QR Code destinations without reprinting and personalize where people land based on location, language, device, or time. Teams manage thousands of QR Codes from one place with role-based permissions and governance. Trusted by 50,000+ businesses as the highest-rated platform in its category.",
    "whatItIs": "Uniqode is a QR Code generator for businesses. Create, customize, and manage dynamic QR Codes with built-in tracking and enterprise-grade security. Rated the highest in its category, Uniqode lets you update QR Code destinations without reprinting and personalize where people land based on location, language, device, or time. Teams manage thousands of QR Codes from one place with role-based permissions and governance. Trusted by 50,000+ businesses as the highest-rated platform in its category.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25-35% commission based on your quarterly performance.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "uniqode.html",
      "logo": "assets/partnerstack-logos/uniqode.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "ueni_com",
    "name": "UENI.com",
    "slug": "ueni-com",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "UENI gives small businesses and independent professionals a chance to reach a broader audience and increase sales by building their new website for them without the need to settle for expensive agencies or complicated DIY web design builders.",
    "whatItIs": "UENI gives small businesses and independent professionals a chance to reach a broader audience and increase sales by building their new website for them without the need to settle for expensive agencies or complicated DIY web design builders.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $100 - $150 for each customer referred",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "ueni-com.html",
      "logo": "assets/partnerstack-logos/ueni-com.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "heard",
    "name": "Heard",
    "slug": "heard",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Heard is the only accounting platform built for mental health and wellness providers, combining bookkeeping, taxes, and payroll in one place. Providers using Heard save an average of 60 hours a year and $5,000 in taxes. We handle monthly bookkeeping, deliver clear financial reports, estimate quarterly taxes, file personal and business returns, support S Corp setup, and respond to questions within one business day.",
    "whatItIs": "Heard is the only accounting platform built for mental health and wellness providers, combining bookkeeping, taxes, and payroll in one place. Providers using Heard save an average of 60 hours a year and $5,000 in taxes. We handle monthly bookkeeping, deliver clear financial reports, estimate quarterly taxes, file personal and business returns, support S Corp setup, and respond to questions within one business day.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $100 per new paid account referral on Heard.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "heard.html",
      "logo": "assets/partnerstack-logos/heard.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "atria",
    "name": "Atria",
    "slug": "atria",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Atria is an AI-powered ad engine for agencies/brands, trusted by 10K+ teams. It offers tools for analytics, creation, research, asset management & inspiration—driving 10x revenue growth.",
    "whatItIs": "Atria is an AI-powered ad engine for agencies/brands, trusted by 10K+ teams. It offers tools for analytics, creation, research, asset management & inspiration—driving 10x revenue growth.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% Commission for your referrals (avg commission $80/mo/customer)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "atria-2.html",
      "logo": "assets/partnerstack-logos/atria-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "format",
    "name": "Format",
    "slug": "format",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Voted most trusted by creative professionals across the globe, Format makes building a beautiful website portfolio easy!",
    "whatItIs": "Voted most trusted by creative professionals across the globe, Format makes building a beautiful website portfolio easy!",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 50% commission on new subscriptions!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "format.html",
      "logo": "assets/partnerstack-logos/format.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "wistia",
    "name": "Wistia",
    "slug": "wistia",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Create, host, market, and analyze the impact of video—all with Wistia’s video marketing platform.",
    "whatItIs": "Create, host, market, and analyze the impact of video—all with Wistia’s video marketing platform.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% Revenue Share",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "wistia.html",
      "logo": "assets/partnerstack-logos/wistia.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "finale_inventory",
    "name": "Finale Inventory",
    "slug": "finale-inventory",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Finale Inventory is the top inventory management solution for applications involving high volume, multichannel eCommerce and warehouse management.",
    "whatItIs": "Finale Inventory is the top inventory management solution for applications involving high volume, multichannel eCommerce and warehouse management.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% every month for a paid customer's first year",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "finale-inventory.html",
      "logo": "assets/partnerstack-logos/finale-inventory.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "browse_ai",
    "name": "Browse AI",
    "slug": "browse-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Maximize your affiliate impact with Browse AI: a top SaaS for no-code web scraping. With 370,000+ users and validation from 50 Fortune 500 firms, it offers seamless integration and proven success. Partner for growth and reliability in the digital age.",
    "whatItIs": "Maximize your affiliate impact with Browse AI: a top SaaS for no-code web scraping. With 370,000+ users and validation from 50 Fortune 500 firms, it offers seamless integration and proven success. Partner for growth and reliability in the digital age.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Promote our tool to your audience, and you will receive 20% of all their transactions forever",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "browse-ai-2.html",
      "logo": "assets/partnerstack-logos/browse-ai-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "filevine",
    "name": "Filevine",
    "slug": "filevine",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Filevine is the leading AI-first, cloud-based case and project management platform trusted by over 125,000 professionals.We help teams simplify complex workflows, improve collaboration, and drive better outcomes. While we’re built for legal organizations, any team that manages high-stakes projects can benefit from Filevine’s powerful and flexible platform.",
    "whatItIs": "Filevine is the leading AI-first, cloud-based case and project management platform trusted by over 125,000 professionals.We help teams simplify complex workflows, improve collaboration, and drive better outcomes. While we’re built for legal organizations, any team that manages high-stakes projects can benefit from Filevine’s powerful and flexible platform.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Receive 10% of the first-year revenue for every customer you refer who signs up and pays.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "filevine.html",
      "logo": "assets/partnerstack-logos/filevine.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "whale",
    "name": "Whale",
    "slug": "whale",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Give your customers the power to seamlessly create and manage their SOPs and internal processes. Whale is the single source of truth for company knowledge and the process improvement professional’s best friend. Give your customers the power to seamlessly create and manage their SOPs and internal processes. Whale is the single source of truth for company knowledge and the process improvement professional’s best friend.",
    "whatItIs": "Give your customers the power to seamlessly create and manage their SOPs and internal processes. Whale is the single source of truth for company knowledge and the process improvement professional’s best friend. Give your customers the power to seamlessly create and manage their SOPs and internal processes. Whale is the single source of truth for company knowledge and the process improvement professional’s best friend.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "whale.html",
      "logo": "assets/partnerstack-logos/whale.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "ine",
    "name": "INE",
    "slug": "ine",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "Whether you have personal training goals or are looking to train a team, our on-demand, hands-on Networking, Cyber Security, Data Science, and Cloud resources will help you get there.",
    "whatItIs": "Whether you have personal training goals or are looking to train a team, our on-demand, hands-on Networking, Cyber Security, Data Science, and Cloud resources will help you get there.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Referral rewards on IT training plan purchases",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "ine.html",
      "logo": "assets/partnerstack-logos/ine.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "crankwheel",
    "name": "CrankWheel",
    "slug": "crankwheel",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "Screen sharing designed for sales professionals. 10x simpler than traditional web conferencing systems like Zoom. Works without any download on your prospect's mobile phone, computer or tablet. Add a presentation to your phone call or do a web conference.",
    "whatItIs": "Screen sharing designed for sales professionals. 10x simpler than traditional web conferencing systems like Zoom. Works without any download on your prospect's mobile phone, computer or tablet. Add a presentation to your phone call or do a web conference.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "15% recurring and up to $120 for each new paid subscription",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "crankwheel.html",
      "logo": "assets/partnerstack-logos/crankwheel.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "wrike",
    "name": "Wrike",
    "slug": "wrike",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Wrike is a collaborative work management solution, helping teams work as one and achieve the best work of their lives! With 20,000+ clients, Wrike offers a solution for all types of teams.",
    "whatItIs": "Wrike is a collaborative work management solution, helping teams work as one and achieve the best work of their lives! With 20,000+ clients, Wrike offers a solution for all types of teams.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% of your first sale on ALL customers!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "wrike.html",
      "logo": "assets/partnerstack-logos/wrike.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "visualcv",
    "name": "VisualCV",
    "slug": "visualcv",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "VisualCV is an online resume and portfolio building website that has helped over 3 million people make their next career move.",
    "whatItIs": "VisualCV is an online resume and portfolio building website that has helped over 3 million people make their next career move.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% commission on every new sale",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "visualcv.html",
      "logo": "assets/partnerstack-logos/visualcv.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "lusha",
    "name": "Lusha",
    "slug": "lusha",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "Lusha’s intelligent go-to-market platform brings you the B2B contact and company data you won’t find anywhere else.",
    "whatItIs": "Lusha’s intelligent go-to-market platform brings you the B2B contact and company data you won’t find anywhere else.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 20% for the first 12 months on each new paid customer you refer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "lusha-2.html",
      "logo": "assets/partnerstack-logos/lusha-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "shipbob",
    "name": "ShipBob",
    "slug": "shipbob",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "End-to-end order fulfillment platform for ecommerce brands.",
    "whatItIs": "End-to-end order fulfillment platform for ecommerce brands.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $250 as a signup bonus",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "shipbob.html",
      "logo": "assets/partnerstack-logos/shipbob.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "800_com",
    "name": "800.com",
    "slug": "800-com",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "800.com - Toll-Free and Local Business Number Separate your business and personal numbers. Build stronger customer relationships while tracking your business communications.",
    "whatItIs": "800.com - Toll-Free and Local Business Number Separate your business and personal numbers. Build stronger customer relationships while tracking your business communications.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $125 for every successful referral!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "800-com.html",
      "logo": "assets/partnerstack-logos/800-com.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "houzz_pro",
    "name": "Houzz Pro",
    "slug": "houzz-pro",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Houzz Pro is an all-in-one solution for residential construction and design professionals to manage the entire project lifecycle.",
    "whatItIs": "Houzz Pro is an all-in-one solution for residential construction and design professionals to manage the entire project lifecycle.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $100 per converted customer as an affiliate!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "houzz-pro.html",
      "logo": "assets/partnerstack-logos/houzz-pro.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "synder",
    "name": "Synder",
    "slug": "synder",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Synder is powerful automation software that enables easy accounting for e-commerce businesses and accounting firms. Automate reconciliation of sales from e-commerce systems with accounting for always accurate reporting.",
    "whatItIs": "Synder is powerful automation software that enables easy accounting for e-commerce businesses and accounting firms. Automate reconciliation of sales from e-commerce systems with accounting for always accurate reporting.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Up to 20% recurring commission for every paid referral",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "synder.html",
      "logo": "assets/partnerstack-logos/synder.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "hello_bar_and_subscribers",
    "name": "Hello Bar & Subscribers",
    "slug": "hello-bar-and-subscribers",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Hello Bar & Subscribers help ambitious online companies grow. Hello Bar is a lead capture tool, Subscribers brings visitors back again.",
    "whatItIs": "Hello Bar & Subscribers help ambitious online companies grow. Hello Bar is a lead capture tool, Subscribers brings visitors back again.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% of every sale made, for the life of a customer 🔥",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "hello-bar-and-subscribers.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "freshbooks",
    "name": "FreshBooks",
    "slug": "freshbooks",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "FreshBooks is business management software purpose-built for service-based solopreneurs and small teams. It simplifies the financial side of running a business, so owners spend less time on admin and feel more confident about their finances.",
    "whatItIs": "FreshBooks is business management software purpose-built for service-based solopreneurs and small teams. It simplifies the financial side of running a business, so owners spend less time on admin and feel more confident about their finances.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $10/free trial signup and up to $200 for each paid plan referred",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "freshbooks.html",
      "logo": "assets/partnerstack-logos/freshbooks.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "keeper_security",
    "name": "Keeper Security",
    "slug": "keeper-security",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "Keeper is transforming cybersecurity for people and organizations around the world. Keeper's affordable and easy-to-use solutions are designed to protect every user on every device. Apply to join our program today!",
    "whatItIs": "Keeper is transforming cybersecurity for people and organizations around the world. Keeper's affordable and easy-to-use solutions are designed to protect every user on every device. Apply to join our program today!",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% for every order you bring in for the first year of the customer and earn $60 for every qualified lead",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "keeper-security.html",
      "logo": "assets/partnerstack-logos/keeper-security.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "tax1099",
    "name": "Tax1099",
    "slug": "tax1099",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Tax1099 is the leading IRS-authorized eFiling platform for 1099s & more (millions processed). Trusted by 500,000+ businesses. Get started: Tax1099.com",
    "whatItIs": "Tax1099 is the leading IRS-authorized eFiling platform for 1099s & more (millions processed). Trusted by 500,000+ businesses. Get started: Tax1099.com",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% on all affiliate e-file referral transactions in the first year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "tax1099.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "paylocity",
    "name": "Paylocity",
    "slug": "paylocity",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "HR & payroll technology company driven by innovation and putting the employee first. Because people matter most. And people have always been at the heart of our business. Let's go forward together!",
    "whatItIs": "HR & payroll technology company driven by innovation and putting the employee first. Because people matter most. And people have always been at the heart of our business. Let's go forward together!",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $500 per qualified lead!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "paylocity.html",
      "logo": "assets/partnerstack-logos/paylocity.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "powr_inc",
    "name": "POWR, Inc.",
    "slug": "powr-inc",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "POWR is the web's leading app library to help SMBs collect information, engage visitors, boost conversions, & skyrocket their revenue.",
    "whatItIs": "POWR is the web's leading app library to help SMBs collect information, engage visitors, boost conversions, & skyrocket their revenue.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% commission on all paid referrals! Plus bonuses for sales milestones!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "powr-inc.html",
      "logo": "assets/partnerstack-logos/powr-inc.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "ninjaone",
    "name": "NinjaOne",
    "slug": "ninjaone",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "Become a NinjaOne affiliate partner and empower your clients to streamline their IT operations! NinjaOne's RMM platform offers visibility, security & control, boosting client productivity & reducing IT costs. #1 for support, Ninja is a proven solution.",
    "whatItIs": "Become a NinjaOne affiliate partner and empower your clients to streamline their IT operations! NinjaOne's RMM platform offers visibility, security & control, boosting client productivity & reducing IT costs. #1 for support, Ninja is a proven solution.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Join our affiliate network and earn on clicks, leads, and demos! We personalize based on your advertisement portfolio. Visit our website to learn more about NinjaOne and apply today!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "ninjaone.html",
      "logo": "assets/partnerstack-logos/ninjaone.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "icontact",
    "name": "iContact",
    "slug": "icontact",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "iContact’s email marketing tools help small businesses grow their audience and design and automate beautiful, personalized emails. Trusted by thousands of small and independent businesses since 2003 to send billions of emails each month.",
    "whatItIs": "iContact’s email marketing tools help small businesses grow their audience and design and automate beautiful, personalized emails. Trusted by thousands of small and independent businesses since 2003 to send billions of emails each month.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 35% of our customers' monthly subscription for 12 months.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "icontact.html",
      "logo": "assets/partnerstack-logos/icontact.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "aplos_raisely_and_keela",
    "name": "Aplos, Raisely & Keela",
    "slug": "aplos-raisely-and-keela",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Aplos, Raisely, and Keela give nonprofits the tools to manage accounting, fundraising, and donor relationships. Aplos handles fund accounting, Raisely powers online fundraising, and Keela strengthens donor engagement. Together, these three solutions are part of the Velora integrated suite, and help nonprofits raise more, manage better, and grow their impact. Each product can also be sold separately, giving partners flexibility to meet client needs.",
    "whatItIs": "Aplos, Raisely, and Keela give nonprofits the tools to manage accounting, fundraising, and donor relationships. Aplos handles fund accounting, Raisely powers online fundraising, and Keela strengthens donor engagement. Together, these three solutions are part of the Velora integrated suite, and help nonprofits raise more, manage better, and grow their impact. Each product can also be sold separately, giving partners flexibility to meet client needs.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $250 on every referral that signs on with us",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "aplos-raisely-and-keela.html",
      "logo": "assets/partnerstack-logos/aplos-raisely-and-keela.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "tresorit",
    "name": "Tresorit",
    "slug": "tresorit",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "Tresorit lets you securely store & share files in the cloud with end-to-end encryption. Our mission is to protect your privacy & confidential data with cutting-edge, secure productivity tools. Experience unmatched security and peace of mind with Tresorit!",
    "whatItIs": "Tresorit lets you securely store & share files in the cloud with end-to-end encryption. Our mission is to protect your privacy & confidential data with cutting-edge, secure productivity tools. Experience unmatched security and peace of mind with Tresorit!",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 50% upto $2000 on every successful sale",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "tresorit.html",
      "logo": "assets/partnerstack-logos/tresorit.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "nutshell",
    "name": "Nutshell",
    "slug": "nutshell",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "We create powerful, easy-to-use sales, marketing, and engagement software that tells teams what’s next at each stage of the sales cycle. Our CRM software supports sales teams, marketing teams, and small business owners at over 5,000 companies.",
    "whatItIs": "We create powerful, easy-to-use sales, marketing, and engagement software that tells teams what’s next at each stage of the sales cycle. Our CRM software supports sales teams, marketing teams, and small business owners at over 5,000 companies.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20%-40% recurring commission for one year on all sales",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "nutshell.html",
      "logo": "assets/partnerstack-logos/nutshell.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "shoeboxed",
    "name": "Shoeboxed",
    "slug": "shoeboxed",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Join over one million businesses scanning & organizing receipts, creating expense reports, and more with Shoeboxed.",
    "whatItIs": "Join over one million businesses scanning & organizing receipts, creating expense reports, and more with Shoeboxed.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% for every customer purchase in their first year and more!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "shoeboxed.html",
      "logo": "assets/partnerstack-logos/shoeboxed.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "weave_communications_inc",
    "name": "Weave Communications Inc.",
    "slug": "weave-communications-inc",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Weave is an all-in-one communications platform for texting, phone, scheduling, payments & more—helping over 35K Dental, Vet, Optometry, & Medical practices connect with clients. Weave is ranked #1 in 30+ G2 categories, and leads the space in the US & CA.",
    "whatItIs": "Weave is an all-in-one communications platform for texting, phone, scheduling, payments & more—helping over 35K Dental, Vet, Optometry, & Medical practices connect with clients. Weave is ranked #1 in 30+ G2 categories, and leads the space in the US & CA.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "$250 commission for demo-complete and up to $750 per closed-won deal",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "weave-communications-inc-2.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "the_go_game",
    "name": "The Go Game",
    "slug": "the-go-game",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "We create and offer fun and engaging virtual, hybrid, and in-person team-building events for every budget. Our experiences enhance corporate culture and improve employee retention.",
    "whatItIs": "We create and offer fun and engaging virtual, hybrid, and in-person team-building events for every budget. Our experiences enhance corporate culture and improve employee retention.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% of the first 2 transactions for every referral!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "the-go-game.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "salesmsg",
    "name": "Salesmsg",
    "slug": "salesmsg",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Salesmsg is the AI-native revenue communication platform built natively for HubSpot and Salesforce. We unify texting, calling, and AI agents into a single platform that helps businesses respond faster, convert more leads, and never drop a follow-up. Partners refer us into their clients' tech stacks and earn recurring revenue on a tool their clients won't churn off.",
    "whatItIs": "Salesmsg is the AI-native revenue communication platform built natively for HubSpot and Salesforce. We unify texting, calling, and AI agents into a single platform that helps businesses respond faster, convert more leads, and never drop a follow-up. Partners refer us into their clients' tech stacks and earn recurring revenue on a tool their clients won't churn off.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% recurring revenue on every referral. Certified resellers earn 20% with multi-year revenue share. Co-marketing and co-sell opportunities for active HubSpot and Salesforce agency partners.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "salesmsg.html",
      "logo": "assets/partnerstack-logos/salesmsg.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "iconosquare",
    "name": "Iconosquare",
    "slug": "iconosquare",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Iconosquare is a smart solution for effortless Social Media Management trusted by more than 10.000 brands and agencies around the world. Join our Affiliate Program, earn commissions for every new subscription and progress through three performance tiers!",
    "whatItIs": "Iconosquare is a smart solution for effortless Social Media Management trusted by more than 10.000 brands and agencies around the world. Join our Affiliate Program, earn commissions for every new subscription and progress through three performance tiers!",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "💸 Earn up to $250 in commissions or up to 35% recurring commissions for each new customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "iconosquare.html",
      "logo": "assets/partnerstack-logos/iconosquare.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "carepatron",
    "name": "Carepatron",
    "slug": "carepatron",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Where care happens. Build your dream practice with an innovative, all-in-one EHR, designed for modern health and wellness professionals.",
    "whatItIs": "Where care happens. Build your dream practice with an innovative, all-in-one EHR, designed for modern health and wellness professionals.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% of every sale for the customer’s first year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "carepatron.html",
      "logo": "assets/partnerstack-logos/carepatron.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "ruby",
    "name": "Ruby",
    "slug": "ruby",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Ruby helps small businesses save time, build loyalty, and create meaningful connections with callers and website visitors through 24/7/365 virtual receptionist and live chat solutions.",
    "whatItIs": "Ruby helps small businesses save time, build loyalty, and create meaningful connections with callers and website visitors through 24/7/365 virtual receptionist and live chat solutions.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $150 for every paid customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "ruby.html",
      "logo": "assets/partnerstack-logos/ruby.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "mindstudio",
    "name": "MindStudio",
    "slug": "mindstudio",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Rapidly build AI agents with MindStudio's flexible and secure no-code platform.",
    "whatItIs": "Rapidly build AI agents with MindStudio's flexible and secure no-code platform.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% revenue share for the first 12 months of every workspace subscription",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "mindstudio-2.html",
      "logo": "assets/partnerstack-logos/mindstudio-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "miro_affiliate",
    "name": "Miro - Affiliate",
    "slug": "miro-affiliate",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Introducing the Innovation Workspace of Miro. A single, AI-powered collaboration platform that helps teams move faster from idea to outcome. More than 90M users and 250,000 companies collaborate in the Innovation Workspace.",
    "whatItIs": "Introducing the Innovation Workspace of Miro. A single, AI-powered collaboration platform that helps teams move faster from idea to outcome. More than 90M users and 250,000 companies collaborate in the Innovation Workspace.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $60 commission for every new business that signs up to Miro!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "miro-affiliate.html",
      "logo": "assets/partnerstack-logos/miro-affiliate.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "8fig",
    "name": "8fig",
    "slug": "8fig",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "8fig is revolutionizing the way eCommerce founders scale their stores with a growth funding platform that aligns continuous and flexible capital and management tools to every stage of the supply chain.",
    "whatItIs": "8fig is revolutionizing the way eCommerce founders scale their stores with a growth funding platform that aligns continuous and flexible capital and management tools to every stage of the supply chain.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "10% revenue share",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "8fig.html",
      "logo": "assets/partnerstack-logos/8fig.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "pagecloud",
    "name": "Pagecloud",
    "slug": "pagecloud",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "The go-to website builder for small business! Pagecloud’s visual website and popup builder is packed with features entrepreneurs love: e-commerce, analytics, custom forms, & exceptional support. Earn 20% recurring commissions for every customer, for life!",
    "whatItIs": "The go-to website builder for small business! Pagecloud’s visual website and popup builder is packed with features entrepreneurs love: e-commerce, analytics, custom forms, & exceptional support. Earn 20% recurring commissions for every customer, for life!",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% lifetime commissions and give your community an exclusive 20% discount!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "pagecloud.html",
      "logo": "assets/partnerstack-logos/pagecloud.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "rocketreach_llc",
    "name": "RocketReach LLC",
    "slug": "rocketreach-llc",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "RocketReach is the leading sales intelligence platform with more than 700 million professionals and 35 million companies.",
    "whatItIs": "RocketReach is the leading sales intelligence platform with more than 700 million professionals and 35 million companies.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% on Annual Subscriptions - Potential ARR $2,400",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "rocketreach-llc.html",
      "logo": "assets/partnerstack-logos/rocketreach-llc.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "volza",
    "name": "Volza",
    "slug": "volza",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Volza is a global trade-intelligence platform providing verified international trade information and actionable market insights. With over 30 years of expertise in trade analytics, we support thousands of businesses and leading consultancies around the world.",
    "whatItIs": "Volza is a global trade-intelligence platform providing verified international trade information and actionable market insights. With over 30 years of expertise in trade analytics, we support thousands of businesses and leading consultancies around the world.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 21% commission on every closed deal. Earn up to $2100 per sale.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "volza.html",
      "logo": "assets/partnerstack-logos/volza.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "flatpay",
    "name": "Flatpay",
    "slug": "flatpay",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Flatpay makes it easy for businesses to accept payments with transparent pricing, no hidden fees, and fast daily payouts. Thousands of merchants across Europe already trust us to simplify their payment experience. Current active markets: DE, DK, IT, FR, FI, NL, UK",
    "whatItIs": "Flatpay makes it easy for businesses to accept payments with transparent pricing, no hidden fees, and fast daily payouts. Thousands of merchants across Europe already trust us to simplify their payment experience. Current active markets: DE, DK, IT, FR, FI, NL, UK",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 200 EUR for a qualified lead!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "flatpay.html",
      "logo": "assets/partnerstack-logos/flatpay.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "hubstaff",
    "name": "Hubstaff",
    "slug": "hubstaff",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Hubstaff provides robust time tracking software, project management tools, and workforce analytics designed to increase productivity and operational efficiency for businesses of all sizes around the world.",
    "whatItIs": "Hubstaff provides robust time tracking software, project management tools, and workforce analytics designed to increase productivity and operational efficiency for businesses of all sizes around the world.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 30% of the customers first year fees!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "hubstaff.html",
      "logo": "assets/partnerstack-logos/hubstaff.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "closely",
    "name": "Closely",
    "slug": "closely",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "Closely is an all-in-one sales engagement platform designed to supercharge your sales strategy via email and LinkedIn. Whether it’s a multichannel campaign or solo outreach, Closely empowers your team to engage prospects easily and effectively.",
    "whatItIs": "Closely is an all-in-one sales engagement platform designed to supercharge your sales strategy via email and LinkedIn. Whether it’s a multichannel campaign or solo outreach, Closely empowers your team to engage prospects easily and effectively.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 30% recurring commission for the first 12 months of each paying customer you refer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "closely.html",
      "logo": "assets/partnerstack-logos/closely.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "sovos_brands_tincheck_1099pro_efilemyforms_and_reportmyup",
    "name": "Sovos Brands: TINCheck, 1099PRO, eFileMyForms & ReportMyUP",
    "slug": "sovos-brands-tincheck-1099pro-efilemyforms-and-reportmyup",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Sovos is the leading provider of global compliance and regulatory solutions. With our tax identity management and 1099 reporting solutions we help businesses solve timely compliance matters, easily. Please note, we have multiple products also available to our established affiliates - visit our website above to learn more.",
    "whatItIs": "Sovos is the leading provider of global compliance and regulatory solutions. With our tax identity management and 1099 reporting solutions we help businesses solve timely compliance matters, easily. Please note, we have multiple products also available to our established affiliates - visit our website above to learn more.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% on the first year of customer purchases!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "sovos-brands-tincheck-1099pro-efilemyforms-and-reportmyup.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "feedvisor",
    "name": "Feedvisor",
    "slug": "feedvisor",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "The Fastest, Smartest Inventory-Aware Pricing Optimization Ever Introducing an award-winning solution for private label brands and sellers.",
    "whatItIs": "The Fastest, Smartest Inventory-Aware Pricing Optimization Ever Introducing an award-winning solution for private label brands and sellers.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% commission for every qualified customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "feedvisor.html",
      "logo": "assets/partnerstack-logos/feedvisor.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "servicem8",
    "name": "ServiceM8",
    "slug": "servicem8",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "The app for trade contractors & home services, with everything in one place — job cards, scheduling, time tracking, CRM, job history, invoicing & payments. ServiceM8 helps small businesses cut paperwork, get jobs done & provide amazing customer service.",
    "whatItIs": "The app for trade contractors & home services, with everything in one place — job cards, scheduling, time tracking, CRM, job history, invoicing & payments. ServiceM8 helps small businesses cut paperwork, get jobs done & provide amazing customer service.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Get 80% on the first 12 months for every referred subscriber.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "servicem8.html",
      "logo": "assets/partnerstack-logos/servicem8.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "ngram",
    "name": "ngram",
    "slug": "ngram",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "ngram is an AI Video Engine. Help Marketing and product teams create professional videos without hiring a video team. Earn up to 30% recurring commission for every customer you refer.",
    "whatItIs": "ngram is an AI Video Engine. Help Marketing and product teams create professional videos without hiring a video team. Earn up to 30% recurring commission for every customer you refer.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 30% Revenue Share depending on the plan purchase",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "ngram-2.html",
      "logo": "assets/partnerstack-logos/ngram-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "blinq",
    "name": "Blinq",
    "slug": "blinq",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Blinq is a digital business card and lead capture platform that transforms professional networking and maximises the value of in-person connections. Over 4 million professionals at 93% of the Fortune 500 use Blinq to share who they are, capture contacts at events, add context with AI notes and enriched contact data, turning conversations into pipeline.",
    "whatItIs": "Blinq is a digital business card and lead capture platform that transforms professional networking and maximises the value of in-person connections. Over 4 million professionals at 93% of the Fortune 500 use Blinq to share who they are, capture contacts at events, add context with AI notes and enriched contact data, turning conversations into pipeline.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% of revenue for each subscriber for the first year (Average $200 per customer)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "blinq.html",
      "logo": "assets/partnerstack-logos/blinq.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "toggl",
    "name": "Toggl",
    "slug": "toggl",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Toggl Track makes time tracking effortless with one-click timers, powerful reports, and 100+ integrations. Trusted by over 80,000 businesses worldwide.",
    "whatItIs": "Toggl Track makes time tracking effortless with one-click timers, powerful reports, and 100+ integrations. Trusted by over 80,000 businesses worldwide.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Get 30% commission on the first payment from every new customer you refer to Toggl Track.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "toggl.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "coast",
    "name": "Coast",
    "slug": "coast",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Coast is a smart fuel card and expense management built on the Visa network. Drivers can fill up anywhere their Visa is accepted and pay for parking, tolls, maintenance, and more. All with granular driver and vehicle controls and reporting.",
    "whatItIs": "Coast is a smart fuel card and expense management built on the Visa network. Drivers can fill up anywhere their Visa is accepted and pay for parking, tolls, maintenance, and more. All with granular driver and vehicle controls and reporting.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Get $300 Per Approved Application",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "coast.html",
      "logo": "assets/partnerstack-logos/coast.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "callhippo",
    "name": "CallHippo",
    "slug": "callhippo",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "CallHippo is a business communication automation platform that unifies virtual calls, WhatsApp, email, chat, and social media in one dashboard. Features AI Voice Agents for automated lead qualification, AI Copilot for automation, Parallel Dialers for 3x more connections, real-time sentiment analysis, and smart routing. Transform your communication strategy with automated processes and seamless omnichannel experiences.",
    "whatItIs": "CallHippo is a business communication automation platform that unifies virtual calls, WhatsApp, email, chat, and social media in one dashboard. Features AI Voice Agents for automated lead qualification, AI Copilot for automation, Parallel Dialers for 3x more connections, real-time sentiment analysis, and smart routing. Transform your communication strategy with automated processes and seamless omnichannel experiences.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% lifetime commission for every paid customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "callhippo.html",
      "logo": "assets/partnerstack-logos/callhippo.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "hive",
    "name": "Hive",
    "slug": "hive",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Hive is the productivity platform for high-performing teams.",
    "whatItIs": "Hive is the productivity platform for high-performing teams.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% of Initial Sale",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "hive.html",
      "logo": "assets/partnerstack-logos/hive.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "envoy",
    "name": "Envoy",
    "slug": "envoy",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "We protect the places the world relies on most. We're uniting people, spaces, and communications on one workplace management platform, built for modern security and compliance.",
    "whatItIs": "We protect the places the world relies on most. We're uniting people, spaces, and communications on one workplace management platform, built for modern security and compliance.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% of the first year ARR on every customer transaction",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "envoy.html",
      "logo": "assets/partnerstack-logos/envoy.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "aisdr_inc",
    "name": "AiSDR, Inc.",
    "slug": "aisdr-inc",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "AiSDR is the first AI sales agent that can take care of the entire outreach end-to-end and have a meaningful conversation with prospects through emails, LinkedIn, and text messages that sound like you wrote them. Pick between a reseller and referral options and earn commission from each subscription you bring. Either manage the entire sales process for 30% lifetime, or introduce new prospects to us for 20% commission for 1 year.",
    "whatItIs": "AiSDR is the first AI sales agent that can take care of the entire outreach end-to-end and have a meaningful conversation with prospects through emails, LinkedIn, and text messages that sound like you wrote them. Pick between a reseller and referral options and earn commission from each subscription you bring. Either manage the entire sales process for 30% lifetime, or introduce new prospects to us for 20% commission for 1 year.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% commissions for the first year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "aisdr-inc-2.html",
      "logo": "assets/partnerstack-logos/aisdr-inc-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "zendesk",
    "name": "Zendesk",
    "slug": "zendesk",
    "category": "Customer Service",
    "subcategory": "Customer Service",
    "description": "Zendesk is an omnichannel service platform that centralizes all your customer support tools in one place. Your conversations, customer data, tools, and integrations are built into a all from a single, customizable platform.",
    "whatItIs": "Zendesk is an omnichannel service platform that centralizes all your customer support tools in one place. Your conversations, customer data, tools, and integrations are built into a all from a single, customizable platform.",
    "problemSolved": "",
    "bestFor": [
      "Customer service",
      "Support"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Customer Service"
    ],
    "tags": [
      "customer service"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% of commission for the first year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "zendesk.html",
      "logo": "assets/partnerstack-logos/zendesk.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "zep",
    "name": "ZEP",
    "slug": "zep",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "B2B SaaS provider of cloud solutions for project management, project time tracking and working time tracking. With +3000 clients and +50.000 users on the platform, ZEP is an established player with a renownened client base.",
    "whatItIs": "B2B SaaS provider of cloud solutions for project management, project time tracking and working time tracking. With +3000 clients and +50.000 users on the platform, ZEP is an established player with a renownened client base.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to +20% recurring commissions or 35% of the first 12 months (ACV $500)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "zep.html",
      "logo": "assets/partnerstack-logos/zep.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "checkr",
    "name": "Checkr",
    "slug": "checkr",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Checkr is the AI verification platform for high-stakes decisions. Checkr AI decodes messy, fragmented, hard-to-verify information about people, and delivers clear answers about a person's identity, background, and credentials. Trusted by more than 140,000 customers globally across employment, mortgage, and tenant verifications, Checkr helps businesses and individuals make more confident decisions. Learn more at: checkr.com",
    "whatItIs": "Checkr is the AI verification platform for high-stakes decisions. Checkr AI decodes messy, fragmented, hard-to-verify information about people, and delivers clear answers about a person's identity, background, and credentials. Trusted by more than 140,000 customers globally across employment, mortgage, and tenant verifications, Checkr helps businesses and individuals make more confident decisions. Learn more at: checkr.com",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $150 for every paid signup for businesses",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "checkr-2.html",
      "logo": "assets/partnerstack-logos/checkr-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "alidrop",
    "name": "Alidrop",
    "slug": "alidrop",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Launch your successful AliExpress dropshipping store with AliDrop. Access millions of products, fast shipping, and seamless integration for your e-commerce store.",
    "whatItIs": "Launch your successful AliExpress dropshipping store with AliDrop. Access millions of products, fast shipping, and seamless integration for your e-commerce store.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Up to 50% for each paid costumer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "alidrop-2.html",
      "logo": "assets/partnerstack-logos/alidrop-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "really_good_emails_rge_studio",
    "name": "Really Good Emails (RGE Studio)",
    "slug": "really-good-emails-rge-studio",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "With over a decade of building email software for the biggest marketing platforms on the planet, RGE Studio (formerly known as Beefree App) enables email makers to quickly and easily create beautiful, high-performing email and landing pages for brands and impact. RGE Studio works with any ESP, is built to work in any inbox, and doesn't require coding skills. Plus, use your inspiration from ReallyGoodEmails.com to gather ideas for your next campaigns.",
    "whatItIs": "With over a decade of building email software for the biggest marketing platforms on the planet, RGE Studio (formerly known as Beefree App) enables email makers to quickly and easily create beautiful, high-performing email and landing pages for brands and impact. RGE Studio works with any ESP, is built to work in any inbox, and doesn't require coding skills. Plus, use your inspiration from ReallyGoodEmails.com to gather ideas for your next campaigns.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% of First Year Revenue for Each New Paid Subscription",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "really-good-emails-rge-studio.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "prezi",
    "name": "Prezi",
    "slug": "prezi",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Prezi is an AI presentation tool that helps you stand out, bring your ideas to life, and create interactive presentations easier than ever.",
    "whatItIs": "Prezi is an AI presentation tool that helps you stand out, bring your ideas to life, and create interactive presentations easier than ever.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 50% commission for every new subscription you refer (Launch offer valid until July 1, 2026)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "prezi-2.html",
      "logo": "assets/partnerstack-logos/prezi-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "influencer_hero",
    "name": "Influencer Hero",
    "slug": "influencer-hero",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "ALL-IN-ONE Influencer Marketing Platform. Helping brands drive ROI through influencers. Leveraging big data, automation, and AI to increase conversions, lower CAC, and collect high-quality UGC for brands worldwide.",
    "whatItIs": "ALL-IN-ONE Influencer Marketing Platform. Helping brands drive ROI through influencers. Leveraging big data, automation, and AI to increase conversions, lower CAC, and collect high-quality UGC for brands worldwide.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 30% recurring commission by referring brands to our all-in-one influencer marketing platform",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "influencer-hero.html",
      "logo": "assets/partnerstack-logos/influencer-hero.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "shopmonkey",
    "name": "Shopmonkey",
    "slug": "shopmonkey",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Shopmonkey is an all-in-one cloud-based shop management system used to organize and operate all aspects of a shop's operations.",
    "whatItIs": "Shopmonkey is an all-in-one cloud-based shop management system used to organize and operate all aspects of a shop's operations.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $300 for every Demo Held Lead",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "shopmonkey.html",
      "logo": "assets/partnerstack-logos/shopmonkey.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "gravity",
    "name": "Gravity",
    "slug": "gravity",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "The most powerful solution for building custom forms and flows to connect with your users and expand your reach. All in WordPress.",
    "whatItIs": "The most powerful solution for building custom forms and flows to connect with your users and expand your reach. All in WordPress.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% commission on all paid subscriptions for the first year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "gravity.html",
      "logo": "assets/partnerstack-logos/gravity.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "storylane",
    "name": "Storylane",
    "slug": "storylane",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "Help your clients generate more high-intent leads from their website as well as enable them to improve their sales velocity and close more deals, with Storylane - the easiest to use interactive demo platform.",
    "whatItIs": "Help your clients generate more high-intent leads from their website as well as enable them to improve their sales velocity and close more deals, with Storylane - the easiest to use interactive demo platform.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% commission on every successful referral - $1200 average for Growth customers",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "storylane.html",
      "logo": "assets/partnerstack-logos/storylane.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "airia",
    "name": "Airia",
    "slug": "airia",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Airia is a leading Enterprise AI Orchestration Platform, empowering organizations to securely build and manage AI solutions at scale.",
    "whatItIs": "Airia is a leading Enterprise AI Orchestration Platform, empowering organizations to securely build and manage AI solutions at scale.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% on new software sales for the first year. Additional 20% through the end of March 2026!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "airia-2.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "beautiful_ai",
    "name": "Beautiful.ai",
    "slug": "beautiful-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Beautiful.ai is the AI presentation tool for pros who ship client decks, investor pitches, and sales proposals. $43 per converted referral on annual plans, no free tier (real buyers, real trials). Best fit: AI, productivity, sales, and creator audiences.",
    "whatItIs": "Beautiful.ai is the AI presentation tool for pros who ship client decks, investor pitches, and sales proposals. $43 per converted referral on annual plans, no free tier (real buyers, real trials). Best fit: AI, productivity, sales, and creator audiences.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $43 per referral promoting Beautiful.ai -- 30% commission on Pro plans ($144/year), 15% on Teams plans ($480/user/year). First-year payout on annual, first-month on monthly.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "beautiful-ai-2.html",
      "logo": "assets/partnerstack-logos/beautiful-ai-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "office_timeline",
    "name": "Office Timeline",
    "slug": "office-timeline",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Create project timelines, Gantt charts, and roadmaps in PowerPoint with Office Timeline—a project management add-in built for consultants, PMOs, and teams needing fast, professional visuals for client updates and executive reporting.",
    "whatItIs": "Create project timelines, Gantt charts, and roadmaps in PowerPoint with Office Timeline—a project management add-in built for consultants, PMOs, and teams needing fast, professional visuals for client updates and executive reporting.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 50% commission in Year 1 (~$100 per referral). CPC, CPL, & CPA models available.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "office-timeline.html",
      "logo": "assets/partnerstack-logos/office-timeline.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "contractor_foreman",
    "name": "Contractor Foreman",
    "slug": "contractor-foreman",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Contractor Foreman is the ultimate game-changer for construction pros—a powerhouse SaaS solution that redefines project management. Packed with cutting-edge features yet priced to fit any budget. This is more than software—it’s your blueprint for success.",
    "whatItIs": "Contractor Foreman is the ultimate game-changer for construction pros—a powerhouse SaaS solution that redefines project management. Packed with cutting-edge features yet priced to fit any budget. This is more than software—it’s your blueprint for success.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% on your customer's first purchase or $150 per qualified attended demo!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "contractor-foreman.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "bitdefender",
    "name": "Bitdefender",
    "slug": "bitdefender",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "Bitdefender is a Global Leader in Cybersecurity. Enterprise-grade, multi-layered protection simplified for Small and Medium businesses. High-grade, effortless security against ransomware, phishing, and fileless attacks. This Program caters ONLY to the B2B portfolio of Bitdefender.",
    "whatItIs": "Bitdefender is a Global Leader in Cybersecurity. Enterprise-grade, multi-layered protection simplified for Small and Medium businesses. High-grade, effortless security against ransomware, phishing, and fileless attacks. This Program caters ONLY to the B2B portfolio of Bitdefender.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "50% Commission | $300 AOV",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "bitdefender-2.html",
      "logo": "assets/partnerstack-logos/bitdefender-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "claap",
    "name": "Claap",
    "slug": "claap",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Claap is an AI sales intelligence platform that turns sales conversations into structured, actionable data to improve team performance. In practice, Claap automatically records and analyzes calls (Zoom, Google Meet, phone…), generates structured notes, updates your CRM, and surfaces key insights such as objections, buying signals, and deal risks. Where most tools stop at transcription, Claap goes further by structuring conversation data so it can be directly used: deal scoring (MEDDIC, BANT…),",
    "whatItIs": "Claap is an AI sales intelligence platform that turns sales conversations into structured, actionable data to improve team performance. In practice, Claap automatically records and analyzes calls (Zoom, Google Meet, phone…), generates structured notes, updates your CRM, and surfaces key insights such as objections, buying signals, and deal risks. Where most tools stop at transcription, Claap goes further by structuring conversation data so it can be directly used: deal scoring (MEDDIC, BANT…),",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 30% recurring commission",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "claap-2.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "easydmarc",
    "name": "EasyDMARC",
    "slug": "easydmarc",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "EasyDMARC is a B2B SaaS to solve email security and deliverability problems in just a few clicks. With advanced tools, our system helps customers stay safe and maintain the \"health\" of their domains.",
    "whatItIs": "EasyDMARC is a B2B SaaS to solve email security and deliverability problems in just a few clicks. With advanced tools, our system helps customers stay safe and maintain the \"health\" of their domains.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% commission on all paid subscriptions",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "easydmarc.html",
      "logo": "assets/partnerstack-logos/easydmarc.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "assembly",
    "name": "Assembly",
    "slug": "assembly",
    "category": "Customer Service",
    "subcategory": "Customer Service",
    "description": "Assembly's product suite gives service business an all-in-one solution for client management, communication, payments, file-sharing, contracts, forms, help desks, and more.",
    "whatItIs": "Assembly's product suite gives service business an all-in-one solution for client management, communication, payments, file-sharing, contracts, forms, help desks, and more.",
    "problemSolved": "",
    "bestFor": [
      "Customer service",
      "Support"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Customer Service"
    ],
    "tags": [
      "customer service"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% of your referred customer's subscription revenue for one year, up to $1,200 per customer.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "assembly-2.html",
      "logo": "assets/partnerstack-logos/assembly-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "tradify",
    "name": "Tradify",
    "slug": "tradify",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Tradify is the #1 job management software designed specifically for tradespeople. From quoting and scheduling to invoicing and payments, Tradify saves time and keeps everything in one place.",
    "whatItIs": "Tradify is the #1 job management software designed specifically for tradespeople. From quoting and scheduling to invoicing and payments, Tradify saves time and keeps everything in one place.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% Extra Payout this August. Refer a new customer and earn an increased payout for every referral that converts before 31 August.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "tradify-2.html",
      "logo": "assets/partnerstack-logos/tradify-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "esgi_software",
    "name": "ESGI Software",
    "slug": "esgi-software",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "ESGI is an easy-to-use assessment tool that helps educators save time and track student progress in real time. Our affiliate program empowers partners to share ESGI, earn rewards, and support teachers with powerful tools that make a difference.",
    "whatItIs": "ESGI is an easy-to-use assessment tool that helps educators save time and track student progress in real time. Our affiliate program empowers partners to share ESGI, earn rewards, and support teachers with powerful tools that make a difference.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $2 for a trial!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "esgi-software.html",
      "logo": "assets/partnerstack-logos/esgi-software.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "deputy",
    "name": "Deputy",
    "slug": "deputy",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Deputy.com helps simplify scheduling and reduce labor costs for over 300,000 companies globally. We work with customers like Ace Hardware, Dutch Bros Coffee, and others employers & hourly workers across hospitality, retail, and other industries.",
    "whatItIs": "Deputy.com helps simplify scheduling and reduce labor costs for over 300,000 companies globally. We work with customers like Ace Hardware, Dutch Bros Coffee, and others employers & hourly workers across hospitality, retail, and other industries.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn competitive revenue commission (15-25%) & pass on product discounts to your customers.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "deputy.html",
      "logo": "assets/partnerstack-logos/deputy.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "runway_health",
    "name": "Runway Health",
    "slug": "runway-health",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "The leading telehealth company specialized in travel health.",
    "whatItIs": "The leading telehealth company specialized in travel health.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $15 for each Referral!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "runway-health.html",
      "logo": "assets/partnerstack-logos/runway-health.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "taxfyle",
    "name": "Taxfyle",
    "slug": "taxfyle",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Taxfyle is a technology-driven platform connecting people and businesses with licensed tax professionals and bookkeepers for seamless tax prep, filing, advisory, and accounting services.",
    "whatItIs": "Taxfyle is a technology-driven platform connecting people and businesses with licensed tax professionals and bookkeepers for seamless tax prep, filing, advisory, and accounting services.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "30% commission for every customer purchase in their first year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "taxfyle.html",
      "logo": "assets/partnerstack-logos/taxfyle.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "pangram_labs",
    "name": "Pangram Labs",
    "slug": "pangram-labs",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "We are a research-backed AI detection company that helps educators, content creators, and other organizations create AI transparency for their organizations and their customers.",
    "whatItIs": "We are a research-backed AI detection company that helps educators, content creators, and other organizations create AI transparency for their organizations and their customers.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% recurring monthly commissions up to 12 months!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "pangram-labs-2.html",
      "logo": "assets/partnerstack-logos/pangram-labs-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "signable",
    "name": "Signable",
    "slug": "signable",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Signable offers clients worldwide a secure, reliable and efficient eSignature solution! With a dedicated support team and a simple easy-to-use product - you could earn up to 10% for the first year, on any referrals which subscribe to a paid plan!",
    "whatItIs": "Signable offers clients worldwide a secure, reliable and efficient eSignature solution! With a dedicated support team and a simple easy-to-use product - you could earn up to 10% for the first year, on any referrals which subscribe to a paid plan!",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% on every customer purchase for the first year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "signable.html",
      "logo": "assets/partnerstack-logos/signable.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "jibble",
    "name": "Jibble",
    "slug": "jibble",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Join our affiliate/reseller program and earn comission for up to 50% for every client that subscribes to one of Jibble's paid plans!",
    "whatItIs": "Join our affiliate/reseller program and earn comission for up to 50% for every client that subscribes to one of Jibble's paid plans!",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Affiliates can claim 50.0% commission for up to 1 year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "jibble.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "zeffy",
    "name": "Zeffy",
    "slug": "zeffy",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "Zeffy is the only zero-fee fundraising and donor management platform for nonprofits. Trusted by more than 100,000 organizations, Zeffy covers all transaction and credit card processing fees so nonprofits can access best-in-class technology at no cost and focus on their mission. Funded through voluntary donor contributions, Zeffy offers donation forms, event ticketing, raffles, auctions, memberships, eCommerce, and a fully integrated CRM with newsletters and donor management tools.",
    "whatItIs": "Zeffy is the only zero-fee fundraising and donor management platform for nonprofits. Trusted by more than 100,000 organizations, Zeffy covers all transaction and credit card processing fees so nonprofits can access best-in-class technology at no cost and focus on their mission. Funded through voluntary donor contributions, Zeffy offers donation forms, event ticketing, raffles, auctions, memberships, eCommerce, and a fully integrated CRM with newsletters and donor management tools.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% of all tips for the first 12 months - average of $500 per signup",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "zeffy.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "goflow",
    "name": "Goflow",
    "slug": "goflow",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Goflow is a global leader in Multichannel Operating System (MCOS) that enables ecommerce sellers to manage their channel orders, shipping, inventory, listings, transfers, purchasing, forecasting, and analytics from a single interface.",
    "whatItIs": "Goflow is a global leader in Multichannel Operating System (MCOS) that enables ecommerce sellers to manage their channel orders, shipping, inventory, listings, transfers, purchasing, forecasting, and analytics from a single interface.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% or more revenue share - apply today! (ACV $5,000+/yr)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "goflow.html",
      "logo": "assets/partnerstack-logos/goflow.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "answering_service_care_llc",
    "name": "Answering Service Care, LLC",
    "slug": "answering-service-care-llc",
    "category": "Customer Service",
    "subcategory": "Customer Service",
    "description": "Answering Service Care (ASC) is a 24/7 answering service for 4000+ businesses, serving all industries. ASC provides trained customer service professionals who can greet callers, perform lead intakes, and book appointments. We get it, so you don't have to!",
    "whatItIs": "Answering Service Care (ASC) is a 24/7 answering service for 4000+ businesses, serving all industries. ASC provides trained customer service professionals who can greet callers, perform lead intakes, and book appointments. We get it, so you don't have to!",
    "problemSolved": "",
    "bestFor": [
      "Customer service",
      "Support"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Customer Service"
    ],
    "tags": [
      "customer service"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn % Rewards For the Lifetime of the Customers!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "answering-service-care-llc.html",
      "logo": "assets/partnerstack-logos/answering-service-care-llc.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "databox",
    "name": "Databox",
    "slug": "databox",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Databox is an AI-powered analytics platform used by 20,000+ teams and agencies. It offers the best of BI, without the complicated setup, steep price, or long learning curve. It provides a blend of powerful, but easy-to-use features - from data prep, visualization, automated reporting, goal-setting, to advanced AI analytics - making Databox one of the easiest BI tools to promote. As an affiliate you'll earn 20% comission for 12 months (up to $1,200/customer).",
    "whatItIs": "Databox is an AI-powered analytics platform used by 20,000+ teams and agencies. It offers the best of BI, without the complicated setup, steep price, or long learning curve. It provides a blend of powerful, but easy-to-use features - from data prep, visualization, automated reporting, goal-setting, to advanced AI analytics - making Databox one of the easiest BI tools to promote. As an affiliate you'll earn 20% comission for 12 months (up to $1,200/customer).",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% per new customer for 12 months (up to $1,200/customer)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "databox-2.html",
      "logo": "assets/partnerstack-logos/databox-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "survicate",
    "name": "Survicate",
    "slug": "survicate",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "A customer survey and AI feedback platform that helps businesses collect insights for improving customer experience. Survicate is highly rated for effortless setup, customization, and integrations. This program accepts customer referrals by: 🔥Link-based attribution 🔥Lead forms 🔥Opportunity forms",
    "whatItIs": "A customer survey and AI feedback platform that helps businesses collect insights for improving customer experience. Survicate is highly rated for effortless setup, customization, and integrations. This program accepts customer referrals by: 🔥Link-based attribution 🔥Lead forms 🔥Opportunity forms",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "$1 for each signup || $20 for each qualified signup || 15-40%+ revenue share",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "survicate.html",
      "logo": "assets/partnerstack-logos/survicate.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "accelerated_growth_studio",
    "name": "Accelerated Growth Studio",
    "slug": "accelerated-growth-studio",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "We grow DTC brands. One click at a time. AGS is a performance marketing agency built to scale revenue, not just run ads. We manage paid media, test creative relentlessly, and optimize funnels so clicks turn into customers and customers turn into real growth. If it doesn’t move revenue, we don’t do it. Engineered for rapid scale",
    "whatItIs": "We grow DTC brands. One click at a time. AGS is a performance marketing agency built to scale revenue, not just run ads. We manage paid media, test creative relentlessly, and optimize funnels so clicks turn into customers and customers turn into real growth. If it doesn’t move revenue, we don’t do it. Engineered for rapid scale",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $2000 per paid customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "accelerated-growth-studio.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "spiky_ai",
    "name": "Spiky.ai",
    "slug": "spiky-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "AI-powered conversation intelligence platform to turn every meeting into a measurable impact through actionable insights for sales, CX, CS, HR, and PM teams.",
    "whatItIs": "AI-powered conversation intelligence platform to turn every meeting into a measurable impact through actionable insights for sales, CX, CS, HR, and PM teams.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Up to 20% revenue share",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "spiky-ai-2.html",
      "logo": "assets/partnerstack-logos/spiky-ai-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "prevue_hr",
    "name": "Prevue HR",
    "slug": "prevue-hr",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Modernize your hiring with Prevue Assessments. Our pre-employment assessments are designed to help you make smarter, data-driven hiring decisions.",
    "whatItIs": "Modernize your hiring with Prevue Assessments. Our pre-employment assessments are designed to help you make smarter, data-driven hiring decisions.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% for the 1st year on all new customers",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "prevue-hr.html",
      "logo": "assets/partnerstack-logos/prevue-hr.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "agencyanalytics",
    "name": "AgencyAnalytics",
    "slug": "agencyanalytics",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "AgencyAnalytics is the client reporting and performance analytics platform built specifically for marketing agencies. Trusted by thousands of agencies worldwide, it centralizes data from leading marketing channels into clear, client-ready dashboards and reports. AgencyAnalytics helps agencies save time, deliver strategic insight, prove ROI, and scale client relationships with accuracy, clarity, and confidence.",
    "whatItIs": "AgencyAnalytics is the client reporting and performance analytics platform built specifically for marketing agencies. Trusted by thousands of agencies worldwide, it centralizes data from leading marketing channels into clear, client-ready dashboards and reports. AgencyAnalytics helps agencies save time, deliver strategic insight, prove ROI, and scale client relationships with accuracy, clarity, and confidence.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 25% recurring by referring qualified agency customers!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "agencyanalytics.html",
      "logo": "assets/partnerstack-logos/agencyanalytics.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "expertise_ai",
    "name": "Expertise AI",
    "slug": "expertise-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "AI sales agent that replaces traditional stone age chatbots for HubSpot first businesses",
    "whatItIs": "AI sales agent that replaces traditional stone age chatbots for HubSpot first businesses",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% revenue share for 3 years if the referral converts (≈$18K total on a $30K deal)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "expertise-ai-2.html",
      "logo": "assets/partnerstack-logos/expertise-ai-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "alohi",
    "name": "Alohi",
    "slug": "alohi",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Send a fax from your browser. Sign a document in seconds. Alohi is a Swiss company behind Fax.Plus and Sign.Plus, trusted digital productivity tools used by over 5 million professionals worldwide. We build for people who need things done right, without outdated tools slowing them down. Partner with us and earn up to $180 per referral.",
    "whatItIs": "Send a fax from your browser. Sign a document in seconds. Alohi is a Swiss company behind Fax.Plus and Sign.Plus, trusted digital productivity tools used by over 5 million professionals worldwide. We build for people who need things done right, without outdated tools slowing them down. Partner with us and earn up to $180 per referral.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $180 per paid referral",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "alohi.html",
      "logo": "assets/partnerstack-logos/alohi.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "mrpeasy",
    "name": "MRPeasy",
    "slug": "mrpeasy",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "Earn 20% recurring commission for up to 3 years by referring manufacturers to MRPeasy - the top-rated manufacturing ERP for small and midsized companies (10–200 employees). Rated 4.6/5 on G2 and Capterra and named Best Manufacturing Software by Software Advice. The product converts well: free 30-day trial, self-serve signup, strong retention. Ideal for consultants, ERP advisors, bloggers, accountants, and agencies serving manufacturers.",
    "whatItIs": "Earn 20% recurring commission for up to 3 years by referring manufacturers to MRPeasy - the top-rated manufacturing ERP for small and midsized companies (10–200 employees). Rated 4.6/5 on G2 and Capterra and named Best Manufacturing Software by Software Advice. The product converts well: free 30-day trial, self-serve signup, strong retention. Ideal for consultants, ERP advisors, bloggers, accountants, and agencies serving manufacturers.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% recurring revenue share for up to 3 years!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "mrpeasy.html",
      "logo": "assets/partnerstack-logos/mrpeasy.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "vista_social",
    "name": "Vista Social",
    "slug": "vista-social",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Join Vista Social's affiliate program and earn 25% recurring commissions for 12 months on a product that converts. We're a fast-growing social media management platform with $3k+ LTV (& rising), already competing with industry leaders. Benefits: 90-day cookie window, high conversion rates, extremely flexible terms, and we're open to custom arrangements with quality partners. Our 14-day free trial and competitive pricing and easy onboarding your audience will truly love: 4.8/5 G2; 4.9/5 Capterra.",
    "whatItIs": "Join Vista Social's affiliate program and earn 25% recurring commissions for 12 months on a product that converts. We're a fast-growing social media management platform with $3k+ LTV (& rising), already competing with industry leaders. Benefits: 90-day cookie window, high conversion rates, extremely flexible terms, and we're open to custom arrangements with quality partners. Our 14-day free trial and competitive pricing and easy onboarding your audience will truly love: 4.8/5 G2; 4.9/5 Capterra.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "25-50% recurring commission",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "vista-social-2.html",
      "logo": "assets/partnerstack-logos/vista-social-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "sender",
    "name": "Sender",
    "slug": "sender",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Sender.net is an all-in-one email and SMS marketing platform built for businesses that want powerful automation without complexity or high costs.",
    "whatItIs": "Sender.net is an all-in-one email and SMS marketing platform built for businesses that want powerful automation without complexity or high costs.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 40% lifetime commission for every customer you refer.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "sender.html",
      "logo": "assets/partnerstack-logos/sender.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "campaign_monitor_by_marigold",
    "name": "Campaign Monitor by Marigold",
    "slug": "campaign-monitor-by-marigold",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Campaign Monitor by Marigold empowers small businesses to create email marketing programs that deliver results. Our easy-to-use yet powerful platform helps customers grow their business while cultivating lasting relationships with their audience.",
    "whatItIs": "Campaign Monitor by Marigold empowers small businesses to create email marketing programs that deliver results. Our easy-to-use yet powerful platform helps customers grow their business while cultivating lasting relationships with their audience.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% Lifetime Revenue Share",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "campaign-monitor-by-marigold.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "pitneyship",
    "name": "PitneyShip",
    "slug": "pitneyship",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "PitneyShip® simplifies shipping by offering discounted rates from major carriers, easy rate comparisons, and streamlined label printing, tracking, and billing—all in one platform. Save time, cut costs, and manage shipments effortlessly.",
    "whatItIs": "PitneyShip® simplifies shipping by offering discounted rates from major carriers, easy rate comparisons, and streamlined label printing, tracking, and billing—all in one platform. Save time, cut costs, and manage shipments effortlessly.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% of your referral's monthly rebate revenue for their first year as a customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "pitneyship.html",
      "logo": "assets/partnerstack-logos/pitneyship.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "flexiquiz",
    "name": "FlexiQuiz",
    "slug": "flexiquiz",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "FlexiQuiz is a fully customizable quiz-maker platform with LMS functionality.",
    "whatItIs": "FlexiQuiz is a fully customizable quiz-maker platform with LMS functionality.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% of all new customers for the first two years",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "flexiquiz.html",
      "logo": "assets/partnerstack-logos/flexiquiz.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "momence",
    "name": "Momence",
    "slug": "momence",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "The #1 platform for studios, gyms, spas, and dance schools. Put your backend admin on autopilot and get back to doing what you love most.",
    "whatItIs": "The #1 platform for studios, gyms, spas, and dance schools. Put your backend admin on autopilot and get back to doing what you love most.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $500 for each paid signup.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "momence.html",
      "logo": "assets/partnerstack-logos/momence.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "wisestamp",
    "name": "WiseStamp",
    "slug": "wisestamp",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "WiseStamp is an award-winning, enterprise-grade email signature management platform designed to scale with the needs of market-leading organizations. Trusted by over 1.2 million customers worldwide, WiseStamp enables businesses to centrally create, manage, and deploy professional, on-brand email signatures effortlessly. WiseStamp turns every email into a powerful brand asset, enabling enterprises to maintain brand consistency, enhance engagement, and drive business impact at scale.",
    "whatItIs": "WiseStamp is an award-winning, enterprise-grade email signature management platform designed to scale with the needs of market-leading organizations. Trusted by over 1.2 million customers worldwide, WiseStamp enables businesses to centrally create, manage, and deploy professional, on-brand email signatures effortlessly. WiseStamp turns every email into a powerful brand asset, enabling enterprises to maintain brand consistency, enhance engagement, and drive business impact at scale.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 30% of revenue on every sales - Average $300 per customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "wisestamp.html",
      "logo": "assets/partnerstack-logos/wisestamp.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "signal_house",
    "name": "Signal House",
    "slug": "signal-house",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "Signal House is an SMS and Voice API platform built as the best Twilio alternative, offering lower pricing, white-glove support, 24–48 hour A2P approvals, simpler APIs, and stronger deliverability.",
    "whatItIs": "Signal House is an SMS and Voice API platform built as the best Twilio alternative, offering lower pricing, white-glove support, 24–48 hour A2P approvals, simpler APIs, and stronger deliverability.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10%-25% Revenue Share - Avg ACV $25,000",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "signal-house.html",
      "logo": "assets/partnerstack-logos/signal-house.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "bidx",
    "name": "BidX",
    "slug": "bidx",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "BidX is a seamless, AI-powered paid advertising platform for Amazon and Walmart sellers. It covers Sponsored Products, Display, DSP, and AMC. BidX offers best-in-class account management for clients who prefer fully managed services.",
    "whatItIs": "BidX is a seamless, AI-powered paid advertising platform for Amazon and Walmart sellers. It covers Sponsored Products, Display, DSP, and AMC. BidX offers best-in-class account management for clients who prefer fully managed services.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% for the lifetime of the customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "bidx-2.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "devs_ai",
    "name": "Devs.ai",
    "slug": "devs-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Devs.ai is an AI platform where teams of any size build AI-powered business applications and deploy custom agents - with governance built in from day one. From solo builders and small teams to growing orgs, it is the platform where anyone, regardless of their technical background, can go from AI ambition to AI products: real applications, real agents, running on their own data, inside their own governed environment.",
    "whatItIs": "Devs.ai is an AI platform where teams of any size build AI-powered business applications and deploy custom agents - with governance built in from day one. From solo builders and small teams to growing orgs, it is the platform where anyone, regardless of their technical background, can go from AI ambition to AI products: real applications, real agents, running on their own data, inside their own governed environment.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% Revenue Share for the first year",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "devs-ai-2.html",
      "logo": "assets/partnerstack-logos/devs-ai-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "calilio",
    "name": "Calilio",
    "slug": "calilio",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Calilio is an AI-powered phone system and cloud call center solution built for growing businesses. It helps manage calls, messages, and customer conversations from one simple platform. With innovative AI features, users can respond faster, work better, and understand every interaction clearly. The cloud telephony platform also offers affordable virtual phone numbers from over 100 countries, including local, mobile, and toll-free. This lets anyone build a local presence anywhere in the world.",
    "whatItIs": "Calilio is an AI-powered phone system and cloud call center solution built for growing businesses. It helps manage calls, messages, and customer conversations from one simple platform. With innovative AI features, users can respond faster, work better, and understand every interaction clearly. The cloud telephony platform also offers affordable virtual phone numbers from over 100 countries, including local, mobile, and toll-free. This lets anyone build a local presence anywhere in the world.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% revenue share for the lifetime of customer purchases",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "calilio.html",
      "logo": "assets/partnerstack-logos/calilio.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "every",
    "name": "Every",
    "slug": "every",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Your back office, built to grow with you. From banking and treasury to payroll, accounting, and taxes—Every.io gives you everything you need to launch, operate, and scale with confidence.",
    "whatItIs": "Your back office, built to grow with you. From banking and treasury to payroll, accounting, and taxes—Every.io gives you everything you need to launch, operate, and scale with confidence.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Business Banking: $3,500 Cash Signing Bonus + 3% Cashback",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "every.html",
      "logo": "assets/partnerstack-logos/every.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "superfiliate",
    "name": "Superfiliate",
    "slug": "superfiliate",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Superfiliate is the creator-led growth platform for D2C brands focused on measurable revenue growth. Get unified affiliate and creator management, automated gifting workflows, creator storefronts, built-in discovery tooling in one place, with full visibility into which creators and programs are driving results.",
    "whatItIs": "Superfiliate is the creator-led growth platform for D2C brands focused on measurable revenue growth. Get unified affiliate and creator management, automated gifting workflows, creator storefronts, built-in discovery tooling in one place, with full visibility into which creators and programs are driving results.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% Revenue share for the first year of customer purchases + early adoption bonus of $250",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "superfiliate.html",
      "logo": "assets/partnerstack-logos/superfiliate.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "aweber_communications",
    "name": "AWeber Communications",
    "slug": "aweber-communications",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "AWeber is an easy-to-use email marketing platform designed to help you grow your business by building relationships with your audience through effective email communication. Whether you're just starting out or looking to optimize your email marketing strategy, AWeber offers a wide range of tools to make your email marketing simple and efficient.",
    "whatItIs": "AWeber is an easy-to-use email marketing platform designed to help you grow your business by building relationships with your audience through effective email communication. Whether you're just starting out or looking to optimize your email marketing strategy, AWeber offers a wide range of tools to make your email marketing simple and efficient.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% on Customer Purchases!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "aweber-communications.html",
      "logo": "assets/partnerstack-logos/aweber-communications.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "employment_hero",
    "name": "Employment Hero",
    "slug": "employment-hero",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Employment Hero is the world’s first EmploymentOS, helping 300,000+ businesses manage hiring, HR, payroll, and more in one platform. For 2M+ users, it’s a work passport to find jobs, manage admin, and grow their careers.",
    "whatItIs": "Employment Hero is the world’s first EmploymentOS, helping 300,000+ businesses manage hiring, HR, payroll, and more in one platform. For 2M+ users, it’s a work passport to find jobs, manage admin, and grow their careers.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn AUD$200 or £100 for every qualified demo booking that meets our ideal customer profile.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "employment-hero.html",
      "logo": "assets/partnerstack-logos/employment-hero.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "payoneer_workforce_management",
    "name": "Payoneer Workforce Management",
    "slug": "payoneer-workforce-management",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "As a trusted publicly traded global payment and Workforce Management Platform [NASDAQ: PAYO], we help businesses onboard, pay, and manage global teams across 160+ countries, with support to navigate local compliance including EOR (Employer of Record), Contractor pay and Management, and AOR (Agent of Record).",
    "whatItIs": "As a trusted publicly traded global payment and Workforce Management Platform [NASDAQ: PAYO], we help businesses onboard, pay, and manage global teams across 160+ countries, with support to navigate local compliance including EOR (Employer of Record), Contractor pay and Management, and AOR (Agent of Record).",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Get $1000 for each qualified lead + additional $1500 for every new paying customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "payoneer-workforce-management.html",
      "logo": "assets/partnerstack-logos/payoneer-workforce-management.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "bokun_a_tripadvisor_company",
    "name": "Bokun, a Tripadvisor company",
    "slug": "bokun-a-tripadvisor-company",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "The complete booking and channel management solution for extraordinary experiences.",
    "whatItIs": "The complete booking and channel management solution for extraordinary experiences.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% commission of the monthly subscription fee for up to one year",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "bokun-a-tripadvisor-company.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "wing_assistant",
    "name": "Wing Assistant",
    "slug": "wing-assistant",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Wing Assistant is the largest provider of Virtual Assistants offering talent from across the globe. The Wing Partnership Program offers $1000-$1500 flat commission for every successful referral (i.e. paying customers) to its partners.",
    "whatItIs": "Wing Assistant is the largest provider of Virtual Assistants offering talent from across the globe. The Wing Partnership Program offers $1000-$1500 flat commission for every successful referral (i.e. paying customers) to its partners.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $200 for every paid customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "wing-assistant.html",
      "logo": "assets/partnerstack-logos/wing-assistant.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "idrive",
    "name": "IDrive",
    "slug": "idrive",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "IDrive provides Cloud Backup for PCs, Macs, iPhones, Android and other Mobile Devices all into ONE account for one low fee.",
    "whatItIs": "IDrive provides Cloud Backup for PCs, Macs, iPhones, Android and other Mobile Devices all into ONE account for one low fee.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Refer and earn 25% recurring commission",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "idrive.html",
      "logo": "assets/partnerstack-logos/idrive.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "passpack",
    "name": "Passpack",
    "slug": "passpack",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "Passpack delivers enterprise-grade password and credential security built for SMBs and mid-market teams without the complexity or cost of traditional enterprise tools. Zero-knowledge encryption, multi-tenant architecture, role-based access control, and full audit trails. Scales well. SOC 2 Type II, GDPR, and CCPA compliant. Ideal for MSSPs, MSPs, VARs, and security-focused consultancies. Partners earn 35% of first-year subscription value. Strong trial-to-paid conversion. 4.1 rating on G2.",
    "whatItIs": "Passpack delivers enterprise-grade password and credential security built for SMBs and mid-market teams without the complexity or cost of traditional enterprise tools. Zero-knowledge encryption, multi-tenant architecture, role-based access control, and full audit trails. Scales well. SOC 2 Type II, GDPR, and CCPA compliant. Ideal for MSSPs, MSPs, VARs, and security-focused consultancies. Partners earn 35% of first-year subscription value. Strong trial-to-paid conversion. 4.1 rating on G2.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 35% on first-year signups!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "passpack.html",
      "logo": "assets/partnerstack-logos/passpack.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "vida_global_inc",
    "name": "Vida Global Inc.",
    "slug": "vida-global-inc",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Vida.io’s AI Phone Agents give small, medium, and large businesses true 24/7 support across calls, SMS, email, and web chat — relaying information, handling scheduling, screening and transferring calls, and conversing naturally in 10 languages.",
    "whatItIs": "Vida.io’s AI Phone Agents give small, medium, and large businesses true 24/7 support across calls, SMS, email, and web chat — relaying information, handling scheduling, screening and transferring calls, and conversing naturally in 10 languages.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% of net revenue on new referral for two years!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "vida-global-inc-2.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "alvys_inc",
    "name": "Alvys Inc.",
    "slug": "alvys-inc",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Join the Alvys Partner Program! Earn rewards for referrals, integrate seamlessly with our all-in-one modern TMS, and access exclusive tools and marketplace opportunities. Open to affiliates, consultants, agencies, customers, tech companies, and industry influencers.",
    "whatItIs": "Join the Alvys Partner Program! Earn rewards for referrals, integrate seamlessly with our all-in-one modern TMS, and access exclusive tools and marketplace opportunities. Open to affiliates, consultants, agencies, customers, tech companies, and industry influencers.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $250 for Demo Completed AND an additional $300 For Every Paid Customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "alvys-inc.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "vestwell",
    "name": "Vestwell",
    "slug": "vestwell",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Vestwell is the modern savings platform helping small and mid‑size businesses offer high‑quality, affordable retirement and workplace savings plans. We partner with employers, advisors, payroll providers, and states to make saving for life’s biggest milestones more accessible to everyone.",
    "whatItIs": "Vestwell is the modern savings platform helping small and mid‑size businesses offer high‑quality, affordable retirement and workplace savings plans. We partner with employers, advisors, payroll providers, and states to make saving for life’s biggest milestones more accessible to everyone.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $25 per qualified lead AND 10% revenue share for paid customers!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "vestwell.html",
      "logo": "assets/partnerstack-logos/vestwell.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "increff",
    "name": "Increff",
    "slug": "increff",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "Increff provides cloud-based WMS and merchandising solutions, enabling fashion and D2C brands to optimize inventory, improve efficiency, and boost sales.",
    "whatItIs": "Increff provides cloud-based WMS and merchandising solutions, enabling fashion and D2C brands to optimize inventory, improve efficiency, and boost sales.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 40% commissions for every customer sign up",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "increff.html",
      "logo": "assets/partnerstack-logos/increff.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "zypper",
    "name": "Zypper",
    "slug": "zypper",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Zypper is a personal financial management platform.",
    "whatItIs": "Zypper is a personal financial management platform.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "AI-powered personal financial management platform with 20% recurring commissions",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "zypper.html",
      "logo": "assets/partnerstack-logos/zypper.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "getscreen_me",
    "name": "Getscreen.me",
    "slug": "getscreen-me",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Earn 30% per sale by promoting our solution! Enjoy real-time tracking, monthly payouts, flexible payments, worldwide reach, partner discounts, and a full promo library. We support unlimited geography for your campaigns. Join us now and start earning big!",
    "whatItIs": "Earn 30% per sale by promoting our solution! Enjoy real-time tracking, monthly payouts, flexible payments, worldwide reach, partner discounts, and a full promo library. We support unlimited geography for your campaigns. Join us now and start earning big!",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 30% per sale by promoting our solution! Join Our Partner Network!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "getscreen-me.html",
      "logo": "assets/partnerstack-logos/getscreen-me.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "bookyourdata",
    "name": "Bookyourdata",
    "slug": "bookyourdata",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Bookyourdata pioneers a pay-as-you-go B2B contact data model, trusted by thousands for real-time, high-quality leads. Earn up to 15% lifetime commission on new customer referrals. No commitments, instant downloads. Join our affiliate program!",
    "whatItIs": "Bookyourdata pioneers a pay-as-you-go B2B contact data model, trusted by thousands for real-time, high-quality leads. Earn up to 15% lifetime commission on new customer referrals. No commitments, instant downloads. Join our affiliate program!",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "EARN BIG! // Get up to 15% commission for lifetime",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "bookyourdata.html",
      "logo": "assets/partnerstack-logos/bookyourdata.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "crazy_egg",
    "name": "Crazy Egg",
    "slug": "crazy-egg",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Used by over 449,000 websites, Crazy Egg is a visual analytics and conversion optimization platform that helps businesses understand user behavior on their website through tools like heatmaps, scrollmaps, and session recordings. See where visitors interact with your website to understand user behavior, remove friction, optimize page performance, and more!",
    "whatItIs": "Used by over 449,000 websites, Crazy Egg is a visual analytics and conversion optimization platform that helps businesses understand user behavior on their website through tools like heatmaps, scrollmaps, and session recordings. See where visitors interact with your website to understand user behavior, remove friction, optimize page performance, and more!",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% Revenue Share (or more) for the Life of the Customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "crazy-egg.html",
      "logo": "assets/partnerstack-logos/crazy-egg.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "corecruit_formerly_quil",
    "name": "CoRecruit (formerly Quil)",
    "slug": "corecruit-formerly-quil",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "CoRecruit is the #1 AI assistant for recruitment agencies. Automate your interview notes, ATS updates, and AI-generated candidate submittals. CoRecruit captures the nuance of every conversation, whether it happens over a cell phone call, VoIP, video conference, or in-person. Firms using CoRecruit report faster time-to-fill, searchable, complete, and up-to-date ATS data, and a time savings of 8+ hours per week.",
    "whatItIs": "CoRecruit is the #1 AI assistant for recruitment agencies. Automate your interview notes, ATS updates, and AI-generated candidate submittals. CoRecruit captures the nuance of every conversation, whether it happens over a cell phone call, VoIP, video conference, or in-person. Firms using CoRecruit report faster time-to-fill, searchable, complete, and up-to-date ATS data, and a time savings of 8+ hours per week.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $100 for every successful CoRecruit referral!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "corecruit-formerly-quil.html",
      "logo": "assets/partnerstack-logos/corecruit-formerly-quil.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "planday",
    "name": "Planday",
    "slug": "planday",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Planday helps shift-based businesses plan work more predictably by bringing clarity to scheduling and stability to operations, even when pressure is high. Built frontline first, it gives managers real-time visibility and control, and gives employees the transparency and confidence they need to plan their time without surprises so teams can consistently deliver great service. By connecting people, planning, payroll, and the systems businesses rely on, Planday becomes the backbone teams depend on.",
    "whatItIs": "Planday helps shift-based businesses plan work more predictably by bringing clarity to scheduling and stability to operations, even when pressure is high. Built frontline first, it gives managers real-time visibility and control, and gives employees the transparency and confidence they need to plan their time without surprises so teams can consistently deliver great service. By connecting people, planning, payroll, and the systems businesses rely on, Planday becomes the backbone teams depend on.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 15% recurring commission on every successful referral!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "planday.html",
      "logo": "assets/partnerstack-logos/planday.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "digit",
    "name": "Digit",
    "slug": "digit",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Digit is the modern ERP built for manufacturers and distributors. We unify production, inventory, warehouse, and operations into one AI native platform that deploys in days, not months. Digit integrates natively with QuickBooks, Xero, Shopify, and more, making it the fastest path from spreadsheets and legacy systems to real operational control. Partners earn recurring revenue referring a product their clients actually want to use.",
    "whatItIs": "Digit is the modern ERP built for manufacturers and distributors. We unify production, inventory, warehouse, and operations into one AI native platform that deploys in days, not months. Digit integrates natively with QuickBooks, Xero, Shopify, and more, making it the fastest path from spreadsheets and legacy systems to real operational control. Partners earn recurring revenue referring a product their clients actually want to use.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% lifetime revenue share referring Digit to manufacturers and distributors ready to ditch spreadsheets and legacy ERPs.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "digit.html",
      "logo": "assets/partnerstack-logos/digit.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "logome_ai",
    "name": "Logome.ai",
    "slug": "logome-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Create a logo and brand kit you'll love with Logome's AI logo generator",
    "whatItIs": "Create a logo and brand kit you'll love with Logome's AI logo generator",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 50% commission on every successful sale.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "logome-ai-2.html",
      "logo": "assets/partnerstack-logos/logome-ai-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "proton",
    "name": "Proton",
    "slug": "proton",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Proton offers a privacy-first suite for businesses, including encrypted email, calendar, password manager, file storage with document editing, and VPN. Built in Switzerland with open-source, end-to-end encryption, Proton helps companies protect sensitive data and meet compliance needs. Ideal for teams seeking secure, trustworthy alternatives to Big Tech platforms. Partner with us to bring true digital privacy to your audience.",
    "whatItIs": "Proton offers a privacy-first suite for businesses, including encrypted email, calendar, password manager, file storage with document editing, and VPN. Built in Switzerland with open-source, end-to-end encryption, Proton helps companies protect sensitive data and meet compliance needs. Ideal for teams seeking secure, trustworthy alternatives to Big Tech platforms. Partner with us to bring true digital privacy to your audience.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% for the first year of the customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "proton.html",
      "logo": "assets/partnerstack-logos/proton.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "omniseo",
    "name": "OmniSEO",
    "slug": "omniseo",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "OmniSEO® is an AI Visibility Platform that helps brands understand, measure, and improve how often they’re recommended by AI search engines like ChatGPT, Google AI Overviews, and Perplexity. As more people use AI instead of Google to research and make decisions, OmniSEO shows companies: • Where they appear (or don’t) in AI answers • Which prompts and questions matter most • Exactly what to change to increase AI recommendations It gives teams a repeatable system for winning traffic from AI.",
    "whatItIs": "OmniSEO® is an AI Visibility Platform that helps brands understand, measure, and improve how often they’re recommended by AI search engines like ChatGPT, Google AI Overviews, and Perplexity. As more people use AI instead of Google to research and make decisions, OmniSEO shows companies: • Where they appear (or don’t) in AI answers • Which prompts and questions matter most • Exactly what to change to increase AI recommendations It gives teams a repeatable system for winning traffic from AI.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 50% commission for the first year of every new customer! (plans start at $89/mo)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "omniseo-2.html",
      "logo": "assets/partnerstack-logos/omniseo-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "ten_speed",
    "name": "Ten Speed",
    "slug": "ten-speed",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Ten Speed is the marketing agency that drives sustainable growth for B2B brands via content marketing, SEO, GEO, email, and organic social.",
    "whatItIs": "Ten Speed is the marketing agency that drives sustainable growth for B2B brands via content marketing, SEO, GEO, email, and organic social.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $300 per qualified lead and 8% of all revenue in the first 12 months (typical ACV $100k+).",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "ten-speed.html",
      "logo": "assets/partnerstack-logos/ten-speed.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "soul_link",
    "name": "Soul Link",
    "slug": "soul-link",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Soul Link is Wellness and Mental Health app designed to provides a revolutionary combination of Music, Videos, and frequency waves gives you the power to transform your life – so you can go beyond the ordinary and unlock your extraordinary.",
    "whatItIs": "Soul Link is Wellness and Mental Health app designed to provides a revolutionary combination of Music, Videos, and frequency waves gives you the power to transform your life – so you can go beyond the ordinary and unlock your extraordinary.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% of ongoing customer purchases",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "soul-link.html",
      "logo": "assets/partnerstack-logos/soul-link.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "evolve",
    "name": "Evolve",
    "slug": "evolve",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Evolve is an AI-native enablement and performance platform that automates training creation, adapts to each learner, and delivers measurable business results through smart assessments, real-world simulations, personalised learning paths and analytics. Operating in the US and Europe, Evolve serves 100+ enterprises worldwide and has trained over 2.6 million learners, working with global companies including Carlsberg, Schneider Electric and FreedomPay.",
    "whatItIs": "Evolve is an AI-native enablement and performance platform that automates training creation, adapts to each learner, and delivers measurable business results through smart assessments, real-world simulations, personalised learning paths and analytics. Operating in the US and Europe, Evolve serves 100+ enterprises worldwide and has trained over 2.6 million learners, working with global companies including Carlsberg, Schneider Electric and FreedomPay.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Introduce us to an HR or L&D leaders and earn commissions for qualified referrals and signed contracts",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "evolve-2.html",
      "logo": "assets/partnerstack-logos/evolve-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "westfax",
    "name": "WestFax",
    "slug": "westfax",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "WestFax provides HIPAA-compliant cloud faxing built for enterprise healthcare organizations. We deliver high fax completion rates, enterprise-grade reliability, and responsive human support - helping providers streamline critical document exchange while maintaining strict compliance.",
    "whatItIs": "WestFax provides HIPAA-compliant cloud faxing built for enterprise healthcare organizations. We deliver high fax completion rates, enterprise-grade reliability, and responsive human support - helping providers streamline critical document exchange while maintaining strict compliance.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% recurring commission for the lifetime of the customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "westfax.html",
      "logo": "assets/partnerstack-logos/westfax.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "rebolt",
    "name": "Rebolt",
    "slug": "rebolt",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Rebolt is the all-in-one marketing platform for home service businesses, offering SEO-optimized websites, social media management, and AI-powered content creation.",
    "whatItIs": "Rebolt is the all-in-one marketing platform for home service businesses, offering SEO-optimized websites, social media management, and AI-powered content creation.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% revenue share for the first year",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "rebolt-2.html",
      "logo": "assets/partnerstack-logos/rebolt-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "hibob_affiliate",
    "name": "HiBob Affiliate",
    "slug": "hibob-affiliate",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "HiBob is the modern HRIS built for fast-growing companies. It replaces clunky legacy systems with a clean, scalable platform for people data, performance, time, compensation, and culture. Designed for today’s teams, HiBob helps HR move faster, stay organized, and deliver a standout employee experience. The result: smarter workflows, happier people, and an HR foundation built for growth.",
    "whatItIs": "HiBob is the modern HRIS built for fast-growing companies. It replaces clunky legacy systems with a clean, scalable platform for people data, performance, time, compensation, and culture. Designed for today’s teams, HiBob helps HR move faster, stay organized, and deliver a standout employee experience. The result: smarter workflows, happier people, and an HR foundation built for growth.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $200 for every qualified sign-up!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "hibob-affiliate.html",
      "logo": "assets/partnerstack-logos/hibob-affiliate.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "arbor",
    "name": "Arbor",
    "slug": "arbor",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Arbor is a platform that lowers the price everyday businesses pay for energy. Power bills can be a confusing maze of hidden fees and unclear options, but they don’t have to be. Our platform simplifies everything, providing clarity and control while saving businesses money. We find users lower cost electricity rates - with a two minute sign up process and automatic switching and monitoring. We take care of the details and complexities, so they can focus on what matters to them instead.",
    "whatItIs": "Arbor is a platform that lowers the price everyday businesses pay for energy. Power bills can be a confusing maze of hidden fees and unclear options, but they don’t have to be. Our platform simplifies everything, providing clarity and control while saving businesses money. We find users lower cost electricity rates - with a two minute sign up process and automatic switching and monitoring. We take care of the details and complexities, so they can focus on what matters to them instead.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 100$ for every customer conversion",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "arbor.html",
      "logo": "assets/partnerstack-logos/arbor.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "datahawk",
    "name": "DataHawk",
    "slug": "datahawk",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "DataHawk brings together Amazon and Walmart data into an enterprise-grade platform. Executive-ready dashboards, daily performance alerts, and actionable AI-powered insights help sellers scale their brands across every channel.",
    "whatItIs": "DataHawk brings together Amazon and Walmart data into an enterprise-grade platform. Executive-ready dashboards, daily performance alerts, and actionable AI-powered insights help sellers scale their brands across every channel.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% for the lifetime of the customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "datahawk-2.html",
      "logo": "assets/partnerstack-logos/datahawk-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "shade",
    "name": "Shade",
    "slug": "shade",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Shade is an intelligent cloud storage platform that transforms post-production workflows. It consolidates file streaming, review and approval, automated metadata, AI search all in one platform.",
    "whatItIs": "Shade is an intelligent cloud storage platform that transforms post-production workflows. It consolidates file streaming, review and approval, automated metadata, AI search all in one platform.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% commission on all first year revenue (ACV $25,000/customer)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "shade-2.html",
      "logo": "assets/partnerstack-logos/shade-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "webcatalog",
    "name": "WebCatalog",
    "slug": "webcatalog",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "WebCatalog is an all-in-one toolkit that lets you manage multiple web apps and accounts, organize your workspace by workflow, turn websites into desktop apps, and explore a curated catalog of powerful tools.",
    "whatItIs": "WebCatalog is an all-in-one toolkit that lets you manage multiple web apps and accounts, organize your workspace by workflow, turn websites into desktop apps, and explore a curated catalog of powerful tools.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% for every customer transaction! (average customer contract value $250/yr)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "webcatalog.html",
      "logo": "assets/partnerstack-logos/webcatalog.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "thordata",
    "name": "ThorData",
    "slug": "thordata",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Thordata offers cutting-edge ethical proxy network tailored to meet the unique demands of businesses and individuals. With our 60M+ Residential IP pool and industry-leading features, you gain unmatched access to public data across the globe.",
    "whatItIs": "Thordata offers cutting-edge ethical proxy network tailored to meet the unique demands of businesses and individuals. With our 60M+ Residential IP pool and industry-leading features, you gain unmatched access to public data across the globe.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Each customer can receive up to 30% of the revenue, with no upper limit！",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "thordata-2.html",
      "logo": "assets/partnerstack-logos/thordata-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "zenzap",
    "name": "Zenzap",
    "slug": "zenzap",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Zenzap is the professional work chat app built to replace WhatsApp and SMS in the workplace. With a modern, mobile-first design and full support across desktop and web, Zenzap keeps conversations organized, secure, and purpose-built for work.",
    "whatItIs": "Zenzap is the professional work chat app built to replace WhatsApp and SMS in the workplace. With a modern, mobile-first design and full support across desktop and web, Zenzap keeps conversations organized, secure, and purpose-built for work.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% commission on every paid customer subscription (avg ACV $5,000)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "zenzap.html",
      "logo": "assets/partnerstack-logos/zenzap.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "adp",
    "name": "ADP",
    "slug": "adp",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Over 900,000 small businesses trust ADP® to deliver a better payroll experience. Our small business expertise and easy-to-use tools simplify payroll and HR, so you can stay focused on the work that matters most.",
    "whatItIs": "Over 900,000 small businesses trust ADP® to deliver a better payroll experience. Our small business expertise and easy-to-use tools simplify payroll and HR, so you can stay focused on the work that matters most.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn Up to $1,000+ per converted client plus bonus offers",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "adp.html",
      "logo": "assets/partnerstack-logos/adp.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "snowfire_ai",
    "name": "Snowfire AI",
    "slug": "snowfire-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "AI decision intelligence platform that fuses corporate & external data—news, risks, military-grade precision—for real-time, personalized insights. On web, tablet, mobile, it optimizes performance, mitigates risks, empowers leaders in a data-driven world.",
    "whatItIs": "AI decision intelligence platform that fuses corporate & external data—news, risks, military-grade precision—for real-time, personalized insights. On web, tablet, mobile, it optimizes performance, mitigates risks, empowers leaders in a data-driven world.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% commission on first year net new sales.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "snowfire-ai-2.html",
      "logo": "assets/partnerstack-logos/snowfire-ai-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "flocksy",
    "name": "Flocksy",
    "slug": "flocksy",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Refer clients to Flocksy - the creative subscription built for scaling teams. Flocksy gives businesses and agencies instant access to a fully managed creative team with 140+ services under one flat rate. With fast turnarounds, consistent quality, and transparent workflows, Flocksy is easy to recommend and delivers long-term value your audience will trust.",
    "whatItIs": "Refer clients to Flocksy - the creative subscription built for scaling teams. Flocksy gives businesses and agencies instant access to a fully managed creative team with 140+ services under one flat rate. With fast turnarounds, consistent quality, and transparent workflows, Flocksy is easy to recommend and delivers long-term value your audience will trust.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $2,100 per referral with Flocksy!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "flocksy.html",
      "logo": "assets/partnerstack-logos/flocksy.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "the_point_co",
    "name": "The Point Co.",
    "slug": "the-point-co",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "BUSINESS DEVELOPMENT is what we do. Let's get you signed up and earning money for your referrals.",
    "whatItIs": "BUSINESS DEVELOPMENT is what we do. Let's get you signed up and earning money for your referrals.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 5% of first year contract value paid quarterly",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "the-point-co.html",
      "logo": "assets/partnerstack-logos/the-point-co.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "demodesk",
    "name": "Demodesk",
    "slug": "demodesk",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "AI Agents that listen to sales conversations to automate manual work, coach sellers and generate critical insights.",
    "whatItIs": "AI Agents that listen to sales conversations to automate manual work, coach sellers and generate critical insights.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% of revenue for the first 12 months! (average $1K per referral)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "demodesk-2.html",
      "logo": "assets/partnerstack-logos/demodesk-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "nickel",
    "name": "Nickel",
    "slug": "nickel",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Nickel is the easiest way for US businesses to pay and get paid — built for America's core industries: construction, wholesale, manufacturing, logistics, and more. Nickel Core is completely free, with unlimited ACH transfers, bill pay, and competitive card rates. Paid plans unlock advanced workflows. Trusted by 20,000+ businesses, it's a genuinely easy recommendation for any business audience. No hidden fees, no gotchas — just a product your audience will thank you for.",
    "whatItIs": "Nickel is the easiest way for US businesses to pay and get paid — built for America's core industries: construction, wholesale, manufacturing, logistics, and more. Nickel Core is completely free, with unlimited ACH transfers, bill pay, and competitive card rates. Paid plans unlock advanced workflows. Trusted by 20,000+ businesses, it's a genuinely easy recommendation for any business audience. No hidden fees, no gotchas — just a product your audience will thank you for.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Refer a business, earn $250. Refer an accounting firm, earn $750.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "nickel.html",
      "logo": "assets/partnerstack-logos/nickel.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "cerri_com",
    "name": "Cerri.com",
    "slug": "cerri-com",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Cerri Project is enterprise-grade project and portfolio management software that helps organizations manage resources, budgets, and performance with full visibility. Trusted by global enterprises for over three decades, it streamlines workflows from planning to delivery.",
    "whatItIs": "Cerri Project is enterprise-grade project and portfolio management software that helps organizations manage resources, budgets, and performance with full visibility. Trusted by global enterprises for over three decades, it streamlines workflows from planning to delivery.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% commission on 1st year subscription sales!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "cerri-com.html",
      "logo": "assets/partnerstack-logos/cerri-com.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "angels_partners",
    "name": "Angels Partners",
    "slug": "angels-partners",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Built by serial entrepreneurs and ex-VCs, Angels Partners helps entrepreneurs connect with relevant investors in their industry. Our mission is to help founders boost their fundraising process and schedule more meetings with targeted investors.",
    "whatItIs": "Built by serial entrepreneurs and ex-VCs, Angels Partners helps entrepreneurs connect with relevant investors in their industry. Our mission is to help founders boost their fundraising process and schedule more meetings with targeted investors.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% on every customer transaction",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "angels-partners.html",
      "logo": "assets/partnerstack-logos/angels-partners.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "teikametrics",
    "name": "Teikametrics",
    "slug": "teikametrics",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Teikametrics is an AI-powered marketplace optimization platform that helps brands and sellers grow profitably on Amazon, Walmart, and TikTok Shop. Powered by Artificial Retail Intelligence (ARI), the platform automates advertising, optimizes product listings, forecasts inventory demand, and unifies marketplace data to maximize sales, efficiency, and profitability.",
    "whatItIs": "Teikametrics is an AI-powered marketplace optimization platform that helps brands and sellers grow profitably on Amazon, Walmart, and TikTok Shop. Powered by Artificial Retail Intelligence (ARI), the platform automates advertising, optimizes product listings, forecasts inventory demand, and unifies marketplace data to maximize sales, efficiency, and profitability.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% of First Year Subscription Revenue for each successful referral",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "teikametrics-2.html",
      "logo": "assets/partnerstack-logos/teikametrics-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "crowdstrike",
    "name": "CrowdStrike",
    "slug": "crowdstrike",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Experience the power of CrowdStrike's advanced cybersecurity protection, simplified for small and medium-sized business. CrowdStrike offers AI powered cybersecurity to detect, prevent, and respond to threats across endpoints, identities, and cloud workloads, helping businesses stop breaches and stay protected in real time.",
    "whatItIs": "Experience the power of CrowdStrike's advanced cybersecurity protection, simplified for small and medium-sized business. CrowdStrike offers AI powered cybersecurity to detect, prevent, and respond to threats across endpoints, identities, and cloud workloads, helping businesses stop breaches and stay protected in real time.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $100 for every new customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "crowdstrike.html",
      "logo": "assets/partnerstack-logos/crowdstrike.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "lettrlabs",
    "name": "LettrLabs",
    "slug": "lettrlabs",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "LettrLabs is an automated direct mail platform designed to target, segment, automate and measure results of campaigns. We empower organizations to connect with their clients through personalized, handwritten mailers that leave a lasting impression using automations that make direct mail as easy as digital.",
    "whatItIs": "LettrLabs is an automated direct mail platform designed to target, segment, automate and measure results of campaigns. We empower organizations to connect with their clients through personalized, handwritten mailers that leave a lasting impression using automations that make direct mail as easy as digital.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 3% for 12 months",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "lettrlabs.html",
      "logo": "assets/partnerstack-logos/lettrlabs.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "diginius",
    "name": "Diginius",
    "slug": "diginius",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Diginius is a software provider, Microsoft Advertising's largest Global Channel Partner of 2025, and a trusted expert for SMEs worldwide. Diginius is shaping digital marketing worldwide.",
    "whatItIs": "Diginius is a software provider, Microsoft Advertising's largest Global Channel Partner of 2025, and a trusted expert for SMEs worldwide. Diginius is shaping digital marketing worldwide.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% revenue share for the first 12 months of every sale made",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "diginius.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "riverside",
    "name": "Riverside",
    "slug": "riverside",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Riverside is an all-in-one podcast and video studio for businesses and content creators who demand professional quality without technical complexity. Podcasters, video creators, and businesses across the globe are producing studio-quality content in a fraction of the time it would take with traditional methods.",
    "whatItIs": "Riverside is an all-in-one podcast and video studio for businesses and content creators who demand professional quality without technical complexity. Podcasters, video creators, and businesses across the globe are producing studio-quality content in a fraction of the time it would take with traditional methods.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 25% revenue share",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "riverside.html",
      "logo": "assets/partnerstack-logos/riverside.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "kinetic_innovative_staffing",
    "name": "Kinetic Innovative Staffing",
    "slug": "kinetic-innovative-staffing",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Partner with Kinetic Innovative Staffing and earn $500 for the first referred client hire, $50 for every completed demo call, and $100 in recurring monthly commissions per client. We connect businesses with top Filipino remote talent and handle everything from sourcing and hiring to payroll. Backed by 13 years of trusted success. Help companies scale smarter while earning from every qualified referral.",
    "whatItIs": "Partner with Kinetic Innovative Staffing and earn $500 for the first referred client hire, $50 for every completed demo call, and $100 in recurring monthly commissions per client. We connect businesses with top Filipino remote talent and handle everything from sourcing and hiring to payroll. Backed by 13 years of trusted success. Help companies scale smarter while earning from every qualified referral.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $500 for your first referred client hire, $50 for every completed demo call, and $100 in recurring monthly commissions per client.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "kinetic-innovative-staffing.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "synthflow_ai",
    "name": "Synthflow AI",
    "slug": "synthflow-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Synthflow is a no-code voice AI agent platform that automates customer interactions, helping businesses streamline processes such as appointment scheduling, lead qualification, and customer support through natural, conversational voice technology.",
    "whatItIs": "Synthflow is a no-code voice AI agent platform that automates customer interactions, helping businesses streamline processes such as appointment scheduling, lead qualification, and customer support through natural, conversational voice technology.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% for every paid referral for 12 months",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "synthflow-ai-2.html",
      "logo": "assets/partnerstack-logos/synthflow-ai-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "notify_me",
    "name": "Notify Me!",
    "slug": "notify-me",
    "category": "Sales",
    "subcategory": "Sales & CRM",
    "description": "Notify Me is an all-in-one notification and conversion platform for Shopify merchants. We help stores capture and convert sales they would otherwise lose - whether it's through Back in Stock alerts, Pre-orders, Wishlists, or Low Stock reminders. Unlike single-feature apps, we bundle these critical tools into one solution, fully integrated with email, SMS, and WhatsApp. Launch offer: earn 50% for 6 months on every merchant you refer before August 31st, then 25% ongoing.",
    "whatItIs": "Notify Me is an all-in-one notification and conversion platform for Shopify merchants. We help stores capture and convert sales they would otherwise lose - whether it's through Back in Stock alerts, Pre-orders, Wishlists, or Low Stock reminders. Unlike single-feature apps, we bundle these critical tools into one solution, fully integrated with email, SMS, and WhatsApp. Launch offer: earn 50% for 6 months on every merchant you refer before August 31st, then 25% ongoing.",
    "problemSolved": "",
    "bestFor": [
      "Sales",
      "Lead generation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Sales"
    ],
    "tags": [
      "sales"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 50% commission for 6 months on every merchant you refer before June 30, then 25% ongoing",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "notify-me.html",
      "logo": "assets/partnerstack-logos/notify-me.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "nexgen_technologies_llc",
    "name": "NexGen Technologies LLC",
    "slug": "nexgen-technologies-llc",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "NexGen Virtual Workplace transforms all work environments from remote, hybrid to in-office. Now workforces can enjoy working in a creative immersive virtual workplaces that strengthens connection, collaboration, while building culture—empowering teams to achieve success better than if they were even together in person. Join the innovation with NexGen Virtual Workplace today!",
    "whatItIs": "NexGen Virtual Workplace transforms all work environments from remote, hybrid to in-office. Now workforces can enjoy working in a creative immersive virtual workplaces that strengthens connection, collaboration, while building culture—empowering teams to achieve success better than if they were even together in person. Join the innovation with NexGen Virtual Workplace today!",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn commission (1-15%) in our affiliate, referral and agent programs",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "nexgen-technologies-llc.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "dry_ground_ai",
    "name": "Dry Ground AI",
    "slug": "dry-ground-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "AI solutions engineering and research lab with two affiliate products. CompanyClaw: an AI operator built on OpenClaw that runs your business operations. Prebuilt automations for email, calendar, reporting, and workflows on private, secure inference & infrastructure. Plans from $497/mo. Nexa: built for AI consultancies that need to scope, propose, and deliver faster without sacrificing quality. End-to-end engagement management powered by AI. Plans average $175/mo.",
    "whatItIs": "AI solutions engineering and research lab with two affiliate products. CompanyClaw: an AI operator built on OpenClaw that runs your business operations. Prebuilt automations for email, calendar, reporting, and workflows on private, secure inference & infrastructure. Plans from $497/mo. Nexa: built for AI consultancies that need to scope, propose, and deliver faster without sacrificing quality. End-to-end engagement management powered by AI. Plans average $175/mo.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 20% revenue share for the first year (ACV $175-$497)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "dry-ground-ai-2.html",
      "logo": "assets/partnerstack-logos/dry-ground-ai-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "pdware",
    "name": "PDWare",
    "slug": "pdware",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "PDWare provides Project Portfolio Management (PPM) software for businesses with a focus on Resource Management. We help companies figure out if they have the right number of people and skills to achieve their portfolio of projects, and if not, provide what-if tools and views to optimize the resources they have",
    "whatItIs": "PDWare provides Project Portfolio Management (PPM) software for businesses with a focus on Resource Management. We help companies figure out if they have the right number of people and skills to achieve their portfolio of projects, and if not, provide what-if tools and views to optimize the resources they have",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% commission for every paid customer (average commission of $7,500)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "pdware.html",
      "logo": "assets/partnerstack-logos/pdware.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "backlog_by_nulab_inc",
    "name": "Backlog by Nulab Inc",
    "slug": "backlog-by-nulab-inc",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Backlog is the all-in-one project management platform built for teams that move fast. It helps small and mid-sized teams manage projects, track bugs, and collaborate across roles without the complexity of enterprise tools.",
    "whatItIs": "Backlog is the all-in-one project management platform built for teams that move fast. It helps small and mid-sized teams manage projects, track bugs, and collaborate across roles without the complexity of enterprise tools.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $150 per paid referral — plus exclusive partner offers",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "backlog-by-nulab-inc-2.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "hopp_for_business",
    "name": "Hopp for Business",
    "slug": "hopp-for-business",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Hopp for Business is a platform for corporate ground transport connecting companies to over 4 million driver partners. We support over 60,000 businesses in more than 50 countries. Our platform is built for transparency and control. Businesses benefit from automated invoicing, customizable travel policies, and easy-to-use tools that simplify expense management.",
    "whatItIs": "Hopp for Business is a platform for corporate ground transport connecting companies to over 4 million driver partners. We support over 60,000 businesses in more than 50 countries. Our platform is built for transparency and control. Businesses benefit from automated invoicing, customizable travel policies, and easy-to-use tools that simplify expense management.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $200CAD for every new company that takes a ride with Bolt for Business and customers can earn 25% off 20 rides!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "hopp-for-business.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "ninja_promo",
    "name": "Ninja Promo",
    "slug": "ninja-promo",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Ninja Promo is a full-service digital marketing company built around subscription-based dedicated marketing teams. Instead of traditional agencies that bill per project or freelancers with limited bandwidth, you get a stable cross-functional team on a flexible monthly subscription. CMO-on-demand, strategists, project managers, designers, content creators, media buyers, and analysts work as one unit, giving you predictable costs, faster execution, and the impact of an in-house team.",
    "whatItIs": "Ninja Promo is a full-service digital marketing company built around subscription-based dedicated marketing teams. Instead of traditional agencies that bill per project or freelancers with limited bandwidth, you get a stable cross-functional team on a flexible monthly subscription. CMO-on-demand, strategists, project managers, designers, content creators, media buyers, and analysts work as one unit, giving you predictable costs, faster execution, and the impact of an in-house team.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn a 10% lifetime recurring commission, or receive a one-time payment of $3,500 for each successful referral",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "ninja-promo.html",
      "logo": "assets/partnerstack-logos/ninja-promo.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "adwisely",
    "name": "Adwisely",
    "slug": "adwisely",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Adwisely is an AI-powered Shopify application designed to help merchants run profitable Meta and Google ads without complexity. Stores can onboard in minutes, get proactive support from ad experts, and are backed by a 6× ROAS guarantee. With plans starting at $49, Adwisely is an easy, high-converting solution for affiliates to recommend.",
    "whatItIs": "Adwisely is an AI-powered Shopify application designed to help merchants run profitable Meta and Google ads without complexity. Stores can onboard in minutes, get proactive support from ad experts, and are backed by a 6× ROAS guarantee. With plans starting at $49, Adwisely is an easy, high-converting solution for affiliates to recommend.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "40% from subscription, first 12 months (~$1,195/customer)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "adwisely-2.html",
      "logo": "assets/partnerstack-logos/adwisely-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "ultahost",
    "name": "Ultahost",
    "slug": "ultahost",
    "category": "Website",
    "subcategory": "Websites & Commerce",
    "description": "Ultahost offers domain registration, reliable web hosting, and intuitive website building tools, empowering individuals and businesses to easily create, manage, and grow their online presence.",
    "whatItIs": "Ultahost offers domain registration, reliable web hosting, and intuitive website building tools, empowering individuals and businesses to easily create, manage, and grow their online presence.",
    "problemSolved": "",
    "bestFor": [
      "Websites",
      "E-commerce"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Website"
    ],
    "tags": [
      "website"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "ultahost.html",
      "logo": "assets/partnerstack-logos/ultahost.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "join_ultahost_partners",
    "name": "Join Ultahost Partners",
    "slug": "join-ultahost-partners",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Distance Distance is the AI Sales Platform built for service businesses. Capture more leads and book more jobs across channels 24/7.",
    "whatItIs": "Distance Distance is the AI Sales Platform built for service businesses. Capture more leads and book more jobs across channels 24/7.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% commission for an entire year on every referral (ACV $525 USD/month)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "join-ultahost-partners.html",
      "logo": "assets/partnerstack-logos/join-ultahost-partners.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "elevateforward_ai",
    "name": "ElevateForward.ai",
    "slug": "elevateforward-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "ElevateForward is a strategy and execution platform built for businesses that struggle to turn plans into results. It identifies what’s slowing performance, uncovers growth opportunities, and translates them into clear, actionable strategies. With built-in execution tracking, teams stay aligned, accountable, and focused—so strategy doesn’t sit in a deck, it drives measurable outcomes.",
    "whatItIs": "ElevateForward is a strategy and execution platform built for businesses that struggle to turn plans into results. It identifies what’s slowing performance, uncovers growth opportunities, and translates them into clear, actionable strategies. With built-in execution tracking, teams stay aligned, accountable, and focused—so strategy doesn’t sit in a deck, it drives measurable outcomes.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn competitive revenue commissions (20% | $300-$900/Customer) for 6 months!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "elevateforward-ai-2.html",
      "logo": "assets/partnerstack-logos/elevateforward-ai-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "velory",
    "name": "Velory",
    "slug": "velory",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Velory automates IT Lifecycle Management, enabling secure, circular IT procurement and management. Companies can efficiently handle IT assets while empowering employees to choose the best equipment, boosting productivity and satisfaction from day one.",
    "whatItIs": "Velory automates IT Lifecycle Management, enabling secure, circular IT procurement and management. Companies can efficiently handle IT assets while empowering employees to choose the best equipment, boosting productivity and satisfaction from day one.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn a 20% commission on every signed customer you refer, paid throughout their first year.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "velory.html",
      "logo": "assets/partnerstack-logos/velory.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "stampezee",
    "name": "StampEzee",
    "slug": "stampezee",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "StampEzee is a digital stamp card loyalty & rewards platform that helps retailers create a fully branded, automated loyalty system. Retailers can create custom digital stamp cards, run automated campaigns, reward repeat customers, and track performance, and much more, all from one easy-to-use dashboard. With features like EzeeCodes for online orders, gamification, multi-branch management, and automated campaigns, StampEzee helps businesses of all sizes build real customer loyalty.",
    "whatItIs": "StampEzee is a digital stamp card loyalty & rewards platform that helps retailers create a fully branded, automated loyalty system. Retailers can create custom digital stamp cards, run automated campaigns, reward repeat customers, and track performance, and much more, all from one easy-to-use dashboard. With features like EzeeCodes for online orders, gamification, multi-branch management, and automated campaigns, StampEzee helps businesses of all sizes build real customer loyalty.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 100% of the first month's subscription or 30% recurring revenue share",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "stampezee.html",
      "logo": "assets/partnerstack-logos/stampezee.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "shiftie",
    "name": "Shiftie",
    "slug": "shiftie",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Staff scheduling made simple. Shiftie is a smart staff scheduling tool that simplifies rota planning, tracks availability, and improves team communication, saving time and ensuring you're always staffed when it counts.",
    "whatItIs": "Staff scheduling made simple. Shiftie is a smart staff scheduling tool that simplifies rota planning, tracks availability, and improves team communication, saving time and ensuring you're always staffed when it counts.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% commission on new customers for the first year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "shiftie.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "quicksigner",
    "name": "QuickSigner",
    "slug": "quicksigner",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "QuickSigner delivers everything you need to sign — without the bloat. ISO 27001-certified, legally binding via Adobe's Approved Trust List, with no per-envelope fees and no surprise costs. Recipients sign in seconds, no account required. Send, sign, and collect in one flow. Free to try, effortless to adopt, ready to scale. The complete e-signature solution: simple, fast, and priced for the rest of us — the smarter alternative to enterprise overkill.",
    "whatItIs": "QuickSigner delivers everything you need to sign — without the bloat. ISO 27001-certified, legally binding via Adobe's Approved Trust List, with no per-envelope fees and no surprise costs. Recipients sign in seconds, no account required. Send, sign, and collect in one flow. Free to try, effortless to adopt, ready to scale. The complete e-signature solution: simple, fast, and priced for the rest of us — the smarter alternative to enterprise overkill.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "30% for every customer transaction",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "quicksigner.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "clevertap",
    "name": "CleverTap",
    "slug": "clevertap",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Create personalized experiences to retain your most valuable customers, forever, with CleverTap’s All-In-One engagement platform.",
    "whatItIs": "Create personalized experiences to retain your most valuable customers, forever, with CleverTap’s All-In-One engagement platform.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "clevertap.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "aisq",
    "name": "AISQ",
    "slug": "aisq",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Help agencies cut software costs and scale monthly retainers without hiring. AISQ Meteor gives them 10 elite tools in one unified stack. Built by agency vets. Powered by AI. Backed by 25K+ paying customers worldwide and 13+ years in the market.",
    "whatItIs": "Help agencies cut software costs and scale monthly retainers without hiring. AISQ Meteor gives them 10 elite tools in one unified stack. Built by agency vets. Powered by AI. Backed by 25K+ paying customers worldwide and 13+ years in the market.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $300 USD for every successful AISQ Meteor referral.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "aisq-2.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "inmotion_hosting",
    "name": "InMotion Hosting",
    "slug": "inmotion-hosting",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "Become an InMotion Hosting Agency Partner and unlock exclusive benefits designed to help you grow your business and better serve your clients.",
    "whatItIs": "Become an InMotion Hosting Agency Partner and unlock exclusive benefits designed to help you grow your business and better serve your clients.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn Up to 12% Recurring Commissions + Exclusive Client Discounts",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "inmotion-hosting.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "atto",
    "name": "Atto",
    "slug": "atto",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Atto is the all-in-one app built to help hourly teams thrive. Trusted by 15,000+ businesses, Atto simplifies time tracking, scheduling, and payroll — saving time and reducing errors. Accessible on any device, it keeps teams connected and running smoothly.",
    "whatItIs": "Atto is the all-in-one app built to help hourly teams thrive. Trusted by 15,000+ businesses, Atto simplifies time tracking, scheduling, and payroll — saving time and reducing errors. Accessible on any device, it keeps teams connected and running smoothly.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 20% revenue share for the first 12 months of every sale made!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "atto.html",
      "logo": "assets/partnerstack-logos/atto.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "workwise_compliance",
    "name": "WorkWise Compliance",
    "slug": "workwise-compliance",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "WorkWise Compliance helps businesses simplify HR & Safety Compliance through dedicated experts and technology-backed solutions. Our channel partners earn competitive referral bonuses, recurring commissions, and gain a trusted resource to better serve their clients. Together, we help businesses reduce risk, stay compliant, and grow with confidence.",
    "whatItIs": "WorkWise Compliance helps businesses simplify HR & Safety Compliance through dedicated experts and technology-backed solutions. Our channel partners earn competitive referral bonuses, recurring commissions, and gain a trusted resource to better serve their clients. Together, we help businesses reduce risk, stay compliant, and grow with confidence.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Refer and earn 25% of initial order and 10% renewal revenue. Resell with 50% profit share!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "workwise-compliance.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "canvas_score_by_roya_com",
    "name": "Canvas® Score by Roya.com",
    "slug": "canvas-score-by-roya-com",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Canvas® Score is a marketing automation platform designed to give businesses an accurate and more comprehensive picture of their reputation by analyzing data points beyond just online reviews. With the platform, businesses can automatically generate more Google compliant reviews, capture more referral leads, and drive measurable growth. *Canvas® Score supports businesses in the United States only*",
    "whatItIs": "Canvas® Score is a marketing automation platform designed to give businesses an accurate and more comprehensive picture of their reputation by analyzing data points beyond just online reviews. With the platform, businesses can automatically generate more Google compliant reviews, capture more referral leads, and drive measurable growth. *Canvas® Score supports businesses in the United States only*",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "canvas-score-by-roya-com-2.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "thetop",
    "name": "TheTop",
    "slug": "thetop",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "TheTop is an AI powered Chief of Staff that transforms the noise of your day into one clear daily brief. It cuts through chaos, surfaces what matters most, and helps anyone start focused, confident, and in control. Partners join TheTop to shape the future of productivity, where AI works first and people move faster.",
    "whatItIs": "TheTop is an AI powered Chief of Staff that transforms the noise of your day into one clear daily brief. It cuts through chaos, surfaces what matters most, and helps anyone start focused, confident, and in control. Partners join TheTop to shape the future of productivity, where AI works first and people move faster.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 50% Revenue Share for the first year of customer purchases!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "thetop-2.html",
      "logo": "assets/partnerstack-logos/thetop-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "confido_health",
    "name": "Confido Health",
    "slug": "confido-health",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Confido Health’s 24/7 Healthcare Voice AI Agents work alongside your team, handling calls and updating your EHR/PMS in real time so staff can focus on care. Our agents streamline pre-visit coordination (queries, scheduling, insurance, logistics), drive care management (post-procedure outreach, surveys, payments), and power post-visit transitions (recalls, monitoring, follow-ups). We also build custom workflows across Voice AI, SMS, email, and chatbots—everything included.",
    "whatItIs": "Confido Health’s 24/7 Healthcare Voice AI Agents work alongside your team, handling calls and updating your EHR/PMS in real time so staff can focus on care. Our agents streamline pre-visit coordination (queries, scheduling, insurance, logistics), drive care management (post-procedure outreach, surveys, payments), and power post-visit transitions (recalls, monitoring, follow-ups). We also build custom workflows across Voice AI, SMS, email, and chatbots—everything included.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% commission on every customer transaction for the first year.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "confido-health-2.html",
      "logo": "assets/partnerstack-logos/confido-health-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "testgorilla",
    "name": "TestGorilla",
    "slug": "testgorilla",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "SOURCE, SCREEN, SHORTLIST. ALL IN ONE PLACE. Partner with us and tap into the world’s largest skills‑tested talent pool, then assess any candidate with 350+ science‑backed tests, video interviews, AI scoring, and more.",
    "whatItIs": "SOURCE, SCREEN, SHORTLIST. ALL IN ONE PLACE. Partner with us and tap into the world’s largest skills‑tested talent pool, then assess any candidate with 350+ science‑backed tests, video interviews, AI scoring, and more.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 10% commission for the first year of every new customer!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "testgorilla.html",
      "logo": "assets/partnerstack-logos/testgorilla.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "partnercentric",
    "name": "PartnerCentric",
    "slug": "partnercentric",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "PartnerCentric is a leading affiliate and partnership marketing agency that helps brands drive measurable growth through strategic, data-driven partnership programs. Using deep expertise across affiliate management, influencer collaborations, and performance marketing, PartnerCentric combines proprietary technology with hands-on program optimization to maximize ROI, transparency, and long-term brand value for each client.",
    "whatItIs": "PartnerCentric is a leading affiliate and partnership marketing agency that helps brands drive measurable growth through strategic, data-driven partnership programs. Using deep expertise across affiliate management, influencer collaborations, and performance marketing, PartnerCentric combines proprietary technology with hands-on program optimization to maximize ROI, transparency, and long-term brand value for each client.",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to $135 per qualified lead!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "partnercentric.html",
      "logo": "assets/partnerstack-logos/partnercentric.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "compliancely",
    "name": "Compliancely",
    "slug": "compliancely",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "At Compliancely, we simplify regulatory compliance for businesses of any size. Our real-time global identity verification API automates KYC/KYB and Credit Risk Management for instant, comprehensive verification against direct sources.",
    "whatItIs": "At Compliancely, we simplify regulatory compliance for businesses of any size. Our real-time global identity verification API automates KYC/KYB and Credit Risk Management for instant, comprehensive verification against direct sources.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% on all customer transactions in their first year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "compliancely.html",
      "logo": "assets/partnerstack-logos/compliancely.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "seel",
    "name": "Seel",
    "slug": "seel",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Seel is an AI-driven post-purchase experience platform for e-commerce. It integrates into checkouts to offer customers worry-free benefits like free returns, delivery guarantees, and refund protection, increasing conversion, order value, and loyalty for merchants. Seel partners with major marketplaces and insurers to underwrite and manage these services compliantly, helping brands reduce costs and friction after purchase. Seel is a total game-changer for any e-commerce website!",
    "whatItIs": "Seel is an AI-driven post-purchase experience platform for e-commerce. It integrates into checkouts to offer customers worry-free benefits like free returns, delivery guarantees, and refund protection, increasing conversion, order value, and loyalty for merchants. Seel partners with major marketplaces and insurers to underwrite and manage these services compliantly, helping brands reduce costs and friction after purchase. Seel is a total game-changer for any e-commerce website!",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 5% Revenue share on a close won lead. Ranges go from 4-7 figures!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "seel.html",
      "logo": "assets/partnerstack-logos/seel.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "typewise",
    "name": "Typewise",
    "slug": "typewise",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Typewise is an enterprise-grade AI Agent Platform for customer service and sales. It autonomously handles omni-channel customer interactions end-to-end by executing workflows across CRM, ERP, and the entire application stack. Go live in as little as 1 day, backed by rigorous evaluation and testing, enterprise security, admin controls, and analytics.",
    "whatItIs": "Typewise is an enterprise-grade AI Agent Platform for customer service and sales. It autonomously handles omni-channel customer interactions end-to-end by executing workflows across CRM, ERP, and the entire application stack. Go live in as little as 1 day, backed by rigorous evaluation and testing, enterprise security, admin controls, and analytics.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% recurring commission (up to $20k / customer)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "typewise-2.html",
      "logo": "assets/partnerstack-logos/typewise-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "consentz",
    "name": "Consentz",
    "slug": "consentz",
    "category": "Marketing",
    "subcategory": "Marketing",
    "description": "Consentz is the platform that transforms how beauty and wellness clinics operate – patient bookings, medical records, and marketing tools all in one place. Recommend something your audience will thank you for and earn up to $200 CPA per customer!",
    "whatItIs": "Consentz is the platform that transforms how beauty and wellness clinics operate – patient bookings, medical records, and marketing tools all in one place. Recommend something your audience will thank you for and earn up to $200 CPA per customer!",
    "problemSolved": "",
    "bestFor": [
      "Marketing",
      "Audience growth"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Marketing"
    ],
    "tags": [
      "marketing"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $125 for each new customer you refer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "consentz.html",
      "logo": "assets/partnerstack-logos/consentz.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "clutch",
    "name": "Clutch",
    "slug": "clutch",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Clutch powers how businesses discover, evaluate, and hire the right B2B service partners.",
    "whatItIs": "Clutch powers how businesses discover, evaluate, and hire the right B2B service partners.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% Revenue Share on Every Qualified Lead",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "clutch.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "remotepeople",
    "name": "RemotePeople",
    "slug": "remotepeople",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "RemotePeople makes it easy for your clients to hire anyone, anywhere - without setting up foreign entities or navigating complex local laws. As the only EOR that bundles in-house recruitment, payroll, contractor management, and entity incorporation under one roof, we're the go-to partner for companies scaling internationally. With 150+ countries covered, transparent pricing from $199/month, and a 4.9/5 G2 rating, your referrals will thank you.",
    "whatItIs": "RemotePeople makes it easy for your clients to hire anyone, anywhere - without setting up foreign entities or navigating complex local laws. As the only EOR that bundles in-house recruitment, payroll, contractor management, and entity incorporation under one roof, we're the go-to partner for companies scaling internationally. With 150+ countries covered, transparent pricing from $199/month, and a 4.9/5 G2 rating, your referrals will thank you.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $1500 for every new paying customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "remotepeople.html",
      "logo": "assets/partnerstack-logos/remotepeople.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "sentaro",
    "name": "Sentaro",
    "slug": "sentaro",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Sentaro helps partners deliver modern email security to SMEs facing rapidly increasing AI driven phishing and fraud. Traditional spam filters miss the threats that look like normal business communication. Sentaro analyzes context, intent and risk inside the inbox, warns users before mistakes happen and protects the whole organization within minutes. Demand is growing fast as SMEs recognize the gap in existing security.",
    "whatItIs": "Sentaro helps partners deliver modern email security to SMEs facing rapidly increasing AI driven phishing and fraud. Traditional spam filters miss the threats that look like normal business communication. Sentaro analyzes context, intent and risk inside the inbox, warns users before mistakes happen and protects the whole organization within minutes. Demand is growing fast as SMEs recognize the gap in existing security.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 35% revenue share for the life of the customer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "sentaro-2.html",
      "logo": "assets/partnerstack-logos/sentaro-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "niural_ai",
    "name": "Niural AI",
    "slug": "niural-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Niural AI is the first US PEO and Global Payroll platform built with automated intelligence and robust compliance. Our software is your AI-powered partner for managing payroll and benefits, in the US and beyond.",
    "whatItIs": "Niural AI is the first US PEO and Global Payroll platform built with automated intelligence and robust compliance. Our software is your AI-powered partner for managing payroll and benefits, in the US and beyond.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $250 for leads, and significant revshare as a professional partner for referred customers.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "niural-ai.html",
      "logo": "assets/partnerstack-logos/niural-ai.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "voye_global",
    "name": "Voye Global",
    "slug": "voye-global",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Voye Data Pool is a global mobile data solution for companies with travelling employees and connected devices. Instead of roaming charges and local SIMs, businesses use one shared monthly data pool across countries and users. It provides predictable costs, simple deployment, and centralised control. Partners earn recurring revenue by referring organisations that need smarter, scalable mobile data for travel and operations.",
    "whatItIs": "Voye Data Pool is a global mobile data solution for companies with travelling employees and connected devices. Instead of roaming charges and local SIMs, businesses use one shared monthly data pool across countries and users. It provides predictable costs, simple deployment, and centralised control. Partners earn recurring revenue by referring organisations that need smarter, scalable mobile data for travel and operations.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 15% commission per paid customer (up to $200/year)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "voye-global.html",
      "logo": "assets/partnerstack-logos/voye-global.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "vea",
    "name": "VEA",
    "slug": "vea",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "VEA is an AI powered business management platform for solopreneurs and small teams. One dashboard for customers, invoicing, work orders, scheduling, tasks, and AI analytics. $30/user/month. No contracts. Earn up to 30% recurring commission for 12 months per referral.",
    "whatItIs": "VEA is an AI powered business management platform for solopreneurs and small teams. One dashboard for customers, invoicing, work orders, scheduling, tasks, and AI analytics. $30/user/month. No contracts. Earn up to 30% recurring commission for 12 months per referral.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 30% recurring revenue share for the first 12 months of every customer you refer",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "vea.html",
      "logo": "assets/partnerstack-logos/vea.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "testdriver_ai",
    "name": "TestDriver.ai",
    "slug": "testdriver-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "TestDriver reduces manual testing costs by 94% while performing tasks 3× faster than human-powered testing.",
    "whatItIs": "TestDriver reduces manual testing costs by 94% while performing tasks 3× faster than human-powered testing.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "30% for every transaction for the customer's first year",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "testdriver-ai-2.html",
      "logo": "assets/partnerstack-logos/testdriver-ai-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "prescient_security",
    "name": "Prescient Security",
    "slug": "prescient-security",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "Prescient Security is a Global Top 20 Independent Audit and Penetration Testing Company, delivering unparalleled quality in audits, attestations, and certifications, across 25+ frameworks, such as SOC, ISO, HITRUST, ensuring excellence and client success.",
    "whatItIs": "Prescient Security is a Global Top 20 Independent Audit and Penetration Testing Company, delivering unparalleled quality in audits, attestations, and certifications, across 25+ frameworks, such as SOC, ISO, HITRUST, ensuring excellence and client success.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 12.5% for Net New Referral!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "prescient-security.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "parim_workforce_software",
    "name": "Parim Workforce Software",
    "slug": "parim-workforce-software",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "Parim is a modern workforce management platform for shift-based industries, combining scheduling, time & attendance, compliance, communication and payroll-ready data in one system. It’s scalable, easy to deploy, mobile-first and API-ready—giving partners a powerful, high-retention solution to bring to their customers. The system offers extra bolt on features for Events; Security; Healthcare inc Lone Worker Check Calls, Checkpoints, Incident Reporting and Asset Management",
    "whatItIs": "Parim is a modern workforce management platform for shift-based industries, combining scheduling, time & attendance, compliance, communication and payroll-ready data in one system. It’s scalable, easy to deploy, mobile-first and API-ready—giving partners a powerful, high-retention solution to bring to their customers. The system offers extra bolt on features for Events; Security; Healthcare inc Lone Worker Check Calls, Checkpoints, Incident Reporting and Asset Management",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% commission on year 1 revenue (average customer value $550-$750/mo)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "parim-workforce-software.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "pingtree",
    "name": "Pingtree",
    "slug": "pingtree",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Pingtree helps lead generation businesses turn clicks, calls, and form fills into revenue. Capture every lead, send it to the right buyer automatically, and see exactly which campaigns make you money. AI does the heavy lifting on routing and optimization, so you scale volume without scaling headcount. Built for agencies, lead sellers, affiliate networks, and media buyers who want one system instead of five.",
    "whatItIs": "Pingtree helps lead generation businesses turn clicks, calls, and form fills into revenue. Capture every lead, send it to the right buyer automatically, and see exactly which campaigns make you money. AI does the heavy lifting on routing and optimization, so you scale volume without scaling headcount. Built for agencies, lead sellers, affiliate networks, and media buyers who want one system instead of five.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Get paid twice per referral: $15 when they create a free account, $50 when they upgrade to trial.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "pingtree.html",
      "logo": "assets/partnerstack-logos/pingtree.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "expertex",
    "name": "ExpertEx",
    "slug": "expertex",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "ExpertEx turns any product into studio-quality photos, video ads, and UGC in minutes — no photographer, no studio, no editing tools. Built for Shopify, Amazon, and Etsy sellers who need creative that converts, fast. If your audience includes e-commerce founders or marketers, it's an easy sell: they see results instantly, and you earn on every customer you refer.",
    "whatItIs": "ExpertEx turns any product into studio-quality photos, video ads, and UGC in minutes — no photographer, no studio, no editing tools. Built for Shopify, Amazon, and Etsy sellers who need creative that converts, fast. If your audience includes e-commerce founders or marketers, it's an easy sell: they see results instantly, and you earn on every customer you refer.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Unlimited referrals, 25% commission on each new customer's spending during their first 30 days.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "expertex.html",
      "logo": "assets/partnerstack-logos/expertex.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "auware_by_buyist",
    "name": "Auware by Buyist",
    "slug": "auware-by-buyist",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Most ads die at the landing page. Auware fixes that. We identify your top audiences and auto-generate persona-specific page variants to continue the conversation your ad started. Not a page builder - a full campaign platform, complete with inline editor for creative control. You choose the product, audiences, format, and voice. AI builds the rest - automatically, instantly, and at scale.",
    "whatItIs": "Most ads die at the landing page. Auware fixes that. We identify your top audiences and auto-generate persona-specific page variants to continue the conversation your ad started. Not a page builder - a full campaign platform, complete with inline editor for creative control. You choose the product, audiences, format, and voice. AI builds the rest - automatically, instantly, and at scale.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 35% rev share on new subs thru 6/30; 30% thereafter. (Avg ACV ≈ $2.4K/yr)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "auware-by-buyist.html",
      "logo": "assets/partnerstack-logos/auware-by-buyist.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "unleashed_software_by_the_access_group",
    "name": "Unleashed Software by The Access Group",
    "slug": "unleashed-software-by-the-access-group",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Outgrown spreadsheets or basic accounting software? Unleashed is AI-powered inventory management built for wholesalers, distributors and manufacturers who need real visibility as they scale. Manage multiple SKUs, warehouses and sales channels in one connected system — with native Xero, QuickBooks and Shopify integrations. Join our new program today. Earn $500 for every successful referral.",
    "whatItIs": "Outgrown spreadsheets or basic accounting software? Unleashed is AI-powered inventory management built for wholesalers, distributors and manufacturers who need real visibility as they scale. Manage multiple SKUs, warehouses and sales channels in one connected system — with native Xero, QuickBooks and Shopify integrations. Join our new program today. Earn $500 for every successful referral.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "New Program! Get a $500 Payout for every Successful Referral. Join Today!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "unleashed-software-by-the-access-group.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "lucrovox",
    "name": "LucroVox",
    "slug": "lucrovox",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Your clients run HVAC, plumbing, electrical, dental, and legal businesses — and they're losing thousands to missed calls. LucroVox is the AI receptionist that answers in 500ms, sounds human, books appointments, and captures leads 24/7. Plans from $199-$999/mo mean high-value commissions: Affiliates earn 40% first month + 25% months 2-4. Ambassadors earn 30% M1, 20% M2-6, then 10% every month forever. 90-day cookie. Businesses see ROI in week one — easy sell, strong retention.",
    "whatItIs": "Your clients run HVAC, plumbing, electrical, dental, and legal businesses — and they're losing thousands to missed calls. LucroVox is the AI receptionist that answers in 500ms, sounds human, books appointments, and captures leads 24/7. Plans from $199-$999/mo mean high-value commissions: Affiliates earn 40% first month + 25% months 2-4. Ambassadors earn 30% M1, 20% M2-6, then 10% every month forever. 90-day cookie. Businesses see ROI in week one — easy sell, strong retention.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 40% first month + 25% recurring on $199-$999/mo plans. That's $80-$400 per referral in month one.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "lucrovox.html",
      "logo": "assets/partnerstack-logos/lucrovox.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "springbolt_id",
    "name": "Springbolt ID",
    "slug": "springbolt-id",
    "category": "Automation",
    "subcategory": "Workflow Automation",
    "description": "About Springbolt Web Visitor ID Most website traffic leaves without a trace. Springbolt identifies the actual people visiting your site and tracks their journey through every page. Name, email, company, title, and 37+ data points. We capture 50 to 70% of U.S. visitors with verified data, no forms or pop-ups required. Leads ship straight to Clay or download as a CSV and plug directly into your existing workflow. Trusted by 500+ companies.",
    "whatItIs": "About Springbolt Web Visitor ID Most website traffic leaves without a trace. Springbolt identifies the actual people visiting your site and tracks their journey through every page. Name, email, company, title, and 37+ data points. We capture 50 to 70% of U.S. visitors with verified data, no forms or pop-ups required. Leads ship straight to Clay or download as a CSV and plug directly into your existing workflow. Trusted by 500+ companies.",
    "problemSolved": "",
    "bestFor": [
      "Automation",
      "Workflow automation"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Automation"
    ],
    "tags": [
      "automation"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "40% revenue share for customer lifetime",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "springbolt-id.html",
      "logo": "assets/partnerstack-logos/springbolt-id.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "stratos_development_group",
    "name": "Stratos Development Group",
    "slug": "stratos-development-group",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Stratos builds custom software, AI, and integration systems for companies that have outgrown off-the-shelf tools. We operate as an embedded technology partner, not a project shop, which means our engagements are typically strategic, long-term relationships rather than one-time builds.",
    "whatItIs": "Stratos builds custom software, AI, and integration systems for companies that have outgrown off-the-shelf tools. We operate as an embedded technology partner, not a project shop, which means our engagements are typically strategic, long-term relationships rather than one-time builds.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $2,000 to $3,000+ per month for the lifetime of every client you refer (8% of gross receipts, average 36 month engagement)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "stratos-development-group-2.html",
      "logo": "assets/partnerstack-logos/stratos-development-group-2.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "accessibe",
    "name": "accessiBe",
    "slug": "accessibe",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "accessiBe is an end-to-end accessibility platform unifying AI automation, developer tools, and expert services to help organizations create inclusive digital experiences at scale. Guided by its mission to level the digital playing field for everyone, the company is trusted by over 100,000 websites worldwide.",
    "whatItIs": "accessiBe is an end-to-end accessibility platform unifying AI automation, developer tools, and expert services to help organizations create inclusive digital experiences at scale. Guided by its mission to level the digital playing field for everyone, the company is trusted by over 100,000 websites worldwide.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn up to 30% recurring commission.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "accessibe.html",
      "logo": "assets/partnerstack-logos/accessibe.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "nouswise",
    "name": "Nouswise",
    "slug": "nouswise",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "AI-powered research agent and thinking partner grounded in the sources you trust the most — #1 source-grounded AI tool.",
    "whatItIs": "AI-powered research agent and thinking partner grounded in the sources you trust the most — #1 source-grounded AI tool.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn first year 25% on paid signups (ACV $500) + $300 per paid Business signups!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "nouswise.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "betterlife_real_estate_funding",
    "name": "BetterLife Real Estate Funding",
    "slug": "betterlife-real-estate-funding",
    "category": "Content",
    "subcategory": "Content & Media",
    "description": "BetterLife Real Estate Funding (BetterLife REF) specializes in DSCR loans and creative lending solutions built specifically for real estate investors. We were built to buck the bureaucracy that comes with traditional bank lending. Flexible terms, fast closings in as little as 5 days. With a repeat borrower rate of more than 70%, you can trust us with your community.",
    "whatItIs": "BetterLife Real Estate Funding (BetterLife REF) specializes in DSCR loans and creative lending solutions built specifically for real estate investors. We were built to buck the bureaucracy that comes with traditional bank lending. Flexible terms, fast closings in as little as 5 days. With a repeat borrower rate of more than 70%, you can trust us with your community.",
    "problemSolved": "",
    "bestFor": [
      "Content creation",
      "Creator tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Content"
    ],
    "tags": [
      "content"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $700 per successful referral",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "betterlife-real-estate-funding.html",
      "logo": "assets/partnerstack-logos/betterlife-real-estate-funding.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "plansom",
    "name": "Plansom",
    "slug": "plansom",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Imagine if all your documents had plans. Plansom turns any document into SMART goals and a shareable execution plan in sixty seconds. Teams use Plansom to align on what matters, prioritise the work that moves outcomes and see where execution is breaking down.",
    "whatItIs": "Imagine if all your documents had plans. Plansom turns any document into SMART goals and a shareable execution plan in sixty seconds. Teams use Plansom to align on what matters, prioritise the work that moves outcomes and see where execution is breaking down.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% for every customer transaction for the first year of customer purchases",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "plansom.html",
      "logo": "assets/partnerstack-logos/plansom.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "bread_and_butter_io_inc",
    "name": "Bread & Butter IO Inc.",
    "slug": "bread-and-butter-io-inc",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Bread & Butter is an AI-powered lead intelligence platform that helps you track and scale what converts into revenue. It sits between your analytics and your CRM — giving demand gen and revenue teams the intelligence to prime the pipeline, act on high-intent visitors, and hand off sales-ready leads without adding headcount.",
    "whatItIs": "Bread & Butter is an AI-powered lead intelligence platform that helps you track and scale what converts into revenue. It sits between your analytics and your CRM — giving demand gen and revenue teams the intelligence to prime the pipeline, act on high-intent visitors, and hand off sales-ready leads without adding headcount.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "50% recurring commission on every Pro account for its first 12 months, about $294 per account (based on $49/mo Pro), 10 accounts = $2940 for the first 12 months",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "bread-and-butter-io-inc.html",
      "logo": "assets/partnerstack-logos/bread-and-butter-io-inc.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "datarails",
    "name": "Datarails",
    "slug": "datarails",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Datarails is an AI-powered FinanceOS that automates FP&A while letting teams stay in Excel. We bridge the gap between manual spreadsheets and rigid ERPs. Whether you have a portfolio of clients or a growing community of finance pros, our program is designed to reward you for sharing a tool that eliminates manual busywork. Join us to help your network unlock strategic AI insights and real-time reporting in the environment they already use and love",
    "whatItIs": "Datarails is an AI-powered FinanceOS that automates FP&A while letting teams stay in Excel. We bridge the gap between manual spreadsheets and rigid ERPs. Whether you have a portfolio of clients or a growing community of finance pros, our program is designed to reward you for sharing a tool that eliminates manual busywork. Join us to help your network unlock strategic AI insights and real-time reporting in the environment they already use and love",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $500 per qualified lead + $5,000 for every closed deal",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "datarails.html",
      "logo": "assets/partnerstack-logos/datarails.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "ploy_ai",
    "name": "Ploy.ai",
    "slug": "ploy-ai",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Ploy is an AI-powered marketing platfomr platform that turns your website into a growth engine. Ploy builds, optimize, and publish high-converting marketing websites. From on-brand page design and content to SEO/AEO, visitor identification, experiments, and paid-campaign reporting, Ploy turns your site into a living growth engine. Design, ship, and iterate faster, all while staying true to your brand.",
    "whatItIs": "Ploy is an AI-powered marketing platfomr platform that turns your website into a growth engine. Ploy builds, optimize, and publish high-converting marketing websites. From on-brand page design and content to SEO/AEO, visitor identification, experiments, and paid-campaign reporting, Ploy turns your site into a living growth engine. Design, ship, and iterate faster, all while staying true to your brand.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 50% for 12 months for referred customers!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "ploy-ai.html",
      "logo": "assets/partnerstack-logos/ploy-ai.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "zedonk",
    "name": "Zedonk",
    "slug": "zedonk",
    "category": "Developer",
    "subcategory": "Developer & Infrastructure",
    "description": "Zedonk is a cloud-based, affordable and modular PLM, ERP, and digital showroom platform for fashion brands. Trusted by 1,000+ labels worldwide, it streamlines product development, production, sales and inventory in one easy system. With secure access, excellent customer support, and free onboarding and training, Zedonk helps brands manage their entire business efficiently.",
    "whatItIs": "Zedonk is a cloud-based, affordable and modular PLM, ERP, and digital showroom platform for fashion brands. Trusted by 1,000+ labels worldwide, it streamlines product development, production, sales and inventory in one easy system. With secure access, excellent customer support, and free onboarding and training, Zedonk helps brands manage their entire business efficiently.",
    "problemSolved": "",
    "bestFor": [
      "Developers",
      "Infrastructure"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Developer"
    ],
    "tags": [
      "developer"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Accelerate your earnings with Zedonk! 20% commission on new orders",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "zedonk.html",
      "logo": "assets/partnerstack-logos/zedonk.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "p3mo_ltd",
    "name": "P3MO Ltd",
    "slug": "p3mo-ltd",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "P3MO was founded 2019, to provide a platform that gives clarity, control and confidence to business leaders frustrated with the chaos surrounding the delivery of strategic change. P3MO is not another “work-flow” tool but an intelligent and intuitive platform encouraging collaboration across teams, connecting the boardroom to the project floor with clear evidence within 3 clicks of issues, objectives and outcomes to deliver portfolio to project level change with maximum trust and minimum input.",
    "whatItIs": "P3MO was founded 2019, to provide a platform that gives clarity, control and confidence to business leaders frustrated with the chaos surrounding the delivery of strategic change. P3MO is not another “work-flow” tool but an intelligent and intuitive platform encouraging collaboration across teams, connecting the boardroom to the project floor with clear evidence within 3 clicks of issues, objectives and outcomes to deliver portfolio to project level change with maximum trust and minimum input.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "p3mo-ltd.html",
      "logo": "assets/partnerstack-logos/p3mo-ltd.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "p3mo_co_sell_partner_programme",
    "name": "P3MO Co-Sell Partner Programme",
    "slug": "p3mo-co-sell-partner-programme",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "AFTRDRK AFTRDRK's DRK Web Surveillance (DWS) gives you real cyber threat intelligence signals that come from where the real action takes place — deep in the underground forums, communications channels, marketplaces, and other enclaves where cybercriminals plan and execute attacks. By monitoring threats in closer proximity to where cybercrime is happening, DWS identifies risks targeting your organization earlier and more accurately than traditional tools.",
    "whatItIs": "AFTRDRK AFTRDRK's DRK Web Surveillance (DWS) gives you real cyber threat intelligence signals that come from where the real action takes place — deep in the underground forums, communications channels, marketplaces, and other enclaves where cybercriminals plan and execute attacks. By monitoring threats in closer proximity to where cybercrime is happening, DWS identifies risks targeting your organization earlier and more accurately than traditional tools.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20% Revenue Share on every deal and renewal!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "p3mo-co-sell-partner-programme.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "gcheck_background_checks",
    "name": "GCheck Background Checks",
    "slug": "gcheck-background-checks",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "GCheck is an FCRA-compliant background screening platform for mid-market HR teams and staffing agencies. Services include criminal, MVR, employment, education, and drug screening, backed by SOC 2 Type 2 controls and integrations with Workday, UKG, ADP, Greenhouse, and 50+ other ATS/HRIS systems. Strongest in Healthcare, Manufacturing, Transportation, and Construction, where compliance and MVR coverage drive buying decisions.",
    "whatItIs": "GCheck is an FCRA-compliant background screening platform for mid-market HR teams and staffing agencies. Services include criminal, MVR, employment, education, and drug screening, backed by SOC 2 Type 2 controls and integrations with Workday, UKG, ADP, Greenhouse, and 50+ other ATS/HRIS systems. Strongest in Healthcare, Manufacturing, Transportation, and Construction, where compliance and MVR coverage drive buying decisions.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $150 for each customer acquisition ($50 for a completed demo, and $100 upon contract signed)",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "gcheck-background-checks.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "cloro",
    "name": "cloro",
    "slug": "cloro",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "The search API for the AI era: one API for Google and every AI search engine. Real-time structured JSON for tracking visibility or powering search in your own product.",
    "whatItIs": "The search API for the AI era: one API for Google and every AI search engine. Real-time structured JSON for tracking visibility or powering search in your own product.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "50.0% for every transaction, capped at $2,000",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "cloro.html",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "mycroft",
    "name": "Mycroft",
    "slug": "mycroft",
    "category": "Business",
    "subcategory": "Business & Productivity",
    "description": "Mycroft brings risk management, vulnerability management, and compliance into a single platform automating control monitoring, evidence collection, and risk visibility across SOC 2, ISO 27001, FedRAMP, CMMC, HIPAA and more.",
    "whatItIs": "Mycroft brings risk management, vulnerability management, and compliance into a single platform automating control monitoring, evidence collection, and risk visibility across SOC 2, ISO 27001, FedRAMP, CMMC, HIPAA and more.",
    "problemSolved": "",
    "bestFor": [
      "Small businesses",
      "Business operations"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Business"
    ],
    "tags": [
      "business"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $250 for every customer transaction!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "mycroft.html",
      "logo": "assets/partnerstack-logos/mycroft.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "fast_bundle",
    "name": "Fast Bundle",
    "slug": "fast-bundle",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Fast Bundle is a Shopify app for creating flexible, high-converting product bundles. Offer mix & match, volume discounts, quantity breaks, BOGO, add-ons, and fixed bundles to boost AOV. Let customers build their own bundles, add free gifts, or use AI-powered Frequently Bought Together. Fast Bundle helps Shopify merchants increase revenue and enhance the shopping experience.",
    "whatItIs": "Fast Bundle is a Shopify app for creating flexible, high-converting product bundles. Offer mix & match, volume discounts, quantity breaks, BOGO, add-ons, and fixed bundles to boost AOV. Let customers build their own bundles, add free gifts, or use AI-powered Frequently Bought Together. Fast Bundle helps Shopify merchants increase revenue and enhance the shopping experience.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn 25% of every subscription payment from Shopify merchants you refer.",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "fast-bundle.html",
      "logo": "assets/partnerstack-logos/fast-bundle.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "pecan_ai_ltd",
    "name": "Pecan AI Ltd",
    "slug": "pecan-ai-ltd",
    "category": "AI",
    "subcategory": "AI & SaaS",
    "description": "Pecan turns data a company already has into predictions about what happens next: churn, conversion, demand, lifetime value, fraud, risk. It removes the data-science headcount and maintenance burden that put predictive modeling out of reach for our ICP. We don't sell AI, predictive modeling, or predictions. A prediction is vaporware until someone acts on it. We sell the future state the buyer reaches by acting on it, measured in the one metric they care about.",
    "whatItIs": "Pecan turns data a company already has into predictions about what happens next: churn, conversion, demand, lifetime value, fraud, risk. It removes the data-science headcount and maintenance burden that put predictive modeling out of reach for our ICP. We don't sell AI, predictive modeling, or predictions. A prediction is vaporware until someone acts on it. We sell the future state the buyer reaches by acting on it, measured in the one metric they care about.",
    "problemSolved": "",
    "bestFor": [
      "AI",
      "AI tools"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "AI"
    ],
    "tags": [
      "ai"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "Earn $100 for every SQL - conversion rate of",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "pecan-ai-ltd.html",
      "logo": "assets/partnerstack-logos/pecan-ai-ltd.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  },

  {
    "id": "supportbee",
    "name": "SupportBee",
    "slug": "supportbee",
    "category": "Customer Service",
    "subcategory": "Customer Service",
    "description": "Email ticketing software for customer support. SupportBee offers a collaborative team inbox, knowledge base, and customer portal in an easy-to-use package. Collaborate on support emails with comments, assignments, and actionable email notifications. Publish help docs & frequently asked questions for self-service, and offer customers an online portal for tracking their tickets. Since 2011, hundreds of companies like Bentley, Corsearch, and Sinda have used SupportBee for customer support.",
    "whatItIs": "Email ticketing software for customer support. SupportBee offers a collaborative team inbox, knowledge base, and customer portal in an easy-to-use package. Collaborate on support emails with comments, assignments, and actionable email notifications. Publish help docs & frequently asked questions for self-service, and offer customers an online portal for tracking their tickets. Since 2011, hundreds of companies like Bentley, Corsearch, and Sinda have used SupportBee for customer support.",
    "problemSolved": "",
    "bestFor": [
      "Customer service",
      "Support"
    ],
    "useCases": [],
    "capabilities": [],
    "systemRoles": [
      "Customer Service"
    ],
    "tags": [
      "customer service"
    ],
    "alternatives": [],
    "relatedTools": [],
    "pricing": {
      "currency": null,
      "model": null,
      "free": {
        "available": null
      },
      "lastVerified": "2026-08"
    },
    "officialUrl": null,
    "affiliateUrl": null,
    "relationship": {
      "affiliate": false,
      "verified": false,
      "marketplace": "PartnerStack"
    },
    "partnerStackCommission": "20.0% of every customer transaction for the first year!",
    "editorial": {
      "status": "PartnerStack opportunity",
      "profileUrl": "supportbee.html",
      "logo": "assets/partnerstack-logos/supportbee.jpg",
      "lastVerified": "2026-08",
      "handsOnReview": false
    }
  }
];