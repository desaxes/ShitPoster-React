import React from 'react';
import profile_head_img from './../../img/profile_head.png'
import logo from './../../img/shit_icon.png'
import s from './profile.module.css'
import Post from './../posts/post'
import avatar from './../../img/shit_icon.svg'
import { addPostActionCreator, addUpdatePostTextActionCreator } from '../../redux/profile-reducer';
import { Navigate } from 'react-router-dom';
import ProfileStatus from './profile-status';



const Profile = (props) => {
    let newPostElement = React.createRef();
    let addQuickPost = (e) => {
        e.preventDefault();
        props.addPost('Shitposter', avatar, 'Now', '0', '0')
    }
    let posts = props.posts.map(p => <Post key={p.id} name={p.name} avatar={p.avatar} time={p.time}
        postimage={p.postimage} posttext={p.posttext} com_count={p.com_count} like_count={p.like_count} />
    )

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);
    }
    let onSubClick = (e) => {
        e.preventDefault();
        props.following(props.profileInfo.followed, props.profileInfo.userId)
    }

    return (
        <div className={s.profile}>
            <div className={s.head}>
                <img className={s.header} src={profile_head_img} alt='profile__header'></img>
                <div className='page-block'>
                    <div className={s.info_block}>
                        <img className={s.avatar} src={props.profileInfo.photos.large === null ? logo : props.profileInfo.photos.large} alt='avatar'></img>
                        <div className={s.info_inf}>
                            <div className={s.name}>{props.profileInfo.fullName}</div>
                            <ProfileStatus status={'React-Redux'}/>
                            <div className={s.desc_block}>
                                <p className={s.question}>Rating:</p>
                                <p className={s.answer}>10000</p>
                            </div>
                            <div className={s.desc_block}>
                                <p className={s.question}>Posts Counter:</p>
                                <p className={s.answer}>3</p>
                            </div>
                        </div>
                        {props.profileInfo.userId != props.auth.id && <div className={s.btn_block}>
                            <div className='quick-posting-btnbox'>
                                <button className='quick-posting__btn'>Send Message</button>
                            </div>
                            <div className='quick-posting-btnbox'>
                                <button disabled={props.subscribeProgress.some(id => id === props.profileInfo.userId)} onClick={onSubClick} className={`${'quick-posting__btn'} ${props.profileInfo.followed && s.f_color}`}>
                                    {props.profileInfo.followed ? 'Unsubscribe' : 'Subscribe'}</button>
                            </div>
                            <div className='quick-posting-btnbox'>
                                <button className='quick-posting__btn'>Show Subs</button>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            {props.profileInfo.userId === props.auth.id &&<form className='quick-posting page-block'>
                <textarea onChange={onPostChange} ref={newPostElement} placeholder='Enter Text' className='quick-posting-field' value={props.newPostText}>

                </textarea>
                <div className='quick-posting-btnbox'>
                    <button onClick={addQuickPost} type='submit' className='quick-posting__btn'>Quick Post</button>
                </div>
            </form>}
            <div className="page-block">
                {posts}
            </div>
        </div>
    )
}
export default Profile;