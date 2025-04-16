import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'floraasb';
  loading = true;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.simularCarregamentoInicial();
  }

  private simularCarregamentoInicial(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const overlay = this.elementRef.nativeElement.querySelector('.loading-overlay');
        if (overlay) {
          this.renderer.addClass(overlay, 'hidden');
        }
        setTimeout(() => (this.loading = false), 500);
      }, 4800);
    }
  }

  setLoading(isLoading: boolean): void {
    this.loading = isLoading;
  }
}
