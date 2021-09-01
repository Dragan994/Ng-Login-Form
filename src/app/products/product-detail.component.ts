import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail'
  product: IProduct | undefined;
  sub!: Subscription;
  imageWidth: number = 300;
  imageMargin: number = 15;
  cursor: string= 'default'


  
  constructor( private route: ActivatedRoute,
               private router: Router,
               private productServise: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.productServise.getProducts().subscribe({
      next: products => {
        this.product = {...products.filter( product => product.productId === id)[0]};
        this.pageTitle = `Product Detail: ${this.product.productName}`;
        console.log(this.product)
      }
    })
  }  
  

  onBack(): void {
    this.router.navigate(['/products'])
  }

}
