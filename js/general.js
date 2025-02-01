document.querySelectorAll(".service-box").forEach((serviceBox) => {
  serviceBox.addEventListener("mouseenter", () => {
    const serviceIcon = document.createElement("img");
    serviceIcon.src =
      "https://cdn.builder.io/api/v1/image/assets/TEMP/15b9704990a033e71c07903d5442afed7406b4ce83b4cac2e9e32bf4496d4925?apiKey=5cf0f2827d7a4d3d94b8a06701432491&";
    serviceIcon.alt = "service-icon";
    serviceIcon.classList.add("service-icon");
    serviceBox.appendChild(serviceIcon);

    const tooltipContainer = document.createElement("div");
    tooltipContainer.classList.add("tooltip-container");

    const arrowIcon = document.createElement("img");
    arrowIcon.src =
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1a4df5b52fe7ae25df96f33ed12d7232f5b4992b4277c5688192cb10a798db63?apiKey=5cf0f2827d7a4d3d94b8a06701432491&";
    arrowIcon.alt = "";
    arrowIcon.classList.add("arrow-icon");
    tooltipContainer.appendChild(arrowIcon);

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText =
      "We're experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.";
    tooltipContainer.appendChild(tooltip);

    serviceBox.appendChild(tooltipContainer);
    tooltipContainer.style.display = "block";
  });
  serviceBox.addEventListener("mouseleave", () => {
    const tooltipContainer = serviceBox.querySelector(".tooltip-container");
    if (tooltipContainer) tooltipContainer.remove();

    const serviceIcon = serviceBox.querySelector(".service-icon");
    if (serviceIcon) serviceIcon.remove();
  });
});
