export default function decorate(block) {
  // Decorate the quote as a blockquote element
  const quoteDiv = block.querySelector(':scope > div > div');
  if (quoteDiv) {
    const blockquote = document.createElement('blockquote');
    const quoteText = quoteDiv.innerHTML.trim();
    if (quoteText) {
      blockquote.innerHTML = `${quoteText}`;
      quoteDiv.parentElement.replaceWith(blockquote);
    }
  }

  // Decorate the author as a cite element
  const authorDiv = block.querySelector(':scope > div > div');
  if (authorDiv) {
    const cite = document.createElement('cite');
    cite.innerHTML = `${authorDiv.innerHTML.trim()}`;
    authorDiv.parentElement.replaceWith(cite);
  }
}
