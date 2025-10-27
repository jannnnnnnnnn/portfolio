import { ProductCard } from "@/components/product-card"
import { ProductCarouselSection } from "@/components/product-carousel-section"

const products = [
  {
    id: "dc-portal",
    title: "Digital Correspondence Portal",
    category: "Public Healthcare Digital Transformation",
    vision:
      "To modernize public health communication by creating a centralized, secure digital platform for personalized cancer screening correspondence, beginning with colon cancer, to increase accessibility and citizen engagement across Ontario.",
    description:
      "Centralized digital platform for cancer screening correspondence across Ontario, modernizing public health communication.",
    image: "/dc-portal-landing.png",
    tags: ["Healthcare", "Digital Transformation", "Public Health"],
    floatingImages: [
      {
        src: "/dc-portal-landing.png",
        alt: "Digital Correspondence Portal Landing Page",
      },
      {
        src: "/dc-portal-inbox.png",
        alt: "Digital Correspondence Portal User Inbox",
      },
      {
        src: "/dc-portal-help.png",
        alt: "Digital Correspondence Portal Help Section",
      },
    ],
    roadmap: [
      {
        phase: "CONCEPT PHASE",
        description:
          "Established product vision and secured stakeholder alignment across policy, design, and technology teams.",
      },
      {
        phase: "Requirements & Design",
        description: "Refined business requirements to meet strict privacy standards and ensured AODA compliance.",
      },
      {
        phase: "Monitoring & Evaluation",
        description: "Delivered complete M&E framework ensuring PHIPA/FIPPA compliance for post-launch governance.",
      },
      {
        phase: "MVP Development",
        description:
          "Coordinated delivery across teams, oversaw integrations, QA, and key deliverables including BRD and SOW.",
      },
    ],
    contributions: [
      "Established foundational product framework and scalable roadmap for Ontario's digital health correspondence",
      "Improved efficacy of roadmap changes, reducing update bottlenecks significantly",
      "Enabled accelerated, data-informed decision-making through clear options analysis",
      "Accelerated cross-departmental decision-making by ~35% through improved coordination",
    ],
    skills: ["Product Strategy", "Healthcare Technology", "Stakeholder Management", "Requirements Elicitation"],
    expanded: true,
  },
  {
    id: "fit-kits",
    title: "FIT Kits-on-Hand Program",
    category: "Cancer Screening Modernization",
    vision:
      "Transform cancer screening access by providing FIT kits directly through local health centers in underserved communities.",
    description:
      "Program providing FIT kits through local health centers to improve cancer screening access in underserved communities.",
    image: "/fit-trifold.jpg",
    tags: ["Healthcare", "Cancer Screening", "Community Health"],
    floatingImages: [
      {
        src: "/fit-instructions.png",
        alt: "FIT Kit Instructions",
        size: "large",
      },
      {
        src: "/fit-kit-materials.png",
        alt: "FIT Kit Materials",
        size: "small",
      },
      {
        src: "/fit-requisition.png",
        alt: "FIT Requisition Form",
        size: "small",
      },
    ],
    roadmap: [
      { phase: "PLANNING", description: "Program Strategy Defined" },
      { phase: "PROCESS DESIGN", description: "End-to-end Process Maps" },
      { phase: "STAKEHOLDER ALIGNMENT", description: "Indigenous Health Partnership" },
      { phase: "LAUNCH", description: "Successful Rollout" },
    ],
    contributions: [
      "Served as primary operational support for program launch and expansion",
      "Developed end-to-end process maps to resolve operational gaps",
      "Coordinated with LifeLabs and Indigenous Health Unit for kit delivery",
      "Built centralized SharePoint Resource Hub for healthcare providers",
    ],
    skills: ["Process Design", "Cross-Functional Coordination", "Health Operations", "Knowledge Management"],
    expanded: false,
  },
  {
    id: "alnylam",
    title: "Alnylam Global Website",
    category: "Pharmaceutical Digital Platform",
    vision:
      "Create a unified global digital presence for 4 therapeutic areas to enhance healthcare professional engagement.",
    description:
      "Unified global digital platform for pharmaceutical company covering 4 therapeutic areas for HCP engagement.",
    image: "/alnylam-main.jpg",
    tags: ["Pharmaceutical", "Digital Platform", "Global"],
    roadmap: [
      { phase: "PITCH", description: "$250K+ Contract Won" },
      { phase: "PRODUCT STRATEGY", description: "Product Vision & Roadmap Defined" },
      { phase: "DEVELOPMENT", description: "Agile-Waterfall Hybrid Methodology" },
    ],
    contributions: [
      "Led client pitch and won $250K+ contract",
      "Defined product vision and strategic roadmap",
      "Oversaw end-to-end development using Agile-Waterfall hybrid",
      "Managed cross-functional teams across design, development, and QA",
    ],
    skills: ["Product Strategy", "Client Management", "Agile Methodology", "Cross-functional Leadership"],
    expanded: true,
  },
  {
    id: "novartis-ms",
    title: "Novartis MS Website",
    category: "Pharmaceutical Digital Platform",
    vision: "Digital platform for Multiple Sclerosis treatment information and patient resources.",
    description: "Comprehensive digital resource for MS patients and healthcare professionals.",
    image: "/novartis-ms.jpg",
    tags: ["Pharmaceutical", "Patient Education", "MS Treatment"],
    roadmap: [
      { phase: "DISCOVERY", description: "Patient Needs Research" },
      { phase: "DESIGN", description: "UX/UI Development" },
      { phase: "DEVELOPMENT", description: "Platform Build" },
      { phase: "LAUNCH", description: "Website Launch" },
    ],
    contributions: [
      "Led product strategy and requirements gathering",
      "Coordinated with medical affairs for content accuracy",
      "Managed development team and timeline",
    ],
    skills: ["Healthcare Digital", "Patient Experience", "Medical Content", "Product Management"],
    expanded: false,
  },
  {
    id: "vertex-cf",
    title: "Vertex CF Sweat Chloride",
    category: "Medical Education Tool",
    vision: "Interactive educational tool for understanding Cystic Fibrosis sweat chloride testing.",
    description: "Digital educational platform for CF sweat chloride testing for healthcare professionals.",
    image: "/vertex-image1.png",
    tags: ["Medical Education", "Cystic Fibrosis", "Diagnostic Tool"],
    roadmap: [
      { phase: "CONCEPT", description: "Educational Approach Defined" },
      { phase: "CONTENT", description: "Medical Content Development" },
      { phase: "INTERACTIVE", description: "Interactive Features Built" },
      { phase: "LAUNCH", description: "Platform Deployed" },
    ],
    contributions: [
      "Developed product concept and educational framework",
      "Collaborated with medical experts for content accuracy",
      "Managed interactive feature development",
    ],
    skills: ["Medical Education", "Interactive Design", "Healthcare Technology", "Content Strategy"],
    expanded: false,
  },
  {
    id: "alexion-pipeline",
    title: "Alexion Pipeline",
    category: "Pharmaceutical Pipeline Visualization",
    vision: "Interactive visualization of pharmaceutical development pipeline for stakeholders.",
    description: "Dynamic pipeline visualization tool for tracking drug development progress.",
    image: "/alexion-pipeline.png",
    tags: ["Pharmaceutical", "Data Visualization", "Pipeline Management"],
    roadmap: [
      { phase: "REQUIREMENTS", description: "Stakeholder Needs Gathered" },
      { phase: "DESIGN", description: "Visualization Design" },
      { phase: "DEVELOPMENT", description: "Interactive Tool Built" },
      { phase: "DEPLOYMENT", description: "Platform Launched" },
    ],
    contributions: [
      "Led requirements gathering with stakeholders",
      "Designed data visualization approach",
      "Managed development and deployment",
    ],
    skills: ["Data Visualization", "Pharmaceutical", "Stakeholder Management", "Product Design"],
    expanded: false,
  },
  {
    id: "tarsus-ar",
    title: "Tarsus AR Mite",
    category: "Award-Winning Medical Education",
    vision: "Immersive AR experience educating healthcare professionals about eye disease through 3D visualization.",
    description: "Award-winning AR application for medical education about eye mites and disease.",
    image: "/tarsus-mite-image1.png",
    tags: ["AR/VR", "Medical Education", "Award-Winning"],
    roadmap: [
      { phase: "CONCEPT", description: "Innovative AR Idea" },
      { phase: "CLIENT ALIGNMENT", description: "Client Needs Translated to Technical Requirements" },
      { phase: "AR DEVELOPMENT", description: "Advanced 3D Modeling & Tracking" },
      { phase: "LAUNCH", description: "Deployed at Medical Conference" },
      { phase: "AWARD", description: "VEGA Digital Awards Gold Winner" },
    ],
    contributions: [
      "Led product strategy and client requirement translation",
      "Managed AR development team and technical execution",
      "Achieved 300% increase in social engagement",
      "Won VEGA Digital Awards Gold",
    ],
    skills: ["AR/VR", "Medical Education", "3D Technology", "Product Innovation"],
    expanded: false,
  },
  {
    id: "eli-lilly-visualizer",
    title: "Eli Lilly Data Visualizer",
    category: "Healthcare Data Analytics",
    vision: "Advanced data visualization platform for pharmaceutical research and clinical data.",
    description: "Interactive data visualization tool for analyzing clinical trial and research data.",
    image: "/eli-lilly-image1.png",
    tags: ["Data Analytics", "Pharmaceutical", "Visualization"],
    roadmap: [
      { phase: "DISCOVERY", description: "Data Needs Analysis" },
      { phase: "DESIGN", description: "Visualization Framework" },
      { phase: "DEVELOPMENT", description: "Platform Build" },
      { phase: "DEPLOYMENT", description: "Enterprise Rollout" },
    ],
    contributions: [
      "Defined product vision and data visualization strategy",
      "Led cross-functional team of data scientists and developers",
      "Implemented advanced analytics features",
    ],
    skills: ["Data Analytics", "Product Strategy", "Healthcare Technology", "Visualization Design"],
    expanded: false,
  },
  {
    id: "medtronic-infusion",
    title: "Medtronic Infusion Selector",
    category: "Medical Device Digital Tool",
    vision: "Decision support tool for selecting appropriate infusion therapy devices.",
    description: "Interactive tool helping healthcare professionals select optimal infusion devices.",
    image: "/medtronic-infusion-image1.png",
    tags: ["Medical Devices", "Decision Support", "Healthcare"],
    roadmap: [
      { phase: "REQUIREMENTS", description: "Clinical Needs Gathered" },
      { phase: "ALGORITHM", description: "Selection Logic Developed" },
      { phase: "INTERFACE", description: "User Interface Built" },
      { phase: "VALIDATION", description: "Clinical Validation" },
    ],
    contributions: [
      "Led product requirements with clinical stakeholders",
      "Developed decision algorithm with medical experts",
      "Managed development and clinical validation",
    ],
    skills: ["Medical Devices", "Clinical Workflow", "Decision Support", "Healthcare Technology"],
    expanded: false,
  },
  {
    id: "nft-marketplace",
    title: "LOCG NFT Marketplace",
    category: "Web3 Product Innovation",
    vision:
      "Build a decentralized NFT ecosystem to increase utility and value of company cryptocurrency through digital collectibles.",
    description: "Decentralized NFT marketplace for digital collectibles with integrated cryptocurrency.",
    image: "/nft-marketplace-blockchain-digital-collectibles-cr.jpg",
    tags: ["Web3", "NFT", "Blockchain", "Cryptocurrency"],
    roadmap: [
      { phase: "TOKENOMICS", description: "Digital Asset Strategy" },
      { phase: "ARCHITECTURE", description: "Cross-product Design" },
      { phase: "DEVELOPMENT", description: "Smart Contract Development" },
      { phase: "LAUNCH", description: "Platform Launched" },
    ],
    contributions: [
      "Architected tokenomics model and product ecosystem strategy",
      "Led development of NFT marketplace platform",
      "Secured strategic partnerships with Venly Wallet and Terra Virtua",
      "Drove 40x increase in digital asset valuation",
    ],
    skills: ["Web3", "Blockchain", "Tokenomics", "Product Strategy"],
    expanded: true,
  },
  {
    id: "locg-game",
    title: "LOCG Blockchain Game",
    category: "Web3 Gaming",
    vision: "Play-to-earn blockchain game integrating NFTs and cryptocurrency rewards.",
    description: "Blockchain-based play-to-earn game with NFT integration and crypto rewards.",
    image: "/locg-game-image1.png",
    tags: ["Web3", "Gaming", "Play-to-Earn", "NFT"],
    roadmap: [
      { phase: "GAME DESIGN", description: "Gameplay Mechanics" },
      { phase: "BLOCKCHAIN", description: "Smart Contract Integration" },
      { phase: "DEVELOPMENT", description: "Game Development" },
      { phase: "LAUNCH", description: "Beta Launch" },
    ],
    contributions: [
      "Led game design and tokenomics integration",
      "Managed Unity development team",
      "Implemented NFT and cryptocurrency mechanics",
    ],
    skills: ["Game Design", "Blockchain", "Unity", "Web3 Gaming"],
    expanded: false,
  },
  {
    id: "map-dynamics",
    title: "Map Dynamics - Hybrid Event Platform",
    category: "Event Technology",
    vision: "Comprehensive platform for managing hybrid events with virtual and in-person experiences.",
    description: "All-in-one hybrid event platform combining virtual and physical event management.",
    image: "/md-auditorium.png",
    tags: ["Event Tech", "Hybrid Events", "Platform"],
    roadmap: [
      { phase: "DISCOVERY", description: "Event Needs Research" },
      { phase: "PLATFORM", description: "Core Platform Build" },
      { phase: "FEATURES", description: "Hybrid Features Added" },
      { phase: "SCALE", description: "Enterprise Deployment" },
    ],
    contributions: [
      "Defined product vision for hybrid event platform",
      "Led development of virtual and in-person integration",
      "Managed product launch and customer onboarding",
    ],
    skills: ["Event Technology", "Platform Development", "Product Strategy", "Customer Success"],
    expanded: false,
  },
  {
    id: "metaverse-studio",
    title: "Metaverse Studio",
    category: "Virtual Reality Platform",
    vision: "Immersive metaverse creation platform for building virtual experiences and environments.",
    description: "Platform for creating and managing immersive metaverse experiences and virtual worlds.",
    image: "/metaverse-image1.png",
    tags: ["Metaverse", "VR", "Virtual Worlds", "3D"],
    roadmap: [
      { phase: "CONCEPT", description: "Metaverse Vision Defined" },
      { phase: "3D ENGINE", description: "3D Environment Builder" },
      { phase: "FEATURES", description: "Avatar & Interaction Systems" },
      { phase: "LAUNCH", description: "Platform Beta Launch" },
    ],
    contributions: [
      "Led product strategy for metaverse platform",
      "Managed 3D development and VR integration",
      "Designed user experience for virtual world creation",
    ],
    skills: ["Metaverse", "VR/AR", "3D Technology", "Product Innovation"],
    expanded: false,
  },
  {
    id: "nextech-arm",
    title: "NexTech ARM",
    category: "Enterprise Productivity Suite",
    vision: "Comprehensive enterprise suite similar to Google Workspace for business productivity and collaboration.",
    description: "All-in-one enterprise productivity suite with collaboration tools and cloud storage.",
    image: "/nextech-arm.png",
    tags: ["Enterprise", "Productivity", "SaaS", "Collaboration"],
    roadmap: [
      { phase: "STRATEGY", description: "Product Suite Strategy" },
      { phase: "CORE APPS", description: "Core Applications Built" },
      { phase: "INTEGRATION", description: "Cross-app Integration" },
      { phase: "ENTERPRISE", description: "Enterprise Deployment" },
    ],
    contributions: [
      "Defined product vision and suite architecture",
      "Led development of core productivity applications",
      "Managed enterprise customer rollout",
    ],
    skills: ["Enterprise SaaS", "Product Strategy", "Platform Architecture", "B2B Product"],
    expanded: false,
  },
]

export function ProductShowcase() {
  const dcPortal = products.find((p) => p.id === "dc-portal")!
  const carouselGroup1 = products.filter((p) => ["fit-kits", "sanofi-ms", "vertex-cf"].includes(p.id))
  const alnylam = products.find((p) => p.id === "alnylam")!
  const carouselGroup2 = products.filter((p) =>
    ["alexion-pipeline", "tarsus-ar", "eli-lilly-visualizer", "medtronic-infusion"].includes(p.id),
  )
  const nftMarketplace = products.find((p) => p.id === "nft-marketplace")!
  const carouselGroup3 = products.filter((p) =>
    ["locg-game", "map-dynamics", "metaverse-studio", "nextech-arm"].includes(p.id),
  )

  return (
    <section id="products" className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground">
            End-to-end product leadership across healthcare, pharmaceutical, and Web3 domains
          </p>
        </div>

        <div className="space-y-16">
          <ProductCard product={dcPortal} />

          <ProductCarouselSection products={carouselGroup1} />

          <ProductCard product={alnylam} />

          <ProductCarouselSection products={carouselGroup2} />

          <ProductCard product={nftMarketplace} />

          <ProductCarouselSection products={carouselGroup3} />
        </div>
      </div>
    </section>
  )
}
