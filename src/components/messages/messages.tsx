import React from 'react'
import s from './messages.module.css'
import Chat from '../chat/chat';
import Contact from '../contact/contact';

const Messages: React.FC<MessagesProps> = (props) => {
    let contacts = props.contacts.map(c => <Contact key={c.id} id={c.id} name={c.name} />
    )
    return (
        <div className={s.messages}>
            <div className={s.inner}>
                <div className={s.contacts}>
                    <button className='quick-posting__btn'><p>CONTACTS</p></button>
                    <ul className={s.contact_list}>
                        {contacts}
                    </ul>
                </div>
                <Chat authId={props.authId} messages={props.messages} sendMessage={props.sendMessage} />
            </div>
        </div>
    )
}
export default Messages;