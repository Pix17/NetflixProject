import { Component, Input, OnInit } from '@angular/core';
import { ILink } from '@models/footer-interface';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() col1 !: ILink[];
  @Input() col2 !: ILink[];
  @Input() col3 !: ILink[];
  @Input() col4 !: ILink[];

  constructor() { }

  ngOnInit(): void {
  }

}
