import { Timestamp } from "rxjs";
import { Candidate } from "./candidate.model";

export class Election {
    electionName: string;
    createdDate: Date;
    electionDate: Date;
    candidates: Candidate[];
    status:string;
    constructor(electionName?: string,
        createdDate?: Date,
        electionDate?: Date,
        candidates?: Candidate[],
        status?:string){

        this.electionName = electionName?electionName:'';
        this.createdDate = createdDate?createdDate:new Date();
        this.electionDate = electionDate? electionDate:new Date();
        this.candidates = candidates?candidates:[];
        this.status = status? status:'Not Started';

    }
}