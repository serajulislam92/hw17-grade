// grade calculator



let marks = window.prompt('Enter your mark');


if(marks >=80  && marks <=100){
    document.write(" A+")
  }else if( marks >=70 && marks <=80){
    document.write("A")
  }else if(marks >=60 && marks <=70){
    document.write("A-")
  }else if( marks >=50 && marks <=60){
     document.write('B')
  }else if(marks >=40 && marks <=50){
    document.write("C")
  }else if(marks >=33 && marks <=40){
     document.write('D')
  }else if(marks >=0 && marks <=33){
    document.write("F")
  }else{
    document.write("Invalid Number")
}
