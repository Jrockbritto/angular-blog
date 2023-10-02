import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {this.id = params.get('id')})
    this.setValues(this.id);
  }

  setValues(id: string | null) {
    const result = dataFake.find(data => data.id.toString() === id);
    if(result) {
      this.photoCover = result.cover;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }
  }

}
