import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageServiceProyects } from 'src/app/service/image-service-proyecto.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})


export class NewproyectoComponent implements OnInit{
  nombre: string;
  descripcion: string;
  imgpro: string;
  url_imagen: string;

  constructor(
              private proyectoService: ProyectoService,
              private router: Router,
              public imageService: ImageServiceProyects){}

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const save = this.imgpro = this.imageService.url
    console.log(save)
    const proyects = new Proyecto(this.nombre, this.descripcion, save, this.url_imagen);
    this.proyectoService.save(proyects).subscribe({
      next: (_data) => {
        alert('Proyecto agregado');
        this.router.navigate(['']);
      },
      error: () => {
        alert('Fallo');
        this.router.navigate(['']);
      }
    });
  }

  uploadImage($event: any) {
    this.imageService.uploadImage($event);
  }



} 