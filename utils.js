export function useTestImport(text) {
  document.body.style.background = "#333";
  document.body.style.color = "lime";
  var codeElement = document.createElement("code");
  codeElement.innerText = `export function useTestImport(text) {
    document.body.style.background = "#333";
    document.body.style.color = "lime";
    var codeElement = document.createElement('code');
    codeElement.innerText = 'some code here;';
    document.body.appendChild(codeElement);
    alert(text);
  }`;
  document.body.appendChild(codeElement);
  alert(text);
}
