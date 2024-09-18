import { Component,OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router, RouterOutlet } from '@angular/router';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FormsModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  texts = [" a Software Developer"," a Web Developer","a UI/UX Developer", "a Full Stack Developer","a Backend Developer"];
  typingSpeed = 150;
  erasingSpeed = 100;
  newTextDelay = 2000; // Delay between current and next text
  textIndex = 0;
  charIndex = 0;


  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedin);

  }
  ngOnInit() {
    // Load the saved theme preference on initialization
    
    setTimeout(() => this.type(), this.newTextDelay);

  }

  type() {
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
      if (this.charIndex < this.texts[this.textIndex].length) {
        typedTextElement.textContent += this.texts[this.textIndex].charAt(this.charIndex);
        this.charIndex++;
        setTimeout(() => this.type(), this.typingSpeed);
      } else {
        setTimeout(() => this.erase(), this.newTextDelay);
      }
    }
  }

  erase() {
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
      if (this.charIndex > 0) {
        typedTextElement.textContent = this.texts[this.textIndex].substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(() => this.erase(), this.erasingSpeed);
      } else {
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        setTimeout(() => this.type(), this.typingSpeed + 1000);
      }
    }
  }
}
