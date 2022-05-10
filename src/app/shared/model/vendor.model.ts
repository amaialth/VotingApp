export class Vendor {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    gstin: string;
    pan: string;
    tan: string; constructor(id?: string,
        name?: string,
        address?: string,
        phone?: string,
        email?: string,
        gstin?: string,
        pan?: string,
        tan?: string,) {
        this.id = id ? id : '';
        this.name = name ? name : '';
        this.address = address ? address : '';
        this.phone = phone ? phone : '';
        this.email = email ? email : '';
        this.gstin = gstin ? gstin : '';
        this.pan = pan ? pan : '';
        this.tan = tan ? tan : '';
    }

}