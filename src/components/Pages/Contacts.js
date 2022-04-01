import React from "react";
const Contacts=()=>{
    return(
        <div className='container'>
<div className='py-4'>
<h1>Contact Us</h1>
<form align-center>
    <table border="4">
<div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
</div>
<div >
  <label for="password" class="form-label">Password</label>
  <input type="password" class="form-control" id="password" placeholder="Password"/>
</div>
<div class="mb-3">
  <label for="confrimpassword" class="form-label">Confrim Password</label>
  <input type="confrimpassword" class="form-control" id="confrimpassword" placeholder="Confrim Password"/>
</div>
</table>
</form>
<button className='btn btn-primary'>Submit</button>
    </div>   
    </div> 
    )
}
export default Contacts;