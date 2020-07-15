import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flowy',
  templateUrl: './flowy.component.html',
  styleUrls: ['./flowy.component.scss']
})

export class FlowyComponent implements OnInit, AfterViewInit {
  rightcard = false;
  tempblock: any;
  tempblock2: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setupFlowy();
  }

  setupFlowy(): void {
    const spacingX = 40;
    const spacingY = 100;

    document.getElementById('blocklist').innerHTML = `<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/eye.svg"></div><div class="blocktext">                        <p class="blocktitle">New visitor</p><p class="blockdesc">Triggers when somebody visits a specified page</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/action.svg"></div><div class="blocktext">                        <p class="blocktitle">Action is performed</p><p class="blockdesc">Triggers when somebody performs a specified action</p></div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/time.svg"></div><div class="blocktext">                        <p class="blocktitle">Time has passed</p><p class="blockdesc">Triggers after a specified amount of time</p>          </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="4"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/error.svg"></div><div class="blocktext">                        <p class="blocktitle">Error prompt</p><p class="blockdesc">Triggers when a specified error happens</p>              </div></div></div>`;

    // Initialize Flowy
    flowy(document.getElementById('canvas'), this.onGrab, this.onRelease, this.onSnap, this.onRearrange, spacingX, spacingY);
    this.setupListener();
  }

  onGrab = (block: any): void => {
    block.classList.add('blockdisabled');
    this.tempblock2 = block;
    // When the user grabs a block
  }

  onRelease = (): void => {
    if (this.tempblock2) {
      this.tempblock2.classList.remove('blockdisabled');
  }
    // When the user releases a block
  }

  onSnap = (block: any, first: any, parent: any): boolean => {
    // When a block snaps with another one
    const grab = block.querySelector('.grabme');
    grab.parentNode.removeChild(grab);
    const blockin = block.querySelector('.blockin');
    blockin.parentNode.removeChild(blockin);
    if (block.querySelector('.blockelemtype').value === '1') {
            block.innerHTML += '<div class="blockyleft"><img src="assets/eyeblue.svg"><p class="blockyname">New visitor</p></div><div class="blockyright"><img src="assets/more.svg"></div><div class="blockydiv"></div><div class="blockyinfo">When a <span>new visitor</span> goes to <span>Site 1</span></div>';
        } else if (block.querySelector('.blockelemtype').value === '2') {
            block.innerHTML += '<div class="blockyleft"><img src="assets/actionblue.svg"><p class="blockyname">Action is performed</p></div><div class="blockyright"><img src="assets/more.svg"></div><div class="blockydiv"></div><div class="blockyinfo">When <span>Action 1</span> is performed</div>';
        } else if (block.querySelector('.blockelemtype').value === '3') {
            block.innerHTML += '<div class="blockyleft"><img src="assets/timeblue.svg"><p class="blockyname">Time has passed</p></div><div class="blockyright"><img src="assets/more.svg"></div><div class="blockydiv"></div><div class="blockyinfo">When <span>10 seconds</span> have passed</div>';
        } else if (block.querySelector('.blockelemtype').value === '4') {
            block.innerHTML += '<div class="blockyleft"><img src="assets/errorblue.svg"><p class="blockyname">Error prompt</p></div><div class="blockyright"><img src="assets/more.svg"></div><div class="blockydiv"></div><div class="blockyinfo">When <span>Error 1</span> is triggered</div>';
        } else if (block.querySelector('.blockelemtype').value === '5') {
            block.innerHTML += '<div class="blockyleft"><img src="assets/databaseorange.svg"><p class="blockyname">New database entry</p></div><div class="blockyright"><img src="assets/more.svg"></div><div class="blockydiv"></div><div class="blockyinfo">Add <span>Data object</span> to <span>Database 1</span></div>';
        } else if (block.querySelector('.blockelemtype').value === '6') {
            block.innerHTML += '<div class="blockyleft"><img src="assets/databaseorange.svg"><p class="blockyname">Update database</p></div><div class="blockyright"><img src="assets/more.svg"></div><div class="blockydiv"></div><div class="blockyinfo">Update <span>Database 1</span></div>';
        } else if (block.querySelector('.blockelemtype').value === '7') {
            block.innerHTML += '<div class="blockyleft"><img src="assets/actionorange.svg"><p class="blockyname">Perform an action</p></div><div class="blockyright"><img src="assets/more.svg"></div><div class="blockydiv"></div><div class="blockyinfo">Perform <span>Action 1</span></div>';
        } else if (block.querySelector('.blockelemtype').value === '8') {
            block.innerHTML += '<div class="blockyleft"><img src="assets/twitterorange.svg"><p class="blockyname">Make a tweet</p></div><div class="blockyright"><img src="assets/more.svg"></div><div class="blockydiv"></div><div class="blockyinfo">Tweet <span>Query 1</span> with the account <span>@alyssaxuu</span></div>';
        } else if (block.querySelector('.blockelemtype').value === '9') {
            block.innerHTML += '<div class="blockyleft"><img src="assets/logred.svg"><p class="blockyname">Add new log entry</p></div><div class="blockyright"><img src="assets/more.svg"></div><div class="blockydiv"></div><div class="blockyinfo">Add new <span>success</span> log entry</div>';
        } else if (block.querySelector('.blockelemtype').value === '10') {
            block.innerHTML += '<div class="blockyleft"><img src="assets/logred.svg"><p class="blockyname">Update logs</p></div><div class="blockyright"><img src="assets/more.svg"></div><div class="blockydiv"></div><div class="blockyinfo">Edit <span>Log Entry 1</span></div>';
        } else if (block.querySelector('.blockelemtype').value === '11') {
            block.innerHTML += '<div class="blockyleft"><img src="assets/errorred.svg"><p class="blockyname">Prompt an error</p></div><div class="blockyright"><img src="assets/more.svg"></div><div class="blockydiv"></div><div class="blockyinfo">Trigger <span>Error 1</span></div>';
        }
    return true;
  }

  onRearrange = (block: any, parent: any): void => {
    // When a block is rearranged
  }

  setupListener(): void {

    let aclick = false;
    let noinfo = false;

    const beginTouch = (event: any) => {
        aclick = true;
        noinfo = false;
        if (event.target.closest('.create-flowy')) {
            noinfo = true;
        }
    };

    const checkTouch = (event: any) => {
        aclick = false;
    };

    const doneTouch = (event: any) => {
        if (event.type === 'mouseup' && aclick && !noinfo) {
          if (!this.rightcard && event.target.closest('.block') && !event.target.closest('.block').classList.contains('dragging')) {
                this.tempblock = event.target.closest('.block');
                this.rightcard = true;
                document.getElementById('properties').classList.add('expanded');
                document.getElementById('propwrap').classList.add('itson');
                this.tempblock.classList.add('selectedblock');
          }
        }
    };

    addEventListener('mousedown', beginTouch, false);
    addEventListener('mousemove', checkTouch, false);
    addEventListener('mouseup', doneTouch, false);

    this.addEventListenerMulti('touchstart', beginTouch, false, '.block');
  }

  addEventListenerMulti(type: any, listener: any, capture: any, selector: any): void {
      const nodes = document.querySelectorAll(selector);

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < nodes.length; i++) {
          nodes[i].addEventListener(type, listener, capture);
      }
  }

}
