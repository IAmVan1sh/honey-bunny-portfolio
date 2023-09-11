import first from './comments/first.png'
import second from './comments/second.png'
import third from './comments/third.png'
import fourth from './comments/fourth.png'
import facebook from './facebook.svg'
import facebookCircle from './facebookCircle.svg'
import instagram from './instagram.svg'
import instagramCircle from './instagramCircle.svg'
import telegram from './telegram.svg'
import telegramCircle from './telegramCircle.svg'
import {SocialAssetsInterface} from "../../types/socialAssets";

export const SocialAssets: SocialAssetsInterface = {
    comments: [
        first,
        second,
        third,
        fourth,
    ],

    socials: [
        {id: 1, image: instagram, url: '', alt: 'instagram'},
        {id: 2, image: telegram, url: '', alt: 'telegram'},
        {id: 3, image: facebook, url: '', alt: 'facebook'},
    ],

    socialCircles: [
        {id: 1, image: instagramCircle, url: '', alt: 'instagram'},
        {id: 2, image: telegramCircle, url: '', alt: 'telegram'},
        {id: 3, image: facebookCircle, url: '', alt: 'facebook'},
    ],
}