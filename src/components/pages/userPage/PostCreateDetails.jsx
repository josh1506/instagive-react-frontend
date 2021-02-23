import React, { useState } from 'react';
import "../../../style/userPage/userPage.css";
import { cityLocation } from '../../others/cityLocation'

function PostCreateDetails(props) {
    const [postForm, setPostForm] = useState({
        Title: '',
        description: '',
        location: '',
        donationType: ''
    })
    const [files, setFiles] = useState({
        postImg: '',
        profilePic: '',
    });

    return (
        <div>
            <h1>Creating new post</h1>
            <form className='post-container'>
                <div className="post-create-container">
                    <label className='form-label' htmlFor='post-profile-pic'>
                        Cover Photo
                    </label>
                    <input
                        type='file'
                        id='post-profile-pic'
                        name='post-profile-pic'
                        onChange={(e) => {
                            const file = e.target.files[0];
                            setFiles({ ...files, profilePic: file });
                        }}
                        className=''
                    ></input>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={postForm.Title}
                        onChange={e => setPostForm({ ...postForm, Title: e.target.value })}
                    />
                    <div>
                        <div>
                            <label htmlFor="title">Location</label>
                            <select
                                name="city"
                                id="city"
                                value={postForm.location}
                                onChange={e =>
                                    setPostForm({ ...postForm, location: e.target.value })}
                            >
                                {cityLocation.map(city =>
                                    <option value={city} key={city}>
                                        {city}
                                    </option>
                                )}
                            </select>
                        </div>
                        <div>
                            <input type="radio"
                                id="post-radio-cash"
                                name="donation-type"
                                value="cash"
                                onClick={e => setPostForm({ ...postForm, donationType: e.target.value })}
                            />
                            <label htmlFor="post-radio-cash">Cash</label>
                            <input type="radio"
                                id="post-radio-in-kind"
                                name="donation-type"
                                value="in-kind"
                                onClick={e => setPostForm({ ...postForm, donationType: e.target.value })}
                            />
                            <label htmlFor="post-radio-in-kind">In-kind</label>
                            <input type="radio"
                                id="post-radio-both"
                                name="donation-type"
                                value="both"
                                onClick={e => setPostForm({ ...postForm, donationType: e.target.value })}
                            />
                            <label htmlFor="post-radio-both">Both</label>
                        </div>
                    </div>
                    <label htmlFor="details">Details:</label>
                    <textarea
                        name='postDetails'
                        value={postForm.postDetails}
                        onChange={e => setPostForm({ ...postForm, postDetails: e.target.value })}
                        id='postDetails'
                        className=''
                    ></textarea>
                    <label className='form-label' htmlFor='postImages'>
                        Images:
                    </label>
                    <input
                        type='file'
                        id='postImages'
                        name='postImages'
                        onChange={(e) => {
                            const multifiles = e.target.files;
                            setFiles({ ...files, postImg: multifiles });
                        }}
                        multiple
                        className=''
                    ></input>
                    <div>
                        <a href="#">Cancel</a>
                        <button>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PostCreateDetails;