import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import './App.css';
import Header from './components/Header';
import CreateJobComponent from './components/CreateJobComponent';
import JobList from './components/JobList';
import JobTable from './components/JobTable';

function App() {
  return (
   <>
      <CssBaseline>
        <Container maxWidth='lg'>
          <Header/>
          <CreateJobComponent/>
          <JobList/>
          <JobTable/>
        </Container>
      </CssBaseline>
   </>
  );
}

export default App;
