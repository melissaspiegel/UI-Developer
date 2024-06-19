export default function decorate(block) {
  // decorate the quote as a blockquote element
  const quoteDiv = block.querySelector(":scope > div > div");
  const blockquote = document.createElement("blockquote");
  blockquote.innerHTML = `${quoteDiv.innerHTML}`;
  quoteDiv.parentElement.replaceWith(blockquote);

  // decorate the author as a cite element
  const authorDiv = block.querySelector(":scope > div > p");
  if (authorDiv) {
    const cite = document.createElement("cite");
    cite.innerHTML = `${authorDiv.innerHTML}`;
    authorDiv.parentElement.replaceWith(cite);
  }
}
