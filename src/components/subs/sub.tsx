import React from 'react';
import s from './subs.module.css'
import avatar from './../../img/shit_icon.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { following } from '../../redux/subs-reducer'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/redux-store';
type propsType = {
    key: number
    id: number
    name: string
    status: string
    followed: boolean
    avatar: string
    subscribeProgress: number[]
}
const Sub: React.FC<propsType> = (props) => {
    const dispatch:AppDispatch = useDispatch()
    let onSubClick = (e: any) => {
        e.preventDefault();
        dispatch(following(props.followed, props.id))
    }
    let setProfileInfo = (e: any) => {
        axios.get("https://social-network.samuraijs.com/api/1.0/follow/" + props.id, { withCredentials: true }).then(response => {
        })
    }
    return (
        <li className={s.sub}>
            <NavLink onClick={setProfileInfo} to={'/ShitPoster/profile/' + props.id} className={s.link_box}>
                <img className={s.avatar} src={props.avatar === null ? avatar : props.avatar} alt="" />
                <div className={s.text}>
                    <p className={s.title}>{props.name}</p>
                    <p className={s.desc}>{props.status === null ? "No Status" : props.status}</p>
                </div>
            </NavLink>
            <div className={s.btn_box}>
                <button disabled={props.subscribeProgress.some(id => id === props.id)} onClick={onSubClick} className={`${'quick-posting__btn'} ${props.followed && s.f_color}`}>
                    {props.followed ? 'Unsubscribe' : 'Subscribe'}
                </button>
            </div>
        </li>
    )
}
export { Sub }