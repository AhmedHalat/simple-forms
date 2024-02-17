import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('template') templateEl: any;

  title = 'templates';
  template: any = {}

  copy() {
    const content = this.templateEl.nativeElement.innerText;
    let finalText = content;

    content.match(/\+\/\n.*\n\/\+/gm).forEach((match: string) => {
      finalText = finalText.replace(match, '');
    });

    window.navigator.clipboard.writeText(finalText)
  }

  removeFor(text) {
    if (text.startsWith('For ')) {
      return text.replace('For ', '');
    }
    return text;
  }
}
