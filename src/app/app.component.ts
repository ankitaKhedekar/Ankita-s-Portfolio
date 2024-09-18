import { Component,OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router, RouterOutlet } from '@angular/router';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,RouterModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  isHoveringAbout = false;
  isHoveringSkills = false;
  isHoveringExperience = false;
  isHoveringProjects = false;
  isDarkMode = false;
  // texts = [" a Software Developer"," a Web Developer","a UI/UX Developer", "a Full Stack Developer","a Backend Developer"];
  // typingSpeed = 150;
  // erasingSpeed = 100;
  // newTextDelay = 2000; // Delay between current and next text
  // textIndex = 0;
  // charIndex = 0;



  constructor(private router: Router,private library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedin);

  }
 
 


  ngOnInit() {
    // Load the saved theme preference on initialization
    this.isDarkMode = localStorage.getItem('dark-mode') === 'true';
    this.applyTheme();
    // setTimeout(() => this.type(), this.newTextDelay);

  }



  

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('dark-mode', this.isDarkMode.toString());
    this.applyTheme();
  }

  applyTheme() {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    document.querySelector('.navbar')?.classList.toggle('dark-mode', this.isDarkMode);
  }



  navigateToHome() {
    this.router.navigate(['/']);
  }

  /* Abbout */

  onHoverAbout() {
    this.isHoveringAbout = true;
  }

  onLeaveAbout() {
    this.isHoveringAbout = false;
  }

  navigateToAbout(event: MouseEvent) {
    if (this.isHoveringAbout) {
      this.router.navigate(['/about']);
    }
  }

  /* skills */
  onHoverSkills() {
    this.isHoveringSkills = true;
  }

  onLeaveSkills() {
    this.isHoveringSkills = false;
  }

  navigateToSkills(event: MouseEvent) {
    if (this.isHoveringSkills) {
      this.router.navigate(['/skills']);
    }
  }

    /* Experience */

    onHoverExperience() {
      this.isHoveringExperience = true;
    }
  
    onLeaveExperience() {
      this.isHoveringExperience = false;
    }
  
    navigateToExperience(event: MouseEvent) {
      if (this.isHoveringExperience) {
        this.router.navigate(['/experience']);
      }
    }
  

     /* Projects */

     onHoverProjects() {
      this.isHoveringProjects = true;
    }
  
    onLeaveProjects() {
      this.isHoveringProjects = false;
    }
  
    navigateToProjects(event: MouseEvent) {
      if (this.isHoveringProjects) {
        this.router.navigate(['/projects']);
      }
    }


    // type() {
    //   const typedTextElement = document.getElementById('typed-text');
    //   if (typedTextElement) {
    //     if (this.charIndex < this.texts[this.textIndex].length) {
    //       typedTextElement.textContent += this.texts[this.textIndex].charAt(this.charIndex);
    //       this.charIndex++;
    //       setTimeout(() => this.type(), this.typingSpeed);
    //     } else {
    //       setTimeout(() => this.erase(), this.newTextDelay);
    //     }
    //   }
    // }
  
    // erase() {
    //   const typedTextElement = document.getElementById('typed-text');
    //   if (typedTextElement) {
    //     if (this.charIndex > 0) {
    //       typedTextElement.textContent = this.texts[this.textIndex].substring(0, this.charIndex - 1);
    //       this.charIndex--;
    //       setTimeout(() => this.erase(), this.erasingSpeed);
    //     } else {
    //       this.textIndex = (this.textIndex + 1) % this.texts.length;
    //       setTimeout(() => this.type(), this.typingSpeed + 1000);
    //     }
    //   }
    // }
}
