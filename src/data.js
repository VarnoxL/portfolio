// All site content lives here. Edit this file to add jobs, projects, or skills.

export const me = {
  name: 'Daniel Liu',
  title: 'Computer Engineering @ SIUE',
  headline: 'I build software that people actually use.',
  // Drop a photo in public/ and set e.g. photo: '/me.jpg'. Empty shows initials.
  photo: '/me.jpg',
  about: [
    'I’m a sophomore studying Computer Engineering with a CS minor at SIUE, where I work as an undergraduate researcher in the Biomedical Imaging Research Lab on ultrasound probe visualization and cardiac fat segmentation, and I’m also an RPA Automation intern at BJC HealthCare.',
    'I founded and lead Cougars in Tech, a student org that helps SIUE students land tech internships, and outside class I’m building Last Vigil, a Rust and Python simulation where dozens of local AI models live and interact.',
    'I’m looking for a Summer 2027 internship, ideally in forward deployed or solutions engineering, where I can build backend and AI systems and work directly with the people using them.',
  ],
  email: 'danielliu070809@gmail.com',
  github: 'https://github.com/VarnoxL',
  linkedin: 'https://linkedin.com/in/daniel-liu-171b89381',
  resume: '/resume.pdf',
  education: {
    school: 'Southern Illinois University Edwardsville',
    degree: 'B.S. Computer Engineering, Minor in Computer Science',
    detail: 'GPA 3.47 · Expected May 2029',
  },
  skills: {
    Languages: ['Python', 'JavaScript', 'SQL', 'C++', 'HTML/CSS'],
    Frameworks: ['React', 'Flask', 'FastAPI', 'SQLAlchemy', 'pandas', 'Playwright', 'PySide6', 'AWS Strands Agents'],
    Databases: ['PostgreSQL', 'SQL Server', 'MongoDB', 'SQLite'],
    Tools: ['Git', 'Azure DevOps', 'Docker', 'Firebase Auth', 'Vercel', 'Render', 'Postman', 'Power BI'],
  },
};

export const experience = [
  {
    org: 'BJC HealthCare',
    role: 'RPA Automation Intern',
    dates: 'Nov 2026 – May 2027',
    place: 'Remote',
    points: ['Building robotic process automation (RPA) for business workflows on the IT Business Operations team.'],
    tags: ['RPA', 'Automation'],
  },
  {
    org: 'SIUE Biomedical Imaging Research Lab',
    role: 'Undergraduate Research Assistant (URCA)',
    dates: 'Aug 2026 – Present',
    place: 'Edwardsville, IL',
    points: [
      'Root-caused a native access-violation crash in a Python/PySide6 (Qt) wireless ultrasound viewer by analyzing Windows crash minidumps and A/B testing GUI vs. headless runs against the live Clarius probe.',
      'Fixed it by routing the vendor C++ SDK’s background-thread callbacks through a thread-safe queue drained on the GUI thread, rendering only the latest frame so a slow display drops stale frames.',
      'Took over a TensorFlow/Keras CNN for echocardiogram view classification; audited it and planned its migration from CIFAR-10 to clinical DICOM data with patient-level splits.',
    ],
    tags: ['Python', 'PySide6', 'C++ SDK', 'Multithreading', 'TensorFlow'],
  },
  {
    org: 'Dometic',
    role: 'Data Science Intern',
    dates: 'Jun 2026 – Aug 2026',
    place: 'Litchfield, IL',
    points: [
      'Built a full-stack app (React, Flask REST API, SQL Server) consolidating 5 Excel workbooks into one contact directory with audit logging and archive/restore, serving 2,000+ contacts to 20+ Sales users.',
      'Engineered a Playwright scraper with 5 fallback strategies for JS-rendered pages and anti-bot measures, pricing 574 boat models across 24 brands and saving 50+ manual hours.',
      'Designed a pandas fuzzy-matching pipeline with confidence grading feeding a leadership Power BI dashboard (26% average price increase across 248 boats).',
    ],
    tags: ['React', 'Flask', 'SQL Server', 'Playwright', 'pandas', 'Power BI'],
  },
  {
    org: 'Cougars in Tech',
    role: 'Founder & President',
    dates: 'Sep 2026 – Present',
    place: 'Edwardsville, IL',
    points: [
      'Grew an SIUE software engineering interview-prep org to 50+ members; ran resume and LeetCode workshops.',
      'Organized a Kiro workshop led by an AWS engineer, drawing 30+ RSVPs.',
    ],
    tags: ['Leadership'],
    image: '/cougars-in-tech.jpg',
  },
];

export const projects = [
  {
    id: 'cougarplanner',
    name: 'CougarPlanner',
    dates: 'May 2026 – Present',
    blurb: 'Course planner for SIUE students, live at cougarplanner.com.',
    points: [
      'Full-stack app used by 10–20 SIUE students, combining live Banner course data with RateMyProfessors ratings (React on Vercel, Flask on Render).',
      'Unit-tested schedule conflict-detection algorithm behind a Flask REST API with Firebase Auth.',
      '9-table PostgreSQL schema fed by GraphQL and Banner 9 REST ingesters (1,559 professors).',
    ],
    tech: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'GraphQL', 'Firebase Auth', 'React'],
    link: 'https://cougarplanner.com',
    image: '/projects/cougarplanner.png',
  },
  {
    id: 'anchorpoint',
    name: 'Anchorpoint',
    dates: 'Oct 2026 · Hack Midwest',
    blurb: '3-agent AI pipeline that turns an inbox into audit-ready tax evidence. Built in 24 hours.',
    points: [
      '3-agent generative AI pipeline (AWS Strands Agents) on a 4-person team that turns a 118-email inbox into audit-ready tax-home evidence, filing 18 evidence types into an audit-trailed ledger.',
      'Hardened against prompt injection with randomized document fencing, Pydantic output validation, a pre-model code guardrail, and hallucinated-ID rejection. The demo’s attack email was ignored and logged.',
      'Plaid and Google Calendar connectors with content-hash caching; 84 unit tests.',
    ],
    tech: ['Python', 'AWS Strands Agents', 'FastAPI', 'Pydantic', 'Docker'],
    link: 'https://172-232-25-241.sslip.io/',
    image: '/projects/anchorpoint.png',
  },
  {
    id: 'posetothebeat',
    name: 'Pose to the Beat',
    dates: 'Nov 2026 · CougarJam',
    blurb: 'Two-player webcam dance-off built in 48 hours. Keep the flow, don’t break the beat.',
    points: [
      'MediaPipe pose tracking in the browser grades both players against the called move on the fourth beat (Perfect within 15°, Good within 22°), with no server and no video leaving the machine.',
      '“Simon says” trap calls from a decoy voice eliminate anyone who copies them; a flow streak speeds the tempo from 78 to 132 BPM.',
      'Audio-lag calibration, a solo bot mode, and a session recorder that replays logged rounds for re-scoring offline.',
    ],
    tech: ['TypeScript', 'MediaPipe', 'Vite', 'Web Audio'],
    link: 'https://github.com/VarnoxL/pose-to-the-beat',
    image: '/projects/posetothebeat.jpg',
  },
  {
    id: 'lastvigil',
    name: 'Last Vigil',
    dates: 'In progress',
    blurb: 'A haunted medieval town, a doomsday cult, and a countdown only some of them believe.',
    points: [
      'Fifty-plus agents on local models on a single GPU spread rumors, panic, and pray as the clock runs out.',
      'Rumors are structured claims the Rust sim tracks hop by hop while an LLM rewrites the wording, so every rumor’s ancestry stays traceable.',
      'Tiered agents: cheap brains for the crowd, promoted to smarter models when they land at the center of a rumor chain.',
    ],
    tech: ['Rust', 'Python', 'TypeScript', 'Three.js', 'Local LLMs'],
    link: 'https://github.com/VarnoxL/last-vigil',
    image: '/projects/lastvigil.png',
  },
];

// Smaller projects, shown as a compact list under the featured ones.
export const moreProjects = [
  { name: 'Ball Tracker', year: '2026', blurb: 'Soccer ball and player tracking with YOLO, ByteTrack and a hand-written Kalman filter; detects passes and possession.', tech: ['Python', 'YOLO', 'OpenCV'], link: 'https://github.com/VarnoxL/ball-tracker' },
  { name: 'Job Application Tracker', year: '2026', blurb: 'Browser extension that logs an application in one click by reading schema.org JobPosting data off any job board.', tech: ['JavaScript', 'Flask', 'MongoDB', 'Docker'], link: 'https://github.com/VarnoxL/application-tracker' },
  { name: 'Claude Code tooling', year: '2026', blurb: 'Open-source skills and status bars for AI coding agents: grill-me, tutor-mode, context-watch, usage-watch.', tech: ['PowerShell', 'Markdown'], link: 'https://github.com/VarnoxL/grill-me' },
  { name: 'Jobright Discord Bot', year: '2026', blurb: 'Hourly GitHub Action that posts new SWE internships to Discord.', tech: ['Python', 'GitHub Actions'], link: 'https://github.com/VarnoxL/jobright-discord-bot' },
  { name: 'Cozy Pomodoro', year: '2026', blurb: 'Installable Pomodoro timer with an anime GIF scene, a pop-out mini window, desktop notifications, and generated rain sounds.', tech: ['JavaScript', 'PWA', 'Web Audio'], link: 'https://pomodoro-one-psi.vercel.app' },
  { name: 'RoastMyCode', year: '2026', blurb: 'Hackathon app: paste code, get a score and a funny but useful AI review.', tech: ['React', 'Express', 'OpenAI API'], link: 'https://the-griffins.vercel.app' },
];
