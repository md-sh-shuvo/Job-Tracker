// Applicants Data:

const applicants = [
  {
    company: "Mobile First Corp",
    role: "React Native Developer",
    type: "Remote · Full-time",
    salary: "$130,000 - $175,000",
    status: "NOT APPLIED",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "NextGen Tech",
    role: "Frontend Engineer",
    type: "On-site · Full-time",
    salary: "$110,000 - $150,000",
    status: "APPLIED",
    description:
      "Develop and maintain modern web applications with React and TypeScript.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "CloudWave Solutions",
    role: "Backend Developer",
    type: "Remote · Part-time",
    salary: "$90,000 - $130,000",
    status: "INTERVIEW",
    description:
      "Design and implement scalable server-side logic using Node.js and Python.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "DataZen Analytics",
    role: "Data Scientist",
    type: "Hybrid · Full-time",
    salary: "$120,000 - $160,000",
    status: "REJECTED",
    description:
      "Analyze large datasets and create predictive models to support business decisions.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "Quantum Leap AI",
    role: "Machine Learning Engineer",
    type: "Remote · Full-time",
    salary: "$140,000 - $180,000",
    status: "NOT APPLIED",
    description:
      "Develop ML models for real-time applications and deploy them at scale.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "PixelPerfect Studio",
    role: "UI/UX Designer",
    type: "On-site · Contract",
    salary: "$70,000 - $100,000",
    status: "APPLIED",
    description:
      "Design visually appealing interfaces and enhance user experience for web and mobile apps.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "NextWave Robotics",
    role: "Robotics Engineer",
    type: "Hybrid · Full-time",
    salary: "$125,000 - $170,000",
    status: "NOT APPLIED",
    description:
      "Develop autonomous robotic systems and optimize mechanical and software performance.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "CyberShield Inc.",
    role: "Security Engineer",
    type: "Remote · Full-time",
    salary: "$130,000 - $160,000",
    status: "INTERVIEW",
    description:
      "Implement security protocols and monitor infrastructure for potential vulnerabilities.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "GreenTech Solutions",
    role: "DevOps Engineer",
    type: "Remote · Full-time",
    salary: "$115,000 - $150,000",
    status: "REJECTED",
    description:
      "Maintain CI/CD pipelines and manage cloud infrastructure for sustainable tech products.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "SmartHome Labs",
    role: "IoT Developer",
    type: "Hybrid · Full-time",
    salary: "$110,000 - $145,000",
    status: "NOT APPLIED",
    description:
      "Develop Internet of Things devices and integrate them with cloud services for smart home automation.",
    actions: ["INTERVIEW", "REJECTED"],
  },
];

const cardContainer = document.getElementById("card-container");

applicants.forEach((applicant) => {
  const card = document.createElement("div");
  card.classList.add("p-6", "mb-4", "bg-white", "rounded-xl", "shadow-lg");

  card.innerHTML = `
  <h1 class="font-semibold text-[18px] text-[#002C5C]">${applicant.company}</h1>
    <p class="text-[#64748B] mb-5">${applicant.role}</p>
    <div class="flex text-[#64748B] text-sm">
      <p class="type">${applicant.type}</p>
      <p class="salary">&nbsp;&nbsp; •&nbsp;&nbsp; ${applicant.salary}</p>
    </div>
    <div class="py-5">
      <p class="text-[#002C5C] py-2 px-3 mb-2 bg-[#EEF4FF] w-fit">
        ${applicant.status}
      </p>
      <p class="text-[#323B49] text-sm">
        ${applicant.description}
      </p>
    </div>
    <div class="flex gap-2">
      <button class="px-3 py-2 rounded-sm font-semibold text-sm text-[#10B981] border-2 border-[#10B981] hover:bg-[#10B981] hover:text-white  active:scale-95">
        interview
      </button>
      <button class="px-3 py-2 rounded-sm font-semibold text-sm text-[#EF4444] border-2 border-[#EF4444] hover:bg-[#EF4444] hover:text-white active:scale-95">
        Rejected
      </button>
    </div>
  `;
  cardContainer.appendChild(card);

  // <div class="card p-6 bg-white rounded-xl shadow-lg">

  // </div>;
});
