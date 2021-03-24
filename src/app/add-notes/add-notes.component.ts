import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  notesForm: FormGroup;
  noteIndex: number;
  name: string;
  initialNote = true;
  notesList = [{
    title: 'Note title',
    description: 'Sample note'
  }];
  
  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createNotesForm();
  }

  /**
   * Create Add payment partner Form
   */
   createNotesForm() {
    this.notesForm = this.getFormGroup();
  }

  getFormGroup(): FormGroup {
    return this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  /**
   * Save notes
   */
  onSubmit(): void {
    if (this.notesForm.valid) {
      if(this.initialNote) {
        this.notesList[0] = this.notesForm.value;
        this.initialNote = false;
        this.noteIndex = null;
      } else {
        if (this.noteIndex >= 0 && this.noteIndex != null) {
          this.notesList[this.noteIndex] = this.notesForm.value;
        } else {
          this.notesList.push(this.notesForm.value);
          this.noteIndex = null;
        } 
      }    
      this.notesForm.reset();
    }    
  }

  /**
   * Edits note
   * @param note : selected note
   * @param index : selected note index
   */
  editNote(note: Object, index: number): void {
    this.notesForm.setValue(note);
    this.noteIndex = index;
  }

  /**
   * Deletes note
   * @param index : Selected note index
   */
  deleteNote(index: number): void {
    this.notesList.splice(index, 1)
    if(this.notesList && this.notesList.length < 1 ) {
      this.notesList.push({
        title: 'Note title',
        description: 'Sample note'
      })
    }
  }


  /**
   * Get FormGroup controls instance
   *
   * @param formGroupName : formGroupName
   * @param formControlName : formControlName
   */
   getFormGroupControls(
    formGroupName: string,
    formControlName: string
  ): AbstractControl {
    return this.notesForm.controls[formControlName];
  }

  /**
   * Logouts add notes component and redirect to login page
   */
  logout(): void {
    this.router.navigate(['/']);
  }

}
