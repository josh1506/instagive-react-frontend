import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { cityLocation } from '../../../others/cityLocation'

function UserPostDetails(props) {
    const post = props.post
    const [editPost, setEditPost] = useState(false)
    const [postForm, setPostForm] = useState({
        Title: '',
        description: '',
        location: '',
        donationType: ''
    })

    useEffect(() => {
        if (post) setPostForm({
            Title: post.Title,
            description: post.description,
            location: post.location,
            donationType: post.donationType,
        })
    }, [post])

    const handleSubmit = () => {
        // axios for handling postForm
        // axios.post('', postForm)
        // axios for handling files
        // axios.post('', files)
    }

    if (!props.post) {
        return (
            <div>Loading...</div>
        )
    }

    console.log(props);

    return (
        <div>
            <h1>Post Details</h1>
            {!editPost ? <button onClick={() => setEditPost(true)}>Edit</button> : ''}
            <form className='post-container'>
                <div className="post-create-container">
                    <label className='form-label' htmlFor='post-profile-pic'>
                        Cover Photo
                    </label>
                    <img src={`/docs/${post.imageName}`} alt="Profile Photo Here" />

                    <label htmlFor="title">Title:</label>
                    {!editPost ?
                        <p>{post.Title}</p> :
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={postForm.Title}
                            onChange={e => setPostForm({ ...postForm, Title: e.target.value })}
                        />
                    }

                    <div>
                        <div>
                            <label htmlFor="title">Location:</label>
                            {!editPost ?
                                <p>{post.location}</p> :
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
                            }


                        </div>
                        <div>
                            <label htmlFor="">Donation Type:</label>
                            {!editPost ?
                                <p>{post.donationType}</p> :
                                <div>
                                    <input type="radio"
                                        id="post-radio-cash"
                                        name="donation-type"
                                        value="cash"
                                        defaultChecked={postForm.donationType === "cash" ?
                                            true : false}
                                        onClick={e => setPostForm({ ...postForm, donationType: e.target.value })}
                                    />
                                    <label htmlFor="post-radio-cash">Cash</label>
                                    <input type="radio"
                                        id="post-radio-in-kind"
                                        name="donation-type"
                                        value="in-kind"
                                        defaultChecked={postForm.donationType === 'in-kind'
                                            ? true : false}
                                        onClick={e => setPostForm({ ...postForm, donationType: e.target.value })}
                                    />
                                    <label htmlFor="post-radio-in-kind">In-kind</label>
                                    <input type="radio"
                                        id="post-radio-both"
                                        name="donation-type"
                                        value="both"
                                        defaultChecked={postForm.donationType === "both"
                                            ? true : false}
                                        onClick={e => setPostForm({ ...postForm, donationType: e.target.value })}
                                    />
                                    <label htmlFor="post-radio-both">Both</label>
                                </div>
                            }
                        </div>
                    </div>
                    <label htmlFor="details">Details:</label>
                    {!editPost ?
                        <p>{post.description}</p> :
                        <textarea
                            name='postDetails'
                            value={post.description}
                            onChange={e => setPostForm({ ...postForm, description: e.target.value })}
                            id='postDetails'
                            className=''
                        ></textarea>
                    }
                    <label className='form-label' htmlFor='postImages'>
                        Images:
                    </label>

                    <img src="" alt="Image 1" />
                    <img src="" alt="Image 2" />
                    <img src="" alt="Image 3" />

                    {editPost ?
                        <div>
                            <button onClick={() => setEditPost(false)}>Cancel</button>
                            <button>Save</button>
                        </div> : ''
                    }
                </div>
            </form>
            {!editPost &&
                <div>
                    <button onClick={() => props.history.push('/user')}>View Post List</button>
                </div>
            }
        </div>
    );
}


const mapStateToProps = (state, myProps) => {
    return { post: state.user.post.find(post => post._id === myProps.match.params.id) }
}

export default connect(mapStateToProps)(UserPostDetails);