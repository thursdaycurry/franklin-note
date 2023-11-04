import { useCallback, useState } from 'react';

const NoteSender = () => {
  const [emailAddress, setEmailAddress] = useState('');

  const onChangeEmailAddress = useCallback((e) => {
    setEmailAddress(e.target.value);
  }, []);

  return (
    <div>
      <form
        action={'mailto:' + emailAddress}
        method="post"
        encType="text/plain"
      >
        <input
          type="email"
          value={emailAddress}
          id="email"
          name="email"
          required
          onChange={onChangeEmailAddress}
        ></input>
        <input type="submit" value="Send"></input>
      </form>
    </div>
  );
};
export default NoteSender;
