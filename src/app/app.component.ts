import { Component, OnInit, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  title = 'Fernanda Melchor';
  constructor(
    private metaTagService: Meta,
    private titleService: Title
    ){}
    ngOnInit(){
      this.metaTagService.addTags([
        { name: 'description', content: 'Birthday card for Fernanda Melchor' },
        { name: 'keywords', content: 'birthday, fernanda melchor, e.t., julio melchor, melchor' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Julio César Melchor Pinto' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no' },
        { name: 'date', content: '2020-06-03', scheme: 'YYYY-MM-DD' },
        { name: 'application-name', content:'Birthday'},
        { name: 'apple-mobile-web-app-status-bar', content:'#000000'},
        { name: 'theme-color', content:'white' },
        { property:'og:title', content:'Fernanda Melchor'},
        { property:'og:type', content:'Birthday Card'},
        { property:'og:site_name', content:'Fernanda´s Birthday Card'},
        { property:'og:url', content:'https://fernandamelchor.web.app'},
        { property:'og:image', content:'assets/images/ET-finger.png'},
        { property:'og:description', content:'Web application for Fernanda´s birthday'},
        { charset: 'UTF-8' }
      ]);
      this.titleService.setTitle(this.title);
    }


  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }
}
