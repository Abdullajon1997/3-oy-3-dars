// function son (k,n)
// {
//     for(let i=0;i<n;i++)
//     {
//         console.log(i);
//     }
// }son(5,6)

// 2-misol

// function son (a,b)
// {
//     for(let i=b;i<=a;i++)
//     {
//         if(a>b)
//         {
//             console.log(i);
//         }
//     }
// }son(25,12)

// 3-misol

// function son (k,n)
// {

//         for(let i=k-1;n<i;i--)
//     {
        
//         console.log(i);
        
//     }
// }son(50,6)

// 4-misol

// function son (a)
// {
//     let konfetNarxi=0;
//     for(let i=1;i<=a;i++)
//     {
//         konfetNarxi=i*10000;
//         console.log(konfetNarxi);
//     }
// }son(10)

// 5-misol

// function son (a)
// {
//     let konfetNarxi=0;
//     for(let i=0;i<=a;i=i+0.1)
//     {
//         konfetNarxi=i*10000;
//         console.log(Math.ceil(konfetNarxi));
//     }
// }son(1)

// 6-misol

// function son (a)
// {
//     let konfetNarxi=0;
//     for(let i=1.1;i<=a;i=i+0.1)
//     {
//         konfetNarxi=i*10000;
//         console.log(Math.trunc(konfetNarxi));
//     }
// }son(2.1)

// 7-misol

// function son (a,b)
// {
//     let s=0;
//     for(let i=a;i<=b;i++)
//     {
//         s+=i;
//         console.log(" s=", s);
//     }
// }son(1,5)

// 8-misol

// function son (a,b)
// {
//     let s=1;
//     for(let i=a;i<=b;i++)
//     {
//         s*=i;
//         console.log(" s=", s);
//     }
// }son(1,5)

// 9-misol

// function son (a,b)
// {
//     let s=0;
//     for(let i=a;i<=b;i++)
//     {
//         s+=Math.pow(i,2);
//         console.log(" s=", s);
//     }
// }son(1,5)

// 10-misol

// function son (n)
// {
//     let s=0;
//     for(let i=1;i<=n;i++)
//     {
//         s+=1/i;
//         console.log(" s=", s);
//     }
// }son(5)

// 11-misol

// function toq (n)
// {
//     for(let i=1;i<=n;i++)
//     {
//         if(i%2==1)
//         {
//             console.log(i);
//         }
//     }
// }toq(100)

// 12-misol

// function juft (n)
// {
//     for(let i=1;i<=n;i++)
//     {
//         if(i%2==0)
//         {
//             console.log(i);
//         }
//     }
// }juft(100)

// 13-misol

// function son (n)
// {
//     for(let i=4;i<=n;i++)
//     {
//         for(let j=2;i>j;j++)
//         {
//             if(i%j==0)
//             {
//                 console.log(i);
//                 break;
//             }
//         }
//     }
// }son(20)

// 14-misol

// function son (n)
// {
//     for(let i=1;i<=n;i++)
//     {
        
//        if(i%2==0) console.log("juft",i);
//        else console.log(" toq",i);
//     }
// }son(10)

// 15-misol

// function son(n)
// {
//     for(let i=n;i>0;i--)
//     {

//         console.log(i);
//     }
// }son(10)

// 16-misol

// function son (n)
// {
//     for(let i=0;i<=n;i++)
//     {
//         if(i%5==0)
//         {
//             continue;
//         }
//         console.log(i);
//     }
// }son(12)

// 17-misol

// function son (a)
// {
//     let s=1;
//     for (let i=1;i<=a;i++)
//     {
//         s*=i;
//         console.log(i);
//     }
//     console.log(s);
// }son(10)

// 18-misol

// function son(n)
// {
//     let s=1,y=0;
//     for(let i=1;i<=n;i++)
//     {
//         s=1;
//         for(let j=1;j<=i;j++)
//         {
//             s*=j;
//         }
//         y+=s;
//     }
//     console.log(y);
// }
// son(5);

// 19-misol

// function son (n, x)
// {
//     let fak=1, S=1;
//     for (let i=0;i<=n;i++)
//     {
//         fak=1;
//         for(let j=1;j<=i;j++)
//         {
//             fak*=j;
//         }
//         S+=x*i/fak;
//     }
//     console.log(S);
// }
//    son(3, 5);

// 20-misol


// function son (n)
// {
//     let x=5;
//     for (let i=0;i<=n;i++)
//     {
//         if(i%x==0)
//         {
//             console.log(i);
//         }
//     }
// }son(50)

// 21-misol

// function son (n,x)
// {
//     let yigindi=0,kopaytma=1,end;
//     for(let i=1;i<=n;i++)
//     {
//         yigindi+=i;
        
//     }
//     console.log("Yig'indi=", yigindi);
//     for(let j=1;j<=x;j++)
//     {
//         kopaytma*=j;
//     }
//     console.log("ko'paytma=",kopaytma);
//     end=kopaytma+yigindi;
//     console.log("umumiy=",end);
// }son(3,4)




