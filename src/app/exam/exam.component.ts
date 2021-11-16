import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  correctAns:number=0;
  incorrectAns:number=0;
  submitted:boolean=false;
  flag:boolean=false;
  Attempt:string[]=[];


  constructor() { }

  ngOnInit(): void {
    
  }
  questions=[
    {"question":"100 + 50 = _________","op":["105","10050","150","501"],"ans":"150","attempt":null},
    {"question":"100 - 50 = _________","op":["105","50","150","501"],"ans":"50","attempt":null},

    {"question":"50 + 50 = _________","op":["100","5050","250","50"],"ans":"100","attempt":null},
    {"question":"10 + 90 = _________","op":["1090","19","90","100"],"ans":"100","attempt":null},
    {"question":"20 + 70 = _________","op":["20","70","27","90"],"ans":"90","attempt":null}
    ]

  // questions=[
  //   {"question":"5+4","op1":"1","op2":"2","op3":"9","op4":"10"},
  //   {"question":"5-4","op1":"1","op2":"2","op3":"9","op4":"10"}
  //         ]
  checkAnswer(selected:NgForm){
    
    console.log(selected.value);
    for(let x=0;x<5;x++){
      
    let ans1=this.questions[x].ans;
    this.questions[x].attempt=selected.value[x+1];
    if(selected.value[x+1]==ans1){
      
      this.correctAns++;
    }
    else{
      this.incorrectAns++;
    }
  }
  this.flag=true;

  }

  Review(){
    this.submitted=true;
  }

}

