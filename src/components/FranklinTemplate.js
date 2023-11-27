import './FranklinTemplate.scss';
import '../App.css';

const FranklinTemplate = ({ children }) => {
  return (
    <div className="FranklinTemplate">
      <div className="app-title typewriter">Franklin Note</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default FranklinTemplate;
