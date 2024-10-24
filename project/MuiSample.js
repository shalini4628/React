import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
function MuiSample()
{
    return(
        <div>
            <Button variant="contained" color="error" >contained</Button>
            <br></br>
            <Button variant="contained" color="success" >submit</Button> 
            <br></br>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
       </div>
    )
}
export default MuiSample;