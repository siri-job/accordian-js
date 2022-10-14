const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

const faqs = [];

function showFaq() {
  faqData.forEach((element) => {
    createFaq(element)
  });
}



function createFaq(e) {
  const faq = document.createElement("div");
  const faqHeader = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const btn = document.createElement("div");

  faq.setAttribute("class", "faq");
  faqHeader.classList.add("faq_header");
  h3.classList.add("h3");
  p.classList.add("hidden");
  btn.classList.add("show_btn");
  btn.innerText = "+";
  btn.style.display = "flex";
  btn.style.justifyContent = "center";
  btn.style.display = "center";

  // append
  accordianBody.appendChild(faq);
  faq.appendChild(faqHeader);
  faq.appendChild(p);
  faqHeader.appendChild(h3);
  faqHeader.appendChild(btn);

  h3.innerText = e.question;
  p.innerText = e.answer;


  // toggle

  btn.addEventListener("click", () =>
    p.getAttribute("class") === "hidden"
      ? p.setAttribute("class", "block")
      : p.setAttribute("class", "hidden")
  );
}
window.addEventListener("load", showFaq());




