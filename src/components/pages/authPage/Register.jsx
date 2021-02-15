import React from 'react';

function Register(props) {
    return (
        <div >
            <div>
                <h1>Account Details</h1>
            </div>
            <form action="" className='register-form'>
                <div>
                    <img src="" alt="Upload photo here" />
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder='Email' />
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" placeholder='Password' />
                    <label htmlFor="confirm-pass">Confirm Password</label>
                    <input type="text" name="confirm-pass" id="confirm-pass" placeholder='confirm Password' />
                </div>
                <div>
                    <label htmlFor="org-name">Organization Name</label>
                    <input type="text" name="org-name" id="org-name" placeholder='Organization Name' />
                    <label htmlFor="org-num">Organization No.</label>
                    <input type="text" name="org-num" id="org-num" placeholder='Organization No.' />
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" placeholder='City' />
                    <label htmlFor="zip-code">Zip Code</label>
                    <input type="text" name="zip-code" id="zip-code" placeholder='Zip Code' />
                    <label htmlFor="org-address">Organization Address</label>
                    <input type="text" name="org-address" id="org-address" placeholder='Organization Address' />
                    <label htmlFor="org-doc">Organization Documents</label>
                    <input type="file" id="org-doc" name="org-doc" multiple></input>
                    <label htmlFor="rep-name">Representative Name</label>
                    <input type="text" name="rep-name" id="rep-name" placeholder='Representative Name' />
                    <label htmlFor="rep-id">Representative ID</label>
                    <input type="file" id="rep-id" name="rep-id" multiple></input>
                    <label htmlFor="org-description">Organization Description</label>
                    <textarea name="org-description" id="org-description" cols="30" rows="5"></textarea>
                </div>
                <div>
                    <a href="">Cancel</a>
                    <button>Send Registration</button>
                </div>
            </form>
        </div>
    );
}

export default Register;