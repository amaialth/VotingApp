import { Invoice } from "./invoice.model";
import { Vendor } from "./vendor.model";

export class Asset {
	id: string;
	serialNumber: string;
	assetCategory: string;
	make: string;
	model: string;
	specification: string;
	otherDetails: string;
	createdDate: Date;
	assignedDate: Date;
	assignedBy: string;
	status: string;
	active: boolean;
	invoice: Invoice;
	vendor: Vendor;
	constructor(id?: string,
		serialNumber?: string,
		assetCategory?: string,
		make?: string,
		model?: string,
		specification?: string,
		otherDetails?: string,
		createdDate?: Date,
		assignedDate?: Date,
		assignedBy?: string,
		status?: string,
		active?: boolean,
		invoice?: Invoice,
		vendor?: Vendor) {
		this.id = id ? id : '';
		this.serialNumber = serialNumber ? serialNumber : '';
		this.assetCategory = assetCategory ? assetCategory : '';
		this.make = make ? make : '';
		this.model = model ? model : '';
		this.specification = specification ? specification : '';
		this.otherDetails = otherDetails ? otherDetails : '';
		this.createdDate = createdDate ? createdDate : new Date();
		this.assignedDate = assignedDate ? assignedDate : new Date();
		this.assignedBy = assignedBy ? assignedBy : '';
		this.active = active ? active : true;
		this.status = status ? status : '';
		this.invoice = invoice ? invoice : new Invoice();
		this.vendor = vendor ? vendor : new Vendor();
	}
}