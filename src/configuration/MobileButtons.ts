import {AiOutlineApple} from "react-icons/ai";
import {SiGoogleplay} from "react-icons/si"
import { IconType } from "react-icons/lib";

export interface MobileButtonsInterface {
    header: string;
    subHeader: string,
    link: string,
    icon: IconType
}

const mobileButtons: MobileButtonsInterface[] = [
    {
        subHeader: "Download on the",
        header: "App Store",
        icon: AiOutlineApple,
        link: "https://apps.apple.com/US/app/id1456723497?mt=8"
    },
    {
        subHeader: "GET IT ON",
        header: "Google Play",
        icon: SiGoogleplay,
        link: "https://play.google.com/store/apps/details?id=jp.co.atm.smile.ww&referrer=af_tranid%3DHDTVvPG0P55YxT24x_TZSA%26shortlink%3D377a5f03%26pid%3Dofficialsite%26c%3Dofficialsite_en%26af_web_id%3De261466a-a0bd-40d0-abe7-1ee2eb96a213-o"
    }
]

export default mobileButtons

