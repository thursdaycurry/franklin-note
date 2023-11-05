import { useCallback, useState } from 'react';

const NoteSender = (notes) => {
  const [emailAddress, setEmailAddress] = useState('');

  const onChangeEmailAddress = useCallback((e) => {
    setEmailAddress(e.target.value);
  }, []);

  const onHandleSendEmail = () => {
    const mailtoLink = `mailto:${encodeURIComponent(
      emailAddress,
    )}?subject=${encodeURIComponent(
      `your Franklin Note on ${new Date().toISOString().split('T')[0]}`,
    )}&body=${encodeURIComponent('Body text')}`;

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
