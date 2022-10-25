for (const el of document.querySelectorAll("td.link2")) {
  let link = el.attributes.onclick.value;
  if (link.endsWith("?html-view=true')")) continue;
  link = link.split("/").at(-2);

  const newEl = document.createElement("td");
  newEl.innerHTML = link;
  newEl.onclick = () => {
    // copy to clipboard
    navigator.clipboard.writeText(link);
  };

  el.parentElement.appendChild(newEl);
}
