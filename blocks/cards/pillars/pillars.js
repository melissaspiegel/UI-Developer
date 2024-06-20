export default function decorate(block) {
  // Decorate the quote as a blockquote element
  const listDiv = block.querySelector(':scope > div > div');
  alert('listDiv: ' + listDiv);
  if (listDiv) {
    const listItem = document.createElement('li');
    const listText = listDiv.innerHTML.trim();
    if (listText) {
      listItem.innerHTML = `${listText}`;
      listDiv.parentElement.replaceWith(listItem);
    }
  }
}
