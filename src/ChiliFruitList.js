import React, { useState, useEffect } from 'react';
import './styles.css';
import LoopIcon from '@mui/icons-material/Loop';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function ChiliFruitList() {
  const [chiliFruits, setChiliFruits] = useState([]);

  useEffect(() => {
    fetch('api/chilifruits')
      .then(response => response.json())
      .then(data => {
        setChiliFruits(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
        <div style={{ justifyContent: 'center', display: 'flex', marginTop: '2px' }}>
            <h2>Chili Fruit List</h2>
        </div>      
          <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Origin</StyledTableCell>
              <StyledTableCell align="right">Scoville</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Unit Price</StyledTableCell>
              <StyledTableCell align="right">Update Quantity</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {chiliFruits.length === 0 ? (
              <StyledTableRow>
                <StyledTableCell colSpan={5}>
                  <div style={{ display: 'flex', alignItems: 'center', marginRight: '2px', marginLeft: '40px' }}>
                    <LoopIcon /> Loading ...
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              chiliFruits.map(chiliFruit => (
                <StyledTableRow key={chiliFruit.id}>
                  <StyledTableCell>{chiliFruit.name}</StyledTableCell>
                  <StyledTableCell align="right">{chiliFruit.origin}</StyledTableCell>
                  <StyledTableCell align="right">{chiliFruit.scoville}</StyledTableCell>
                  <StyledTableCell align="right">{chiliFruit.quantity}</StyledTableCell>
                  <StyledTableCell align="right">{chiliFruit.unitPrice}</StyledTableCell>
                  <StyledTableCell align="right">
                  <Link to={{ pathname: `/update/${chiliFruit.id}`, state: { chiliFruit } }}>Update Quantity</Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ChiliFruitList;
