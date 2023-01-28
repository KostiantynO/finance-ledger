import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { postContact } from 'features/contacts';

const initState = { name: '', email: '', message: '' };

export const ContactForm = () => {
  const [{ name, email, message }, setState] = useState(initState);

  /* Here’s the juicy bit for posting the form submission */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postContact({ name, email, message })
      .catch(alert)
      .finally(() => setState(initState));
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
