import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Election } from '../shared/model/election.model';

@Injectable({
    providedIn: 'root'
})
export class ElectionService {
    private dbPath = '/election';
    electionRef!: AngularFirestoreCollection<Election>;
    constructor(private db: AngularFirestore) {
        this.electionRef = db.collection(this.dbPath);
    }
    getAll(): AngularFirestoreCollection<Election> {
        return this.electionRef;
    }
    create(election: Election): any {
        //return this.electionRef.doc().set(Object.assign({}, election));
       return this.electionRef.add({ ...election });
    }
    update(id: string, data: any): Promise<void> {
        return this.electionRef.doc(id).update(data);
    }
    delete(id: string): Promise<void> {
        return this.electionRef.doc(id).delete();
    }
}