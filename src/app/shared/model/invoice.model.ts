import { InvoiceLineItem } from "./invoice-line-item";

export class Invoice {
	invoiceNumber: string;
	poNumber: string;
	financeNumber: string;
	invoiceDate: string;
	grossAmount: number;
	adjAmount: number;
	grandTotal: number;
	invoiceQuantity: number;
	invoiceLineItems: InvoiceLineItem[];
	constructor(invoiceNumber?: string,
		poNumber?: string,
		financeNumber?: string,
		invoiceDate?: string,
		grossAmount?: number,
		adjAmount?: number,
		grandTotal?: number,
		invoiceQuantity?: number,
		invoiceLineItems?: InvoiceLineItem[]) {
		this.invoiceNumber = invoiceNumber ? invoiceNumber : '';
		this.poNumber = poNumber ? poNumber : '';
		this.financeNumber = financeNumber ? financeNumber : '';
		this.invoiceDate = invoiceDate ? invoiceDate : '';
		this.grossAmount = grossAmount ? grossAmount : 0;
		this.adjAmount = adjAmount ? adjAmount : 0;
		this.grandTotal = grandTotal ? grandTotal : 0;
		this.invoiceQuantity = invoiceQuantity ? invoiceQuantity : 0;
		this.invoiceLineItems = invoiceLineItems ? invoiceLineItems : [];
	}
}