import { Component, OnInit } from '@angular/core';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
    
    nameLists=['Shopping List','Task List','Appointy prep'];
    list=[{
      itemName:'Jeans',
      itemstatus:false,
      listName:'Shopping List'
    },
    {
      itemName:'Books',
      itemstatus:false,
      listName:'Shopping List'
    },
    {
      itemName:'Pens',
      itemstatus:false,
      listName:'Shopping List'
    },

    {
      itemName:'Print Certificates',
      itemstatus:false,
      listName:'Task List'
    },

    {
      itemName:'Prepare Draft',
      itemstatus:false,
      listName:'Task List'
    },

    {
      itemName:'Prepare Html',
      itemstatus:false,
      listName:'Appointy prep'
    },

    {
      itemName:'Prepare Css',
      itemstatus:false,
      listName:'Appointy prep'
    },

    {
      itemName:'Prepare Bootstrap',
      itemstatus:false,
      listName:'Appointy prep'
    },

    {
      itemName:'Prepare Angular',
      itemstatus:false,
      listName:'Appointy prep'
    },
      
  ];
  selectedOption:string='Shopping List';
  addToList;
  submissionError;  
  
  onAdd({value,valid}){
    if(valid){
      this.nameLists.push(this.addToList);
      
      this.submissionError='New List Added';
    }
    else{
      this.submissionError='Not Added, Try Again';
    }
  }

  addTodo;
  additionError;
  onItemAdd({value,valid}){
    if(valid){
      this.list.push({'itemName':this.addTodo,'itemstatus':false,'listName':this.selectedOption});
      
      this.additionError='New Todo Added';
    }
    else{
      this.additionError='Not Added, Try Again';
    }
  }

  deleteTodo(todos){
    console.log("method called");
    
    this.list=this.list.filter(item=>item.itemName!=todos.itemName);
  }

  isChecked(todos){
    todos.itemstatus=true;
  }
  
 

  ngOnInit() {
  }

}
interface Lists{
  
}
