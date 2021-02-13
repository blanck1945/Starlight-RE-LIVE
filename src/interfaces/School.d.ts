export interface SchoolInterface {
    id: string;
    desc: HTMLElement;
    chara: CharacterInterface[];
    school_img: any;
    slug: string;
    title: string;
    chara_name: string;
    school: string;
    school_logo: string;
    student_id: string;
    video: string;
    profile_img:any
}

export interface CharacterInterface {
    id: number;
    chara_name: string;
    school: string;
    school_logo: string;
    student_id: string;
    slug:string;
    title: string;
    video: string;
    desc: HTMLElement;
    profile_img:any
}