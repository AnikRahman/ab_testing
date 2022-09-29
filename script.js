

/* -----------         ---               START         ---      - ----------------------*/




/*----------------   content layout -------------- */
var image_content = document.querySelectorAll('.block_benefits .benefit .content');
for(var i = 0; i<image_content.length; i++)
{
    
    image_content[i].style.backgroundColor ="#F5F5F5";
  
    
    }

/* ------------------- new div ------------------ */
var ul = document.querySelectorAll(".block_benefits .benefit .content ul");
var li0 = document.createElement("div");
li0.innerHTML="Ihre Vorteile bei der Consorsbank:";
li0.style.color="grey";
li0.style.width ="537px";
li0.style.height = "20px";
li0.style.position = "absoulate";
li0.style.top = "100px"
var li1 = document.createElement("div");
li1.innerHTML="Ihre Vorteile bei der Consorsbank:";
li1.style.color="grey";
var li2 = document.createElement("div");
li2.innerHTML="Ihre Vorteile bei der Consorsbank:";
li2.style.color="grey";
var li3 = document.createElement("div");
li3.innerHTML="Ihre Vorteile bei der Consorsbank:";
li3.style.color="grey";
var li4 = document.createElement("div");
li4.innerHTML="Ihre Vorteile bei der Consorsbank:";
li4.style.color="grey";
var li5 = document.createElement("div");
li5.innerHTML="Ihre Vorteile bei der Consorsbank:";
li5.style.color="grey";

for(var i = 0; i < ul.length; i++)
{
    ul[0].prepend(li0);
    ul[1].prepend(li1);
    ul[2].prepend(li2);
    ul[3].prepend(li3);
    ul[4].prepend(li4);
    
   
};

/* --------------------------  SUB Heading ------------------------*/

var sub = document.querySelectorAll(".block_benefits .benefit .content h3");
var he0 = document.createElement("H5");
he0.innerHTML="Kostenlos und sicher Vermögen parken";
he0.style.color="grey";
var he1 = document.createElement("H5");
he1.innerHTML="Kleine Sparrate, große Träume";
he1.style.color="grey";
var he2 = document.createElement("H5");
he2.innerHTML="Vielfältige Möglichkeiten zum Vermögensaufbau";
he2.style.color="grey";
var he3 = document.createElement("H5");
he3.innerHTML="Mittel- bis langfristig vorsorgen für Ihr Kind";
he3.style.color="grey";
var he4 = document.createElement("H5");
he4.innerHTML="Premium-Girokonto mit Visa Card Gold";
he4.style.color="grey";
var he5 = document.createElement("H5");
he5.innerHTML="Sehr gut bewertet mit vielfältigen Bezahlmöglichkeiten";

he5.style.color="black";
for(var i = 0; i < sub.length; i++)
{
    sub[0].appendChild(he0);
    sub[1].appendChild(he1);
    sub[2].appendChild(he2);
    sub[3].appendChild(he3);
    sub[4].appendChild(he4);


};

/* ---------------append small imagee ---------------------------  */

var image = document.querySelectorAll(".block_benefits .benefit .image__anchor");
var image_div1 = document.createElement("div");
var image_div2 = document.createElement("div");
var image_div3 = document.createElement("div");
var image_div4 = document.createElement("div");
var image_div5 = document.createElement("div");


image_div1.innerHTML =`<div><img src="https://i.ibb.co/9qp3q2f/Mask-group.png" style="    position: absolute;
top: 134px;
left: -2px;"></div>`;


image_div2.innerHTML =`<div><img src="https://i.ibb.co/Fz82qhJ/image-26.png" style="position: absolute;
top: 124px;
left: 40px;"></div>`;

image_div3.innerHTML =`<div><img src="https://i.ibb.co/Fz82qhJ/image-26.png" style="position: absolute;
top: 124px;
left: 40px;"</div>`;

image_div4.innerHTML =`<div><img src="https://i.ibb.co/51vHbBV/image-16.png" style="position: absolute;
top: 124px;
left: 40px;"></div>`;

image_div5.innerHTML =`<div><img src="https://i.ibb.co/VVVksb2/image-22.png" style="position: absolute;
top: 124px;
left: 40px;"> <div>`;

for(var i = 0; i < image.length; i++)
{
    image[0].append(image_div1);
    image[1].append(image_div2);
    image[2].append(image_div3);
    image[3].append(image_div4);
    image[4].append(image_div5);


};

/* ----------- new card -----------------------*/

var greyback= document.querySelector(".bg_grey, .lightGreyBg1");

var card = document.querySelectorAll(".block_benefits .benefit");
var newcard = document.createElement("div");
newcard.innerHTML =`<div class="benefit row">
<div class="col-12 col-sm-6 col-md-6 image__part">
    <a class="image__anchor" href="https://aktionen.consorsbank.de/ev/tagesgeld/?icid=WEB-1231" aria-label="Zum Tagesgeld">
        <figure>
            <picture>
            <img src="https://i.ibb.co/g4w7d7N/Image.png" alt="Tagesgeld image" height="247" width="482">
            </picture>
        </figure>
    </a>
    <img src="https://i.ibb.co/51vHbBV/image-16.png" style= "position: absolute;
    top: 250px;
    left: 40px;">
</div>
<div class="content col-12 col-sm-6 col-md-6">
    <h3>Girokonto Essential<h5 style="color: grey;">Sehr gut bewertet mit vielfältigen Bezahlmöglichkeiten</h5></h3>
    <ul>
        <div> Ihre Vorteile bei der Consorsbank: </div>
        <li>0,60 % p. a. auf Ihr Tagesgeld bis 250.000 Euro für 6 Monate</li>
        <li>mit unserem Zinsversprechen automatisch von steigenden Zinsen profitieren</li>
    </ul>
    <p>
        <a href="https://aktionen.consorsbank.de/ev/tagesgeld/?icid=WEB-1231" class="button primary" aria-label="Zum Tagesgeld">Zum Tagesgeld</a>
    </p>
</div>
</div>`;


newcard.style.backgroundColor ="#F5F5F5";

/*-----
<img src="https://i.ibb.co/g4w7d7N/Image.png" alt="Image" border="0">


for(var i= 0 ; i<card.length; i++) 
{
 insertAfter(newcard,card[4].nextSibling)
  
 }



*/
newcard.style.marginBottom="40px";


var container = document.querySelectorAll(".block_benefits container");
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
} 


/* ------------------------- adding 3 box card          -------------------- --- */

var card_div = document.createElement('div');

card_div.innerHTML =`<h3 style="font-weight: bold;">Wofür interessieren Sie sich?</h3>
<div class="container" style=" text-align:center; padding-right:100px ; padding-right: 55px; display: flex; flex-direction: row;align-items: flex-start; margin-bottom: 20px">
     
<div class="row" style="width:100%; display:flex; justify-content:center; flex-wrap;">
        
     <div class="card-cat"style="background:#1E9FC4; position:relative ; flex:1; max-width:300px; height:150px;margin:10px;" id="card_cat1">
    
     <svg width="47" height="51" viewBox="0 0 47 51" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin:8px;">
        <path d="M2.23584 49.6482L43.6448 50.0001" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M4.45288 42.9326V22.9321C4.45288 21.8276 5.34831 20.9321 6.45288 20.9321H8.74541C9.84998 20.9321 10.7454 21.8276 10.7454 22.9321V42.9326C10.7454 44.0372 9.84998 44.9326 8.74541 44.9326H6.45288C5.34831 44.9326 4.45288 44.0372 4.45288 42.9326Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M14.7097 42.9324V22.9319C14.7097 21.8273 15.6051 20.9319 16.7097 20.9319H19.0022C20.1068 20.9319 21.0022 21.8273 21.0022 22.9319V42.9324C21.0022 44.037 20.1068 44.9324 19.0022 44.9324H16.7097C15.6051 44.9324 14.7097 44.037 14.7097 42.9324Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M25.6709 42.9324V22.9319C25.6709 21.8273 26.5663 20.9319 27.6709 20.9319H29.9634C31.068 20.9319 31.9634 21.8273 31.9634 22.9319V42.9324C31.9634 44.037 31.068 44.9324 29.9634 44.9324H27.6709C26.5663 44.9324 25.6709 44.037 25.6709 42.9324Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M35.896 42.9324V22.9319C35.896 21.8273 36.7914 20.9319 37.896 20.9319H40.1885C41.2931 20.9319 42.1885 21.8273 42.1885 22.9319V42.9324C42.1885 44.037 41.2931 44.9324 40.1885 44.9324H37.896C36.7914 44.9324 35.896 44.037 35.896 42.9324Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M23.1021 2L43.1091 16.532H3.09509L23.1021 2Z" stroke="white" stroke-width="2"/>
        <path d="M23.0386 14.0766C22.5766 14.0766 22.1412 14.0154 21.7322 13.893C21.3232 13.7705 20.9521 13.5977 20.6189 13.3745C20.2857 13.1441 19.9979 12.8705 19.7555 12.5537C19.5207 12.2297 19.3428 11.8661 19.2216 11.4629H18.6309V10.7392H19.0739C19.0663 10.6816 19.0625 10.6204 19.0625 10.5556C19.0625 10.4836 19.0625 10.4152 19.0625 10.3504C19.0625 10.2784 19.0625 10.21 19.0625 10.1452C19.0701 10.0804 19.0777 10.012 19.0853 9.94H18.6309V9.21637H19.2216C19.3428 8.82035 19.5245 8.46394 19.7669 8.14713C20.0092 7.83031 20.297 7.5603 20.6303 7.3371C20.9635 7.10669 21.3346 6.93028 21.7436 6.80787C22.1525 6.68547 22.5842 6.62427 23.0386 6.62427C23.4249 6.62427 23.7732 6.66747 24.0838 6.75387C24.3943 6.84028 24.6745 6.95908 24.9244 7.11029C25.1743 7.26149 25.394 7.4343 25.5833 7.62871C25.7726 7.82311 25.9393 8.02832 26.0832 8.24433L24.9471 8.79515C24.7654 8.49274 24.5041 8.24433 24.1633 8.04992C23.8225 7.84832 23.4476 7.74751 23.0386 7.74751C22.4933 7.74751 22.0086 7.88072 21.5845 8.14713C21.168 8.40634 20.8612 8.76275 20.6643 9.21637H23.7316V9.94H20.4485C20.4409 10.0048 20.4333 10.0732 20.4258 10.1452C20.4258 10.21 20.4258 10.2784 20.4258 10.3504C20.4258 10.4152 20.4258 10.4836 20.4258 10.5556C20.4258 10.6204 20.4333 10.6816 20.4485 10.7392H23.7316V11.4629H20.653C20.8499 11.9165 21.1566 12.2801 21.5732 12.5537C21.9973 12.8201 22.4858 12.9533 23.0386 12.9533C23.4476 12.9533 23.8225 12.8561 24.1633 12.6617C24.5041 12.4601 24.7654 12.2081 24.9471 11.9057L26.0832 12.4565C25.9393 12.6725 25.7689 12.8777 25.5719 13.0721C25.3826 13.2665 25.163 13.4393 24.913 13.5905C24.6707 13.7417 24.3943 13.8605 24.0838 13.947C23.7732 14.0334 23.4249 14.0766 23.0386 14.0766Z" fill="white"/>
        </svg>
    
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; right: 20px; margin: 5px" >
        <circle cx="17.5" cy="17.5" r="16.5" fill="#61AF34" stroke="white" stroke-width="2"/>
        <path d="M15.6083 27L8 19.7309L9.99623 18.283L15.2316 23.2768L25.7778 8L28 9.06376L15.6083 27Z" fill="white"/>
        </svg>
     

        <div style="color:white;font-weight: bold;">Tagesgeldkonto</div>
        <h6 style="color:white">Geld parken und 0,6 % Zinsen p. a. sichern</h6>
        </div>
        
    <div class="card-cat" style="background:#1E9FC4; position:relative ; flex:1; max-width:300px; height:150px;margin:10px;" id="card_cat2">
    
    <svg width="65" height="50" viewBox="0 0 65 50" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin:8px;">
    <path d="M5.26667 40.4667V2C5.26667 1.44771 5.71438 1 6.26667 1H58.1333C58.6856 1 59.1333 1.44772 59.1333 2V40.4667M2 49H62.4C62.9523 49 63.4 48.5523 63.4 48V45.2C63.4 44.6477 62.9523 44.2 62.4 44.2H2C1.44772 44.2 1 44.6477 1 45.2V48C1 48.5523 1.44772 49 2 49Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <path d="M9.46655 37.8666V4.66663V4.66663H54.9332V37.8666H9.46655Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <path d="M25 31.4H22.8667V27.6667L25 25.5333V31.4Z" fill="white" stroke="white" stroke-linecap="round"/>
    <path d="M28.7334 31.4H26.6001V23.9334L28.7334 21.8V31.4Z" fill="white" stroke="white" stroke-linecap="round"/>
    <path d="M32.4666 31.4H30.3333V21.8L32.4666 23.9334V31.4Z" fill="white" stroke="white" stroke-linecap="round"/>
    <path d="M36.2 31.4001H34.0667V23.9334L36.2 21.2667V31.4001Z" fill="white" stroke="white" stroke-linecap="round"/>
    <path d="M39.9334 31.4H37.8V19.6667L39.9334 17V31.4Z" fill="white" stroke="white" stroke-linecap="round"/>
    <path d="M38.8667 11.1333L39.9334 12.2L39.8878 12.2491L41.5334 13.2667L43.1334 9L38.8667 11.1333Z" fill="white"/>
    <path d="M21.8 24.4667L28.7334 16.4667L33 19.6667L39.8878 12.2491M39.8878 12.2491L39.9334 12.2L38.8667 11.1333L43.1334 9L41.5334 13.2667L39.8878 12.2491Z" stroke="white" stroke-linecap="round"/>
    </svg>
   
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; right: 20px; margin: 5px" id="card_svg2">
    <circle cx="17.5" cy="17.5" r="16.5" fill="#61AF34" stroke="white" stroke-width="2"/>
    <path d="M15.6083 27L8 19.7309L9.99623 18.283L15.2316 23.2768L25.7778 8L28 9.06376L15.6083 27Z" fill="white"/>
    </svg>
 
    
    <div style="color:white;font-weight: bold;">Tagesgeldkonto</div>
    <h6 style="color:white">Geld parken und 0,6 % Zinsen p. a. sichern</h6>
    </div>
    

    <div class="card-cat" style="background:#1E9FC4; position:relative ; flex:1; max-width:300px; height:150px;margin:10px;" id="card_cat3">
   
    <svg width="67" height="50" viewBox="0 0 67 50" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin:8px;">
    <path d="M65.0654 8.98995H23.3262V15.1489H65.0654V8.98995Z" fill="white"/>
    <path d="M45.9644 29.2978H62.0654C63.7222 29.2978 65.0654 27.9546 65.0654 26.2978V15.1489M23.3262 8.98995V4C23.3262 2.34314 24.6693 1 26.3262 1H62.0654C63.7222 1 65.0654 2.34315 65.0654 4V8.98995M23.3262 8.98995H65.0654M23.3262 8.98995V15.1489M65.0654 8.98995V15.1489M65.0654 15.1489H23.3262M23.3262 15.1489V18" stroke="white" stroke-width="2"/>
    <path d="M42.7392 34.8511V28.6922H21.8696H1V35.9123H42.7392V34.8511Z" fill="white"/>
    <path d="M42.7392 28.6922V34.8511V35.9123M42.7392 28.6922V23.7023C42.7392 22.0454 41.396 20.7023 39.7392 20.7023H4C2.34315 20.7023 1 22.0454 1 23.7023V28.6922M42.7392 28.6922H21.8696H1M1 28.6922V35.9123M42.7392 35.9123V46C42.7392 47.6569 41.396 49 39.7392 49H4C2.34315 49 1 47.6569 1 46V35.9123M42.7392 35.9123H1" stroke="white" stroke-width="2"/>
    </svg>
   
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; right: 20px; margin:5px" id="card_svg3">
    <circle cx="17.5" cy="17.5" r="16.5" fill="#61AF34" stroke="white" stroke-width="2"/>
    <path d="M15.6083 27L8 19.7309L9.99623 18.283L15.2316 23.2768L25.7778 8L28 9.06376L15.6083 27Z" fill="white"/>
    </svg>
    

    <div style="color:white;font-weight: bold;">Tagesgeldkonto</div>
    <h6 style="color:white">Geld parken und 0,6 % Zinsen p. a. sichern</h6>
    </div>
    </div>
     </div>
`;


var card = document.querySelectorAll(".block_benefits .benefit");
for(var i= 0 ; i<card.length; i++) 
{
 insertBefore(card_div,card[0].previousSibling)
  
 }

 function insertBefore(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
} 



/* --- --------------------------------------adding 6 product Heading --------------------------------------------------- */
var products_heading= document.createElement("div");
products_heading.innerHTML =`<div> 
    <h5 style="color: black;  font-style: normal;  font-size: 16px;   line-height: 24px; nargin-bottom: 30px;  padding-bottom: 10px
    "> Wir haben <span style="font-weight: bold;"> 6 Produkte</span> gefunden, die zu Ihren Interessen passen. </h5>
    <svg width="994" height="1" viewBox="0 0 994 1" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute;width: 994px;height: 0px;;top: 501px;border: 1px solid #444444;">
<line y1="0.5" x2="994" y2="0.5" stroke="#444444"/>
</svg>
</div>`

for(var i= 0 ; i<card.length; i++) 
{
 insertBefore(products_heading,card[0].previousSibling)
  
 }

/* ------------------------------------------- adding categories ----------------------------------------------- */


///---------- cat1 -------------/////

var cat1 = document.createElement("div");
cat1.innerHTML=`<div class="cat-filter" style="display:flex; flex:1; justify-content:start; margin-bottom:20px; margin-top:50px">

<svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.92407 42.3457L38.5503 42.6485" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
<path d="M4.82983 36.289V19.6401C4.82983 18.5356 5.72526 17.6401 6.82983 17.6401H8.24362C9.34819 17.6401 10.2436 18.5356 10.2436 19.6401V36.289C10.2436 37.3936 9.34819 38.289 8.24362 38.289H6.82983C5.72526 38.289 4.82983 37.3936 4.82983 36.289Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
<path d="M13.6543 36.2888V19.6399C13.6543 18.5353 14.5497 17.6399 15.6543 17.6399H17.0681C18.1726 17.6399 19.0681 18.5353 19.0681 19.6399V36.2888C19.0681 37.3933 18.1726 38.2888 17.0681 38.2888H15.6543C14.5497 38.2888 13.6543 37.3933 13.6543 36.2888Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
<path d="M23.0847 36.2888V19.6399C23.0847 18.5353 23.9801 17.6399 25.0847 17.6399H26.4985C27.6031 17.6399 28.4985 18.5353 28.4985 19.6399V36.2888C28.4985 37.3933 27.6031 38.2888 26.4985 38.2888H25.0847C23.9801 38.2888 23.0847 37.3933 23.0847 36.2888Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
<path d="M31.8826 36.2888V19.6399C31.8826 18.5353 32.778 17.6399 33.8826 17.6399H35.2963C36.4009 17.6399 37.2964 18.5353 37.2964 19.6399V36.2888C37.2964 37.3933 36.4009 38.2888 35.2964 38.2888H33.8826C32.778 38.2888 31.8826 37.3933 31.8826 36.2888Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
<path d="M20.8759 1.35168L38.089 13.8543H3.66287L20.8759 1.35168Z" stroke="#464646" stroke-width="2"/>
</svg>
<div>
<h3 style="margin:0px; font-weight:600;">Tagesgeldkonto</h3>
<h6 style="color:black;color: grey;">1 Produkt</h6>
</div>

</div>`

////-------------------cat-2 ---------------------/////

var cat2 =document.createElement("div");
cat2.innerHTML=`<div class="cat-filter" style="display:flex; flex:1; justify-content:start; margin-bottom:20px; margin-top:50px">

<svg width="52" height="42" viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.4188 33.3932V2.76929C4.4188 2.217 4.86652 1.76929 5.4188 1.76929H46.5812C47.1335 1.76929 47.5812 2.217 47.5812 2.76929V33.3932M2 40.2308H50C50.5523 40.2308 51 39.7831 51 39.2308V37.3847C51 36.8324 50.5523 36.3847 50 36.3847H2C1.44772 36.3847 1 36.8324 1 37.3847V39.2308C1 39.7831 1.44771 40.2308 2 40.2308Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
<path d="M7.98291 31.1114V4.90625L44.0171 4.90625V31.1114H7.98291Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
<path d="M20.2311 26.128H18.5217V23.1366L20.2311 21.4272V26.128Z" fill="#464646" stroke="#464646" stroke-linecap="round"/>
<path d="M23.2219 26.1284H21.5125V20.1455L23.2219 18.4361V26.1284Z" fill="#464646" stroke="#464646" stroke-linecap="round"/>
<path d="M26.214 26.1284H24.5046V18.4361L26.214 20.1455V26.1284Z" fill="#464646" stroke="#464646" stroke-linecap="round"/>
<path d="M29.2048 26.1285H27.4954V20.1456L29.2048 18.0089V26.1285Z" fill="#464646" stroke="#464646" stroke-linecap="round"/>
<path d="M32.197 26.1282H30.4875V16.7265L32.197 14.5897V26.1282Z" fill="#464646" stroke="#464646" stroke-linecap="round"/>
<path d="M31.3425 9.88891L32.1972 10.7436L32.1606 10.783L33.4792 11.5983L34.7613 8.1795L31.3425 9.88891Z" fill="#464646"/>
<path d="M17.6672 20.5727L23.2228 14.1624L26.6416 16.7265L32.1606 10.783M32.1606 10.783L32.1972 10.7436L31.3425 9.88891L34.7613 8.1795L33.4792 11.5983L32.1606 10.783Z" stroke="#464646" stroke-linecap="round"/>
</svg>

<div>
<h3 style="margin:0px; font-weight:600;">Wertpapiere</h3>
<h6 style="color:black;color: grey;">3 Produkte </h6>
</div>

</div>`

////-------------------cat-3 ---------------------/////

var cat3 =document.createElement("div");
cat3.innerHTML=`<div class="cat-filter" style="display:flex; flex:1; justify-content:start; margin-bottom:20px; margin-top:50px">

<svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M51 7.50507H18.4248V12.3118H51V7.50507Z" fill="#464646"/>
<path d="M36.0927 23.3542H48C49.6568 23.3542 51 22.0111 51 20.3542V12.3118M18.4248 7.50507V4.26934C18.4248 2.61248 19.768 1.26934 21.4248 1.26934H48C49.6568 1.26934 51 2.61249 51 4.26934V7.50507M18.4248 7.50507H51M18.4248 7.50507V12.3118M51 7.50507V12.3118M51 12.3118H18.4248M18.4248 12.3118V14.5369" stroke="#464646" stroke-width="2"/>
<path d="M33.5752 27.6882V22.8815H17.2876H1V28.5164H33.5752V27.6882Z" fill="#464646"/>
<path d="M33.5752 22.8815V27.6882V28.5164M33.5752 22.8815V19.6458C33.5752 17.9889 32.232 16.6458 30.5752 16.6458H4C2.34315 16.6458 1 17.9889 1 19.6458V22.8815M33.5752 22.8815H17.2876H1M1 22.8815V28.5164M33.5752 28.5164V35.7307C33.5752 37.3875 32.232 38.7307 30.5752 38.7307H4C2.34314 38.7307 1 37.3875 1 35.7307V28.5164M33.5752 28.5164H1" stroke="#464646" stroke-width="2"/>
</svg>


<div>
<h3 style="margin:0px; font-weight:600;">Girokonto</h3>
<h6 style="color:black;color:grey;">2 Produkte </h6>
</div>
</div>`

///------------------------------------------------- Insert Function --------------------------------------------------///
var card = document.querySelectorAll(".block_benefits .benefit");
function insertBefore(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
} 

for(var i= 0 ; i<card.length; i++) 
{
 insertBefore(cat1,card[0].previousSibling)
 insertBefore(cat2,card[0].previousSibling)
 insertBefore(cat3,card[0].previousSibling)
  
 }

 function insertBefore(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
} 

////

/*  
///card cat by id
var  card_cat1 = document.getElementById("card_cat1");
var  card_cat2 = document.getElementById("card_cat2");
var  card_cat3 = document.getElementById("card_cat3");


///  svg display none

var check1 = document.getElementById('#card_svg1');
var check2 = document.getElementById('#card_svg2');
var check3 = document.getElementById('#card_svg3');

check1.style.display ="none";
check2.style.display ="none";
check3.style.display ="none";

    /*------------------------------- --- Filtering-------------------------------------- --- */

cat3.append(newcard);
newcard.style.display="none";
for(var i= 0 ; i<card.length; i++) 
{
 card[i].style.display="none";
  
 }

 for(var i= 0 ; i<card.length; i++) 
{
 cat1.append(card[0]);
 cat2.append(card[2]);
 cat2.append(card[1]);
 cat2.append(card[4]);
 cat3.append(card[3]);

 
  
cat1.addEventListener("click",function(){
    if(card[0].style.display === "none"){
        card[0].style.display ="block";
        //check1.style.display ="block";
    }
   else {
    card[0].style.display ="none";
    //check1.style.display ="none";
    }
 

})

cat2.addEventListener("click",function(){
    if(card[2].style.display === "none")  {
        card[2].style.display ="block";
        card[1].style.display ="block";
        card[4].style.display ="block";
        //check2.style.display ="block";
    }
    else{
        card[2].style.display ="none";
        card[1].style.display ="none";
        card[4].style.display ="none"; 
        //check2.style.display ="none";
    }
    
 })
 
cat3.addEventListener("click",function(){
    
    if(card[3].style.display === "none"){
        newcard.style.display ="block";
        card[3].style.display ="block";
        //check3.style.display ="block";
    }
    else{
        newcard.style.display ="none";
        card[3].style.display ="none";
        //check3.style.display ="none";
    }
})


   ///card filtering 1
   card_cat1.addEventListener("click",function(){
    if(card[0].style.display === "none"){
        card[0].style.display ="block";
        //check1.style.display ="block";
    }
   else {
    card[0].style.display ="none";
    //check1.style.display ="none";
    }
 
})
   ///card filtering 2
       card_cat2.addEventListener("click",function(){

        if(card[2].style.display === "none")  {
            card[2].style.display ="block";
            card[1].style.display ="block";
            card[4].style.display ="block";
            //check2.style.display ="block";
        }
        else{
            card[2].style.display ="none";
            card[1].style.display ="none";
            card[4].style.display ="none"; 
           // check2.style.display ="none";
        }
    })

     ///card filtering 3

    card_cat3.addEventListener("click",function(){
        if(card[3].style.display === "none"){
            newcard.style.display ="block";
            card[3].style.display ="block";
            //check3.style.display ="block";
        }
        else{
            newcard.style.display ="none";
            card[3].style.display ="none";
           // check3.style.display ="none";
        }

    })

 
}

 var image_full = document.querySelectorAll(".block_benefits .benefit .image__part");
for(var i=0; i<image_full.length;i++){
    image_full[0].style.left = "20px"
    image_full[1].style.left = "20px"
    image_full[2].style.left = "20px"
    image_full[3].style.left = "20px"
    image_full[5].style.left = "20px"
}





/* --------------------------------------- FINISH  ------------------------------------------------------  */





