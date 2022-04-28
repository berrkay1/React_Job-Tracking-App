import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../components/Styles/JobTable.scss'

// icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { JobTrackingContext } from '../JobTrackingContext';
import { useContext } from 'react';
import DeleteAlert from '../Alert/DeleteAlert';
import EditAlert from '../Alert/EditAlert';

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


function JobTable() {

    const { state, model, setModel,edit,setEdit,handleChangeee,age, setAge } = useContext(JobTrackingContext);

    const filterEmployee = (age) => {
        if(age){
            if(age == 10) {
                state.forEach(item => {
                    if(item.section == "Urgent"){
                        return "block";
                    }else {
                        return "none";
                    }
                });
            }
            else if(age == 20) {
                state.forEach(item => {
                    if(item.section == "Regular"){
                        return "block";
                    }else {
                        return "none";
                    }
                });
            }
            else if(age == 30) {
                state.forEach(item => {
                    if(item.section == "Trivial"){
                        return "block";
                    }else {
                        return "none";
                    }
                });
            }
        }
    }

    filterEmployee(age);

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
                        {state.map(item => (
                            <StyledTableRow  key={item.id}>

                                <StyledTableCell align='start'  >
                                  <div  >{item.text}</div>  
                                </StyledTableCell>
                                <StyledTableCell align='center' width='60px' >
                                   <div className={item.section}>{item.section}</div> 
                                </StyledTableCell>
                                
                                <StyledTableCell align='center'>
                                    <EditIcon onClick={() => setEdit(true)} sx={{ cursor: 'pointer', marginRight: 1.5, fontSize: 30, bgcolor: '#cdcdcd', padding: 0.4, borderRadius: 1 }} />
                                    <DeleteIcon onClick={() => setModel(true)} sx={{ cursor: 'pointer', bgcolor: '#cdcdcd', padding: 0.4, fontSize: 30, borderRadius: 1 }} />
                                </StyledTableCell>

                                {model && <DeleteAlert 
                                    itemid={item}
                                />}
                                {edit && <EditAlert
                                    
                                />}

                            </StyledTableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default JobTable