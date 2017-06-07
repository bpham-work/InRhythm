import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Box } from './box';

/**
 * Component displaying number of boxes for a given input count
 *
 * @Input count - number of boxes to render
 * */

@Component({
    selector: 'ir-boxes',
    templateUrl: 'irboxes.html',
    styleUrls: ['irboxes.css']
})
export class IrBoxesComponent implements OnChanges {
    @Input() public count: number;

    public boxes: Array<Box> = [];

    // Lifecycle hook triggered when @Input attributes are changed
    ngOnChanges(changes: SimpleChanges): void {
        this.boxes = [];
        for (let index = 0; index < this.count; index++) {
            let newBox = new Box(index);
            this.boxes.push(newBox);
        }
    }

    removeBoxAtIndex(boxIndex: number): void {
        this.boxes.splice(boxIndex, 1);
    }
}