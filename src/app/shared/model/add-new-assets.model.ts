import { Asset } from "./asset.model";
import { Invoice } from "./invoice.model";
import { Vendor } from "./vendor.model";

export class AddNewAssetsRequest{
    vendor:Vendor;
	invoice:Invoice;
	assets:Asset[];
    constructor(vendor?:Vendor,
        invoice?:Invoice,
        assets?:Asset[]){
            this.vendor=vendor?vendor:new Vendor();
            this.invoice=invoice?invoice:new Invoice();
            this.assets=assets?assets:[];
    }
}