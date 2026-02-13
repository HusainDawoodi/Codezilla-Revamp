export const NAV_LINKS = [
    { label: "Solutions", href: "#solutions" },
    { label: "Industries", href: "#industries" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
];

export const HERO_STATS = [
    { value: "2M+", label: "Calls Handled", icon: "call" },
    { value: "20+", label: "Languages", icon: "translate" },
    { value: "99.9%", label: "Uptime", icon: "speed" },
];

export const INDUSTRIES = [
    {
        id: "healthcare",
        icon: "local_hospital",
        emoji: "🏥",
        title: "Healthcare",
        useCases: [
            "Appointment reminders & scheduling",
            "Patient follow-up calls",
            "Prescription refill notifications",
        ],
        conversation: {
            speakers: [
                { role: "AI", text: "Hi Sarah, this is a reminder that your appointment with Dr. Patel is scheduled for tomorrow at 2:30 PM. Would you like to confirm or reschedule?" },
                { role: "Customer", text: "Yes, I'd like to confirm. Can you also remind me to bring my insurance card?" },
                { role: "AI", text: "Confirmed! I've also added a reminder for your insurance card. You'll receive a text 1 hour before. Is there anything else?" },
            ],
        },
    },
    {
        id: "real-estate",
        icon: "home_work",
        emoji: "🏠",
        title: "Real Estate",
        useCases: [
            "Lead qualification & follow-up",
            "Property inquiry handling",
            "Showing scheduling & confirmations",
        ],
        conversation: {
            speakers: [
                { role: "AI", text: "Hi, thanks for your inquiry about the 3-bedroom listing on Oak Avenue. Are you currently pre-approved for a mortgage?" },
                { role: "Customer", text: "Yes, I'm pre-approved up to $450K. When can I schedule a viewing?" },
                { role: "AI", text: "Great! I have openings this Saturday at 10 AM or 2 PM. Which works better for you?" },
            ],
        },
    },
    {
        id: "finance",
        icon: "account_balance",
        emoji: "💰",
        title: "Finance",
        useCases: [
            "Account alerts & notifications",
            "Payment reminder calls",
            "Fraud verification & security",
        ],
        conversation: {
            speakers: [
                { role: "AI", text: "Hello, this is a courtesy call regarding your upcoming credit card payment of $1,247.50 due on February 15th." },
                { role: "Customer", text: "Thanks for the reminder. Can I set up auto-pay for this?" },
                { role: "AI", text: "Absolutely! I can help you enroll in auto-pay right now. Would you like to pay the full balance or minimum due each month?" },
            ],
        },
    },
    {
        id: "retail",
        icon: "shopping_bag",
        emoji: "🛒",
        title: "Retail",
        useCases: [
            "Order status & tracking updates",
            "Returns & exchange processing",
            "Product recommendations",
        ],
        conversation: {
            speakers: [
                { role: "AI", text: "Hi! Your order #4892 has shipped and is estimated to arrive by Thursday. Would you like tracking details?" },
                { role: "Customer", text: "Yes please, and can I add another item to my next order?" },
                { role: "AI", text: "Your tracking number is UPS-284719. I can also help you browse our new arrivals. What category interests you?" },
            ],
        },
    },
    {
        id: "hospitality",
        icon: "hotel",
        emoji: "🏨",
        title: "Hospitality",
        useCases: [
            "Reservation booking & modifications",
            "Concierge services & recommendations",
            "Guest feedback collection",
        ],
        conversation: {
            speakers: [
                { role: "AI", text: "Welcome! I'd be happy to help you book a room. What dates are you looking at, and do you have a preference for room type?" },
                { role: "Customer", text: "March 10-13, a king suite if available." },
                { role: "AI", text: "We have a King Suite with ocean view available for those dates at $289/night. Shall I reserve that for you?" },
            ],
        },
    },
    {
        id: "insurance",
        icon: "shield",
        emoji: "🛡️",
        title: "Insurance",
        useCases: [
            "Claims filing & status updates",
            "Policy renewal reminders",
            "Coverage inquiry & explanations",
        ],
        conversation: {
            speakers: [
                { role: "AI", text: "I see you're calling about your auto policy renewal. Your current premium is $142/month. Would you like to review your coverage options?" },
                { role: "Customer", text: "Yes, I'd like to see if I can get a better rate." },
                { role: "AI", text: "Based on your clean driving record, I can offer a 12% loyalty discount, bringing it to $124.96/month. Want me to apply this?" },
            ],
        },
    },
];

export const AUDIO_DEMOS = [
    {
        id: "demo-healthcare",
        industry: "Healthcare",
        title: "Appointment Reminder Call",
        icon: "local_hospital",
        duration: "1:24",
        messages: [
            { speaker: "AI", text: "Hi Sarah, this is Tawkwise calling from City Medical Center..." },
            { speaker: "Customer", text: "Oh hi, yes — is this about my appointment?" },
            { speaker: "AI", text: "Yes! Your appointment with Dr. Patel is tomorrow at 2:30 PM." },
            { speaker: "Customer", text: "Great, I'll be there. Thanks for the reminder!" },
        ],
    },
    {
        id: "demo-realestate",
        industry: "Real Estate",
        title: "Lead Qualification Call",
        icon: "home_work",
        duration: "2:08",
        messages: [
            { speaker: "AI", text: "Hi, thanks for your interest in the Oak Avenue property..." },
            { speaker: "Customer", text: "Yes, I saw the listing online. What's the asking price?" },
            { speaker: "AI", text: "It's listed at $425,000. Are you currently pre-approved?" },
            { speaker: "Customer", text: "I am, up to $450K. Can we schedule a viewing?" },
        ],
    },
    {
        id: "demo-finance",
        industry: "Finance",
        title: "Payment Reminder Call",
        icon: "account_balance",
        duration: "1:42",
        messages: [
            { speaker: "AI", text: "Hello, this is a courtesy call about your upcoming payment..." },
            { speaker: "Customer", text: "Oh right, when is that due again?" },
            { speaker: "AI", text: "Your payment of $1,247.50 is due on February 15th." },
            { speaker: "Customer", text: "Got it. Can I set up auto-pay for this?" },
        ],
    },
];

export const PLATFORM_CAPABILITIES = [
    {
        id: "01",
        icon: "translate",
        title: "Multi-Language",
        description: "Deploy AI agents in 20+ languages with native-sounding voices and culturally aware conversations.",
    },
    {
        id: "02",
        icon: "monitoring",
        title: "Real-Time Analytics",
        description: "Live dashboards tracking call volumes, sentiment analysis, conversion rates, and agent performance.",
    },
    {
        id: "03",
        icon: "hub",
        title: "CRM Integrations",
        description: "Seamless two-way sync with Salesforce, HubSpot, and 50+ enterprise platforms out of the box.",
    },
    {
        id: "04",
        icon: "verified_user",
        title: "Enterprise Security",
        description: "SOC 2 Type II certified, HIPAA compliant, end-to-end encryption, and role-based access controls.",
    },
    {
        id: "05",
        icon: "record_voice_over",
        title: "Custom Voice & Persona",
        description: "Create branded voice agents with custom tone, pacing, personality, and domain-specific vocabulary.",
    },
    {
        id: "06",
        icon: "campaign",
        title: "Campaign Management",
        description: "Schedule, launch, and monitor outbound call campaigns with A/B testing and automated follow-ups.",
    },
];

export const ROI_STATS = [
    {
        value: "68%",
        label: "Reduction in Call Handling Costs",
        description: "Automate routine calls and free your team for high-value interactions.",
        icon: "trending_down",
    },
    {
        value: "3.2x",
        label: "Faster Lead Qualification",
        description: "AI agents qualify and route leads 24/7, cutting response time dramatically.",
        icon: "bolt",
    },
    {
        value: "24/7",
        label: "Availability, Zero Downtime",
        description: "Never miss a call. AI agents handle every interaction, every hour, every day.",
        icon: "schedule",
    },
    {
        value: "40%",
        label: "Increase in Appointment Show Rates",
        description: "Automated reminders and confirmations reduce no-shows across industries.",
        icon: "trending_up",
    },
];

export const INTEGRATIONS = [
    { name: "Salesforce", icon: "cloud" },
    { name: "HubSpot", icon: "hub" },
    { name: "Zendesk", icon: "support_agent" },
    { name: "Slack", icon: "chat" },
    { name: "Zapier", icon: "bolt" },
    { name: "Twilio", icon: "call" },
    { name: "Microsoft Teams", icon: "groups" },
    { name: "Google Workspace", icon: "work" },
    { name: "Intercom", icon: "forum" },
    { name: "Freshdesk", icon: "headset_mic" },
    { name: "Pipedrive", icon: "filter_alt" },
    { name: "Zoho CRM", icon: "business_center" },
];

export const FOOTER_COLUMNS = [
    {
        title: "Product",
        links: [
            { label: "Voice Agents", href: "#" },
            { label: "Analytics Dashboard", href: "#" },
            { label: "Campaign Manager", href: "#" },
            { label: "Integrations", href: "#" },
            { label: "API & Webhooks", href: "#" },
        ],
    },
    {
        title: "Solutions",
        links: [
            { label: "Healthcare", href: "#" },
            { label: "Real Estate", href: "#" },
            { label: "Finance", href: "#" },
            { label: "Retail", href: "#" },
            { label: "Insurance", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Contact", href: "#" },
            { label: "Partners", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "HIPAA Compliance", href: "#" },
            { label: "SOC 2 Report", href: "#" },
            { label: "Cookie Policy", href: "#" },
        ],
    },
];
