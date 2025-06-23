import { Component } from '@angular/core';
import { IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent,
  IonGrid,
  IonRow,
  IonButton,
  IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonGrid,
    IonRow,
    IonCol,
    IonCardSubtitle, 
    IonButton,
    IonCardContent ],
})
export class HomePage {
  constructor() {}
}
