function form() {
  return `
    <div class="container">
    <p>Welcome to Butter Day Spa</p>
    <form method="POST" action="/submit">

    <div class="form-label">
      <label for='recipientFirstName'>Recipient First Name:</label>
      </div>
      <input type="text" 
             placeholder="Recipient First Name"
             id="recipientFirstName" 
             name="recipientFirstName" 
             required 
             class="form-input" />
             
      <br />
      <br />

      <div class="form-label">
      <label for='buyerFirstName'>Buyer First Name:</label>
      </div>
      <input type="text" 
             placeholder="Buyer First Name"
             id="buyerFirstName" 
             name="buyerFirstName" 
             required 
             class="form-input" />
             
      <br />
      <br />

      <div class="form-label">
      <label for='giftDescription'>Gift Description:</label>
      </div>
      <input type="text" 
             placeholder="Gift Description"
             id="giftDescription" 
             name="giftDescription" 
             required 
             class="form-input" />
             
      <br />
      <br />

      <div class="form-label">
      <label for='giftName'>Gift Name:</label>
      </div>
      <select name='giftName' id='giftName' required class="form-select">
      <option value="Select Option">Please Select an Option</option>
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
    
      <br />
      <br />

      <div class="form-label">
      <label for='message'>Message:</label>
      </div>
      <input
        type="text"
        placeholder="Message"
        name="message"
        id="message"
        required
        class="form-message"
      />
      <br />
      <br />

      <div class="form-label">
      <label for='initials'>Initials #:</label>
      </div>
      <input
        type="text"
        placeholder="Initials"
        name="initials"
        id="initials"
        required
        class="form-input"
      />
    
      <br />
      <br />

      <div class="form-label">
      <label for='voucher'>Voucher #:</label>
      </div>
      <input
        type="text"
        placeholder="Voucher"
        name="voucher"
        id="voucher"
        required
        class="form-input"
      />
      
      <br />
      <br />

      <div class="form-label">
      <label for='costCode'>Cost Code #:</label>
      </div>
      <input
        type="text"
        placeholder="Cost Code"
        name="costCode"
        id="costCode"
        required
        class="form-input"
      />
      
      <br />
      <br />

      <div class="form-label">
      <label for='recipientLastName'>Recipient Last Name:</label>
      </div>
      <input
        type="text"
        placeholder="Recipient Last Name"
        name="recipientLastName"
        id="recipientLastName"
        required
        class="form-input"
      />
    
      <br />
      <br />

      <div class="form-label">
      <label for='recipientEmail'>Recipient Email:</label>
     </div>
      <input
        type="email"
        placeholder="Recipient Email Address"
        name="recipientEmail"
        id="recipientEmail"
        required
        class="form-input"
      />
      
      <br />
      <br />

      <div class="form-label">
      <label for='buyerEmail'>Buyer Email:</label>
      </div>
      <input
        type="email"
        placeholder="Buyer Email Address"
        name="buyerEmail"
        id="buyerEmail"
        required
        class="form-input"
      />
    
      <br />
      <br />

      <div class="form-button">
      <button type="submit" class="form-button">Generate PDF</button>
    </div>

    </form>
</div>
<style>

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.container {
  color: black;
  border: 1px solid rgb(199, 199, 199);
  width: 17.5rem;
  border-radius: 5px;
  padding: 20px; 
  font-size: 12px;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 60px;
  box-shadow: 0 2px 40px rgba(0, 0, 0, 1); /* Box shadow properties */
}


.form-input {
  border-radius: 5px;
  border: 1px solid rgb(199, 199, 199);
  width: 16.8rem;
}

.form-message {
  height: rem;
  width: 16.8rem;
}


.form-select{
  border-radius: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 12px;
}

.form-button {
  border-radius: 5px;
}


</style>
  `;
}

module.exports = {form}
