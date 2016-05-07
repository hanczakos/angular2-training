export class User {
    id: number;
    name: string;
    email: string;

    constructor(user?:User) {
        if (user) {
            this.id = user.id;
            this.name = user.name;
            this.email = user.email;
        } else {
            this.id = Math.floor(Math.random()*10000);
            this.name = "";
            this.email = "";
        }
    }
}