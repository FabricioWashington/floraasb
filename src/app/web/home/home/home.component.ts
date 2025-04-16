import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  media: { type: 'image' | 'video', src: string }[] = [
    // Imagens
    { type: 'image', src: 'assets/img1.jpeg' },
    { type: 'image', src: 'assets/img2.jpeg' },
    { type: 'image', src: 'assets/img3.jpeg' },
    { type: 'image', src: 'assets/img4.jpeg' },
    { type: 'image', src: 'assets/img5.jpeg' },
    { type: 'image', src: 'assets/img6.jpeg' },
    { type: 'image', src: 'assets/img7.jpeg' },
    { type: 'image', src: 'assets/img8.jpeg' },
    { type: 'image', src: 'assets/img9.jpeg' },

  ];

  nome = '';
  email = '';
  telefone = '';
  mensagem = '';

  constructor() { }

  ngOnInit(): void {

  }

  enviarEmail() {
    const numero = '5566996232903';
    const texto = `
Olá, meu nome é ${this.nome}.

📧 Email: ${this.email}
📱 Telefone: ${this.telefone}

💬 Mensagem:
${this.mensagem}
    `;

    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  }

}
