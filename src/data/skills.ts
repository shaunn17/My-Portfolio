export type PipelineStage = {
  id: string;
  label: string;
  tools: { id: string; name: string; why: string }[];
};

export type ProfileConfig = {
  id: string;
  title: string;
  subtitle: string;
  pipelineStages: PipelineStage[];
  defaultSelection: Record<string, string>;
  focusAreas: { title: string; blurb: string }[];
  impactTiles: { metric: string; label: string; how: string }[];
  stories: { problem: string; approach: string; result: string; tools: string[] }[];
};

export const skillsProfiles: Record<string, ProfileConfig> = {
  data: {
    id: 'data',
    title: 'Data & Analytics',
    subtitle: 'Pragmatic pipelines, clear models, decision-grade BI.',
    pipelineStages: [
      { id: 'ingest', label: 'Ingest', tools: [
        { id: 'python', name: 'Python', why: 'Quick ETL scripts and API ingestion' },
        { id: 'airbyte', name: 'Airbyte', why: 'Managed connectors for common sources' },
      ]},
      { id: 'transform', label: 'Transform', tools: [
        { id: 'sql', name: 'SQL', why: 'Direct, readable transformations' },
        { id: 'dbt', name: 'dbt', why: 'Versioned, testable models' },
      ]},
      { id: 'orchestrate', label: 'Orchestrate', tools: [
        { id: 'airflow', name: 'Airflow', why: 'Robust scheduling and lineage' },
        { id: 'prefect', name: 'Prefect', why: 'Pythonic flows with great DX' },
      ]},
      { id: 'visualize', label: 'Visualize', tools: [
        { id: 'powerbi', name: 'Power BI', why: 'Fast KPI dashboards' },
        { id: 'tableau', name: 'Tableau', why: 'Expressive viz for stakeholders' },
      ]},
    ],
    defaultSelection: { ingest: 'python', transform: 'sql', orchestrate: 'airflow', visualize: 'powerbi' },
    focusAreas: [
      { title: 'ETL', blurb: 'Python, SQL, Airflow' },
      { title: 'Modeling/SQL', blurb: 'dbt-style, window fxns' },
      { title: 'Analytics/BI', blurb: 'Power BI, Tableau' },
      { title: 'MLOps', blurb: 'Pipelines, evals' },
      { title: 'Cloud/Infra', blurb: 'AWS/Azure basics' },
    ],
    impactTiles: [
      { metric: '+18%', label: 'forecast accuracy', how: 'Feature engineering + clear evaluation' },
      { metric: '-30%', label: 'ticket backlog', how: 'EDA + prioritization via Pareto analysis' },
      { metric: '99.9%', label: 'pipeline success', how: 'Monitors, retries, and idempotent tasks' },
    ],
    stories: [
      { problem: 'Messy data slowed weekly reporting', approach: 'Built small Python extractors and SQL cleaning models; automated with Airflow', result: 'Reports available by 9am daily', tools: ['Python', 'SQL', 'Airflow', 'Power BI'] },
      { problem: 'Forecasts drifted each quarter', approach: 'Standardized features and added backtesting with clear metrics', result: '+18% forecast accuracy', tools: ['Python', 'Pandas', 'sklearn'] },
      { problem: 'Stakeholders lacked KPI clarity', approach: 'Modeled a dimensional layer and simplified dashboards', result: 'Decisions faster; fewer ad‑hoc requests', tools: ['SQL', 'dbt', 'Power BI'] },
    ],
  },
  software: {
    id: 'software',
    title: 'Software Engineering',
    subtitle: 'Reliable services, clear interfaces, CI/CD, and observability.',
    pipelineStages: [
      { id: 'runtime', label: 'Runtime', tools: [
        { id: 'node', name: 'Node.js', why: 'API servers, scripts, strong ecosystem' },
        { id: 'python', name: 'Python', why: 'Data services, scripting' },
      ]},
      { id: 'persistence', label: 'Persistence', tools: [
        { id: 'postgres', name: 'Postgres', why: 'Transactions, SQL, reliability' },
        { id: 'redis', name: 'Redis', why: 'Caching and queues' },
      ]},
      { id: 'ci', label: 'CI/CD', tools: [
        { id: 'github', name: 'GitHub Actions', why: 'Native CI, easy workflows' },
        { id: 'docker', name: 'Docker', why: 'Reproducible builds and deploys' },
      ]},
      { id: 'observability', label: 'Observability', tools: [
        { id: 'sentry', name: 'Sentry', why: 'Error tracking' },
        { id: 'grafana', name: 'Grafana', why: 'Metrics and dashboards' },
      ]},
    ],
    defaultSelection: { runtime: 'node', persistence: 'postgres', ci: 'github', observability: 'sentry' },
    focusAreas: [
      { title: 'APIs', blurb: 'REST, GraphQL basics' },
      { title: 'Datastores', blurb: 'Postgres, Redis' },
      { title: 'DevOps', blurb: 'Docker, GitHub Actions' },
      { title: 'Frontend', blurb: 'React fundamentals' },
      { title: 'Testing', blurb: 'Unit/integration' },
    ],
    impactTiles: [
      { metric: 'p95 -40%', label: 'latency', how: 'Caching + N+1 fixes + pagination' },
      { metric: '0-downtime', label: 'deploys', how: 'Blue/green + health checks' },
      { metric: '90%+', label: 'coverage (critical)', how: 'Focused unit/integration tests' },
    ],
    stories: [
      { problem: 'Slow endpoints hurt UX', approach: 'Identified N+1 queries, added caching and pagination', result: 'p95 latency down 40%', tools: ['Node.js', 'Postgres', 'Redis'] },
      { problem: 'Risky deploys', approach: 'Containerized services and added blue/green with health checks', result: 'Zero-downtime deploys', tools: ['Docker', 'GitHub Actions'] },
      { problem: 'Flaky features', approach: 'Wrote focused unit/integration tests and CI gates', result: 'Critical paths >90% covered', tools: ['Jest', 'Playwright'] },
    ],
  },
  product: {
    id: 'product',
    title: 'Product Management',
    subtitle: 'Outcome-focused roadmaps, discovery, and data-informed decisions.',
    pipelineStages: [
      { id: 'discovery', label: 'Discovery', tools: [
        { id: 'notion', name: 'Notion', why: 'Docs and research' },
        { id: 'figjam', name: 'FigJam', why: 'Workshops and mapping' },
      ]},
      { id: 'prioritize', label: 'Prioritization', tools: [
        { id: 'rice', name: 'RICE', why: 'Impact-driven scoring' },
        { id: 'kano', name: 'Kano', why: 'Delighters vs must-haves' },
      ]},
      { id: 'delivery', label: 'Delivery', tools: [
        { id: 'jira', name: 'Jira', why: 'Backlog and sprints' },
        { id: 'linear', name: 'Linear', why: 'Fast workflow' },
      ]},
      { id: 'measurement', label: 'Measurement', tools: [
        { id: 'mixpanel', name: 'Mixpanel', why: 'Behavioral analytics' },
        { id: 'ga4', name: 'GA4', why: 'Web/app analytics' },
      ]},
    ],
    defaultSelection: { discovery: 'notion', prioritize: 'rice', delivery: 'jira', measurement: 'mixpanel' },
    focusAreas: [
      { title: 'Discovery', blurb: 'Interviews, JTBD' },
      { title: 'Prioritization', blurb: 'RICE/Kano' },
      { title: 'Delivery', blurb: 'Backlogs, sprints' },
      { title: 'Measurement', blurb: 'North-star metrics' },
      { title: 'Stakeholders', blurb: 'Alignment & comms' },
    ],
    impactTiles: [
      { metric: '+30%', label: 'activation', how: 'Onboarding experiment + clearer jobs-to-be-done' },
      { metric: '-25%', label: 'cycle time', how: 'Slim backlog + WIP limits' },
      { metric: '+20%', label: 'retention', how: 'Roadmap aligned to north-star metrics' },
    ],
    stories: [
      { problem: 'Confusing onboarding', approach: 'JTBD interviews; simplified steps and success states', result: '+30% activation', tools: ['Interviews', 'Mixpanel'] },
      { problem: 'Delivery bottlenecks', approach: 'Slimmed backlog; set WIP limits; clearer definitions', result: 'Cycle time down 25%', tools: ['Jira', 'Linear'] },
      { problem: 'Scattered roadmap', approach: 'Aligned initiatives to north-star metric', result: '+20% retention', tools: ['RICE', 'Dashboards'] },
    ],
  },
};


