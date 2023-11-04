const EmailForm = ({ name, label, value, onChange }) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };
  return (
    <div>
      <label>{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        rows="4"
        cols="50"
        required
      />
    </div>
  );
};
export default EmailForm;
