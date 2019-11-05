import { Injectable } from '@angular/core';
import { NotificationComputers } from '../model/notification.module';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications: NotificationComputers[] = [
    {
      id: 1,
      name:'José da Silva',
      college:'FACE',
      laboratory:'A104',
      computer:'LI1003',
      date: Date.now(),
      title:'Sketchup',
      description:'Estou entrando no Sketchup, porém a tela está preta',
      bgColor:'white'
    },
    {
      id: 2,
      name:'José Pereira',
      college:'FEA',
      laboratory:'F105',
      computer:'LI5017',
      date: Date.now(),
      title:'Computador',
      description:'O mouse não funciona',
      bgColor:'#d5f3ff'
    },    
    {
      id: 3,
      name:'Pedro Alves',
      college:'FACE',
      laboratory:'A120',
      computer:'LI2054',
      date: Date.now(),
      title:'PDF',
      description:'Não consigo usar o pdf para ver meus arquivos',
      bgColor:'white'
    },    
    {
      id: 4,
      name:'Ana Carolina',
      college:'FCH',
      laboratory:'B230',
      computer:'LI2034',
      date: Date.now(),
      title:'Computador',
      description:'Não consigo usar o computador , eu ja liguei e desligui varias vezes e não aparece nada na tela',
      bgColor:'#d5f3ff'
    }
  ];

  get getNotifications(){
    return this.notifications;
  }

  constructor() { }
}
