function editPersonalInfo() {
  let info = document.getElementById(&#39;personal-info-content&#39;);
  let currentInfo = info[removed];
  // Use backticks (`) for template literals
  let editableText = `&lt;textarea id=&quot;info-edit&quot; rows=&quot;10&quot; cols=&quot;50&quot;&gt;${currentInfo}&lt;/textarea&gt;`;
  editableText += `&lt;button &gt;Save&lt;/button&gt;`;
  info[removed] = editableText;
}
 
function savePersonalInfo() {
  let editedInfo = document.getElementById(&#39;info-edit&#39;).value;
  document.getElementById(&#39;personal-info-content&#39;)[removed] = editedInfo;
}
