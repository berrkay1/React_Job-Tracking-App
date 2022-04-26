import React from 'react'
import { useContext } from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import '../components/Styles/CreateJobComponent.scss'
import Select from '@mui/material/Select';
import { JobTrackingContext } from '../JobTrackingContext';
import { bgcolor } from '@mui/system';

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



function CreateJobComponent() {

  const {inputValue,handleChange,handleClick,choose,handleChooseChange} = useContext(JobTrackingContext);

  

 

  

  
  
  

  return (
    <div>
      <h3>Create New Job</h3>

      <Box display='flex' direction="row" alignItems="center" >
        <FormControl sx={{ width: 720 }} variant="standard">

          <InputLabel shrink htmlFor="bootstrap-input">
            Job Name
          </InputLabel>
          <BootstrapInput value={inputValue} onChange={handleChange} id="bootstrap-input" />

        </FormControl>

        <FormControl sx={{ m: 5, width: 120, flex: 1 }} variant="standard">
          <InputLabel id="demo-customized-select-label">Job Priority</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={choose}
            displayEmpty
            onChange={handleChooseChange}
            input={<BootstrapInput />}
          >
            <MenuItem value="">
              <em >Choose</em>
            </MenuItem>
            <MenuItem id='urgent' value='Urgent' >Urgent</MenuItem>
            <MenuItem id='regular' value='Regular'>Regular</MenuItem>
            <MenuItem id='trivial' value='Trivial'>Trivial</MenuItem>
          </Select>


        </FormControl>

        <FormControl sx={{ height: 45 }}>
          <Button startIcon={<AddOutlinedIcon />} variant="contained" onClick={handleClick}>Create</Button>
        </FormControl>


      </Box>






    </div>
  )
}

export default CreateJobComponent