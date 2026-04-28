"use client";

export default function SubscribeForm({
  placeholder = "Your email",
  buttonText = "SUBSCRIBE",
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="search" placeholder={placeholder} required />
      <button type="submit">{buttonText}</button>
    </form>
  );
}
