export class College {
    id: number; 
    name: string;
    logo: ImageBitmap;
    city: string;
    state: string;
    users: Array<User>;

    constructor(id: number, name: string, logo: ImageBitmap, city: string, state: string, users: Array<User>) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.city = city; 
        this.state = state;
        this.users = users;
    }
}

export class User {
    id: number; 
    email: string;
    password: string;
    collegeAffiliationID: number;
    name: string;
    profilePic?: ImageBitmap;
    background?: ImageBitmap;
    followers: Array<User>;
    about: string;
    projects?: Array<Project>;
    tags: Array<string>

    constructor(id: number, email: string, password: string, collegeAffiliationID: number, name: string, profilePic: ImageBitmap,
        background: ImageBitmap, followers: Array<User>, about: string, projects: Array<Project>, tags: Array<string>) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.collegeAffiliationID = collegeAffiliationID;
        this.name = name; 
        this.profilePic = profilePic;
        this.background = background;
        this.followers = followers;
        this.about = about;
        this.projects = projects;
        this.tags = tags;
    }
}

export class Project {
    id: number;
    ownerID: number;
    name: string;
    background?: ImageBitmap;
    followers: Array<User>;
    tag: string;
    proposal: string;
    description: string;

    constructor(id: number, ownerID: number, name: string, background: ImageBitmap, followers: Array<User>, tag: string,
        proposal: string, description: string) {
        this.id = id;
        this.ownerID = ownerID;
        this.name = name;
        this.background = background;
        this.followers = followers;
        this.tag = tag;
        this.proposal = proposal;
        this.description = description;    
    }
}

export interface State {
    college: Array<College>;
    users: Array<User>;
    currentUser: User;
}

export default State;