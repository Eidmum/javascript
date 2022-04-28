function isLeapYear(year)
{
   var remainder=year % 4;
   if(remainder==0)
   {
      if((year%100)!=0)
        return true;
      else
         {
           if((year%400) ==0)
                return true;
            else
                return false;
         }
         
   }
   else
   {
       return false;
   }

}

var result=isLeapYear(1900);
if(result)
    console.log("This is a leap year");
else
    console.log("This is not a leap year");
