
import React, { useState } from 'react'
import { useContext } from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import '../components/Styles/CreateJobComponent.scss'
import Select from '@mui/material/Select';
import { JobTrackingContext } from '../JobTrackingContext';
import '../components/Styles/EditAlert.scss';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
  
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

function EditAlert() {

    const {setEdit} = useContext(JobTrackingContext);
    
    


  return (
    <div className='alert-edit' >
      
         <Box className='edit' display='flex' direction="row" alignItems="center" >
             <h2>Job Edit</h2>
        <FormControl sx={{ width: 300 }} variant="standard">

          <InputLabel shrink >
            Job Name
          </InputLabel>
          <BootstrapInput />

        </FormControl>

        <FormControl  sx={{ m: 5, width:300, flex: 1,position:'relative' }} variant="standard">
          <InputLabel id="demo-customized">Job Priority</InputLabel>
          <Select className='section'
            labelId="demo-customized"
            id="demo-customized"
            displayEmpty
            input={<BootstrapInput />}
          >
            <MenuItem value="">
              <em >Choose</em>
            </MenuItem>
            <MenuItem id='urgent' value='Urgent' >Urgent</MenuItem>
            <MenuItem id='regular' value='Regular'>Regular</MenuItem>
            <MenuItem id='trivial' value='Trivial'>Trivial</MenuItem>
          </Select>

          <Stack sx={{marginTop:4}} display='flex' alignItems='center' justifyContent='center' spacing={5} direction="row">
          <Button sx={{ bgcolor: '#bdbdbd' }}  variant="contained" onClick={() => setEdit(false)}>Cancel</Button>

          <Button sx={{ bgcolor: '#dd8188' }} variant="contained">Save</Button>

        </Stack>


        </FormControl>

       


      </Box>
    </div>
  )
}

export default EditAlert