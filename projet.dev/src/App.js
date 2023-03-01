function App() {
  return (
       <>
         <div className="data-main" style={{width: '99%'}}>
        <div className="data-main-frame">
          <div style={{textAlign: 'center', height: '100px', backgroundColor: 'white', width: '100%'}} className="item">   
            <table style={{fontSize: '15px', width: '100%', height: '100%', border: '0px', borderCollapse: 'collapse'}}>
              <tbody><tr>
                  <td style={{border: '0px', textAlign: 'left', backgroundColor: '#e1eaea'}}>ID : 
                    <b style={{color: 'black', textDecoration: 'underline', letterSpacing: '2px', fontFamily: 'arial'}} />
                  </td>
                  <td style={{border: '0px', textAlign: 'left', backgroundColor: '#e1eaea'}}>FirstName : 
                    <b style={{color: 'black', textDecoration: 'underline', letterSpacing: '2px', fontFamily: 'arial', textAlign: 'center'}} />
                  </td>
                  <td style={{border: '0px', textAlign: 'left', backgroundColor: '#e1eaea'}}>LastName : 
                    <b style={{color: 'black', textDecoration: 'underline', letterSpacing: '2px', fontFamily: 'arial', textAlign: 'center'}} />
                  </td>
                </tr>
                <tr>
                  <td style={{border: '0px', textAlign: 'left', backgroundColor: '#e1eaea'}}>Email : 
                    <b style={{color: 'black', textDecoration: 'underline', letterSpacing: '2px', fontFamily: 'arial', textAlign: 'center'}}>
                      <a style={{color: 'black'}} href="mailto:" title="Send Mail to Agent" />
                    </b>
                  </td>
                  <td style={{border: '0px', textAlign: 'left', backgroundColor: '#e1eaea'}}>Desk : 
                    <b style={{color: 'black', textDecoration: 'underline', letterSpacing: '2px', fontFamily: 'arial', textAlign: 'center'}} />
                  </td>
                  <td style={{border: '0px', textAlign: 'left', backgroundColor: '#e1eaea'}}>Manager : 
                    <b style={{color: 'black', textDecoration: 'underline', letterSpacing: '2px', fontFamily: 'arial', textAlign: 'center'}} />
                  </td>
                </tr>
              </tbody>
            </table>          
          </div>      
        </div>     
        <div className="main-manage2" style={{marginTop: '70px'}}>
          <div className="manage"> 
            <div className="managetitle2">Modify Employee</div>
            <div className="manageform" style={{width: '99%'}}>
              <div className="form-frame">
                <div className="frame1" style={{marginTop: '50px'}}>
                  <form>    
                    <p>ID  :
                      <input type="number" name="search-id" id="search-id" className="form-create" required defaultValue placeholder="User ID Numeric Value" minLength={6} readOnly="readonly" title="Minimimum 6 Numric Characters" />
                    </p>                                                          
                    <p>FirstName :
                      <input type="text" name="update-firstName" defaultValue placeholder="Employee firstName" className="form-create" required /> 
                      <input type="hidden" name="hiddenID" defaultValue /> 
                    </p> 
                    <p>LastName :
                      <input type="text" name="update-lastName" defaultValue placeholder="Employee lastName" className="form-create" required />
                    </p>                        
                    <p>Email :
                      <input type="email" name="update-email" defaultValue className="form-create" placeholder="Employee Email" required />
                    </p>               
                    <p>Manger : ;
                      <input type="text" name="update-manager" defaultValue placeholder="Employee Manager" className="form-create" />
                      <span id="unit-container" style={{display: 'none'}} />
                    </p>
                  </form>
                </div>                                    
                <div className="frame2" style={{marginLeft: '70x'}}>      
                  <p>NID :
                    <input type="number" name="update-nid" defaultValue placeholder="Employee NID" className="form-create" />
                  </p> 
                  <p>Salary :
                    <input type="number" name="update-salary" defaultValue placeholder="Employee Salary Only Number Allowed" className="form-create" />                                        
                  </p>                       
                  <p>Start Date : &nbsp;
                    <input type="date" name="update-start" style={{marginTop: '20px'}} defaultValue placeholder="Employee Start Date" className="form-create" />                                          
                  </p>                                              
                  <p>End Date :
                    <input type="date" name="update-end" style={{marginTop: '20px'}} defaultValue placeholder="Employee End Date" className="form-create" />                                       
                  </p>                   
                  <p>Title : 
                    <input type="text" name="update-title" className="form-create" defaultValue placeholder="Employee Title" /> 
                    <input type="submit" name="update-employee" defaultValue="Update" /> 
                    <span style={{color: 'olivedrab', fontSize: '14px'}} />
                  </p>    
                </div>
              </div> 
            </div>
          </div> 
        </div>
      </div>
       </>
  );
}

export default App;
