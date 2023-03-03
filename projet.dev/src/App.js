function App() {
  return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title> 
          <style dangerouslySetInnerHTML={{__html: "\n    .bod {\n      border-radius: 25px;\n      padding: 20px; \n     }\n td{border:0px;text-align:center;letter-spacing: 7px;font-size: 17px; }\n    .managetitle2 {\n      letter-spacing: 7px;\n      margin-top: 30px;\n      padding:10px 500px ;\n      text-decoration-line: overline ;\n      font-size: 25px;\n      width: 300px;\n      height: 17px;\n      position: relative;\n      animation-name: example;\n      animation-duration: 4s;\n      animation-iteration-count: 1;\n      animation-direction: normal; \n      }\n    @keyframes example {\n      0%   { left:0px; top:0px;}\n      50%  {left:150px; top:0px;}\n      75%  {left:150px; top:0px;}\n      /* 75%  {background-color:green; left:0px; top:0px;} */\n      }    \n    label{\n      width: 152px; \n      display: inline-block;\n      letter-spacing: 7px;\n      font-size: 17px;\n      }\n    .form-create {\n      width: 40%;\n      color:black;\n      padding: 14px 20px;\n      margin: 10px 0;\n      display: inline-block;\n      border: none;\n      border-bottom: 2px solid  #030f04 ;\n      cursor: pointer;\n      transition: width 2s; \n     }\n    .form-create:hover{width: 300px;border: none;}\n     input[type=submit]:hover {\n      background-color: #45a049;\n     }\n    footer {\n     text-align: center;\n     padding: 3px;\n     background-color:black;\n     color: rgb(250, 248, 248);}\n  " }} />
          <div className="data-main" style={{width: '100%'}}>
            <div className="data-main-frame" style={{padding: '10px', margin: '10px'}}>
              <div style={{textAlign: 'center', height: '100px', width: '100%', outlineStyle: 'ridge'}} className="item">   
                <table style={{fontSize: '15px', width: '100%', height: '100%', borderCollapse: 'collapse'}}>
                  <tbody><tr>
                      <td>ID : 
                        <b style={{color: 'black', textDecoration: 'underline', letterSpacing: '2px', fontFamily: 'arial'}} /></td>
                      <td>FirstName : 
                        <b style={{color: 'black', textDecoration: 'underline', letterSpacing: '2px', fontFamily: 'arial', textAlign: 'center'}} /></td>
                      <td>LastName : 
                        <b style={{color: 'black', textDecoration: 'underline', letterSpacing: '2px', fontFamily: 'arial', textAlign: 'center'}} /></td></tr>
                    <tr> 
                      <td>Email : 
                        <b><a style={{color: 'black'}} href="mailto:" title="Send Mail to Agent" /></b>
                      </td>
                      <td>Desk : <b /></td>
                      <td>Manager : <b /></td>
                    </tr></tbody>
                </table>          
              </div>      
            </div>  
            <div className="main-manage2"> 
              <div className="manage" style={{outlineStyle: 'ridge', width: '100%'}}> 
                <div className="managetitle2">Modify Employee</div>
                <div className="manageform" style={{width: '99%'}}> 
                  <div className="form-frame" style={{display: 'flex', flexDirection: 'row', textAlign: 'center', borderRadius: '5px'}}>   {/*style="width: 50%; */}
                    <div className="frame1" style={{marginTop: '50px', width: '50%'}}> 
                      <form>    
                        <label htmlFor="search-id">ID:</label>
                        <input type="number" name="search-id" id="search-id" className="form-create" required defaultValue placeholder="User ID Numeric Value" minLength={6} readOnly="readonly" title="Minimimum 6 Numric Characters" /> <br />                                                       
                        <label htmlFor="update-firstName">FirstName:</label>
                        <input type="text" name="update-firstName" defaultValue placeholder="Employee firstName" className="form-create" required /> <br />
                        <input type="hidden" name="hiddenID" defaultValue /><br />  
                        <label htmlFor="update-lastName">LastName:</label>
                        <input type="text" name="update-lastName" defaultValue placeholder="Employee lastName" className="form-create" required /><br />
                        <label htmlFor="update-email">Email:</label>
                        <input type="email" name="update-email" defaultValue className="form-create" placeholder="Employee Email" required /><br />
                        <label htmlFor="update-manager">Manger:</label>
                        <input type="text" name="update-manager" defaultValue placeholder="Employee Manager" className="form-create" /><br />
                        {/* <span id="unit-container" style="display:none;"></span> */}
                      </form>
                    </div>                                    
                    <div className="frame2" style={{marginTop: '50px', width: '50%'}}>  
                      <form>    
                        <label htmlFor="update-nid">NID:</label>
                        <input type="number" name="update-nid" defaultValue placeholder="Employee NID" className="form-create" /><br />
                        <label htmlFor="update-salary">Salary:</label>
                        <input type="number" name="update-salary" defaultValue placeholder="Employee Salary Only Number Allowed" className="form-create" /> <br />                                       
                        <label htmlFor="update-start">Start Date:</label>
                        <input type="date" name="update-start" defaultValue placeholder="Employee Start Date" className="form-create" /><br />                                          
                        <label htmlFor="update-end">End Date:</label>
                        <input type="date" name="update-end" defaultValue placeholder="Employee End Date" className="form-create" /> <br />                                      
                        <label htmlFor="update-title">Title:</label>
                        <input type="text" name="update-title" className="form-create" defaultValue placeholder="Employee Title" /> <br />
                      </form>
                    </div>
                  </div>   
                  <section style={{textAlign: 'center', padding: '15px'}}> <input type="submit" name="update-employee" defaultValue="Update" className="form-create" /> </section>
                </div>
              </div> 
            </div>
          </div>
          <div style={{padding: '15px'}}><footer>DXC Technology</footer></div>
        </div>
     ); } 
   

export default App;
