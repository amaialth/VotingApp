export class Voting {
    candidateName: string;
    voteCount: number;
    constructor(candidateName?: string,
        voteCount?: number) {
        this.candidateName = candidateName ? candidateName : '';
        this.voteCount = voteCount ? voteCount : 0;
    }
}