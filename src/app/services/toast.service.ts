import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async present(options : any) {    
		const toast = await this.toastController.create({
		  header: options.header || 'Título',
		  message: options.message || 'Mensagem.',
      position: options.position || 'bottom',
      duration: options.duration || 0,
      animated: true,
      keyboardClose: true,
		  buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
        }
      ]
		});
		return toast.present();
  }
  
}
