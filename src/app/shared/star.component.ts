import { Component, Input, OnChanges, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
    @Input() rating:number = 0;
    @Input() productName: string = '';
    @Input() cursor: string  = ''
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.ratingClicked.emit(`${this.productName} has the rating ${this.rating}`)
    }

    ngOnInit(): void {
        this.cropWidth = this.rating * 75/5
    }
    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5
    }
}