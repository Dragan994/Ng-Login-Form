import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product.list.component.css'],
})

export class ProductListComponent implements OnInit, OnDestroy{

    constructor( private productServise: ProductService) {}

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    cursor: string = 'pointer';
    showImage: boolean = false;
    emptyListMessage: string = 'Sorry, no products to show.'
    errorMessage: string = '';
    sub!: Subscription;

    private _listFilter: string =''; 

    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];

    products: IProduct[] = [];

      toggleImage(): void {
        this.showImage = !this.showImage;
      }

      performFilter(filterBy: string ): IProduct[] {
          filterBy = filterBy.toLowerCase();
          this.emptyListMessage = `Sorry, no products with name: "${filterBy}"`
          return this.products.filter((product: IProduct )=>
           product.productName.toLowerCase().includes(filterBy));

      }
      
      onRatingClicked(message: string): void {
        this.pageTitle = message;
        this.restorePageTitle()
    }
    
      restorePageTitle(): void {
          let pageTitleTimeout = setTimeout(()=>{
                clearTimeout(pageTitleTimeout)
              this.pageTitle = 'Product List'
            }, 2000)
      }

    ngOnInit(): void {
        this.sub = this.productServise.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
    }
    ngOnDestroy():void {
        this.sub.unsubscribe();
    }
}