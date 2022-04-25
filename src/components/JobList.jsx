import React, { useContext } from 'react'
import { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import '../components/Styles/CreateJobComponent.scss'
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';

//contextApi
import { JobTrackingContext } from '../JobTrackingContext';

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

function JobList() {

    const {name} = useContext(JobTrackingContext);

    

    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    }

    return (
        <>
            <h3>Job List</h3>
            <Box display='flex' direction="row" alignItems="center" sx={{ bgcolor: '#eaf3f7', borderRadius: 1, }}>
                <FormControl sx={{ width: 720, flex: 1, marginLeft: 5 }} variant="standard">

                    <BootstrapInput placeholder='Job Name' id="bootstrap-input" />

                </FormControl>

                <FormControl sx={{ m: 5, width: 320, }} variant="standard">

                    <Select
                        labelId="joblist-customized-select-label"
                        id="joblist-customized-select"
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        input={<BootstrapInput />}
                    >
                        <MenuItem value="">
                            <em >Priority (all)</em>
                        </MenuItem>
                        <MenuItem value={10}>Urgent</MenuItem>
                        <MenuItem value={20}>Regular</MenuItem>
                        <MenuItem value={30}>Trivial</MenuItem>
                    </Select>


                </FormControl>
            </Box>



        </>
    )
}

export default JobList