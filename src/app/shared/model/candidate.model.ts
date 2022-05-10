export class Candidate {
    name: string;
    gender: string;
    address: string;
    phone: string;
    constructor(name?: string,
        gender?: string,
        address?: string,
        phone?: string) {
        this.name = name ? name : '';
        this.gender = gender ? gender : '';
        this.address = address ? address : '';
        this.phone = phone ? phone : '';
    }
}