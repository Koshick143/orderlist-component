import React from 'react';
import './App.css';
import DataGridDemo from './components/DataGridDemo';
import DummyComponent from './components/DummyComponent';
import { useTheme, useMediaQuery } from '@mui/material';
import clsx from 'clsx';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div id='container'>
      <div className={clsx({ hidden: isMobile })}>
        <DummyComponent />
      </div>
      <div id='div-2'>
        <div >
          <DummyComponent />
        </div>
        <div >
          <DummyComponent />
        </div>
        <DataGridDemo />
      </div>
    </div>
  );
}

export default App;
