import React, {useState} from 'react';
import Image from 'next/image';
import {MdVerified} from 'react-icons/md';
import {TiTick} from 'react-icons/ti';


import Style from './FollowerTabCard.module.css';
import images from '../../../img';

const FollowerTabCard = ({i, el}) => {
    const [following, setFollowing] = useState(false);

    const followMe = () => {
        if (!following){
            setFollowing(true);
        } else {
            setFollowing(false);
        }
    }

    return (
        <div className={Style.FollowerTabCard}>
            <div className={Style.FollowerTabCard_rank}>
                <p>
                    #{i + 1}
                    <span>🥇</span>
                </p>
            </div>

            <div className={Style.FollowerTabCard_box}>
                <div className={Style.FollowerTabCard_box_img}>
                    <Image
                        className={Style.FollowerTabCard_box_img_img} 
                        src={el.background} 
                        alt="profile background" 
                        width={500} 
                        height={300} 
                        objectFit="cover"
                    />
                </div>
                <div className={Style.FollowerTabCard_box_profile}>
                    <Image
                        className={Style.FollowerTabCard_box_profile_img} 
                        src={el.user} 
                        alt="profile picture" 
                        width={50} 
                        height={50} 
                    />
                </div>

                <div className={Style.FollowerTabCard_box_info}>
                    <div className={Style.FollowerTabCard_box_info_name}>
                        <h4>Test Tester{" "} 
                            <span>
                                <MdVerified />
                            </span>
                        </h4>
                        <p>12.467 ETH</p>
                    </div>
                    <div className={Style.FollowerTabCard_box_info_following}>
                        {!following? (
                            <p onClick={() => followMe()}>
                                Follow
                            </p>
                        ) : (
                            <p onClick={() => followMe()}>
                                Following {" "} <span><TiTick /></span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowerTabCard