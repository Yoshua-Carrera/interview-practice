import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Note } from './note-reader.models';

/**
 * 
Assignment requirements
  Your assessment is to create a Single Page App to store text notes in Angular;
  
  Each note contains two fields: title and contents;
  
  The application should allow users to add, view, edit and delete notes;
  
  Notes may be stored in memory. That is, the application does not need to store and reload notes if it is interrupted;
  
  One has to be able to run the application locally exclusively by running npm start, that is: if the application has any external dependencies, it should be resolved by the run script without manual intervention;

Bonus:
  You may earn bonus points by:
    - Providing an interface with enhanced usability;
    - Providing a persistence mechanism for notes, such as relational database, unstructured storage service, text files, etc.;
    - Good source code structure and organization;
    - Less code rather than more code;
    - Suitably commented code;
    - Writing additional text document providing deployment instructions, such as hosting environment, provisioning, configurations, etc. For this, you may pretend your application will be deployed in Azure;

https://www.evernote.com/shard/s546/client/snv?isnewsnv=true&noteGuid=5044105d-986a-b802-ee54-f0ed3a98fcae&noteKey=CtFgjLH80yW3wRONxRVpFC0bs83mfBHe2qqsT4rH3r4wFgLoI8IzR9-ZVA&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs546%2Fsh%2F5044105d-986a-b802-ee54-f0ed3a98fcae%2FCtFgjLH80yW3wRONxRVpFC0bs83mfBHe2qqsT4rH3r4wFgLoI8IzR9-ZVA&title=notelist
 * 
 */

@Component({
  selector: 'app-note-reader',
  templateUrl: './note-reader.component.html',
  styleUrls: ['./note-reader.component.scss'],
})
export class NoteReaderComponent implements OnInit {
  notes: Note[] = [];
  activeNote: Note;
  noteForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  clearNote() {
    console.log('hi');
    this.noteForm.setValue({
      title: '',
      body: '',
    });
  }
  saveNote() {
    this.notes.push({
      title: this.noteForm.value['title'],
      body: this.noteForm.value['body'],
    });
    this.noteForm.setValue({
      title: '',
      body: '',
    });
  }

  setActiveNote(note: Note) {
    this.activeNote = note;
    this.noteForm.setValue(note);
  }

  clearActiveNote() {
    this.noteForm.setValue({
      title: '',
      body: '',
    });
  }

  removeNote(note: Note) {
    this.notes = this.notes.filter((n) => n.title !== note.title);
  }

  get canSubmit() {
    return this.notes.some(
      (note) => note.title === this.noteForm.value['title']
    );
  }
}
