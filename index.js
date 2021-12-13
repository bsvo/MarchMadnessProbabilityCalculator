var years = []
var divisions = ["West","South","Midwest","East"]
var startBrackets = {}
// this function reads the csv
$.ajax({
    url: 'fulldataset.csv',
    dataType: 'text',
  }).done(readYears);
// parses and reads the csv data for each year
  function readYears(data) {
    var allGames = data.split(/\r?\n|\r/);
    for (var currentGame = 1; currentGame < allGames.length; currentGame++) {
      var gameInfo = allGames[currentGame].split(',');
      if(!years.includes(gameInfo[0])){
        years.push(gameInfo[0]);
        startBrackets[gameInfo[0]] = {}
        startBrackets[gameInfo[0]]["West"] = []
        startBrackets[gameInfo[0]]["South"] = []
        startBrackets[gameInfo[0]]["Midwest"] = []
        startBrackets[gameInfo[0]]["East"] = []
      }
      if(divisions.includes(gameInfo[3])){
        if((startBrackets[gameInfo[0]][gameInfo[3]]).length < 8){
          var team1 = {}
          team1[gameInfo[6]] = Number(gameInfo[4])
          var team2 = {}
          team2[gameInfo[7]] = Number(gameInfo[9])
          currMatchup = [team1, team2]
          startBrackets[gameInfo[0]][gameInfo[3]].push(currMatchup)
        }
      }

      
    }
    var options = "";
    for(var i = years.length - 1; i >= 0; i--){
        options += "<option value= '" + years[i] + "'>" + years[i] + "</option>";
    }
    $( 'select[id="year-select"]' ).append( options );

  }

// mystery box function that randomizes the year when you click it
function randomizeYear(){
    $("#hr-manager").html("");
    $("#stat-holder").html("");
    //resets teams clicked
    if(lastTeamsClicked[0]){
      document.getElementById(lastTeamsClicked[0]).style.boxShadow = "0px 0px 0px";
    }
    if(lastTeamsClicked[1]){
      document.getElementById(lastTeamsClicked[1]).style.boxShadow = "0px 0px 0px";
    }
    lastTeamsClicked = []

    var randomYear = years[Math.floor(Math.random()*years.length)];
    document.getElementById("bracket-header").innerHTML = randomYear + " NCAAM Basketball Tournament";
    document.getElementById("hr-manager").innerHTML += "<hr style = 'width:750px;height:2px;border-width:0;margin-top:20px; background-color: #2AAAF0'>";
    buildBracketLeaves(randomYear)

}

// function implements the select year drop down menu and calls the specific data
function yearSelected(){
    $("#hr-manager").html("");
    $("#stat-holder").html("");
    //resets teams clicked
    if(lastTeamsClicked[0]){
      document.getElementById(lastTeamsClicked[0]).style.boxShadow = "0px 0px 0px";
    }
    if(lastTeamsClicked[1]){
      document.getElementById(lastTeamsClicked[1]).style.boxShadow = "0px 0px 0px";
    }
    lastTeamsClicked = []
    var selectedYear = document.getElementById("year-select").value;
    document.getElementById("bracket-header").innerHTML = selectedYear + " NCAAM Basketball Tournament";
    document.getElementById("hr-manager").innerHTML += "<hr style = 'width:750px;height:2px;border-width:0;margin-top:20px; background-color: #2AAAF0'>";
    buildBracketLeaves(selectedYear)

}

// function builds the bracket and the cells for all the rounds until the finals
// also fills out all the first round matchups
var currDivision = ""
function buildBracketLeaves(year){

  for(var division in startBrackets[year]){
    var match116 = startBrackets[year][division][0]
    var match215 = startBrackets[year][division][1]
    var match314 = startBrackets[year][division][2]
    var match413 = startBrackets[year][division][3]
    var match512 = startBrackets[year][division][4]
    var match611 = startBrackets[year][division][5]
    var match710 = startBrackets[year][division][6]
    var match89 = startBrackets[year][division][7]

    var team1 = Object.keys(match116[0])[0]
    var team2 = Object.keys(match215[0])[0]
    var team3 = Object.keys(match314[0])[0]
    var team4 = Object.keys(match413[0])[0]
    var team5 = Object.keys(match512[0])[0]
    var team6 = Object.keys(match611[0])[0]
    var team7 = Object.keys(match710[0])[0]
    var team8 = Object.keys(match89[0])[0]
    var team9 = Object.keys(match89[1])[0]
    var team10 = Object.keys(match710[1])[0]
    var team11 = Object.keys(match611[1])[0]
    var team12 = Object.keys(match512[1])[0]
    var team13 = Object.keys(match413[1])[0]
    var team14 = Object.keys(match314[1])[0]
    var team15 = Object.keys(match215[1])[0]
    var team16 = Object.keys(match116[1])[0]
    var team1seed = match116[0][team1]
    var team2seed = match215[0][team2]
    var team3seed = match314[0][team3]
    var team4seed = match413[0][team4]
    var team5seed = match512[0][team5]
    var team6seed = match611[0][team6]
    var team7seed = match710[0][team7]
    var team8seed = match89[0][team8]
    var team9seed = match89[1][team9]
    var team10seed = match710[1][team10]
    var team11seed = match611[1][team11]
    var team12seed = match512[1][team12]
    var team13seed = match413[1][team13]
    var team14seed = match314[1][team14]
    var team15seed = match215[1][team15]
    var team16seed = match116[1][team16]

    //tests for invalid seeds
    var teamSeeds = [team1seed,team2seed,team3seed,team4seed,team5seed,team6seed,team7seed,team8seed,team9seed,team10seed,team11seed,team12seed,team13seed,team14seed,team15seed,team16seed]
    var validSeeds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    for(var seed in teamSeeds){
      if(!validSeeds.includes(Number(teamSeeds[seed]))){
        console.error("invalid seed")
      }
    }



    var team1id = ""
    team1id += team1seed
    team1id += '-'
    team1id += team16seed
    team1id += '-'
    team1id += division
    team1id += '-'
    team1id += team1seed

    var team16id = ""
    team16id += team1seed
    team16id += '-'
    team16id += team16seed
    team16id += '-'
    team16id += division
    team16id += '-'
    team16id += team16seed

    var team2id = ""
    team2id += team2seed
    team2id += '-'
    team2id += team15seed
    team2id += '-'
    team2id += division
    team2id += '-'
    team2id += team2seed

    var team15id = ""
    team15id += team2seed
    team15id += '-'
    team15id += team15seed
    team15id += '-'
    team15id += division
    team15id += '-'
    team15id += team15seed

    var team3id = ""
    team3id += team3seed
    team3id += '-'
    team3id += team14seed
    team3id += '-'
    team3id += division
    team3id += '-'
    team3id += team3seed

    var team14id = ""
    team14id += team3seed
    team14id += '-'
    team14id += team14seed
    team14id += '-'
    team14id += division
    team14id += '-'
    team14id += team14seed


    var team4id = ""
    team4id += team4seed
    team4id += '-'
    team4id += team13seed
    team4id += '-'
    team4id += division
    team4id += '-'
    team4id += team4seed


    var team13id = ""
    team13id += team4seed
    team13id += '-'
    team13id += team13seed
    team13id += '-'
    team13id += division
    team13id += '-'
    team13id += team13seed

    var team5id = ""
    team5id += team5seed
    team5id += '-'
    team5id += team12seed
    team5id += '-'
    team5id += division
    team5id += '-'
    team5id += team5seed

    var team12id = ""
    team12id += team5seed
    team12id += '-'
    team12id += team12seed
    team12id += '-'
    team12id += division
    team12id += '-'
    team12id += team12seed

    var team6id = ""
    team6id += team6seed
    team6id += '-'
    team6id += team11seed
    team6id += '-'
    team6id += division
    team6id += '-'
    team6id += team6seed

    var team11id = ""
    team11id += team6seed
    team11id += '-'
    team11id += team11seed
    team11id += '-'
    team11id += division
    team11id += '-'
    team11id += team11seed

    var team7id = ""
    team7id += team7seed
    team7id += '-'
    team7id += team10seed
    team7id += '-'
    team7id += division
    team7id += '-'
    team7id += team7seed


    var team10id = ""
    team10id += team7seed
    team10id += '-'
    team10id += team10seed
    team10id += '-'
    team10id += division
    team10id += '-'
    team10id += team10seed

    var team8id = ""
    team8id += team8seed
    team8id += '-'
    team8id += team9seed
    team8id += '-'
    team8id += division
    team8id += '-'
    team8id += team8seed

    var team9id = ""
    team9id += team8seed
    team9id += '-'
    team9id += team9seed
    team9id += '-'
    team9id += division
    team9id += '-'
    team9id += team9seed

    document.getElementById(team1id).textContent = team1seed + ". " + team1
    document.getElementById(team16id).textContent = team16seed + ". " + team16
    document.getElementById(team2id).textContent = team2seed + ". " + team2
    document.getElementById(team15id).textContent = team15seed + ". " + team15
    document.getElementById(team3id).textContent = team3seed + ". " + team3
    document.getElementById(team14id).textContent = team14seed + ". " + team14
    document.getElementById(team4id).textContent = team4seed + ". " + team4
    document.getElementById(team13id).textContent = team13seed + ". " + team13
    document.getElementById(team5id).textContent = team5seed + ". " + team5
    document.getElementById(team12id).textContent = team12seed + ". " + team12
    document.getElementById(team6id).textContent = team6seed + ". " + team6
    document.getElementById(team11id).textContent = team11seed + ". " + team11
    document.getElementById(team7id).textContent = team7seed + ". " + team7
    document.getElementById(team10id).textContent = team10seed + ". " + team10
    document.getElementById(team8id).textContent = team8seed + ". " + team8
    document.getElementById(team9id).textContent = team9seed + ". " + team9


  }
}


var lastTeamsClicked = []

//allows two teams to be clicked and highlighted
function onTeamClicked(element){
  if(lastTeamsClicked.includes(element.id)){
    var ind = lastTeamsClicked.indexOf(element.id)
    lastTeamsClicked.splice(ind, 1);
    element.style.boxShadow = "";
  }
  else if(lastTeamsClicked.length == 2){
    var toRemove = document.getElementById(lastTeamsClicked[0]);
    toRemove.style.boxShadow = "";
    lastTeamsClicked.push(element.id)
    element.style.boxShadow = "0px 0px 10px #FAED27";
    lastTeamsClicked.shift()
  }
  else{
    lastTeamsClicked.push(element.id)
    element.style.boxShadow = "0px 0px 10px #FAED27";
  }
// calls probability function when two teams are clicked
  if(lastTeamsClicked.length == 2){
    calculateProbabilityOfMeeting(lastTeamsClicked)
  }

}


var bruh5;
var team1Seed;
var team2Seed;
var team1Name = ""
var team2Name = ""

// calculates the probability of two teams meeting if two are selected properly
function calculateProbabilityOfMeeting(lastTeamsClicked){
  team1Division = ""
  team2Division = ""
  $("#stat-holder").html("");

  //test to make sure only teams can be selected
  if(lastTeamsClicked.length != 2){
    console.error("Error selecting teams")
  }
  var firstTeam = true
  for(var id in lastTeamsClicked){
    for(var division in divisions){
      if(lastTeamsClicked[id].includes(divisions[division])){
        if(firstTeam){
          team1Division = divisions[division]
          firstTeam = false
        } else {
          team2Division = divisions[division]
        }
      }
    }
  }
  if(!(document.getElementById(lastTeamsClicked[0])) || !(document.getElementById(lastTeamsClicked[1]))){
    console.error("Invalid ID")
  }


  team1Seed = document.getElementById(lastTeamsClicked[0]).id.split("-").at(-1)
  team2Seed = document.getElementById(lastTeamsClicked[1]).id.split("-").at(-1)
  var team1Matchup = document.getElementById(lastTeamsClicked[0]).parentElement
  var team2Matchup = document.getElementById(lastTeamsClicked[1]).parentElement
  team1Name = ""
  var team1NameAsArr = document.getElementById(lastTeamsClicked[0]).textContent.split(" ")
  team1NameAsArr.shift()
  for (var i in team1NameAsArr){
    team1Name += team1NameAsArr[i]
    team1Name += " "
  }
  team2Name = ""
  var team2NameAsArr = document.getElementById(lastTeamsClicked[1]).textContent.split(" ")
  team2NameAsArr.shift()
  for (var j in team2NameAsArr){
    team2Name += team2NameAsArr[j]
    team2Name += " "
  }
// names the rounds when displaying probability 
  roundNames = {
    1 : "1st round",
    2 : "2nd round",
    3 : "Sweet Sixteen",
    4 : "Elite Eight",
    5 : "Final Four",
    6 : "Finals"
  }
  var roundOfMeeting = findRoundOfMeeting(team1Matchup, team2Matchup, 1)
  var probabilityTeam1Arrives = findProbabilityTeamArrives(Number(team1Seed), team1Matchup, 1)
  var probabilityTeam2Arrives = findProbabilityTeamArrives(Number(team2Seed), team2Matchup, 1)


  //test to make sure round of meeting is a number between 1 and 6
  if (roundOfMeeting > 6 || roundOfMeeting < 1){
    console.error("invalid round")
  }

   //test to make sure probability is valid
   if(probabilityTeam1Arrives > 1 || probabilityTeam2Arrives > 1){
    console.error("Probability can't be over 1")
  }

  // converts probability into percent format
  var probabilityInPercent = String(((probabilityTeam1Arrives * probabilityTeam2Arrives) * 100).toFixed(6)).slice(0,5) + "%"
  var probabilityTeam1ArrivesInPercent = String((probabilityTeam1Arrives *100).toFixed(2)).slice(0,5) + "%"
  var probabilityTeam2ArrivesInPercent = String((probabilityTeam2Arrives *100).toFixed(2)).slice(0,5) + "%"
   //tests to make sure stat blocks formatted correctly
   if(probabilityTeam1ArrivesInPercent.length > 6 || probabilityTeam2ArrivesInPercent.length > 6){
    console.error("stat block formatting error")
  }
  if(probabilityInPercent.length > 6){
    console.error("stat block formatting error")
  }
  buildRestOfBracket(team1Seed, team1Matchup, team1Seed + ". " + team1Name, team1Division)
  buildRestOfBracket(team2Seed, team2Matchup, team2Seed + ". " + team2Name, team2Division)
  if(bruh5 != "1-1-Finals"){
    var teamSeedsInMatchup = document.getElementById(bruh5).id.split("-").splice(0,2)
    document.getElementById(bruh5 + "-" + teamSeedsInMatchup[0]).textContent = team1Seed + ". " + team1Name
    document.getElementById(bruh5 + "-" + teamSeedsInMatchup[1]).textContent = team2Seed + ". " + team2Name
  } else {
    document.getElementById("Coasts").textContent = team1Seed + ". " + team1Name
    document.getElementById("Inland").textContent = team2Seed + ". " + team2Name
  }
  document.getElementById("stat-holder").style.height = "100px"
  //team 1 block 
  var stat1Block = document.createElement('team1-prob-stats')
  stat1Block.className = "stat-block"
  stat1Block.style.marginTop = "75px"
  var stat1BlockHead = document.createElement('h4')
  stat1BlockHead.textContent = "Probability of " + team1Name + " making it to the " + roundNames[roundOfMeeting]
  stat1BlockHead.style.fontSize = "20px"
  var stat1BlockProb = document.createElement('h4')
  stat1BlockProb.textContent = probabilityTeam1ArrivesInPercent
  stat1BlockProb.style.fontSize = "30px"
  stat1Block.append(stat1BlockHead)
  stat1Block.append(stat1BlockProb)
  //team 2 block 
  var stat2Block = document.createElement('team1-prob-stats')
  stat2Block.className = "stat-block"
  stat2Block.style.marginTop = "75px"
  var stat2BlockHead = document.createElement('h4')
  stat2BlockHead.textContent = "Probability of " + team2Name + " making it to the " + roundNames[roundOfMeeting]
  stat2BlockHead.style.fontSize = "20px"
  var stat2BlockProb = document.createElement('h4')
  stat2BlockProb.textContent = probabilityTeam2ArrivesInPercent
  stat2BlockProb.style.fontSize = "30px"
  stat2Block.append(stat2BlockHead)
  stat2Block.append(stat2BlockProb)
  //team meeting block
  var statBlock = document.createElement('teams-meeting-stats')
  statBlock.className = "stat-block"
  statBlock.style.marginTop = "75px"
  var statBlockHead = document.createElement('h4')
  statBlockHead.textContent = "Probability of " + team1Name + "and " + team2Name + " meeting"
  statBlockHead.style.fontSize = "20px"
  var statBlockProb = document.createElement('h4')
  statBlockProb.textContent = probabilityInPercent
  statBlockProb.style.fontSize = "30px"
  statBlock.append(statBlockHead)
  statBlock.append(statBlockProb)
  //tests that stat holder exists
  if(!document.getElementById("stat-holder")){
    console.log("stat-holder must be present")
  }
  document.getElementById("stat-holder").append(stat1Block)
  document.getElementById("stat-holder").append(stat2Block)
  document.getElementById("stat-holder").append(statBlock)
  

}
var roundMeet = 1

// builds the rest of bracket matchups
function buildRestOfBracket(teamSeed, teamMatchup, teamName, teamDivision){
  if(teamMatchup.parentElement.id == bruh5){
    return
  }
  var teamSeedsInMatchup = teamMatchup.id.split("-").splice(0,2)
  var teamSeedsInMatchup = teamMatchup.parentElement.id.split("-").splice(0,2)
  var betterSeed = Number(teamSeedsInMatchup[0])
  var worseSeed = Number(teamSeedsInMatchup[1])
  if(teamMatchup.parentElement.id == "West-East" || teamMatchup.parentElement.id == "Midwest-South"){
    document.getElementById(teamMatchup.parentElement.id + "-" + teamDivision).textContent = teamName
  } else {
    if(teamSeed == betterSeed){
      var parentId = teamMatchup.parentElement.id + "-" + String(betterSeed)
      document.getElementById(parentId).textContent = teamName
    } else if(teamSeed == worseSeed){
      var parentId = teamMatchup.parentElement.id + "-" + String(worseSeed)
      document.getElementById(parentId).textContent = teamName
    } else {
      var parentId = teamMatchup.parentElement.id + "-" + String(worseSeed)
      document.getElementById(parentId).textContent = teamName
    }

  }
  return buildRestOfBracket(teamSeed, teamMatchup.parentElement, teamName, teamDivision)

}


  function findProbabilityTeamArrives(teamSeed, teamMatchup, currentProbability){
    if(teamMatchup.id == bruh5){
      return currentProbability
    }
    if(teamMatchup.id == "West-East" || teamMatchup.id == "Midwest-South"){
      currentProbability /= 2
    }
    else{
      var teamSeedsInMatchup = teamMatchup.id.split("-").splice(0,2)
      var betterSeed = Number(teamSeedsInMatchup[0])
      var worseSeed = Number(teamSeedsInMatchup[1])
      //test to make sure seed formatting is correct
      if(teamSeed == betterSeed){
        currentProbability = (worseSeed / (betterSeed + worseSeed)) * currentProbability
      } else if(teamSeed == worseSeed){
        currentProbability = (betterSeed/ (betterSeed + worseSeed)) * currentProbability
      } else {
        currentProbability = (betterSeed/ (betterSeed + teamSeed)) * currentProbability
      }
    }
  
    return findProbabilityTeamArrives(teamSeed, teamMatchup.parentElement, currentProbability)
    
  }


function findRoundOfMeeting(team1Matchup, team2Matchup, roundIncrement){
  if(team1Matchup.id == team2Matchup.id){
    bruh5 = team1Matchup.id
    return roundIncrement
  }
  return findRoundOfMeeting(team1Matchup.parentElement, team2Matchup.parentElement, roundIncrement + 1)
  
}
