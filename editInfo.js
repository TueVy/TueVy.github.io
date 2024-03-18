function editPersonalInfo() {
  let info = document.getElementById('personal-info-content');
  let currentInfo = info.innerHTML;
  let editableText = <textarea id="info-edit" rows="10" cols="50">${currentInfo}</textarea>;
  editableText += <button onclick="savePersonalInfo()">Save</button>;
  info.innerHTML = editableText;
}

function savePersonalInfo() {
  let editedInfo = document.getElementById('info-edit').value;
  document.getElementById('personal-info-content').innerHTML = editedInfo;
}
