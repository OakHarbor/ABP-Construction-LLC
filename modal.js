// gallery toggle functionality 

// button as variables
var $residentialButton = $(".residential-button");
var $commercialButton = $(".commercial-button");

// gallerys
var $residential = $(".residential");
var $commercial = $(".commercial");

// when the residential button is clicked
$residentialButton.on("click", function(e) {
  $residentialButton.addClass("clicked");
  $commercialButton.removeClass("clicked");

  $residential.addClass("clicked");
  $commercial.removeClass("clicked");
});

// when the commercial button is clicked
$commercialButton.on("click", function(e) {
  $commercialButton.addClass("clicked");
  $residentialButton.removeClass("clicked");
  
  $commercial.addClass("clicked");
  $residential.removeClass("clicked");
});


/* Modals collected in variables */

// Residential Modals
var $modalOne = $(".modal-one");
var $modalTwo = $(".modal-two");
var $modalThree = $(".modal-three");
var $modalFour = $(".modal-four");
var $modalFive = $(".modal-five");
var $modalSix = $(".modal-six");
var $modalSeven = $(".modal-seven");
var $modalEight = $(".modal-eight");
var $modalNine = $(".modal-nine");
var $modalTen = $(".modal-ten");
var $modalEleven = $(".modal-eleven");
var $modalTwelve = $(".modal-twelve");
var $modalThirteen = $(".modal-thirteen");
var $modalFourteen = $(".modal-fourteen");
var $modalFifteen = $(".modal-fifteen");
var $modalSixteen = $(".modal-sixteen");
var $modalSeventeen = $(".modal-seventeen");
var $modalEighteen = $(".modal-eighteen");
var $modalNineteen = $(".modal-nineteen");
var $modalTwenty = $(".modal-twenty");
var $modalTwentyOne = $(".modal-twenty-one");
var $modalTwentyTwo = $(".modal-twenty-two");
var $modalTwentyThree = $(".modal-twenty-three");
var $modalTwentyFour = $(".modal-twenty-four");
var $modalTwentyFive = $(".modal-twenty-five");
var $modalTwentySix = $(".modal-twenty-six");
var $modalTwentySeven = $(".modal-twenty-seven");
var $modalTwentyEight = $(".modal-twenty-eight");
var $modalTwentyNine = $(".modal-twenty-nine");
var $modalThirty = $(".modal-thirty");
var $modalThirtyOne = $(".modal-thirty-one");
var $modalThirtyTwo = $(".modal-thirty-two");

// Commercial Modals
var $modalOneC = $(".c-modal-one");
var $modalTwoC = $(".c-modal-two");
var $modalThreeC = $(".c-modal-three");
var $modalFourC = $(".c-modal-four");
var $modalFiveC = $(".c-modal-five");
var $modalSixC = $(".c-modal-six");
var $modalSevenC = $(".c-modal-seven");
var $modalEightC = $(".c-modal-eight");
var $modalNineC = $(".c-modal-nine");
var $modalTenC = $(".c-modal-ten");
var $modalElevenC = $(".c-modal-eleven");
var $modalTwelveC = $(".c-modal-twelve");
var $modalThirteenC = $(".c-modal-thirteen");
var $modalFourteenC = $(".c-modal-fourteen");
var $modalFifteenC = $(".c-modal-fifteen");
var $modalSixteenC = $(".c-modal-sixteen");
var $modalSeventeenC = $(".c-modal-seventeen");
var $modalEighteenC = $(".c-modal-eighteen");
var $modalNineteenC = $(".c-modal-nineteen");
var $modalTwentyC = $(".c-modal-twenty");
var $modalTwentyOneC = $(".c-modal-twenty-one");
var $modalTwentyTwoC = $(".c-modal-twenty-two");
var $modalTwentyThreeC = $(".c-modal-twenty-three");

/* Images collected in variables */

var $homeIcon = $(".home-icon");
var $html = $("html");

// Residential
var $one = $("#one");
var $two = $("#two");
var $three = $("#three");
var $four = $("#four");
var $five = $("#five");
var $six = $("#six");
var $seven = $("#seven");
var $eight = $("#eight");
var $nine = $("#nine");
var $ten = $("#ten");
var $eleven = $("#eleven");
var $twelve = $("#twelve");
var $thirteen = $("#thirteen");
var $fourteen = $("#fourteen");
var $fifteen = $("#fifteen");
var $sixteen = $("#sixteen");
var $seventeen = $("#seventeen");
var $eighteen = $("#eighteen");
var $nineteen = $("#nineteen");
var $twenty = $("#twenty");
var $twentyOne = $("#twenty-one");
var $twentyTwo = $("#twenty-two");
var $twentyThree = $("#twenty-three");
var $twentyFour = $("#twenty-four");
var $twentyFive = $("#twenty-five");
var $twentySix = $("#twenty-six");
var $twentySeven = $("#twenty-seven");
var $twentyEight = $("#twenty-eight");
var $twentyNine = $("#twenty-nine");
var $thirty = $("#thirty");
var $thirtyOne = $("#thirty-one");
var $thirtyTwo = $("#thirty-two");

// Commercial
var $oneC = $("#c-one");
var $twoC = $("#c-two");
var $threeC = $("#c-three");
var $fourC = $("#c-four");
var $fiveC = $("#c-five");
var $sixC = $("#c-six");
var $sevenC = $("#c-seven");
var $eightC = $("#c-eight");
var $nineC = $("#c-nine");
var $tenC = $("#c-ten");
var $elevenC = $("#c-eleven");
var $twelveC = $("#c-twelve");
var $thirteenC = $("#c-thirteen");
var $fourteenC = $("#c-fourteen");
var $fifteenC = $("#c-fifteen");
var $sixteenC = $("#c-sixteen");
var $seventeenC = $("#c-seventeen");
var $eighteenC = $("#c-eighteen");
var $nineteenC = $("#c-nineteen");
var $twentyC = $("#c-twenty");
var $twentyOneC = $("#c-twenty-one");
var $twentyTwoC = $("#c-twenty-two");
var $twentyThreeC = $("#c-twenty-three");


/* Add Clicked Class */

//Residential
$one.on("click", function(e) {
  $modalOne.addClass("clicked");
  $html.addClass("clicked");
});

$two.on("click", function(e) {
  $modalTwo.addClass("clicked");
  $html.addClass("clicked");
});

$three.on("click", function(e) {
  $modalThree.addClass("clicked");
  $html.addClass("clicked");
});

$four.on("click", function(e) {
  $modalFour.addClass("clicked");
  $html.addClass("clicked");
});

$five.on("click", function(e) {
  $modalFive.addClass("clicked");
  $html.addClass("clicked");
});

$six.on("click", function(e) {
  $modalSix.addClass("clicked");
  $html.addClass("clicked");
});

$seven.on("click", function(e) {
  $modalSeven.addClass("clicked");
  $html.addClass("clicked");
});

$eight.on("click", function(e) {
  $modalEight.addClass("clicked");
  $html.addClass("clicked");
});

$nine.on("click", function(e) {
  $modalNine.addClass("clicked");
  $html.addClass("clicked");
});

$ten.on("click", function(e) {
  $modalTen.addClass("clicked");
  $html.addClass("clicked");
});

$eleven.on("click", function(e) {
  $modalEleven.addClass("clicked");
  $html.addClass("clicked");
});

$twelve.on("click", function(e) {
  $modalTwelve.addClass("clicked");
  $html.addClass("clicked");
});

$thirteen.on("click", function(e) {
  $modalThirteen.addClass("clicked");
  $html.addClass("clicked");
});

$fourteen.on("click", function(e) {
  $modalFourteen.addClass("clicked");
  $html.addClass("clicked");
});

$fifteen.on("click", function(e) {
  $modalFifteen.addClass("clicked");
  $html.addClass("clicked");
});

$sixteen.on("click", function(e) {
  $modalSixteen.addClass("clicked");
  $html.addClass("clicked");
});

$seventeen.on("click", function(e) {
  $modalSeventeen.addClass("clicked");
  $html.addClass("clicked");
});

$eighteen.on("click", function(e) {
  $modalEighteen.addClass("clicked");
  $html.addClass("clicked");
});

$nineteen.on("click", function(e) {
  $modalNineteen.addClass("clicked");
  $html.addClass("clicked");
});

$twenty.on("click", function(e) {
  $modalTwenty.addClass("clicked");
  $html.addClass("clicked");
});

$twentyOne.on("click", function(e) {
  $modalTwentyOne.addClass("clicked");
  $html.addClass("clicked");
});

$twentyTwo.on("click", function(e) {
  $modalTwentyTwo.addClass("clicked");
  $html.addClass("clicked");
});

$twentyThree.on("click", function(e) {
  $modalTwentyThree.addClass("clicked");
  $html.addClass("clicked");
});

$twentyFour.on("click", function(e) {
  $modalTwentyFour.addClass("clicked");
  $html.addClass("clicked");
});

$twentyFive.on("click", function(e) {
  $modalTwentyFive.addClass("clicked");
  $html.addClass("clicked");
});

$twentySix.on("click", function(e) {
  $modalTwentySix.addClass("clicked");
  $html.addClass("clicked");
});

$twentySeven.on("click", function(e) {
  $modalTwentySeven.addClass("clicked");
  $html.addClass("clicked");
});

$twentyEight.on("click", function(e) {
  $modalTwentyEight.addClass("clicked");
  $html.addClass("clicked");
});

$twentyNine.on("click", function(e) {
  $modalTwentyNine.addClass("clicked");
  $html.addClass("clicked");
});

$thirty.on("click", function(e) {
  $modalThirty.addClass("clicked");
  $html.addClass("clicked");
});

$thirtyOne.on("click", function(e) {
  $modalThirtyOne.addClass("clicked");
  $html.addClass("clicked");
});

$thirtyTwo.on("click", function(e) {
  $modalThirtyTwo.addClass("clicked");
  $html.addClass("clicked");
});


// Commcerical
$oneC.on("click", function(e) {
  $modalOneC.addClass("clicked");
  $html.addClass("clicked");
});

$twoC.on("click", function(e) {
  $modalTwoC.addClass("clicked");
  $html.addClass("clicked");
});

$threeC.on("click", function(e) {
  $modalThreeC.addClass("clicked");
  $html.addClass("clicked");
});

$fourC.on("click", function(e) {
  $modalFourC.addClass("clicked");
  $html.addClass("clicked");
});

$fiveC.on("click", function(e) {
  $modalFiveC.addClass("clicked");
  $html.addClass("clicked");
});

$sixC.on("click", function(e) {
  $modalSixC.addClass("clicked");
  $html.addClass("clicked");
});

$sevenC.on("click", function(e) {
  $modalSevenC.addClass("clicked");
  $html.addClass("clicked");
});

$eightC.on("click", function(e) {
  $modalEightC.addClass("clicked");
  $html.addClass("clicked");
});

$nineC.on("click", function(e) {
  $modalNineC.addClass("clicked");
  $html.addClass("clicked");
});

$tenC.on("click", function(e) {
  $modalTenC.addClass("clicked");
  $html.addClass("clicked");
});

$elevenC.on("click", function(e) {
  $modalElevenC.addClass("clicked");
  $html.addClass("clicked");
});

$twelveC.on("click", function(e) {
  $modalTwelveC.addClass("clicked");
  $html.addClass("clicked");
});

$thirteenC.on("click", function(e) {
  $modalThirteenC.addClass("clicked");
  $html.addClass("clicked");
});

$fourteenC.on("click", function(e) {
  $modalFourteenC.addClass("clicked");
  $html.addClass("clicked");
});

$fifteenC.on("click", function(e) {
  $modalFifteenC.addClass("clicked");
  $html.addClass("clicked");
});

$sixteenC.on("click", function(e) {
  $modalSixteenC.addClass("clicked");
  $html.addClass("clicked");
});

$seventeenC.on("click", function(e) {
  $modalSeventeenC.addClass("clicked");
  $html.addClass("clicked");
});

$eighteenC.on("click", function(e) {
  $modalEighteenC.addClass("clicked");
  $html.addClass("clicked");
});

$nineteenC.on("click", function(e) {
  $modalNineteenC.addClass("clicked");
  $html.addClass("clicked");
});

$twentyC.on("click", function(e) {
  $modalTwentyC.addClass("clicked");
  $html.addClass("clicked");
});

$twentyOneC.on("click", function(e) {
  $modalTwentyOneC.addClass("clicked");
  $html.addClass("clicked");
});

$twentyTwoC.on("click", function(e) {
  $modalTwentyTwoC.addClass("clicked");
  $html.addClass("clicked");
});

$twentyThreeC.on("click", function(e) {
  $modalTwentyThreeC.addClass("clicked");
  $html.addClass("clicked");
});


/* Remove Clicked Class */

$homeIcon.on("click", function(e) {
  // Residential
  $modalOne.removeClass("clicked");
  $modalTwo.removeClass("clicked");
  $modalThree.removeClass("clicked");
  $modalFour.removeClass("clicked");
  $modalFive.removeClass("clicked");
  $modalSix.removeClass("clicked");
  $modalSeven.removeClass("clicked");
  $modalEight.removeClass("clicked");
  $modalNine.removeClass("clicked");
  $modalTen.removeClass("clicked");
  $modalEleven.removeClass("clicked");
  $modalTwelve.removeClass("clicked");
  $modalThirteen.removeClass("clicked");
  $modalFourteen.removeClass("clicked");
  $modalFifteen.removeClass("clicked");
  $modalSixteen.removeClass("clicked");
  $modalSeventeen.removeClass("clicked");
  $modalEighteen.removeClass("clicked");
  $modalNineteen.removeClass("clicked");
  $modalTwenty.removeClass("clicked");
  $modalTwentyOne.removeClass("clicked");
  $modalTwentyTwo.removeClass("clicked");
  $modalTwentyThree.removeClass("clicked");
  $modalTwentyFour.removeClass("clicked");
  $modalTwentyFive.removeClass("clicked");
  $modalTwentySix.removeClass("clicked");
  $modalTwentySeven.removeClass("clicked");
  $modalTwentyEight.removeClass("clicked");
  $modalTwentyNine.removeClass("clicked");
  $modalThirty.removeClass("clicked");
  $modalThirtyOne.removeClass("clicked");
  $modalThirtyTwo.removeClass("clicked");

  // Commercial
  $modalOneC.removeClass("clicked");
  $modalTwoC.removeClass("clicked");
  $modalThreeC.removeClass("clicked");
  $modalFourC.removeClass("clicked");
  $modalFiveC.removeClass("clicked");
  $modalSixC.removeClass("clicked");
  $modalSevenC.removeClass("clicked");
  $modalEightC.removeClass("clicked");
  $modalNineC.removeClass("clicked");
  $modalTenC.removeClass("clicked");
  $modalElevenC.removeClass("clicked");
  $modalTwelveC.removeClass("clicked");
  $modalThirteenC.removeClass("clicked");
  $modalFourteenC.removeClass("clicked");
  $modalFifteenC.removeClass("clicked");
  $modalSixteenC.removeClass("clicked");
  $modalSeventeenC.removeClass("clicked");
  $modalEighteenC.removeClass("clicked");
  $modalNineteenC.removeClass("clicked");
  $modalTwentyC.removeClass("clicked");
  $modalTwentyOneC.removeClass("clicked");
  $modalTwentyTwoC.removeClass("clicked");
  $modalTwentyThreeC.removeClass("clicked");
  
  $html.removeClass("clicked");
});