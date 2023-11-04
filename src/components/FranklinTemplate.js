import './FranklinTemplate.scss';

const FranklinTemplate = ({ children }) => {
  return (
    <div className="FranklinTemplate">
      <div className="app-title">Franklin Note</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default FranklinTemplate;
