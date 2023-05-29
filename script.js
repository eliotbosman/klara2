var feat = document.getElementsByClassName('feature')[0];
var tool = document.getElementsByClassName('tool')[0];
var arc = document.getElementsByClassName('archive')[0];
var about = document.getElementsByClassName('about')[0];
var proj = document.getElementsByClassName('project')[0];


function f() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var arc = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "none"; disc.style.display = "none";
    proj.style.display = "none"; tool.style.display = "none"; arc.style.display = "none"; about.style.display = "none";
    feat.style.animation = "fade-in 1.2s ease-in"; feat.style.display = "inline";
}

function t() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var arc = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "none"; disc.style.display = "none";
    proj.style.display = "none"; tool.style.display = "grid"; feat.style.display = "none"; arc.style.display = "none";
    about.style.display = "none"; tool.style.animation = "fade-in 1.2s ease-in";
}

function a() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "none"; disc.style.display = "none";
    proj.style.display = "none"; tool.style.display = "none"; feat.style.display = "none";  about.style.display = "none";
    ar.style.display = "grid"; ar.style.animation = "fade-in 1.2s ease-in"; 
}

function ab() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "none"; disc.style.display = "none";
    proj.style.display = "none"; tool.style.display = "none"; feat.style.display = "none"; ar.style.display = "none";
    about.style.display = "grid"; about.style.animation = "fade-in 1.2s ease-in"; 
}

function p() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "none"; disc.style.display = "none";
    proj.style.display = "grid"; tool.style.display = "none"; feat.style.display = "none"; ar.style.display = "none";
    about.style.display = "none"; proj.style.animation = "fade-in 1.2s ease-in"; 
}

function d() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "none"; disc.style.display = "grid";
    proj.style.display = "none"; tool.style.display = "none"; feat.style.display = "none"; ar.style.display = "none";
    about.style.display = "none"; disc.style.animation = "fade-in 1.2s ease-in"; 
}

function r() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementById('grid-tool');
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    var disc = document.getElementById('grid-discover'); var rd = document.getElementById('grid-read');
    rd.style.display = "grid"; disc.style.display = "none";
    proj.style.display = "none"; tool.style.display = "none"; feat.style.display = "none"; ar.style.display = "none";
    about.style.display = "none"; rd.style.animation = "fade-in 1.2s ease-in"; 
}

/*

function template() {
    var title = document.getElementsByClassName('p-title')[0];
    var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
    var img3 = document.getElementById('p-img3'); var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
    var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
    title.innerHTML = "";
    img1.src = ""; img2.src = ""; img3.src= ""; 
    paragraph.innerHTML = "";
    pc1.innerHTML = ""; pc2.innerHTML = "";
} */

function compost() {
    var title = document.getElementsByClassName('p-title')[0];
    var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
    var img3 = document.getElementById('p-img3'); var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
    var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
    title.innerHTML = "compost";
    img1.src = "img/compost/compost1.jpg"; img2.src = "img/compost/compost3.jpg"; img3.src= "img/compost/compost6.jpg"; 
    paragraph.innerHTML = "This is a small guide on how to build your own compost/worm box. It can be either stored outside on the balcony or in the garden, or indoors in your basement, hallway, or apartment. It’s easy to build, doesn’t smell and is a great way to create hummus for your plants from kitchen scraps. <br><h2>ingredients</h2><ol><li>three big plastic buckets (25l)</li><li>plant or garden dirt</li><li>old newspaper or carton</li><li>worms </li><li>food scraps</li><li>a drill</li><li>optional: a plant for on top</li></ol><br>Amazingly, you can order worms for composting online or find a local garden, friend, or someone on Facebook who can offer you some worms. The compost should be placed in the shadow and possibly inside during winter to avoid too hot or cold temperatures. <br><br><h2>method</h2> <br><br>First, you want to drill some small holes, around 6mm, in one of the buckets. This way excess liquid can be retrieved into the first bucket. You can use this water as a natural plant fertilizer. Next, you drill some more holes (around 10mm) in the second of your three buckets so that the worms can easily travel between the second and third buckets.Then you place a small plant pot upside down in the first bucket with no holes. On it, you put your second bucket with the smaller holes.  After, you tear up the old newspaper into small pieces which adds carbon to your compost, soaks up excess moisture and helps the air to circulate. Then you put your plant dirt and worms into the bucket as well as some of your food scraps. On top, you place the last bucket with the bigger wholes. You follow the same procedure with tearing up newspaper and putting in plant dirt. You can plant something in this bucket or place a lid on it so that when the worms have processed the food scraps in the first bucket you can continue with the one on top. The idea is to exchange buckets as soon as the first one is turned into hummus. You can start with some food scraps in the beginning and keep on adding to the bucket with the worms. It is not a very fast process so it needs some patience as well as it is a small-scale compost so you might want to layer some buckets to keep on adding food scraps. <br><br>Et voilà, your selfmade compost!";
    pc1.innerHTML = "&nbsp;&nbsp;tools"; pc2.innerHTML = "230512";
}

function cooking() {
    var title = document.getElementsByClassName('p-title')[0];
    var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
    var img3 = document.getElementById('p-img3'); var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
    var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
    title.innerHTML = "The SIMPLICITY OF COOKING & the ABSURDITY OF MATERIAL MAKING ";
    img1.src = "img/cooking/ meals and materials 1.png"; img2.src = "img/cooking/ meals and materials 3.png"; img3.src= "img/cooking/ meals and materials 8.png"; 
    paragraph.innerHTML = "Meals and Materials is the title of the cookbook Sophia Beckmann created as part of her graduation project in Fashion Branding at the Amsterdam Fashion Institute. It explores various ways in which cooking, and materials are intertwined and draws parallels between making a meal and materials. Having a very conceptual, experimental way of creating influenced most of her projects during her years and education at the Amsterdam Fashion Institute. Where she has specialized in the Visual Culture and Textile program. The latter one introduced her to the breadth and depth of material making.Her passion for cooking and eating originates from her family home where the shared dinner was an essential and valued time together. The joy of preparing a delicious dish together, learning from one another, sharing tips and tools and in the end sitting around the table has then become a shared experience with friends and roommates. During the pandemic, she started an Instagram account together with her roommate sharing their dishes and recipes as a creative outlet for a time when very little was happening. Naturally, her personal culinary interest influenced her final graduation project. While exploring material making as part of her Textile specialisation, she noticed the similarities between preparing a meal and creating biomaterials.In her book, she aims to showcase how simple material making can be by drawing the parallels between cooking food and the process of creating materials. ‘We cook food every day, preparing and combining ingredients to create a filling meal for our tastebuds to indulge in. The kitchen is a very familiar space. Now, what if I told you, that you can use that same space, the same utensils, the same processes and the same ingredients to create more than just food? Together, you and your kitchen, provide everything needed to create textiles and materials’, she tells.By connecting the simplicity of cooking with what she calls: \ ‘the absurdity of material making’\ she highlights the often-forgotten potential in natural materials. For example, making a broth out of food waste or adding Parmigiano rind to your risotto or alternative ways of vegetarian material making like creating paper from an egg carton.<br>While sustainable and alternative ways of food preparations are getting more relevant, there is still much-undiscovered potential hidden in sustainable materials for more commercial purposes. In her work, sustainability";
    pc1.innerHTML = "&nbsp;&nbsp;read"; pc2.innerHTML = "230521";
}

function bronwen() {
    var title = document.getElementsByClassName('p-title')[0];
    var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
    var img3 = document.getElementById('p-img3'); var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
    var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
    title.innerHTML = "Interview with Bronwen Jones ";
    img1.src = "img/bronwen/BronwenJ3-2.jpg"; img2.src = "img/bronwen/BronwenJ6.png"; img3.src= "img/bronwen/img0020.jpg"; 
    paragraph.innerHTML = "Garments as a carrier for conversations, intimacy and communal networks. Who would have thought there is so much potential hidden in a piece of textile?!  Exactly these questions lay at the bottom of Bronwen Jones’s (hyperlink) artistic practice. Bronwen Jones is an artist from the UK based in Amsterdam. In her work, she explores the value of garments and their relationship to bodies. She has been particularly interested in the craft of mending clothes as a tool to establish intimacy with strangers. During a residency in Rotterdam, she offered to mend garments for and with the public. People could bring garments that needed to be repaired in exchange for a conversation. Through this practice, she explored the communal value of a traditional craft like clothing mending and critically examines our relationship to objects and materials. Her Clothing Correspondence residency resulted in a small publication including stories about the value of garments, a guide about darning and a curated reading list. Recently, she presented some of her textile work alongside two other artists with a similar focus on textile handcraft at fanfare in Amsterdam. All three of the artists share a common approach of working at a slower pace that is more in tune with the nature of the material and technique rather than conforming to the social pressure of constant productivity. The group exhibition came out of a shared passion for textile crafts as well as it shows ‘the nature of textile to grow and form empathetic networks’ - Bronwen Jones, Still within reach 2023. Being very inspired by her art practice and approach, she kindly shared some more words with us.";
    pc1.innerHTML = "&nbsp;&nbsp;read"; pc2.innerHTML = "230519";

}

function hefekranz() {
    var title = document.getElementsByClassName('p-title')[0];
    var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
    var img3 = document.getElementById('p-img3'); var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
    var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
    title.innerHTML = "The deeper significance of HEFEKRANZ";
    img1.src = "img/hefekranz/hefekranz6.1.jpg"; img2.src = "img/hefekranz/hefekranz7.jpg"; img3.src= "img/hefekranz/hefekranz8.jpg"; 
    paragraph.innerHTML = "The deeper significance of HEFEKRANZ Food is closely interlinked with personal memories, family history, identity and belonging.Food can put someone back in a certain time and place. It is intrinsically connected to emotions, people and environment. Recently, my grandma has passed away. I have been thinking of how I will remember her.She will be remembered as a loving and caring grandma, the stories she has told me, or the times spent at my grandparent’s place as a child. However, as time passes these memories will inevitably fade. One tangible way I can keep her memory alive is through her signature creation: Hefekranz, a delightful, sweet bread enjoyed on its own or with butter, jam ('Gsälz'), or honey. My dad took over the tradition of baking it on special Sunday mornings, at any family festivity or party. For me, this traditional pastry is closely connected to home, comfort and family. The smell of freshly baked Hefekranz immediately releases emotions of joy in me.I always liked that my dad has taken over this tradition. Going against old-fashioned gender norms which were still quite prominent when I was a child: being the dad who bakes and cooks lunch for his children. A lot more normal nowadays than it used to be.By learning from my grandma how to bake Hefekranz, my dad keeps a tradition and memory alive. I have been practising baking my own Hefekranz, not even nearly as successful as my dad or grandma did it. Learning to appreciate this tradition and making it my goal to bake the perfect Hefekranz is my way to keep remembering my grandma. Ultimately, it is about understanding the value of self-made food and taking the time to learn the process of it (which isn’t as easy, I can tell you). definition 'Gsälz': Swabian word for jam; dialect that is spoken in a part of Southern Germanytext and images by Klara documenting her own as well as her father’s baking process through a Facetime call ";
    pc1.innerHTML = "&nbsp;&nbsp;discover"; pc2.innerHTML = "230518";
}

function hermancake() {

var title = document.getElementsByClassName('p-title')[0];
var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
var img3 = document.getElementById('p-img3'); var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
title.innerHTML = "Hermann cake - a friendship cake";
img1.src = "img/hermancake/20230522105929_00001-2.jpg"; img2.src = "img/hermancake/20230522105929_00004-2-2.jpg"; img3.src= "img/hermancake/20230522105929_00005-2.jpg"; 
paragraph.innerHTML = "Hermann cake - a friendship cake The Herrman cake also referred to as a friendship or fortune cake, gained popularity during the environmental movement of the 1970s in Germany. This tradition predates current trends like slow living and highlights a more thoughtful and intentional approach to food culture. The essence of the Herrman cake is a sourdough starter passed down from one friend to another.Technically the Hermann cake is not an idea that came up during the 70s but goes back centuries. Sourdough was used at least as early as Ancient Egypt.It starts with the simplest ingredients: water, flour and a little bit of sugar. Today dry yeast is used for the fermentation process but back when it started the dough was left out and ‘wild yeast’ so microorganisms drifted into the dough. Sourdough is most commonly used for bread giving it a lighter texture and slightly sour taste. Although, it can be used in many different recipes making it very versatile. Once, a starter was made it was common to pass it down to family and friends. Feeding families for years when the starter is cared for properly. During the pandemic, many people started to bake again and learned how to start sourdough. A technique that has been around forever started to become relevant again not only for professional chefs or bakers. Lexie Smith from Bread on Earth (hyperlink), an artist and baker exploring the value and deeper meanings of bread for society, politics, and economy, wrote: ‘Such a strong interest in bread making over the last week clearly underscores the necessity of revaluing our ability to make, distribute, and consume necessary goods outside of a commodity marketplace. We’re so estranged from these processes that many people’s relationships to sustaining themselves feel urgently inadequate, and the powerful, the gatekeepers of wealth, are officially not coming to save us.";
pc1.innerHTML = "&nbsp;&nbsp;discover"; pc2.innerHTML = "230518";

}

function naturaldye() {
    var title = document.getElementsByClassName('p-title')[0];
    var img1 = document.getElementById('p-img1'); var img2 = document.getElementById('p-img2');
    var img3 = document.getElementById('p-img3'); var paragraph = document.getElementsByClassName('p-paragraph')[0]; 
    var pc1 = document.getElementById('pc-1'); var pc2 = document.getElementById('pc-2'); 
    title.innerHTML = "NATURAL DYEING";
    img1.src = "img/naturaldying/naturaldying_1.png"; img2.src = "img/naturaldying/naturaldying_2.png"; img3.src= "img/naturaldying/naturaldying_3.png"; 
    paragraph.innerHTML = "Create your own naturally dyed pieces by following this very easy recipe.You can create beautiful (more faded) colours with this technique and explore the possibilities of raw natural materials like red cabbage.ingredientsred cabbage (silk) fabrictwo potsa little bit of time:)Depending on how much fabric you want to dye, you need more or less red cabbage. This also determines the colour saturation. This process is very much about experimenting and trying different techniques. There is no right or wrong. If you use fabrics like silk this technique will work best as this is a protein-based fabric and will take the colour on better. In other cases, it is suggested to use a mordant that facilitates the bonding of the colour and fabric. To keep it simple, this technique is without any mordant. To keep it most sustainable and inexpensive, you want to use thrifted or second-hand fabric. methodYou start by cutting your red cabbage into small chunks. Then you cover them with enough water but not too much. The more water you use the less strong your colour will be.In the second pot, you put your fabric and cover it with water and add a little bit of washing detergent. After, you bring both pots to a boil and let them simmer for approximately two hours. After this time has passed, drain off the water from the fabric pot and rinse the fabric with cold water. Set aside.Next, drain off the water from the cabbage pot and - ‘very important’ - save the water!In the next step, put your washed fabric into the water from the red cabbage. Bring the pot to a boil again and then turn off the heat. You can leave the fabric to soak for at least four hours or overnight but make sure to stir the fabric once in a while to get a more even colour tone.After your fabric has soaked long enough in the cabbage water, you can take it out and give it a rinse. The less you wash it (preferably handwashing), the longer the colour will stay. You can use your dyed silk fabric as a top, bandana, hang it as an art piece on your wall, or use it instead of wrapping paper, and so on… enjoy";
    pc1.innerHTML = "&nbsp;&nbsp;tools"; pc2.innerHTML = "230516";
}

// Get the list items and the image element
const listItems = document.querySelectorAll('#list li');
const image = document.getElementById('a-image');

// Add event listeners to each list item
listItems.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    // Change the image source based on the list item hovered over
    image.src = `image-${index + 1}.jpg`;
  });

  item.addEventListener('mouseout', () => {
    // Revert back to the default image source when not hovering over any list item
    image.src = 'default-image.jpg';
  });
});

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }