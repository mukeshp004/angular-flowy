import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class FlowyService {
    instance: any;
    d: any;
    template = `
        <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="1">
            <div class="grabme"><img src="assets/grabme.svg"></div>
            <div class="blockin">
                <div class="blockico"><span></span><img src="assets/eye.svg"></div>
                <div class="blocktext">
                    <p class="blocktitle">New visitor</p>
                    <p class="blockdesc">Triggers when somebody visits a specified page</p>
                </div>
            </div>
        </div>
        <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="2">
            <div class="grabme"><img src="assets/grabme.svg"></div>
            <div class="blockin">
                <div class="blockico"><span></span><img src="assets/action.svg"></div>
                <div class="blocktext">
                    <p class="blocktitle">Action is performed</p>
                    <p class="blockdesc">Triggers when somebody performs a specified action</p>
                </div>
            </div>
        </div>
        <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="3">
            <div class="grabme"><img src="assets/grabme.svg"></div>
            <div class="blockin">
                <div class="blockico"><span></span><img src="assets/time.svg"></div>
                <div class="blocktext">
                    <p class="blocktitle">Time has passed</p>
                    <p class="blockdesc">Triggers after a specified amount of time</p>
                </div>
            </div>
        </div>
        <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="4">
            <div class="grabme"><img src="assets/grabme.svg"></div>
            <div class="blockin">
                <div class="blockico"><span></span><img src="assets/error.svg"></div>
                <div class="blocktext">
                    <p class="blocktitle">Error prompt</p>
                    <p class="blockdesc">Triggers when a specified error happens</p>
                </div>
            </div>
        </div>
    `;

    constructor() {}
}
