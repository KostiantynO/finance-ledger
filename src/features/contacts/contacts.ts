import type { ContactFormPost } from 'types';
import { encode } from 'common/utils';

export const postContact = async ({
  name,
  email,
}: ContactFormPost): Promise<Response> =>
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contact', name, email }),
  });
