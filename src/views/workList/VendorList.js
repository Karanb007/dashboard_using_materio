import {useState,useEffect} from 'react';
import axios from 'axios';
// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
  table:{
   
    minHeight:'70vh'
  }
}))

const VendorList = ({users})=>{
    const classes = useStyles();
    const [vendors,setVendors] = useState([])

    useEffect(()=>{
        const getAllVendor = async()=>{
            await axios.get("http://localhost:3006/users")
                        .then((res)=>setVendors(res.data))
                        .catch((error)=>console.log(error));
          }
        getAllVendor();
      },[])
     
    return(
        <TableContainer component={Paper} className={classes.table}>
        <Table sx={{ minWidth:650}} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Id</TableCell>
              <TableCell align='left'>Other Trading Name</TableCell>
              <TableCell align='left'>Individual/Sole Trader</TableCell>
              <TableCell align='left'>Registration Number</TableCell>
              <TableCell align='left'>Coutry of Operation </TableCell>
              <TableCell align='left'>Vendor Status</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vendors.map(vendor => (
              <TableRow
                key={vendor.name}
                sx={{
                  '&:last-of-type td, &:last-of-type th': {
                    border: 0
                  }
                }}
              >
                <TableCell component='th' scope='row'>
                  {vendor.uniqueVendorId}
                </TableCell>
                <TableCell align='left'>{vendor.otherTradingName}</TableCell>
                <TableCell align='left'>{vendor.soleTrader}</TableCell>
                <TableCell align='left'>{vendor.registrationNumber}</TableCell>
                <TableCell align='left'>{vendor.country}</TableCell>
                <TableCell align='left'>{vendor.vendorStatus}</TableCell>
                <TableCell align='left'>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
export default VendorList;