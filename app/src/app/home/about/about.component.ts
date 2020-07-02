import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/core/models/author';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  authors: Author[];

  constructor() { }

  ngOnInit(): void {
    this.authors = [
      {
        name: 'Arthur Meurer Saraiva',
        github: 'artsaraiva',
        description: 'Engenharia de Software'
      },
      {
        name: 'Douglas Schneider',
        github: 'DougsSc',
        description: 'Engenharia da Computação - Desenvolvedor em Liquid'
      },
      {
        name: 'Marcelo Zerbieli Nicaretta',
        github: 'MNicaretta',
        description: 'Desenvolvedor de Software na Interact Solutions'
      },
      {
        name: 'Mauricio Ribeiro Xavier',
        github: 'MX1994',
        description: 'Desenvolvedor de Software na Interact Solutions e músico nas horas vagas'
      }
    ]
  }

  getLink(author: Author): string {
    return `https://github.com/${author.github}`;
  }

  getIcon(author: Author): string {
    return `https://github.com/${author.github}.png`;
  }

  getAt(author: Author): string {
    return `@${author.github}`;
  }
}
