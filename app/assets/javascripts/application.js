//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
  const dragArea = document.getElementById('drag-area');
  const fileInput = document.getElementById('file-input');
  const fileList = document.getElementById('file-list');

  dragArea.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    handleFiles(fileInput.files);
  });

  dragArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragArea.classList.add('dragover');
  });

  dragArea.addEventListener('dragleave', () => {
    dragArea.classList.remove('dragover');
  });

  dragArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dragArea.classList.remove('dragover');
    const files = e.dataTransfer.files;
    fileInput.files = files;
    handleFiles(files);
  });

  function handleFiles(files) {
    fileList.innerHTML = '';
    Array.from(files).forEach(file => {

      // Create the li element
      const li = document.createElement("li");

      // Create li text
      const text = document.createElement("p");
      text.textContent = file.name;
      text.className = "govuk-!-font-weight-bold";

      // Create li delete link
      const a = document.createElement("a");
      a.textContent = "Delete";
      a.href = "#";
      a.className = "govuk-link";

      // Append the child elements to the li
      li.appendChild(text);
      li.appendChild(a);

      li.classList.add('govuk-body');
      li.classList.add('govuk-multi-file-upload-list-item');
      fileList.appendChild(li);
    });
  }
  
})
