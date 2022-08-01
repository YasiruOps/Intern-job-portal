import React, {useState} from 'react'
import "../CSS/employer-main.css"

export default function Employer_main() {

  const [xxx, setXxx] = useState('220px')

  function changesize(){
      setXxx(prev => prev === "220px" ? "95px" : "220px");
  }

  return (
    <div className='lol'>
    <button style={{marginLeft:"400px"}} type="button" class="btn btn-primary" onClick={changesize}>Primary</button>

    <div className="name2" style={{marginLeft: `${xxx}`} } >

    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>

</div>


    </div>

  )
}
// 