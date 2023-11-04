import { Outlet } from 'react-router-dom';
import Categories from '../components/Categories';

const Layout = () => {
  return (
    <>
      <Categories />
      <Outlet /> {/* 나머지 렌더링 */}
    </>
  );
};
export default Layout;
