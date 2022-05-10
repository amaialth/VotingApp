import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ElectionService } from 'src/app/services/election.service';
import { Candidate } from 'src/app/shared/model/candidate.model';
import { Election } from 'src/app/shared/model/election.model';

@Component({
  selector: 'app-new-election',
  templateUrl: './new-election.component.html',
  styleUrls: ['./new-election.component.scss']
})
export class NewElectionComponent implements OnInit {
  election:Election = new Election();
  electionForm=this.formBuilder.group({
    electionName:[this.election.electionName,[Validators.required]],
    electionDate: [this.election.electionDate,[Validators.required]],
    candidatesArray: this.formBuilder.array([]),
  });
  message = '';
  errMessage = '';
  saveLoading=false;
  constructor(private formBuilder: FormBuilder, 
    private modelRef: NgbActiveModal,
    private electionService: ElectionService) { }

  ngOnInit(): void {
    this.addNewCandidate();
  }
  myFilter = (d: Date | null): boolean => {
    let today = new Date();
    const day = (d || new Date()) >= today;
    // Prevent Saturday and Sunday from being selected.
    return day;
  };
  addNewCandidate() {
    this.election.candidates.push(new Candidate());

    (<FormArray>this.electionForm.get("candidatesArray")).push(
      this.formBuilder.group({
        name: ["", [Validators.required, Validators.min(1)]],
        gender: ["", [Validators.required, Validators.min(1)]],
        address: ["", [Validators.required]],
        phone: ["", [Validators.required, Validators.min(1)]]
      })
    );
    console.log(this.electionForm);
  }
  close() {
    this.modelRef.close();
  }

  isFieldInvalid(fieldName: string) {
    let control = this.electionForm.controls[fieldName];
    if (control && (control.dirty || control.touched) && control.errors && control.enabled)
      return true;
    else
      return false;
  }

  delete(index: number) {
    this.election.candidates.splice(index, 1);
    (<FormArray>this.electionForm.get("candidatesArray")).removeAt(index);
  }
  saveElection(): void {
    this.saveLoading = true;
    const candidates = this.election.candidates.map((obj)=> {return Object.assign({}, obj)});
    this.election.candidates = candidates;
    this.electionService.create(this.election).then(() => {
      this.message = 'Created new election successfully!';
      this.saveLoading = false;
    }).
    catch(()=>{
      this.errMessage = 'Error in creating Election';
    });
  }

}
