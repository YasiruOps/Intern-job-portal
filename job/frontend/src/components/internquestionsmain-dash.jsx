import React, { useState, useEffect } from "react";
import "../CSS/internquestionsmain.css"
import CalCok from "../images/calendar-clock-icon.png"
import TodayIcon from '@mui/icons-material/Today';
import { GoSearch } from "react-icons/go";
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Replyform from "./replyform"
import Removeform from "./removepopup-internq-from";
import Popup from "./popup"
import Popup2 from "./popup-remove"
import axios from "axios";
import moment from "moment";

export default function Internquestionsmain() {
  const [search, setSearch] = useState("");
  const[filterflag, setFilterflag]=useState(false);
  const [filterval, setFilterval] = useState([])

  const [iquestion, setIquestion] = useState([]);
  const[activity, setActivity] = useState("");

  useEffect(()=>{
    
    if(search.length){
      const data = iquestion.filter(item=>{
      let values = item?.qtitle?.toLowerCase().indexOf(search) > -1 || item?.desc?.toLowerCase().indexOf(search) > -1 || item?.qtype[0]?.toLowerCase().indexOf(search) > -1
      return values
      })
      setFilterval(data);
      setFilterflag(true)
    }else{
      setFilterflag(false)
    }
  },[search])

  useEffect(() => {
    axios
      .get(`http://localhost:8000/employerContact/`)
      .then((res) => {
        const data = res.data;
        setIquestion(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [iquestion]);

  const [recordForEdit, setRecordForEdit] = useState(null);

	const [openPopup, setOpenPopup] = useState(false);
  const [openPopup2, setOpenPopup2] = useState(false);

  const openRemovePopup = (ques) =>{
    setRecordForEdit(ques);
    setOpenPopup2(true);
  };

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  //filter dates
  function timer(date, filterdate){

    if(filterdate?.length===0){
      return false;
    }
    const date1 = moment(date).format("YYYY/MM/DD") 

    
      for (let i = 0; i < filterdate?.length; i++) {
        if(filterdate=="Today"){
          return moment().isSame(date1,"day")
        }
        if(filterdate == "1 week"){
          return moment().diff(date1,"days") <= 7
        }
        if(filterdate == "2 weeks"){
          return moment().diff(date1,"days") <= 14
        }
        if(filterdate == "This month"){
          return moment().diff(date1,"months") <= 0
        }
        if(filterdate == "All"){
          return true;
        }
      }
      return false;
  }

  useEffect(()=>{
    if(activity.length){
      const data = iquestion.filter(item=>{
        let values = timer(item.date2, activity)
        return values
      })
      setFilterval(data);
      setFilterflag(true)
    }else{
      setFilterflag(false)
    }
  },[activity])

  return (
    <div className="Iqouter-main">
    <div className="Inquestionstop">
      <p className="internq-tag">Intern Questions</p>
   
        <div className="activity-selector">
              <TodayIcon className='activityiq'/>
              <p className="activitytag">Activity</p>
              <div className="vertical-line3" />
              <select className="minimal3 "value={activity} onChange={(e) => {setActivity(e.target.value);}}>
                <option>All</option>
                <option>Today</option>
                <option>1 week</option>
                <option>2 weeks</option>
                <option>This month</option>
              </select>
            </div>
  

      <div className="searchbox test657 ">
          <GoSearch className="searchicon" />
          <input type="text" className="searchin" placeholder="search" 
           onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
        </div>


    </div>

      <table className="table">
        <thead>
          <tr>  
            <th scope="col">#</th>
            <th scope="col">Q title</th>
            <th scope="col">Q type</th>
            <th scope="col">Desription</th>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {!filterflag?
          (iquestion.map((question,i) => {
              return (
                        <tr >
                          <th scope="row">{i+1}</th>
                          <td>{question.qtitle}</td>
                          <td>{question.qtype[0]}</td>
                          <td>{question.desc}</td>
                          <td>{question.date2}</td>
                          <td>{question.name}</td>

                          <td>
                            {/* <button type="button" onClick={() => setOpenPopup(true)} class="btn btn-primary">
                              Reply
                              <ReplyIcon className='btniconsiq'/>                 
                            </button> */}
                              <Mailto email={question.email} subject={question.qtitle} body="Dear Intern,">
                                <button type="button" class="btn btn-primary">
                                  Reply
                                  <ReplyIcon className='btniconsiq'/>                 
                                </button> 
                              </Mailto>  
                            &nbsp; &nbsp;
              
                            <button
                              className="btn btn-danger"
                              onClick={() => openRemovePopup(question)}
                              href="/add">
                              Remove
                              <DeleteOutlineIcon className='btniconsiq'/>                 
                            </button>
                          </td>
                        </tr>
                      );
                    })):(
                      filterval.map((question,i) => {
                        return (
                                  <tr >
                                    <th scope="row">{i+1}</th>
                                    <td>{question.qtitle}</td>
                                    <td>{question.qtype[0]}</td>
                                    <td>{question.desc}</td>
                                    <td>{question.date2}</td>
                                    <td>{question.name}</td>
          
                                    <td>
                                      {/* <button type="button" onClick={() => setOpenPopup(true)} class="btn btn-primary">
                                        Reply
                                        <ReplyIcon className='btniconsiq'/>                 
                                      </button> */}
                                        <Mailto email={question.email} subject={question.qtitle} body="Dear Intern,">
                                          <button type="button" class="btn btn-primary">
                                            Reply
                                            <ReplyIcon className='btniconsiq'/>                 
                                          </button> 
                                        </Mailto>  
                                      &nbsp; &nbsp;
                        
                                      <button
                                        className="btn btn-danger"
                                        onClick={() => openRemovePopup(question)}
                                        href="/add">
                                        Remove
                                        <DeleteOutlineIcon className='btniconsiq'/>                 
                                      </button>
                                    </td>
                                  </tr>
                      );
                    }))
                    }
        </tbody>     
      </table>

      <Popup
        title="Reply Message"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}       
      >
        <Replyform/>
      </Popup>

      <Popup2     
        title="Hello World"  
        openPopup={openPopup2}
        setOpenPopup={setOpenPopup2}
      >
        <Removeform recordForEdit={recordForEdit?._id}/>
      </Popup2>

    </div>
  )
}
