type SocialImageObj = {
    id: number;
    image: string;
    url: string;
    alt: string;
}

export interface SocialAssetsInterface {
    comments: string[];
    socials: SocialImageObj[];
    socialCircles: SocialImageObj[];
}
