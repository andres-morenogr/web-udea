function isPanagram() {
  const panagram = "abcdefghijklmnopqrstuvwxyz"
  let textToVerify = document.getElementById("validate").value;
  let result = document.getElementById("result");
  let processedText = processText(textToVerify);
  if(panagram.localeCompare(processedText) === 0) {
    result.innerHTML = "TRUE"
  } else {
    result.innerHTML = "FALSE"
  }
}

function processText(text) {
  text = text.toLowerCase().split(' ').join('');
  text = sortAlphabetically(text);
  return [... new Set(text)].join('');
}

function sortAlphabetically(text) {
  return [...text].sort();
}