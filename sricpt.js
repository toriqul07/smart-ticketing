const allbtn=document.getElementsByClassName("seat-btn");
let cnt=0,cnt1=40;
for(const btn of allbtn)
{
    btn.addEventListener("click",function(e){
        const button_number=e.target;
        const ok =button_number.innerText;
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

    })
}
function setInnerText(id,value)
{
    document.getElementById(id).innerText=value;
}