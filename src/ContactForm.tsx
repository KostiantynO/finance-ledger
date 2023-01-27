import { ChangeEvent, FormEvent, useState } from 'react';

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

type ContactFormPost = { name: string; email: string; message: string };

const post = async ({ name, email, message }: ContactFormPost) => {
  return await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contact', name, email, message }),
  });
};

const initState = { name: '', email: '', message: '' };

export const ContactForm = () => {
  const [{ name, email, message }, setState] = useState(initState);

  /* Here’s the juicy bit for posting the form submission */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    post({ name, email, message }).catch(error => console.log(error));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Your Name:{' '}
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
      </p>

      <p>
        <label>
          Your Email:{' '}
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
      </p>

      <p>
        <label>
          Message:{' '}
          <textarea name="message" value={message} onChange={handleChange} />
        </label>
      </p>

      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};
