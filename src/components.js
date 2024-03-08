// Title and paragraph
export function MainBlock() {
    return (
      <div>
        <h1 id='mainblock-title'>Learn to code by watching others</h1>
        <p id='mainblock-para'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
    )
}

// Container for free trial
export function TryContainer() {
    return (
      <div className='try-container'>
        <p id='try-text'><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
      </div>
    );
};

// Placeholder values for each Form Container
const placeHolderValues = {
    firstName: "First Name",
    lastName: "Last Name",
    emailAdress: "Email Address",
    password: "Password"
  }

// Whole Form component
export function Form() {
    return (
      <section id='form-container'>
        <FormContainer placeholder={placeHolderValues.firstName} errorText="First Name cannot be empty"/>
        <FormContainer placeholder={placeHolderValues.lastName} errorText="Last Name cannot be empty"/>
        <FormContainer placeholder={placeHolderValues.emailAdress} errorText="Looks like this is not an email"/>
        <FormContainer placeholder={placeHolderValues.password} errorText="Password cannot be empty"/>
        <FormButton />
        <p id='agree-text'>By clicking the button, you are agreeing to our <span id='terms-services'>Terms and Services</span></p>
      </section>
    );
}; 

// Container for user input datas
export function FormContainer({placeholder, errorText}) {
    return (
        <div>
            <div className='form-field'>
                <input
                    className='input-text'
                    type='text'
                    placeholder={placeholder}>
                </input>
                <img
                    className="error-icon" 
                    src="assets/images/error-icon.svg"
                    alt="error icon" />
            </div>
            <p className="error-message">{errorText}</p>
        </div>
    );
};

export function errorMessage({errorText}) {
    return <p className="error-message">{errorText}</p>
}

// Free Trial button
export function FormButton() {
    return (
      <div className='form-button'>
        <button id='freetrial-button'>CLAIM YOUR FREE TRIAL</button>
      </div>
    );
};