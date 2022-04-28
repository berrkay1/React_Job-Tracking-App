import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import '../components/Styles/DeleteAlert.scss'
//import styled from 'styled-components'

import { useContext } from 'react';
import { JobTrackingContext } from '../JobTrackingContext';

// const StyledButton = styled(Button)`
//   &:hover {
//     background: none;

//   }
// `

function DeleteAlert({ itemid }) {

  const { setModel, deleteItem } = useContext(JobTrackingContext);

  console.log(itemid);


  return (
    <div className="alert-delete" id='alert-delete'>
      <Box className='alert' display='flex' alignItems='center' flexDirection='column' >
        <ErrorOutlineIcon sx={{ color: '#dd8188', fontSize: 50 }} />
        <h2>Are you sure want to delete it?</h2>

        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={() => setModel(false)}>Cancel</Button>

          <Button onClick={() => deleteItem(itemid.id)} sx={{ bgcolor: '#dd8188' }} variant="contained">Approve</Button>

        </Stack>

      </Box>
    </div>

  )
}

export default DeleteAlert