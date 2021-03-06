import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../../style/userPage/userPage.css';
import { cityLocation } from '../../../others/cityLocation';
import axios from 'axios';

function PostCreateDetails(props) {
  const [postForm, setPostForm] = useState({
    Title: '',
    description: '',
    location: '',
    donationType: '',
    totalAmount: 0,
  });
  const [files, setFiles] = useState({
    imageList: '',
    profilePic: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append('profilePic', files.profilePic);

    for (const key in files.imageList) {
      formdata.append('imageList', files.imageList[key]);
    }
    formdata.append('Title', postForm.Title);
    formdata.append('description', postForm.description);
    formdata.append('location', postForm.location);
    formdata.append('donationType', postForm.donationType);
    formdata.append('totalAmount', postForm.totalAmount);
    formdata.append('token', localStorage.getItem('user'));
    console.log(...formdata);
    const data = await axios.post(
      'http://localhost:5000/post/createpost',
      formdata
    );

    window.location.replace('http://localhost:5001/user');

      

  };

  return (
    <div>
      <h1 className='user-header'>Creating new post</h1>
      <form
        encType='multipart/form-data'
        className='post-container'
        onSubmit={handleSubmit}
      >
        <div className='post-create-container'>
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
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            name='title'
            id='title'
            className='user-form-input'
            value={postForm.Title}
            onChange={(e) =>
              setPostForm({ ...postForm, Title: e.target.value })
            }
          />
          <div>
            <div>
           
           
              <label htmlFor='title'>Location:</label>
              <select
                name='city'
                id='city'
                className='user-form-dropdown'
                value={postForm.location}
                onChange={(e) =>
                  setPostForm({ ...postForm, location: e.target.value })
                }
              >
             
             
             
             
                  <option>Select Location:</option>
                {cityLocation.map((city) => (
                
                <option value={city} key={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Donation type:</label>
              <div className='user-form-radio-container'>
                <input
                  type='radio'
                  id='post-radio-cash'
                  name='donation-type'
                  value='cash'
                  className='user-form-radio'
                  onClick={(e) =>
                    setPostForm({ ...postForm, donationType: e.target.value })
                  }
                />
                <label htmlFor='post-radio-cash'>Cash</label>
                <input
                  type='radio'
                  id='post-radio-in-kind'
                  name='donation-type'
                  value='in-kind'
                  className='user-form-radio'
                  onClick={(e) =>
                    setPostForm({ ...postForm, donationType: e.target.value })
                  }
                />
                <label htmlFor='post-radio-in-kind'>In-kind</label>
                <input
                  type='radio'
                  id='post-radio-both'
                  name='donation-type'
                  value='both'
                  className='user-form-radio'
                  onClick={(e) =>
                    setPostForm({ ...postForm, donationType: e.target.value })
                  }
                />
                <label htmlFor='post-radio-both'>Both</label>
              </div>
            </div>
            <div>
              <label htmlFor='totalAmount'>Total amount:</label>
              <input
                type='number'
                name='totalAmount'
                id='totalAmount'
                className='user-form-input'
                value={postForm.totalAmount}
                onChange={(e) =>
                  setPostForm({ ...postForm, totalAmount: e.target.value })
                }
              />
            </div>
          </div>
          <label htmlFor='description'>Details:</label>
          <textarea
            name='description'
            value={postForm.description}
            onChange={(e) =>
              setPostForm({ ...postForm, description: e.target.value })
            }
            id='description'
            className='user-form-textarea'
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
              setFiles({ ...files, imageList: multifiles });
            }}
            multiple
            className=''
          ></input>
          <div>
            <Link to='/user'>Cancel</Link>
            <button>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostCreateDetails;
