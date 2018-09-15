import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  addHidden=true;
  editHidden=true;
  listHidden=true;
  viewHidden=true;
  name:string='';
  type:string='';
    usernames:string[]=[
    'Piyush',
    'nishtha',
    'shubham',
    'john'
  ];
  usertypes:string[]=[
    'student',
    'admin',
    'developer',
    'student'
  ]

  
  constructor() { 

  }

  onSubmit({value,valid}){
    if(valid){
      this.usernames.push(this.name);
      this.usertypes.push(this.type);
    }
    else{
      
    }
  }

  showAdd(){
    this.addHidden=false;
    this.editHidden=true;
    this.listHidden=true;
    this.viewHidden=true;
  }
  showEdit(){
    this.addHidden=true;
    this.editHidden=false;
    this.listHidden=true;
    this.viewHidden=true;
  }
  showList(){
    this.addHidden=true;
    this.editHidden=true;
    this.listHidden=false;
    this.viewHidden=true;
  }
  showView(){
    this.addHidden=true;
    this.editHidden=true;
    this.listHidden=true;
    this.viewHidden=false;
  }
  ngOnInit() {
  }

}
