export class InvoiceLineItem {
    description: string;
    quantity: number;
    ratePerPiece: number;
    total: number;
    constructor(description?: string,
        quantity?: number,
        ratePerPiece?: number,
        total?: number) {
        this.description = description ? description : '';
        this.quantity = quantity ? quantity : 0;
        this.ratePerPiece = ratePerPiece ? ratePerPiece : 0;
        this.total = total ? total : 0;
    }
}