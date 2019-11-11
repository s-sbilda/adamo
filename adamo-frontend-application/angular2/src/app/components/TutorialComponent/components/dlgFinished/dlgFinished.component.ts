import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { LevelService } from "../../services/level.service";


@Component({
    selector: 'dlgFinished',
    templateUrl: './dlgFinished.component.html',
    styleUrls: ['./dlgFinished.component.css']
})
export class DialogFinishedComponent {

    constructor(
        private router: Router,
        private dialogRef: MatDialogRef<DialogFinishedComponent>,
        @Inject(MAT_DIALOG_DATA) private data, 
        private levelService: LevelService)
    { }

    save() {
        // Update users finished module in database
        this.levelService.updateFinished(this.data.userid, this.data.cat, 'intro')

        this.dialogRef.close()

        this.router.navigate(['/tutorial/start'])
    }

    close() {
        this.dialogRef.close();
    }
}