import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subscription, fromEvent, merge} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { MessageService } from '../../../messages/message.service';

import { INttbalance } from '../../../models';
import { NttbalanceService } from '../nttbalance.service';

import { NumberValidators } from '../../../shared/number.validator';
import { GenericValidator } from '../../../shared/generic-validator';

@Component({
  selector: 'app-nttbalance-edit',
  templateUrl: './nttbalance-edit.component.html',
  styleUrls: ['./nttbalance-edit.component.scss']
})
export class NttbalanceEditComponent implements OnInit, AfterViewInit, OnDestroy  {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  pageTitle = 'Balance Sheet Edit';
  errorMessage: string;
  nttbalanceForm: FormGroup;

  balance: INttbalance;

  private sub: Subscription;


  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private nttbalanceService: NttbalanceService,
   private messageService: MessageService) {
    this.validationMessages = {
      IntitulCompte: {
          required: 'Intitule Compte name is required.',
          minlength: 'Intitule Compte name must be at least three characters.',
          maxlength: 'Intitule Compte name cannot exceed 50 characters.'
      },
      NumCompte: {
          required: 'Compte Number is required.'
      }/* ,
      SoldeDebit: {
        required: 'Rate the Compte between 1 (lowest) and 5 (highest).'
      } */
  };

  // Define an instance of the validator for use with this form,
  // passing in this form's set of validation messages.
  this.genericValidator = new GenericValidator(this.validationMessages);
   }

  ngOnInit() {
    this.nttbalanceForm = this.fb.group({
      IntitulCompte: ['', [Validators.required,
                         Validators.minLength(3),
                         Validators.maxLength(50)]],
      NumCompte: ['', Validators.required],
    //  SoldeDebit: ['', Validators.required],
   //   tags: this.fb.array([]),
   SoldeDebit: '',
   SoldeCredit: ''
  });

     // Read the product Id from the route parameter
 this.sub = this.route.params.subscribe(
params => {
const id = params['id'];
this.getBalance(id);
}
    );

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
}


  getBalance(id: string) {
    this.nttbalanceService.getBalance(id)
        .subscribe(
                (balance: INttbalance) => this.onbalanceRetrieved(balance),
                (error: any) => this.errorMessage = <any>error
        );
      }

      ngAfterViewInit(): void {
        // Watch for the blur event from any input element on the form.
        const controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

        // Merge the blur event observable with the valueChanges observable
        merge(this.nttbalanceForm.valueChanges, ...controlBlurs).pipe(debounceTime(800)).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.nttbalanceForm);
        });
    }


     /* addTag(): void {
        this.tags.push(new FormControl());
    } */

    onbalanceRetrieved(balance: INttbalance): void {
      if (this.nttbalanceForm) {
          this.nttbalanceForm.reset();
      }

      this.balance = balance;

      if (this.balance.id === null) {
          this.pageTitle = 'Add balance';
      } else {
          this.pageTitle = `Edit balance: ${this.balance.IntitulCompte}`;
      }

// Update the data on the form
this.nttbalanceForm.patchValue({
IntitulCompte: this.balance.IntitulCompte,
NumCompte: this.balance.NumCompte,
SoldeDebit: this.balance.SoldeDebit,
SoldeCredit: this.balance.SoldeCredit
});

  }

  deleteBalance(): void {
    if (this.balance.id === null) {
        // Don't delete, it was never saved.
        this.onSaveComplete();
  } else {
        if (confirm(`Really delete the balance: ${this.balance.IntitulCompte}?`)) {
            this.nttbalanceService.deleteBalance(this.balance.id)
                .subscribe(
                    () => this.onSaveComplete(`${this.balance.IntitulCompte} was deleted`),
                    (error: any) => this.errorMessage = <any>error
                );
        }
    }
}

saveBalance(): void {
  if (this.nttbalanceForm.dirty && this.nttbalanceForm.valid) {
  // Copy the form values over the product object values
      const p = Object.assign({}, this.balance, this.nttbalanceForm.value);

      this.nttbalanceService.saveBalance(p)
      .subscribe(
        () => this.onSaveComplete(`${this.balance.IntitulCompte} was saved`),
        (error: any) => this.errorMessage = <any>error
      );
        }   else if (!this.nttbalanceForm.dirty) {
                this.onSaveComplete();
        }
                  // this.errorMessage='please correct the validation errors.';
}

onSaveComplete(message?: string): void {
  if (message) {
   this.messageService.getMessage();
 }
  // Reset the form to clear the flags
     this.nttbalanceForm.reset();
   // Navigate back to the product list
   this.router.navigate(['/nttbalances']);
}



}
