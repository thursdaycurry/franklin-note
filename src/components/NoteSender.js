import { useCallback, useState } from 'react';

const NoteSender = ({ notes }) => {
  const [emailAddress, setEmailAddress] = useState('');

  const onChangeEmailAddress = useCallback((e) => {
    setEmailAddress(e.target.value);
  }, []);

  const onHandleSendEmail = useCallback(() => {
    let mailBodySentence = '';

    notes.forEach((note) => {
      const { id, sentence, comments } = note;

      let commentsText = '';
      if (comments && comments.length > 0) {
        commentsText = comments
          .map((comment) => `\t👉 ${comment.content}`)
          .join('\n');
      }

      const textToAdd = `${id}. '${sentence}'\n${commentsText}\n`;
      mailBodySentence += `${textToAdd}\n`;
    });

    const currentTime = new Date().toISOString().split('T')[0];

    const mailBody = `
+---- ----- ----- ----- ----- ----- ----- ----+
<Franklin Note> on ${currentTime}

${mailBodySentence}
----- ----- ----- ----- ----- ----- ----- -----

Thank you for choosing our service.

'Improve English Naturally with Franklin Note'

Developed by thursdaycurry@gmail.com

+---- ----- ----- ----- ----- ----- ----- ----+
    `;

    const mailtoLink = `mailto:${encodeURIComponent(
      emailAddress,
    )}?subject=${encodeURIComponent(
      `Your Franklin Note on ${currentTime}`,
    )}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoLink;
  }, [emailAddress, notes]);

  return (
    <div>
      {/* Email Form */}
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onHandleSendEmail();
            }}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white"
          >
            <p className="text-center text-lg font-normal">Send to your mail</p>
            <p className="text-center text-sm text-slate-500">
              We don't save your email
            </p>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  value={emailAddress}
                  name="email"
                  required
                  onChange={onChangeEmailAddress}
                />
                <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                  {/* Email Icon */}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NoteSender;
