import { Timestamp } from "rxjs";
import { Candidate } from "./candidate.model";
import { Voting } from "./voting.model";

export class Election {
    id?:string;
    electionName: string;
    createdDate: Date;
    electionDate: Date;
    candidates: Candidate[];
    voting: Voting[];
    status:string;
    voted: string[];
    winner: Voting;
    constructor(
        electionName?: string,
        createdDate?: Date,
        electionDate?: Date,
        candidates?: Candidate[],
        voting?: Voting[],
        status?:string,
        voted?: string[],
        winner?: Voting){
        this.electionName = electionName?electionName:'';
        this.createdDate = createdDate?createdDate:new Date();
        this.electionDate = electionDate? electionDate:new Date();
        this.candidates = candidates?candidates:[];
        this.voting = voting? voting:[];
        this.status = status? status:'Not Started';
        this.voted = voted?voted:[];
        this.winner = winner?winner:new Voting;

    }
}