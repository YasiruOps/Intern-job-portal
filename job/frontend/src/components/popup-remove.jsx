import React from 'react';
import {Dialog, DialogTitle, DialogContent, makeStyles, Typography} from'@material-ui/core';
import { borderRadius, height } from '@mui/system';
import "../CSS/popup-removejob.css"
import { MdDeleteOutline } from 'react-icons/md';


export default function popup(props) {
    
    const {title, children, openPopup, setOpenPopup, refreshpage} = props;

    

    const useStyles = makeStyles


    return (
        <div className="modal-fullscreen-xl-down">
            <Dialog open={openPopup} maxWidth="md" className="modal-fullscreen-xl-down">
                <DialogTitle style={{ color:"#0C77F8"}}>
                    <div style={{display:'flex'}}>
                        <Typography variant="h6" component="div" style={{flexGrow:1}}>
                            {title}
                            <MdDeleteOutline style={{color:"red", fontSize:"24px", marginTop:"-2px", marginLeft:"5px"}}/>
                        </Typography>
                        <button type="button" className="btn btn-danger" aria-label="Close" 
                        style={{ borderRadius: '100%', height:"25px", width:"25px", marginTop:"-10px", marginRight:"-15px"}}
                        onClick={
                            ()=>{
                                
                                if(title == "Delete Profile form"){
                                    setOpenPopup(false);
                                }else{
                                    setOpenPopup(false);
                                    refreshpage();
                                }
                            }}>

                        <p className="closextag">x</p>
                            </button>
                    </div>
                </DialogTitle>
                <p className="add-sign" style={{backgroundColor:"red", padding:"0px 12px 0px 12px", marginLeft:"20px", marginTop:"", borderRadius:"25px", color:"white", fontSize:"12px", marginTop:"-15px", width:"fit-content" }}>Delete</p> 
                <hr className='dividerpopup' style={{marginBottom:"0px" }}/>
                <DialogContent>
                        {children}
                </DialogContent>

            </Dialog>
        </div>
    )
}
