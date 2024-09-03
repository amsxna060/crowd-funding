import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css'],
})
export class CreateCampaignComponent implements OnInit {
  campaignForm: FormGroup;
  currentStep = 1;
  categories = ['Technology', 'Art', 'Community', 'Design', 'Film', 'Music'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.campaignForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: [null, Validators.required],
      goalAmount: ['', Validators.required],
      deadline: ['', Validators.required],
      rewards: this.fb.array([this.createReward()]),
    });
  }

  createReward(): FormGroup {
    return this.fb.group({
      rewardTitle: ['', Validators.required],
      rewardDescription: ['', Validators.required],
      rewardImage: [null, Validators.required],
    });
  }

  get rewards(): FormArray {
    return this.campaignForm.get('rewards') as FormArray;
  }

  addReward(): void {
    this.rewards.push(this.createReward());
  }

  removeReward(index: number): void {
    this.rewards.removeAt(index);
  }

  nextStep(): void {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.campaignForm.patchValue({ image: file });
  }

  onRewardImageSelected(event: any, index: number): void {
    const file = event.target.files[0];
    this.rewards.at(index).patchValue({ rewardImage: file });
  }

  onSubmit(): void {
    if (this.campaignForm.valid) {
      console.log('Campaign submitted:', this.campaignForm.value);
      // Here you can call a service to handle the form submission
    }
  }
}
