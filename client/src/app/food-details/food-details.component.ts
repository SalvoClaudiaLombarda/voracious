import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  BASE_URL:string=`${environment.BASE_URL}`
  food:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private foodService: FoodService)
    {}



    ngOnInit() {
        this.route.params.subscribe(params => {
          this.getFoodDetails(params['id']);
        });
      }


      getFoodDetails(id) {
        this.foodService.getFood(id)
          .subscribe((food) => {
            this.food = food;
          });
      }


    deleteFood() {
    if (window.confirm('Are you sure?')) {
      this.foodService.remove(this.food._id)
        .subscribe(() => {
          this.router.navigate(['']);
        });
    }
  }
}
