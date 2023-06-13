import React, { useState } from 'react';
import profile_head_img from './../../img/profile_head.png'
import logo from './../../img/shit_icon.png'
import s from './profile.module.css'
import Post from './../posts/post'
import avatar from './../../img/shit_icon.png'
import ProfileStatus from './profile-status';
import { useForm } from 'react-hook-form';
import { Tabs, Textarea } from '@mantine/core';

const Profile = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onSubmit' });
    let posts = [...props.posts].reverse().map(p => p.userId === props.profileInfo.userId && <Post postId={p.userId} key={p.id} name={p.name} avatar={p.avatar} time={p.time}
        postimage={p.postimage} posttext={p.posttext} com_count={p.com_count} like_count={p.like_count} />
    )
    // let userPosts = posts.filter(e => e.props.postId === props.profileInfo.userId)
    // let onSubClick = (e) => {
    //     e.preventDefault();
    //     props.following(props.profileInfo.followed, props.profileInfo.userId)
    // }
    let onSubmit = (e) => {
        props.addPost(props.auth.id, props.profileInfo.fullName, avatar, 'Now', e.postText, '0', '0')
        reset()
    }
    return (
        <div className={s.profile}>
            <div className={s.head}>
                <img className={s.header} src={profile_head_img} alt='profile__header'></img>
                <div className='page-block'>
                    <Tabs defaultValue='Profile'>
                        <Tabs.List grow>
                            <Tabs.Tab value='Profile'>Profile</Tabs.Tab>
                            <Tabs.Tab value='About'>About</Tabs.Tab>
                            <Tabs.Tab value='Subs'>Subs</Tabs.Tab>
                            <Tabs.Tab value='Comments'>Comments</Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel pt={30} value='Profile'>
                            <div className={s.info_block}>
                                <div className={s.avatar_box}>
                                    <img className={s.avatar} src={props.profileInfo.photos.large === null ? logo : props.profileInfo.photos.large} alt='avatar'></img>
                                </div>
                                <div className={s.info_inf}>
                                    <div className={s.name}>{props.profileInfo.fullName}</div>
                                    {<ProfileStatus setStatus={props.setStatus} profileId={props.profileInfo.userId}
                                        authId={props.auth.id} status={props.status} />}
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
                                        <button
                                            // disabled={props.subscribeProgress.some(id => id === props.profileInfo.userId)} onClick={onSubClick} 
                                            className={`${'quick-posting__btn'} ${props.profileInfo.followed && s.f_color}`}>
                                            {props.profileInfo.followed ? 'Unsubscribe' : 'Subscribe'}</button>
                                    </div>
                                    <div className='quick-posting-btnbox'>
                                        <button className='quick-posting__btn'>Show Subs</button>
                                    </div>
                                </div>}
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel pt={30} value='About'>
                            {props.profileInfo.aboutMe === null ? <p className={s.about}>"There could be a description of me here"</p> : <p className={s.about}> {props.profileInfo.aboutMe}</p>}
                        </Tabs.Panel>
                        <Tabs.Panel pt={30} value='Subs'>
                        </Tabs.Panel>
                        <Tabs.Panel pt={30} value='Comments'>
                        </Tabs.Panel>
                    </Tabs>


                </div>
            </div>
            {props.profileInfo.userId === props.auth.id &&
                <form onSubmit={handleSubmit(onSubmit)} className='quick-posting page-block'>
                    <Textarea error={errors?.postText?.message} label='Quick Post' size='xl' {...register("postText", { required: "✎ You must enter the text ⇒", minLength: { value: 10, message: "Min length is 10 symbols" } })} placeholder='Enter Text'
                        className='quick-posting-field' />
                    <div className='quick-posting-btnbox'>
                        <input value={'Post'} type='submit' className='quick-posting__btn' />
                    </div>
                </form>}
            <div className="page-block">
                {posts}
            </div>
        </div>
    )
}
export default Profile;