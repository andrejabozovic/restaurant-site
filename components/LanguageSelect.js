"use client";

export default function LanguageSelect({ language = "English" }) {
  return (
    <select
      defaultValue="#0"
      aria-label="Language select"
      onChange={(event) => {
        if (event.target.value !== "#0") window.location.href = event.target.value;
      }}
    >
      <option value="#0">{language}</option>
      <option value="#de">German</option>
    </select>
  );
}
