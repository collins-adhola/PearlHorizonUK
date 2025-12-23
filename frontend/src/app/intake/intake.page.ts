import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonTextarea, 
  IonSelect, 
  IonSelectOption, 
  IonCheckbox, 
  IonButton,
  IonToast,
  ToastController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-intake',
  templateUrl: 'intake.page.html',
  styleUrls: ['intake.page.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonCheckbox,
    IonButton,
    IonToast
  ],
})
export class IntakePage implements OnInit {
  intakeForm: FormGroup;
  pathwayOptions = [
    { value: 'invest-work', label: 'Invest & Work' },
    { value: 'study', label: 'Study' },
    { value: 'visit', label: 'Visit' },
    { value: 'not-sure', label: 'Not sure' }
  ];
  timelineOptions = [
    { value: '0-30', label: '0–30 days' },
    { value: '1-3', label: '1–3 months' },
    { value: '3-6', label: '3–6 months' },
    { value: '6+', label: '6+ months' }
  ];
  budgetOptions = [
    { value: '0-500', label: '£0–£500' },
    { value: '500-1500', label: '£500–£1,500' },
    { value: '1500-3000', label: '£1,500–£3,000' },
    { value: '3000-7500', label: '£3,000–£7,500' },
    { value: '7500+', label: '£7,500+' }
  ];
  showToast = false;
  toastMessage = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) {
    this.intakeForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      country: [''],
      pathway: ['', [Validators.required]],
      goal: ['', [Validators.required]],
      timeline: ['', [Validators.required]],
      budget: ['', [Validators.required]],
      canShareDocuments: [false],
      consent: [false, [Validators.requiredTrue]]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['pathway']) {
        const pathwayMap: { [key: string]: string } = {
          'invest-work': 'invest-work',
          'study': 'study',
          'visit': 'visit'
        };
        const mappedPathway = pathwayMap[params['pathway']];
        if (mappedPathway) {
          this.intakeForm.patchValue({ pathway: mappedPathway });
        }
      }
    });
  }

  async onSubmit() {
    if (this.intakeForm.valid) {
      const payload = this.intakeForm.value;
      console.log('Intake form payload:', payload);

      // TODO: Add Supabase insert + Zoho notification
      
      const toast = await this.toastController.create({
        message: 'Thanks — we\'ll respond within 2 business days.',
        duration: 3000,
        position: 'bottom',
        color: 'success'
      });
      await toast.present();
    }
  }
}

