import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products : Array<any> = [ ]
  
  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
     this.ps.getAllProducts().subscribe((data)=>{
       this.Products = data;
       console.log("Test", this.Products);
     });
  }
}
