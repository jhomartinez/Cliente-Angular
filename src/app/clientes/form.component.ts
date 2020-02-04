import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  private cliente: Cliente = new Cliente();
  private titulo:string = "Crear Cliente";

  constructor(private clienteService: ClienteService, 
              private routes: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
  }

  public cargarCliente():void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
      }
    })
  }

  public create(): void {
      /*this.clienteService.create(this.cliente).subscribe(
        response => this.routes.navigate(['/clientes'])
      )*/
      //implement sweetAlert2
      this.clienteService.create(this.cliente).subscribe(
        cliente => {
          this.routes.navigate(['/clientes'])
          swal('Nuevo cliente', `Cliente ${cliente.nombre} creado con éxito `, 'success')
        }
      )
  }

  update():void{
    this.clienteService.update(this.cliente)
    .subscribe(cliente => {
      this.routes.navigate(['/clientes'])
      swal('Cliente actualizado', `Cliente ${cliente.nombre} actualizado con éxito!`, 'success')
    })
  }
}
