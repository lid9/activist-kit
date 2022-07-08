/* .js files add interaction to your website */

//personalize it
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript(){
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var exp = document.getElementById("exp").value;

  displayScript.innerHTML = "Hi, I am " + name + " and I live in " + location + ". I urge you to do your part to protect the reproductive rights of the women in our communities. With the overturn of Roe v. Wade, women will have to travel extremely far distances for legal abortion clinics. This will especially take a toll on marginalized people of color and the poor, who already lack access to healthcare. In my own life, the overruling of Roe v. Wade will " + exp + ". Please support us by donating to abortion rights funds such as Planned Parenthood and the ACLU. I also request that you share this information with your colleagues to collectively advocate for abortion rights in your respective spheres of influence.";
}


// fact generator
var factList = [
  "MYTH: 'Abortions are more dangerous than childbirth' This is a myth because between 2013 and 2018, the CDC reported the national case-fatality rate was 0.41 abortion-related deaths per 100,000 legal abortions. This contrasts to a death rate of 17.35 per 100,000 live births, making abortion far safer than childbirth.",
  "MYTH: 'Majority of Americans support the end of Roe v. Wade' This is a myth because an ABC News/Washington Post poll conducted in advance of the leaked draft opinion found 58% of U.S. adults said abortion should be legal in either all or most cases. By comparison, just 37% of adults said they believed abortion should be illegal in all or most cases.",
  "MYTH: 'Abortions have only risen since Roe v. Wade was decided' This is a myth because although legal abortions in the U.S. did increase following the decision of Roe v. Wade, this was only due to abortion becoming safe and regulated. As of 2017, the rate of legal abortions sits at 13.5 per 1,000 women, the lowest rate ever recorded, according to the Guttmacher Institute.",
  "MYTH: 'Most abortions happen in-office' This is a myth because data from the Guttmacher Institute, a research group focusing on sexual and reproductive health, showed at-home medication abortions, not in-office procedures, make up most abortions in the U.S."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

factBtn.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
