import { Component, OnInit } from '@angular/core';
import { ReqServiceService } from '../service/req-service.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent implements OnInit {
  result_user = [];
  result_guest = [];
  constructor(
    private req: ReqServiceService
  ) { }

  ngOnInit() {
    this.get_all_order_list_from_user();
  }

  get_all_order_list_from_user() {

    const sql = { 'sql': 'CALL `order_history_from_reg_user`("' + localStorage.getItem('id') + '"); '};
    this.req.request('return', sql).then( res => {
      this.result_user = res.json();
      console.log(res.json());
    }).then(() => this.get_all_order_list_from_guest());
  }

  get_all_order_list_from_guest() {

    const sql = { 'sql': 'CALL `order_history_from_guest`("' + localStorage.getItem('id') + '"); '};
    this.req.request('return', sql).then( res => {
      this.result_guest = res.json();
      console.log(res.json());
    });
  }
}
