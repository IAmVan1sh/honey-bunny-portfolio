export interface Description {
    id: number;
    header: string;
    inner: string;
    button: boolean;
    buttonText: string;
}

export interface DescriptionProps {
    description: Description[];
    swiperIndex: number;
}