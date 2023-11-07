import { useCallback, useState } from 'react';

const NoteSender = ({ notes }) => {
  const [emailAddress, setEmailAddress] = useState('');

  const onChangeEmailAddress = useCallback((e) => {
    setEmailAddress(e.target.value);
  }, []);

  const onHandleSendEmail = () => {
    let mailBodySentence = ``;

    notes.map((note) => {
      const { id, sentence, reference, url, comments } = note;

      if (comments && comments.length > 0) {
        const textToAdd = `${id}. '${sentence}'\n${comments
          .split('\n')
          .map((comment) => `\t👉 ${comment}\n`)}
        ${reference ? `ref: ${reference}` : ''}
        ${url ? `url: ${url}` : ''}
      `.replaceAll(',', '');
        mailBodySentence += `${textToAdd}\n`;
      } else {
        const textToAdd = `${id}. '${sentence}'\n
      ${reference ? `ref: ${reference}` : ''}
      ${url ? `url: ${url}` : ''}\n`;
        mailBodySentence += `${textToAdd}\n`;
      }
    });

    const currentTime = new Date().toISOString().split('T')[0];

    const mailBody = `+---- ----- ----- ----- ----- ----- ----- ----+\n
\t     /-/ |
\t    /_/ |
\t   |  | /|
\t   |^|  |
\t   |_| /

<Franlin Note> on ${currentTime}


${mailBodySentence}\n
----- ----- ----- ----- ----- ----- ----- -----

Thank you for choosing our service.

'Improve English Naturally with Franklin Note'

Developed by thursdaycurry@gmail.com

+---- ----- ----- ----- ----- ----- ----- ----+

    `;

    const mailtoLink = `mailto:${encodeURIComponent(
      emailAddress,
    )}?subject=${encodeURIComponent(
      `your Franklin Note on ${currentTime}`,
    )}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      {/* <form
        action={'mailto:' + emailAddress}
        method="post"
        encType="text/plain"
      > */}
      <input
        type="email"
        value={emailAddress}
        id="email"
        name="email"
        required
        onChange={onChangeEmailAddress}
      ></input>
      {/* <input type="submit" value="Send"></input> */}
      <button onClick={onHandleSendEmail}>Send Email</button>
      {/* </form> */}
    </div>
  );
};
export default NoteSender;
