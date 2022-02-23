export class User {

    constructor(
        public id: Number = 0,
        public firstName: string = '',
        public lastName: string = '',
        public email: string = '',
    ) { }

    get name() {
        return this.firstName + '' + this.lastName;
    }
}