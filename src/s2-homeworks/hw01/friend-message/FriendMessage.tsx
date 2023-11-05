import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from '../HW1';



// создать тип вместо any и отобразить приходящие данные
export type FriendPropsType = {
    message: MessageType
}

const FriendMessage = (props: FriendPropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img src={'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png'}
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент

                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {'Alex'}

                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {'Hi'}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {'22:15'}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
