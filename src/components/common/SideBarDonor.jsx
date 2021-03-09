import React from 'react';
import '../../style/common/sidebarDonor.css'

function SideBarDonor(props) {
    const { selectedPost: {
        totalDonors,
        totalAmount,
        currentAmount
    }
    } = props

    return (
        <aside className='sidebar-donor'>
            <div>
                <div>
                    <h3 className='sidebar-donor-data'>₱{currentAmount}</h3>
                    <p className='sidebar-donor-text'>Total Raise</p>
                </div>
                <div>
                    <h3 className='sidebar-donor-data'>₱{totalAmount}</h3>
                    <p className='sidebar-donor-text'>Target Amount</p>
                </div>
                <div>
                    <h3 className='sidebar-donor-data'>{totalDonors}</h3>
                    <p className='sidebar-donor-text'>Donors</p>
                </div>
            </div>
        </aside>
    );
}

export default SideBarDonor;