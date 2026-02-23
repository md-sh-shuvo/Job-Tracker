// Applicants Data:

let applicants = [
  {
    company: "Mobile First Corp",
    role: "React Native Developer",
    type: "Remote · Full-time",
    salary: "$130,000 - $175,000",
    status: "",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "NextGen Tech",
    role: "Frontend Engineer",
    type: "On-site · Full-time",
    salary: "$110,000 - $150,000",
    status: "",
    description:
      "Develop and maintain modern web applications with React and TypeScript.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "CloudWave Solutions",
    role: "Backend Developer",
    type: "Remote · Part-time",
    salary: "$90,000 - $130,000",
    status: "",
    description:
      "Design and implement scalable server-side logic using Node.js and Python.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "DataZen Analytics",
    role: "Data Scientist",
    type: "Hybrid · Full-time",
    salary: "$120,000 - $160,000",
    status: "",
    description:
      "Analyze large datasets and create predictive models to support business decisions.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "Quantum Leap AI",
    role: "Machine Learning Engineer",
    type: "Remote · Full-time",
    salary: "$140,000 - $180,000",
    status: "",
    description:
      "Develop ML models for real-time applications and deploy them at scale.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "PixelPerfect Studio",
    role: "UI/UX Designer",
    type: "On-site · Contract",
    salary: "$70,000 - $100,000",
    status: "",
    description:
      "Design visually appealing interfaces and enhance user experience for web and mobile apps.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "NextWave Robotics",
    role: "Robotics Engineer",
    type: "Hybrid · Full-time",
    salary: "$125,000 - $170,000",
    status: "",
    description:
      "Develop autonomous robotic systems and optimize mechanical and software performance.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "CyberShield Inc.",
    role: "Security Engineer",
    type: "Remote · Full-time",
    salary: "$130,000 - $160,000",
    status: "",
    description:
      "Implement security protocols and monitor infrastructure for potential vulnerabilities.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "GreenTech Solutions",
    role: "DevOps Engineer",
    type: "Remote · Full-time",
    salary: "$115,000 - $150,000",
    status: "",
    description:
      "Maintain CI/CD pipelines and manage cloud infrastructure for sustainable tech products.",
    actions: ["INTERVIEW", "REJECTED"],
  },
  {
    company: "SmartHome Labs",
    role: "IoT Developer",
    type: "Hybrid · Full-time",
    salary: "$110,000 - $145,000",
    status: "",
    description:
      "Develop Internet of Things devices and integrate them with cloud services for smart home automation.",
    actions: ["INTERVIEW", "REJECTED"],
  },
];

const cardContainer = document.getElementById("card-container");

let totalJobs = document.getElementById("total-jobs");
totalJobs.innerText = `${applicants.length} jobs`;

let totalApplicantNumber = document.getElementById("total-applicants-number");
totalApplicantNumber.innerText = applicants.length;

let interviewedDisplayNumber = document.getElementById(
  "interviewed-display-number",
);

let rejectedDisplayNumber = document.getElementById("rejected-display-number");

// for index page (all category)
applicants.forEach((applicant) => {
  const card = document.createElement("div");
  card.classList.add("p-6", "mb-4", "bg-white", "rounded-xl", "shadow-lg");

  card.innerHTML = `
  <div class="flex justify-between items-center">
  <h1 class="font-semibold text-[18px] text-[#002C5C]">${applicant.company}</h1>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 hover:text-red-500 cursor-pointer dlt-btn">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

  </div>
  <p class="text-[#64748B] mb-5">${applicant.role}</p>
  
    <div class="flex text-[#64748B] text-sm">
      <p class="type">${applicant.type}</p>
      <p class="salary">&nbsp;&nbsp; •&nbsp;&nbsp; ${applicant.salary}</p>
    </div>
    <div class="py-5">
      <p class="applicant-status  hidden  py-2 px-3 mb-2 bg-[#EEF4FF] w-fit">
        
      </p>
      <p class="text-[#323B49] text-sm">
        ${applicant.description} 
      </p>
    </div>
    <div class="flex gap-2">
      <button class="interview-btn px-3 py-2 rounded-sm font-semibold text-sm text-[#10B981] border-2 border-[#10B981] hover:bg-[#10B981] hover:text-white  active:scale-95">
        Interview
      </button>
      <button class="rejected-btn px-3 py-2 rounded-sm font-semibold text-sm text-[#EF4444] border-2 border-[#EF4444] hover:bg-[#EF4444] hover:text-white active:scale-95">
        Rejected
      </button>
    </div>
  `;

  card.querySelector(".dlt-btn").addEventListener("click", function () {
    card.remove();
    applicants = applicants.filter((aplcnts) => aplcnts != applicant);
    console.log(applicants);
    document.getElementById("total-jobs").innerText =
      `${applicants.length} jobs`;
    document.getElementById("total-applicants-number").innerText =
      applicants.length;

    const interviewedApplicants = applicants.filter(
      (aplicant) => aplicant.status == "INTERVIEW",
    );
    interviewedDisplayNumber.innerText = `${interviewedApplicants.length}`;
    const rejectedApplicants = applicants.filter(
      (aplicant) => aplicant.status == "REJECTED",
    );
    rejectedDisplayNumber.innerText = `${rejectedApplicants.length}`;
  });

  card.querySelector(".interview-btn").addEventListener("click", function () {
    applicant.status = "INTERVIEW";
    applicantStatus = card.querySelector(".applicant-status");
    applicantStatus.classList.remove("hidden", "text-red-500");
    applicantStatus.classList.add("text-green-500");
    applicantStatus.innerText = applicant.status;

    const interviewedApplicants = applicants.filter(
      (aplicant) => aplicant.status == "INTERVIEW",
    );
    interviewedDisplayNumber.innerText = `${interviewedApplicants.length}`;
    const rejectedApplicants = applicants.filter(
      (aplicant) => aplicant.status == "REJECTED",
    );
    rejectedDisplayNumber.innerText = `${rejectedApplicants.length}`;
  });
  card.querySelector(".rejected-btn").addEventListener("click", function () {
    applicant.status = "REJECTED";
    applicantStatus = card.querySelector(".applicant-status");
    applicantStatus.classList.remove("hidden", "text-green-500");
    applicantStatus.classList.add("text-red-500");
    applicantStatus.innerText = applicant.status;

    const interviewedApplicants = applicants.filter(
      (aplicant) => aplicant.status == "INTERVIEW",
    );
    interviewedDisplayNumber.innerText = `${interviewedApplicants.length}`;
    const rejectedApplicants = applicants.filter(
      (aplicant) => aplicant.status == "REJECTED",
    );
    rejectedDisplayNumber.innerText = `${rejectedApplicants.length}`;
  });

  cardContainer.appendChild(card);
});

// for all category-->

document.getElementById("catagory-all").addEventListener("click", function () {
  cardContainer.innerHTML = "";
  totalJobs.innerText = `${applicants.length} jobs`;
  if (applicants.length == 0) {
    cardContainer.innerHTML = `
        <div class="flex flex-col justify-center items-center py-20 bg-white rounded-lg">
      <img src="assets/jobs.png" alt="">
      <h1 class="mt-5">No jobs available</h1>
      <p>Check back soon for new job opportunities</p>
    </div>
      `;
    return;
  }

  applicants.forEach((applicant) => {
    const card = document.createElement("div");
    card.classList.add("p-6", "mb-4", "bg-white", "rounded-xl", "shadow-lg");

    card.innerHTML = `
  <div class="flex justify-between items-center">
  <h1 class="font-semibold text-[18px] text-[#002C5C]">${applicant.company}</h1>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 hover:text-red-500 cursor-pointer dlt-btn">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

  </div>
  <p class="text-[#64748B] mb-5">${applicant.role}</p>
  
    <div class="flex text-[#64748B] text-sm">
      <p class="type">${applicant.type}</p>
      <p class="salary">&nbsp;&nbsp; •&nbsp;&nbsp; ${applicant.salary}</p>
    </div>
    <div class="py-5">
      <p class="applicant-status ${applicant.status == "INTERVIEW" ? "text-green-500" : "text-red-500"} ${applicant.status ? "inline-block" : "hidden"} py-2 px-3 mb-2 bg-[#EEF4FF] w-fit">
        ${applicant.status}
      </p>
      <p class="text-[#323B49] text-sm">
        ${applicant.description} 
      </p>
    </div>
    <div class="flex gap-2">
      <button class="interview-btn px-3 py-2 rounded-sm font-semibold text-sm text-[#10B981] border-2 border-[#10B981] hover:bg-[#10B981] hover:text-white  active:scale-95">
        Interview
      </button>
      <button class="rejected-btn px-3 py-2 rounded-sm font-semibold text-sm text-[#EF4444] border-2 border-[#EF4444] hover:bg-[#EF4444] hover:text-white active:scale-95">
        Rejected
      </button>
    </div>
  `;

    card.querySelector(".dlt-btn").addEventListener("click", function () {
      card.remove();
      applicants = applicants.filter((aplcnts) => aplcnts != applicant);
      console.log(applicants);
      document.getElementById("total-jobs").innerText =
        `${applicants.length} jobs`;
      document.getElementById("total-applicants-number").innerText =
        applicants.length;

      const interviewedApplicants = applicants.filter(
        (aplicant) => aplicant.status == "INTERVIEW",
      );
      interviewedDisplayNumber.innerText = `${interviewedApplicants.length}`;
      const rejectedApplicants = applicants.filter(
        (aplicant) => aplicant.status == "REJECTED",
      );
      rejectedDisplayNumber.innerText = `${rejectedApplicants.length}`;
    });

    card.querySelector(".interview-btn").addEventListener("click", function () {
      applicant.status = "INTERVIEW";
      applicantStatus = card.querySelector(".applicant-status");
      applicantStatus.classList.remove("hidden", "text-red-500");
      applicantStatus.classList.add("text-green-500");
      applicantStatus.innerText = applicant.status;

      const interviewedApplicants = applicants.filter(
        (aplicant) => aplicant.status == "INTERVIEW",
      );
      interviewedDisplayNumber.innerText = `${interviewedApplicants.length}`;
      const rejectedApplicants = applicants.filter(
        (aplicant) => aplicant.status == "REJECTED",
      );
      rejectedDisplayNumber.innerText = `${rejectedApplicants.length}`;
    });
    card.querySelector(".rejected-btn").addEventListener("click", function () {
      applicant.status = "REJECTED";
      applicantStatus = card.querySelector(".applicant-status");
      applicantStatus.classList.remove("hidden", "text-green-500");
      applicantStatus.classList.add("text-red-500");
      applicantStatus.innerText = applicant.status;

      const rejectedApplicants = applicants.filter(
        (aplicant) => aplicant.status == "REJECTED",
      );
      rejectedDisplayNumber.innerText = `${rejectedApplicants.length}`;
      const interviewedApplicants = applicants.filter(
        (aplicant) => aplicant.status == "INTERVIEW",
      );
      interviewedDisplayNumber.innerText = `${interviewedApplicants.length}`;
    });

    cardContainer.appendChild(card);
  });
});

// for interviewed category-->

document
  .getElementById("catagory-interviewed")
  .addEventListener("click", function () {
    cardContainer.innerHTML = "";

    const interviewedApplicants = applicants.filter(
      (aplicant) => aplicant.status == "INTERVIEW",
    );

    totalJobs.innerText = `${interviewedApplicants.length} of ${applicants.length} jobs`;
    interviewedDisplayNumber.innerText = `${interviewedApplicants.length}`;

    if (interviewedApplicants.length == 0) {
      cardContainer.innerHTML = `
        <div class="flex flex-col justify-center items-center py-20 bg-white rounded-lg">
      <img src="assets/jobs.png" alt="">
      <h1 class="mt-5">No jobs available</h1>
      <p>Check back soon for new job opportunities</p>
    </div>
      `;
    }

    // console.log(interviewedApplicants)

    interviewedApplicants.forEach((applicant) => {
      const card = document.createElement("div");
      card.classList.add("p-6", "mb-4", "bg-white", "rounded-xl", "shadow-lg");

      card.innerHTML = `
  <div class="flex justify-between items-center">
  <h1 class="font-semibold text-[18px] text-[#002C5C]">${applicant.company}</h1>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 hover:text-red-500 cursor-pointer dlt-btn">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

  </div>
  <p class="text-[#64748B] mb-5">${applicant.role}</p>
  
    <div class="flex text-[#64748B] text-sm">
      <p class="type">${applicant.type}</p>
      <p class="salary">&nbsp;&nbsp; •&nbsp;&nbsp; ${applicant.salary}</p>
    </div>
    <div class="py-5">
      <p class="applicant-status ${applicant.status == "INTERVIEW" ? "text-green-500" : "text-red-500"} ${applicant.status ? "inline-block" : "hidden"} py-2 px-3 mb-2 bg-[#EEF4FF] w-fit">
        ${applicant.status}
      </p>
      <p class="text-[#323B49] text-sm">
        ${applicant.description} 
      </p>
    </div>
    <div class="flex gap-2">
      <button class="interview-btn px-3 py-2 rounded-sm font-semibold text-sm text-[#10B981] border-2 border-[#10B981] hover:bg-[#10B981] hover:text-white  active:scale-95">
        Interview
      </button>
      <button class="rejected-btn px-3 py-2 rounded-sm font-semibold text-sm text-[#EF4444] border-2 border-[#EF4444] hover:bg-[#EF4444] hover:text-white active:scale-95">
        Rejected
      </button>
    </div>
  `;

      card.querySelector(".dlt-btn").addEventListener("click", function () {
        card.remove();
        applicants = applicants.filter((aplcnts) => aplcnts != applicant);
        // console.log(applicants);
        document.getElementById("total-jobs").innerText =
          `${applicants.length} jobs`;
        document.getElementById("total-applicants-number").innerText =
          applicants.length;

        const rejectedApplicants = applicants.filter(
          (aplicant) => aplicant.status == "REJECTED",
        );
        rejectedDisplayNumber.innerText = `${rejectedApplicants.length}`;
        const interviewedApplicants = applicants.filter(
          (aplicant) => aplicant.status == "INTERVIEW",
        );
        interviewedDisplayNumber.innerText = `${interviewedApplicants.length}`;

        if (cardContainer.innerHTML == "") {
          cardContainer.innerHTML = `
        <div class="flex flex-col justify-center items-center py-20 bg-white rounded-lg">
      <img src="assets/jobs.png" alt="">
      <h1 class="mt-5">No jobs available</h1>
      <p>Check back soon for new job opportunities</p>
    </div>
      `;

          return;
        }
      });

      card
        .querySelector(".interview-btn")
        .addEventListener("click", function () {
          applicant.status = "INTERVIEW";
          applicantStatus = card.querySelector(".applicant-status");
          applicantStatus.classList.remove("hidden", "text-red-500");
          applicantStatus.classList.add("text-green-500");
          applicantStatus.innerText = applicant.status;
        });
      card
        .querySelector(".rejected-btn")
        .addEventListener("click", function () {
          applicant.status = "REJECTED";
          applicantStatus = card.querySelector(".applicant-status");
          applicantStatus.classList.remove("hidden", "text-green-500");
          applicantStatus.classList.add("text-red-500");
          applicantStatus.innerText = applicant.status;
          card.remove();

          const interviewedApplicants = applicants.filter(
            (aplicant) => aplicant.status == "INTERVIEW",
          );
          totalJobs.innerText = `${interviewedApplicants.length} of ${applicants.length} jobs`;
          interviewedDisplayNumber.innerText = `${interviewedApplicants.length}`;

          const rejectedApplicants = applicants.filter(
            (aplicant) => aplicant.status == "REJECTED",
          );
          rejectedDisplayNumber.innerText = `${rejectedApplicants.length}`;

          if (cardContainer.innerHTML == "") {
            cardContainer.innerHTML = `
        <div class="flex flex-col justify-center items-center py-20 bg-white rounded-lg">
      <img src="assets/jobs.png" alt="">
      <h1 class="mt-5">No jobs available</h1>
      <p>Check back soon for new job opportunities</p>
    </div>
      `;
            return;
          }
        });

      cardContainer.appendChild(card);
    });
  });

// for rejected category-->

document
  .getElementById("catagory-rejected")
  .addEventListener("click", function () {
    cardContainer.innerHTML = "";

    const rejectedApplicants = applicants.filter(
      (aplicant) => aplicant.status == "REJECTED",
    );

    totalJobs.innerText = `${rejectedApplicants.length} of ${applicants.length} jobs`;
    rejectedDisplayNumber.innerText = `${rejectedApplicants.length}`;

    if (rejectedApplicants.length == 0) {
      cardContainer.innerHTML = `
        <div class="flex flex-col justify-center items-center py-20 bg-white rounded-lg">
      <img src="assets/jobs.png" alt="">
      <h1 class="mt-5">No jobs available</h1>
      <p>Check back soon for new job opportunities</p>
    </div>
      `;
    }
    // console.log(rejectedApplicants)

    rejectedApplicants.forEach((applicant) => {
      const card = document.createElement("div");
      card.classList.add("p-6", "mb-4", "bg-white", "rounded-xl", "shadow-lg");

      card.innerHTML = `
  <div class="flex justify-between items-center">
  <h1 class="font-semibold text-[18px] text-[#002C5C]">${applicant.company}</h1>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 hover:text-red-500 cursor-pointer dlt-btn">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

  </div>
  <p class="text-[#64748B] mb-5">${applicant.role}</p>
  
    <div class="flex text-[#64748B] text-sm">
      <p class="type">${applicant.type}</p>
      <p class="salary">&nbsp;&nbsp; •&nbsp;&nbsp; ${applicant.salary}</p>
    </div>
    <div class="py-5">
      <p class="applicant-status ${applicant.status == "INTERVIEW" ? "text-green-500" : "text-red-500"} ${applicant.status ? "inline-block" : "hidden"} py-2 px-3 mb-2 bg-[#EEF4FF] w-fit">
        ${applicant.status}
      </p>
      <p class="text-[#323B49] text-sm">
        ${applicant.description} 
      </p>
    </div>
    <div class="flex gap-2">
      <button class="interview-btn px-3 py-2 rounded-sm font-semibold text-sm text-[#10B981] border-2 border-[#10B981] hover:bg-[#10B981] hover:text-white  active:scale-95">
        Interview
      </button>
      <button class="rejected-btn px-3 py-2 rounded-sm font-semibold text-sm text-[#EF4444] border-2 border-[#EF4444] hover:bg-[#EF4444] hover:text-white active:scale-95">
        Rejected
      </button>
    </div>
  `;

      card.querySelector(".dlt-btn").addEventListener("click", function () {
        card.remove();
        applicants = applicants.filter((aplcnts) => aplcnts != applicant);
        console.log(applicants);
        document.getElementById("total-jobs").innerText =
          `${applicants.length} jobs`;
        document.getElementById("total-applicants-number").innerText =
          applicants.length;

        const rejectedApplicants = applicants.filter(
          (aplicant) => aplicant.status == "REJECTED",
        );
        rejectedDisplayNumber.innerText = `${rejectedApplicants.length}`;
        const interviewedApplicants = applicants.filter(
          (aplicant) => aplicant.status == "INTERVIEW",
        );
        interviewedDisplayNumber.innerText = `${interviewedApplicants.length}`;

        if (cardContainer.innerHTML == "") {
          cardContainer.innerHTML = `
        <div class="flex flex-col justify-center items-center py-20 bg-white rounded-lg">
      <img src="assets/jobs.png" alt="">
      <h1 class="mt-5">No jobs available</h1>
      <p>Check back soon for new job opportunities</p>
    </div>
      `;

          return;
        }
      });

      card
        .querySelector(".interview-btn")
        .addEventListener("click", function () {
          applicant.status = "INTERVIEW";
          applicantStatus = card.querySelector(".applicant-status");
          applicantStatus.classList.remove("hidden", "text-red-500");
          applicantStatus.classList.add("text-green-500");
          applicantStatus.innerText = applicant.status;
          card.remove();

          const interviewedApplicants = applicants.filter(
            (aplicant) => aplicant.status == "INTERVIEW",
          );
          interviewedDisplayNumber.innerText = `${interviewedApplicants.length}`;

          const rejectedApplicants = applicants.filter(
            (aplicant) => aplicant.status == "REJECTED",
          );
          totalJobs.innerText = `${rejectedApplicants.length} of ${applicants.length} jobs`;
          rejectedDisplayNumber.innerText = `${rejectedApplicants.length}`;
          if (cardContainer.innerHTML == "") {
            cardContainer.innerHTML = `
        <div class="flex flex-col justify-center items-center py-20 bg-white rounded-lg">
      <img src="assets/jobs.png" alt="">
      <h1 class="mt-5">No jobs available</h1>
      <p>Check back soon for new job opportunities</p>
    </div>
      `;

            return;
          }
        });
      card
        .querySelector(".rejected-btn")
        .addEventListener("click", function () {
          applicant.status = "REJECTED";
          applicantStatus = card.querySelector(".applicant-status");
          applicantStatus.classList.remove("hidden", "text-green-500");
          applicantStatus.classList.add("text-red-500");
          applicantStatus.innerText = applicant.status;
        });

      cardContainer.appendChild(card);
    });
  });
