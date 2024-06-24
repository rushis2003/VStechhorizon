// import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface Message {
//   text: string;
//   user: boolean;
// }

// @Component({
//   selector: 'app-chatbot',
//   templateUrl: './chatbot.component.html',
//   styleUrls: ['./chatbot.component.scss']
// })
// export class ChatbotComponent implements OnInit, AfterViewChecked {
//   messages: Message[] = [];
//   newMessage: string = '';
//   showChatInterface: boolean = false;

//   @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {}

//   ngAfterViewChecked() {
//     this.scrollToBottom();
//   }

//   scrollToBottom(): void {
//     try {
//       this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
//     } catch (err) {
//       console.error('Scroll to bottom failed', err);
//     }
//   }

//   toggleChatInterface() {
//     this.showChatInterface = !this.showChatInterface;
//   }

//   sendMessage() {
//     if (this.newMessage.trim() === '') return;

//     const userMessage: Message = { text: this.newMessage, user: true };
//     this.messages.push(userMessage);

//     this.http.post<any>('http://localhost:3006/message', { text: this.newMessage })
//       .subscribe(response => {
//         const botMessage: Message = { text: response.message, user: false };
//         this.messages.push(botMessage);
//       });

//     this.newMessage = '';
//   }
// }


import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Message {
  text: string;
  user: boolean;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  messages: Message[] = [];
  newMessage: string = '';
  showChatInterface: boolean = false;

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    if (this.messagesContainer) {
      try {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      } catch (err) {
        console.error('Scroll to bottom failed:', err);
      }
    }
  }

  toggleChatInterface() {
    this.showChatInterface = !this.showChatInterface;
  }

  sendMessage() {
    if (this.newMessage.trim() === '') return;

    const userMessage: Message = { text: this.newMessage, user: true };
    this.messages.push(userMessage);
    // this.scrollToBottom(); // Scroll after adding user message

    this.http.post<any>('http://192.168.0.3:3006/message', { text: this.newMessage })
      .subscribe(response => {
        const botMessage: Message = { text: response.message, user: false };
        this.messages.push(botMessage);
         // Scroll after adding bot message
      });
      // this.scrollToBottom();

    this.newMessage = '';
  }
}
