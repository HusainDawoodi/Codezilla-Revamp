export const SKYGUARD_STATS = [
    { label: "Predictive Accuracy", value: "99.2%" },
    { label: "Average Latency", value: "12ms" },
    { label: "Uptime SLA", value: "99.999%" },
    { label: "Threats Blocked", value: "1.2M+" },
];

export const SKYGUARD_STEPS = [
    {
        num: "01",
        title: "Link Infrastructure",
        text: "Connect your cloud provider via secure, read-only API keys.",
        icon: "cloud_sync"
    },
    {
        num: "02",
        title: "Deep Analysis",
        text: "AI maps your entire stack to establish a performance baseline.",
        icon: "analytics"
    },
    {
        num: "03",
        title: "Active Shield",
        text: "SkyGuard begins predictive monitoring and auto-scaling.",
        icon: "security"
    }
];

export const SKYGUARD_FEATURES = [
    { label: "Anomaly Detection", icon: "warning" },
    { label: "Auto-Scaling", icon: "trending_up" },
    { label: "Traffic Shaping", icon: "reorder" },
    { label: "Cost Guard", icon: "payments" },
    { label: "Health Pulses", icon: "monitor_heart" },
    { label: "Threat Shield", icon: "security" }
];

export const SKYGUARD_MONITOR_DATA = {
    activeNodes: 42,
    traffic: "1.2 GB/s",
    health: 100,
    nodes: [
        { id: 1, name: "US-East-1", status: "healthy", load: 65 },
        { id: 2, name: "EU-West-2", status: "healthy", load: 42 },
        { id: 3, name: "AP-South-1", status: "healthy", load: 78 },
        { id: 4, name: "SA-East-1", status: "healthy", load: 31 },
        { id: 5, name: "US-West-2", status: "danger", load: 95 },
    ]
};
