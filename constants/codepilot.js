export const CODEPILOT_STATS = [
    { value: "2,400+", label: "Bugs Caught" },
    { value: "50+", label: "Projects" },
    { value: "18", label: "Languages" },
    { value: "<5s", label: "Avg Review" },
];

export const CODEPILOT_STEPS = [
    {
        number: "01",
        icon: "link",
        title: "Connect Repo",
        description: "Link your GitHub, GitLab, or Bitbucket repository in one click.",
    },
    {
        number: "02",
        icon: "search_insights",
        title: "Auto-Analyze",
        description: "CodePilot scans every PR and commit for issues, vulnerabilities, and anti-patterns.",
    },
    {
        number: "03",
        icon: "rocket_launch",
        title: "Ship Clean Code",
        description: "Get actionable fixes, merge with confidence, and keep your codebase healthy.",
    },
];

export const CODEPILOT_FEATURES = [
    { icon: "pageview", label: "Smart Review" },
    { icon: "shield", label: "Vuln Scanner" },
    { icon: "architecture", label: "Architecture" },
    { icon: "bolt", label: "Performance" },
    { icon: "straighten", label: "Style Guide" },
    { icon: "merge", label: "Git Native" },
];

export const CODEPILOT_USE_CASES = [
    {
        icon: "speed",
        title: "PR Review",
        description: "Review pull requests 10x faster with AI-powered suggestions.",
    },
    {
        icon: "verified_user",
        title: "Security Audit",
        description: "Catch CVEs and zero-days before they hit production.",
    },
    {
        icon: "monitor_heart",
        title: "Health Check",
        description: "Continuous codebase health scoring and trend analysis.",
    },
];

export const CODEPILOT_DEMO_CODE = {
    filename: "auth/session.js",
    language: "javascript",
    lines: [
        { num: 14, code: "function createSession(user, token) {", type: "normal" },
        { num: 15, code: '  const session = { userId: user.id };', type: "normal" },
        { num: 16, code: "  session.token = token;", type: "normal" },
        { num: 17, code: "  session.expiry = Date.now() + 86400000;", type: "warning", comment: "⚠ Magic number — use a named constant" },
        { num: 18, code: "  db.query(`SELECT * FROM sessions", type: "error", comment: "🔴 SQL injection — use parameterized queries" },
        { num: 19, code: "    WHERE user_id = '${user.id}'`);", type: "error" },
        { num: 20, code: "  return session;", type: "normal" },
        { num: 21, code: "}", type: "normal" },
    ],
    fixes: [
        { line: 17, fix: "  session.expiry = Date.now() + SESSION_TTL;", type: "fix" },
        { line: 18, fix: '  db.query("SELECT * FROM sessions', type: "fix" },
        { line: 19, fix: '    WHERE user_id = ?", [user.id]);', type: "fix" },
    ],
};
