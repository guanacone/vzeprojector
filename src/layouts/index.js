import React, { useEffect } from 'react';
import 'normalize.css';
import GlobalStyle from '../styles/GlobalStyle';
import Typography from '../styles/Typography';
import NavBar from '../components/NavBar';
import { GlobalProvider } from '../components/GlobalContext';

const Layout = ({ children }) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div>
      <GlobalProvider>
        <GlobalStyle/>
        <Typography/>
        <NavBar/>
        {children}
      </GlobalProvider>
    </div>
  );
};

export default Layout;
