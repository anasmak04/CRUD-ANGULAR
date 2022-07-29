import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
 
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
    freshnessList = ["Brand new","second Hand","Refurbished"]
    productForm !: FormGroup
  constructor(private formBuilder : FormBuilder ,private api : ApiService) {

   }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName : ['',Validators.required],
      category : ['',Validators.required],
      freshness : ['',Validators.required],
      price : ['',Validators.required],
      comment : ['',Validators.required],
      date : ['',Validators.required]

    })
  }

  AddBtn() {
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res) =>{
          alert("Product added successfuly")
        },
        error:()=>{
          alert("Error while adding product")
        } 
      })
    }
  }

}
