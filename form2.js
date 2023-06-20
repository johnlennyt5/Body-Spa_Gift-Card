function form2() {
    return(`
    
    <style>
     
body {
  background: linear-gradient(45deg,  #3F5EFB, #DAA520);
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

.container {
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
}

form {
  background: rgba(255, 255, 255, 0.3);
  padding: 1.5rem;
  height: 620px;
  border-radius: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  transition: all 0.2s ease-in-out;
}

form p {
  font-weight: 900;
  color: #4c59ff;
  opacity: 0.7;
  font-size: 1.5rem;
  margin-top: 10px;
  margin-bottom: 25px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

form input,
form select {
  background: transparent;
  width: 400px;
  padding: .5em;
  margin-bottom: 1em;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5000px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  text-align:center;
}

form input:hover,
form select:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
}

form input:focus,
form select:focus {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
}

form button {
  margin-top: 5px;
  margin-bottom: 3px;
  width: 175px;
  font-size: 1rem;
  padding: .25rem;
  border-radius: 5000px;

}

form button:hover {
  cursor: pointer;
  background-color: #7FFF00;
}

form button:active {
  background: rgba(255, 255, 255, 0.2);
}

form:hover {
    margin: 25px;
  }

  ::placeholder {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

  a,
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  .drop {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
    position: absolute;
    transition: all 0.2s ease;
  }

  .drop-1 {
    height: 80px;
    width: 80px;
    top: -20px;
    left: -40px;
    z-index: -1;
  }

  .drop-2 {
    height: 80px;
    width: 80px;
    bottom: -30px;
    right: -10px;
  }

  .drop-3 {
    height: 100px;
    width: 100px;
    bottom: 120px;
    right: -50px;
    z-index: -1;
  }

  .drop-4 {
    height: 120px;
    width: 120px;
    top: -60px;
    right: -60px;
  }

  .drop-5 {
    height: 60px;
    width: 60px;
    bottom: 170px;
    left: 90px;
    z-index: -1;
  }

    </style>
  
 <div class="container">
 <form method="POST" action="/submit">
 <p>Welcome to Butter Day Spa</p>
   <input type="text" 
          placeholder="RECIPIENT FIRST NAME"
          id="recipientFirstName" 
          name="recipientFirstName" 
          required 
        /> 

   <input type="text" 
          placeholder="BUYER FIRST NAME"
          id="buyerFirstName" 
          name="buyerFirstName" 
          required 
         />
 
   <input type="text" 
   placeholder="GIFT DISCRIPTION"
   id="giftDescription" 
   name="giftDescription" 
   required 
   class="form-input" />

   <select name='giftName' id='giftName' required class="form-select">
   <option value="Select Option">PLEASE SELECT AN OPTION</option>
   <option value="Swedish Massage">Swedish Massage</option>
   <option value="Deep Tissue Massage">Deep Tissue Massage</option>
   <option value="Europa Facial">Europa Facial</option>
   <option value="Couples Massage">Couples Massage</option>
   <option value="Twos Company Massage">Twos Company Massage</option>
   <option value="Symphony #5">Symphony #5</option>
   <option value="Never Never Land">Never Never Land</option>
   <option value="Duchess of Windsor">Duchess of Windsor</option>
   <option value="Mother-Daughter Retreat">Mother-Daughter Retreat</option>
   <option value="Make It a Double">Make It a Double</option>
   <option value="Queen of Hearts">Queen of Hearts</option>
   <option value="Take Two">Take Two</option>
   <option value="Bali Retreat">Bali Retreat</option>
   <option value="Daycation Symphony #5">Daycation Symphony #5</option>
   <option value="Daycation Bali Retreat">Daycation Bali Retreat</option>
   <option value="Forty Dollars">Forty Dollars ($40.00)</option>
   <option value="Fifty Dollars">Fifty Dollars ($50.00)</option>
   <option value="One Hundred Dollars">One Hundred Dollars ($100.00)</option>
   <option value="One Hundred-Fifty Dollars">One Hundred-Fifty Dollars ($150.00)</option>
   <option value="Two Hundred Dollars">Two Hundred Dollars ($200.00)</option>
   <option value="Spa Chi">Spa Chi</option>
   </select>
   
   <input
   type="text"
   placeholder="MESSAGE"
   name="message"
   id="message"
   required
   class="form-message"
 />
 <input
        type="text"
        placeholder="INITIALS"
        name="initials"
        id="initials"
        required
        class="form-input"
      />
      <input
      type="text"
      placeholder="VOUCHER"
      name="voucher"
      id="voucher"
      required
      class="form-input"
    />
    <input
        type="text"
        placeholder="COST CODE"
        name="costCode"
        id="costCode"
        required
        class="form-input"
      />
      <input
      type="text"
      placeholder="RECIPIENT LAST NAME"
      name="recipientLastName"
      id="recipientLastName"
      required
      class="form-input"
    />
    <input
    type="email"
    placeholder="RECIPIENT EMAIL ADDRESS"
    name="recipientEmail"
    id="recipientEmail"
    required
    class="form-input"
  />
  <input
  type="email"
  placeholder="BUYER EMAIL ADDRESS"
  name="buyerEmail"
  id="buyerEmail"
  required
  class="form-input"
/>

<button type="submit">Generate PDF</button>

 </form>
 <div class="drops">
   <div class="drop drop-1"></div>
   <div class="drop drop-2"></div>
   <div class="drop drop-3"></div>
   <div class="drop drop-4"></div>
   <div class="drop drop-5"></div>
 </div>
</div>
 
       


      `);
    }
    
    module.exports = { form2 };