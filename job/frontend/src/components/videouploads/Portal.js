import { Modal,ModalHeader,ModalBody } from "reactstrap";

function Header() {
  const [modal,setModal]=useState(false);
return(

<button onClick={setModal(true)}>Open Modal</button>
<div>
   <Modal
    size="lg"
    isOpen={modal}
    toggle={()=>setModal(!modal)}>
      <ModalHeader
      toggle={()=>setModal(!modal)}>
        
      </ModalHeader>

      <ModalBody>
        <form>
          <Row>
            <Col lg={12}>
                  <div>
                    <label htmlFor='oldPassword'>
                      Old Password
                    </label>
                    <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Old Password'
                    name='oldPassword'>
                    

                    </input>
                  
                  </div>
            </Col>

            <Col lg={12}>
                  <div>
                    <label htmlFor='newPassword'>
                      New Password
                    </label>
                    <input
                    type='text'
                    className='form-control'
                    placeholder='Enter New Password'
                    name='newPassword'>
                    

                    </input>
                  
                  </div>
            </Col>

            <Col lg={12}>
                  <div>
                    <label htmlFor='cnfrmNewPassword'>
                      Confirm New Password
                    </label>
                    <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Old Password'
                    name='cnfrmNewPassword'>
                    

                    </input>
                  
                  </div>
            </Col>
            <input
                style={{
                    backgroundColor: '#1DC7EA',
                    color: '#FFFFFF',
                    opacity: 1,
                    padding: '10px 20px',
                    borderRadius: '0.25rem',
                    margin: '10px',
                    textAlign: 'center',
                    border: '1px solid transparent',
                    borderColor: '#17a2b8',
                    float: 'right'
                }}
                type="submit"
                value="Change Password"
            />
          </Row>
        </form>
      </ModalBody>
    </Modal>


</div>

  );
}

export default Header;