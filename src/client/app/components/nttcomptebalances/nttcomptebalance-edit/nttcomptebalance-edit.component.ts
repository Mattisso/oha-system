import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChildren, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {debounceTime } from 'rxjs/operators';
import { Observable, Subscription, fromEvent, merge} from 'rxjs';





import {Nttcomptebalance, INttcomptebalance , INttcomptebalancedetail} from '../../../models';
import { NttcomptebalancesService } from '../nttcomptebalance.service';
import { MessageService } from '../../../messages/message.service';
// import { NumberValidators } from '../../../shared/number.validator';
import { GenericValidator } from '../../../shared/generic-validator';


@Component({
  selector: 'app-nttcomptebalance-edit',
  templateUrl: './nttcomptebalance-edit.component.html',
  styleUrls: ['./nttcomptebalance-edit.component.css']
})
export class NttcomptebalancesEditComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  pageTitle = 'nttcomptebalance Edit';
      errorMessage: string;
     nttcomptebalanceForm: FormGroup;
      @Input() comptebalance: INttcomptebalance;
      private sub: Subscription;


  constructor() { }

  ngOnInit() {
  }

}
