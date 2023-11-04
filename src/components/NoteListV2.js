import { useState } from 'react';
import EmailForm from './EmailForm';

const NoteListV2 = () => {
  const [formData, setFormData] = useState({
    emails: '',
    subjects: '',
    messages: '',
  });

  const handleFormChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(formData);
  };

  return (
    <div>
      <EmailForm
        name="emails"
        label="Emails:"
        value={formData.emails}
        onChange={handleFormChange}
      />
      <EmailForm
        name="subjects"
        label="Subjects:"
        value={formData.subjects}
        onChange={handleFormChange}
      />
      <EmailForm
        name="messages"
        label="Messgaes:"
        value={formData.messages}
        onChange={handleFormChange}
      />
      <button onClick={handleSubmit}>Send Email</button>
    </div>
  );
};
export default NoteListV2;
