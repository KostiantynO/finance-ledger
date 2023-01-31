import { postContact } from 'features/contacts';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Field } from './Field';
import { ErrorMessage, Label } from './Label';

const required = 'This field is required';

interface Inputs {
  email: string;
  name: string;
}

const defaultValues = { name: '', email: '', message: '' };

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues });

  /* Here’s the juicy bit for posting the form submission */
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
    postContact(data).catch(alert);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 id="contact">Request Callback</h2>

      <Field>
        <Label>
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            {...register('name', {
              required,
              maxLength: { value: 180, message: 'max length is 180' },
              minLength: { value: 3, message: 'min length is 3' },
            })}
          />
        </Label>
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </Field>

      <Field>
        <Label>
          Email:
          <input
            type="email"
            placeholder="Enter email*"
            {...register('email', {
              required,
              maxLength: { value: 180, message: 'max length is 180' },
              minLength: { value: 5, message: 'min length is 5' },
              pattern: /^\S+@\S+$/i,
            })}
          />
        </Label>
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </Field>

      <button type="submit">Send</button>
    </form>
  );
};