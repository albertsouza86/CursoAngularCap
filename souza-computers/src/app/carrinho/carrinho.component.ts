import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
 
  intensCarrinho: IProdutoCarrinho[] = [];
  total = 0;


  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}
  
  
  ngOnInit(): void {
    this.intensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();  

  }

  calculaTotal(){
    
    this.total = this.intensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade),0)
  }

  removerProdutoCarrinho(produtoId: number){
    this.intensCarrinho = this.intensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }


  comprar() {
    alert("Parabéns, Você finallizou sua compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }  

}
