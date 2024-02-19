const allbtn=document.getElementsByClassName("seat-btn");
let cnt=0,cnt1=40,alertt=0;
for(const btn of allbtn)
{
    
    btn.addEventListener("click",function(e){
        alertt++;
        if(alertt>4)alert("not click");
        else{
        const button_number=e.target;
        const ok =button_number.innerText;
        btn.style.backgroundColor="green";
      //  console.log(ok);
        cnt=cnt+1;
        cnt1=cnt1-1;
        setInnerText("selected-seat",cnt);
         setInnerText("fourty_sit",cnt1);
        const set_selected_items=document.getElementById("slected-seat");
        const div=document.createElement("div");
        div.classList.add("justify-between");
        div.classList.add("flex");
        const p=document.createElement("p");
        p.innerText=ok;
        div.appendChild(p);
        const p1=document.createElement("p");
        p1.innerText="Economoy";
        div.appendChild(p1);
        const p2=document.createElement("p");
        p2.innerText="550";
        div.appendChild(p2);
        
        set_selected_items.appendChild(div);
        const totalPrice=document.getElementById("total_price");
        converted_totalPrice=totalPrice.innerText;
        const totalprice_converted=parseInt(converted_totalPrice);
        document.getElementById("total_price").innerText=totalprice_converted+550;


        const grand_price=document.getElementById("Grand_Price");
        //console.log(grand_price);
         converted_Grand_price=grand_price.innerText;
        //console.log(converted_Grand_price);
          conerted_grand_cost=parseInt(converted_Grand_price);
        //  console.log(type of )
         document.getElementById("Grand_Price").innerText=conerted_grand_cost+550;
        }

    })
}
function setInnerText(id,value)
{
    document.getElementById(id).innerText=value;
}
function cupon()
{
    cupon_text=document.getElementById("cupon_code");
    copun_value=cupon_text.value;
    if(copun_value==="NEW15")
    {
        const grand_discount_15=document.getElementById("Grand_Price");
        aa =grand_discount_15.innerText;
        converted_dis=parseInt(aa);
        const discout=converted_dis*15/100;
        const main_dis=converted_dis-discout;
       // console.log(main_dis);
       document.getElementById("Grand_Price").innerText=main_dis;
       const bb=document.getElementById("hide_korbo");
       //console.log(bb);
       bb.classList.add("hidden");
    }
    else if(copun_value==="Couple 20")
    {
        const grand_discount_20=document.getElementById("Grand_Price");
        aa =grand_discount_20.innerText;
        converted_dis=parseInt(aa);
        const discout=converted_dis*20/100;
        const main_dis=converted_dis-discout;
       // console.log(main_dis);
       document.getElementById("Grand_Price").innerText=main_dis;
       const bb=document.getElementById("hide_korbo");
       //console.log(bb);
       bb.classList.add("hidden");
    }
}