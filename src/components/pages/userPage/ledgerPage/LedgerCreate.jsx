import React from 'react';

function LedgerCreate(props) {
    return (
        <div>
            <div>
                <label htmlFor="">Select Post</label>
                <select>
                    <option>Post 1</option>
                    <option>Post 2</option>
                    <option>Post 3</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Email(optional)</label>
                <input type="text" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Donation Type</label>
                <select>
                    <option>Cash</option>
                    <option>In-kind</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Payment Method(if money donation)</label>
                <input type="text" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Amoung/Item</label>
                <input type="text" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Remarks</label>
                <input type="text" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Date</label>
                <p>calendar</p>
            </div>
            <div>
                <a href='#'>Cancel</a>
                <button>Save</button>
            </div>
        </div>
    );
}

export default LedgerCreate;