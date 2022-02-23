import { Role } from "./role";

export class User {

    constructor(
        public id: number = 0,
        public firstName: string = '',
        public lastName: string = '',
        public email: string = '',
        public role: Role = new Role(),
    ) { }

    get name() {
        return this.firstName + ' ' + this.lastName;
    }
}