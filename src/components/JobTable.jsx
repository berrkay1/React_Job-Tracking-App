import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { JobTrackingContext } from '../JobTrackingContext';
import { useContext } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#deecf2',
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
        
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

function JobTable() {

    const {value,chooseValue} = useContext(JobTrackingContext);

    

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='start'>Name</StyledTableCell>
                            <StyledTableCell align='center'>Priority</StyledTableCell>
                            <StyledTableCell align='center' >Action</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                    <StyledTableRow >
                                <StyledTableCell align='start' component="th" scope="row">
                                    {value}
                                </StyledTableCell>
                                <StyledTableCell align='center' >
                                    {chooseValue}
                                </StyledTableCell>
                                <StyledTableCell align='center'>
                                    
                                    <EditIcon sx={{cursor:'pointer',marginRight:1.5,fontSize:30, bgcolor:'#cdcdcd',padding:0.4,borderRadius:1}}/>
                                    <DeleteIcon sx={{cursor:'pointer',bgcolor:'#cdcdcd',padding:0.4,fontSize:30,borderRadius:1}} />
                                </StyledTableCell>

                            </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default JobTable