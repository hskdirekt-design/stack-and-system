
const year = document.querySelectorAll("[data-year]");
year.forEach(el => el.textContent = new Date().getFullYear());

const user = JSON.parse(localStorage.getItem("ss_user") || "null");
document.querySelectorAll("[data-user]").forEach(el => {
  el.textContent = user ? `Hi, ${user.name}` : "Sign in";
});

document.querySelectorAll("[data-newsletter]").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const email = form.querySelector("input[type=email]")?.value.trim();
    if (!email) return;
    const list = JSON.parse(localStorage.getItem("ss_newsletter") || "[]");
    if (!list.includes(email)) list.push(email);
    localStorage.setItem("ss_newsletter", JSON.stringify(list));
    const status = form.querySelector("[data-form-status]");
    if (status) status.textContent = "You're on the preview list. Connect a real email provider before launch to send campaigns.";
    form.reset();
  });
});

const signin = document.querySelector("[data-signin]");
if (signin) {
  signin.addEventListener("submit", e => {
    e.preventDefault();
    const name = signin.querySelector("[name=name]").value.trim();
    const email = signin.querySelector("[name=email]").value.trim();
    if (!name || !email) return;
    localStorage.setItem("ss_user", JSON.stringify({name, email}));
    const status = signin.querySelector("[data-form-status]");
    status.textContent = `Signed in for this preview as ${name}. This is demo authentication; production login needs a real auth provider/backend.`;
  });
}

const visual = document.querySelector(".hero-visual");
if (visual) {
  const nodes = visual.querySelectorAll(".node");
  visual.addEventListener("pointermove", e => {
    const r = visual.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    nodes.forEach((node, i) => {
      const depth = (i % 3 + 1) * 7;
      node.style.transform = `translate(calc(-50% + ${x * depth}px), calc(-50% + ${y * depth}px))`;
    });
  });
  visual.addEventListener("pointerleave", () => nodes.forEach(node => node.style.transform = "translate(-50%,-50%)"));
}
