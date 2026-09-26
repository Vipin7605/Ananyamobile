"use strict";
const menu = document.querySelector(".menu");
const navigation = document.querySelector("#navigation");
function closeMenu() {
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("open");
}
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  navigation.classList.toggle("open", open);
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("open")) {
    closeMenu();
    menu.focus();
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();
const dialog = document.querySelector("#handoff");
function prepareEnquiry(message) {
  document.querySelector("#message-preview").textContent = message;
  document.querySelector("#whatsapp-link").href =
    "https://wa.me/919965789494?text=" + encodeURIComponent(message);
  dialog.showModal();
}
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  }
});
document.querySelector("#finder-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  prepareEnquiry(
    `Vanakkam Ananya Mobiles! I'm looking for a phone.\n\nBudget: ${data.get("budget")}\nPriority: ${data.get("priority")}\n\nPlease suggest suitable models with current prices and availability.`,
  );
});
document.querySelectorAll("[data-enquiry]").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#service-select").value = link.dataset.enquiry;
  });
});
document.querySelector("#enquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const detail = form.elements.message;
  if (!detail.value.trim()) {
    detail.setCustomValidity("Please tell us a little about what you need.");
    detail.reportValidity();
    return;
  }
  detail.setCustomValidity("");
  const data = new FormData(form);
  const name = String(data.get("customer")).trim();
  prepareEnquiry(
    `Vanakkam Ananya Mobiles!${name ? ` I'm ${name}.` : ""}\n\nEnquiry: ${data.get("service")}\n\n${String(data.get("message")).trim()}`,
  );
});
document
  .querySelector('[name="message"]')
  .addEventListener("input", (event) => event.target.setCustomValidity(""));
