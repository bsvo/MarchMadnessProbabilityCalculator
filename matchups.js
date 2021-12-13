var years = []
var divisions = ["West","South","Midwest","East"]
var startBrackets = {}
var round2Brackets = {}
var sweet16Brackets = {}
var elite8Brackets = {}
var finalFourBrackets = {}
var finalsBrackets = {}
var winner;

//parses CSV
$.ajax({
    url: 'fulldataset.csv',
    dataType: 'text',
  }).done(readYears);

  function readYears(data) {
    //iterates through rows of csv
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
        round2Brackets[gameInfo[0]] = {}
        round2Brackets[gameInfo[0]]["West"] = []
        round2Brackets[gameInfo[0]]["South"] = []
        round2Brackets[gameInfo[0]]["Midwest"] = []
        round2Brackets[gameInfo[0]]["East"] = []
        sweet16Brackets[gameInfo[0]] = {}
        sweet16Brackets[gameInfo[0]]["West"] = []
        sweet16Brackets[gameInfo[0]]["South"] = []
        sweet16Brackets[gameInfo[0]]["Midwest"] = []
        sweet16Brackets[gameInfo[0]]["East"] = []
        elite8Brackets[gameInfo[0]] = {}
        elite8Brackets[gameInfo[0]]["West"] = []
        elite8Brackets[gameInfo[0]]["South"] = []
        elite8Brackets[gameInfo[0]]["Midwest"] = []
        elite8Brackets[gameInfo[0]]["East"] = []

      }
      //adds to dictionaries for each round, based on parsed csv data
      if(gameInfo[1] == "1"){
        var team1 = {}
        team1[gameInfo[6]] = Number(gameInfo[4])
        var team2 = {}
        team2[gameInfo[7]] = Number(gameInfo[9])
        var currMatchup = [team1, team2]
        startBrackets[gameInfo[0]][gameInfo[3]].push(currMatchup)
      } else if(gameInfo[1] == "2"){
        var team1 = {}
        team1[gameInfo[6]] = Number(gameInfo[4])
        var team2 = {}
        team2[gameInfo[7]] = Number(gameInfo[9])
        var currMatchup = [team1, team2]
        round2Brackets[gameInfo[0]][gameInfo[3]].push(currMatchup)
      } else if(gameInfo[1] == "3"){
        var team1 = {}
        team1[gameInfo[6]] = Number(gameInfo[4])
        var team2 = {}
        team2[gameInfo[7]] = Number(gameInfo[9])
        var currMatchup = [team1, team2]
        sweet16Brackets[gameInfo[0]][gameInfo[3]].push(currMatchup)
      } else if(gameInfo[1] == "4"){
        var team1 = {}
        team1[gameInfo[6]] = Number(gameInfo[4])
        var team2 = {}
        team2[gameInfo[7]] = Number(gameInfo[9])
        var currMatchup = [team1, team2]
        elite8Brackets[gameInfo[0]][gameInfo[3]].push(currMatchup)
      } else if (gameInfo[1] == "5"){
        finalFourBrackets[gameInfo[0]] = {}
        finalFourBrackets[gameInfo[0]]["Final Four"] = []
        finalsBrackets[gameInfo[0]]= {}
        finalsBrackets[gameInfo[0]]["Finals"] = []
        var ffTeam1 = {}
        ffTeam1[gameInfo[6]] = Number(gameInfo[4])
        var ffTeam2 = {}
        ffTeam2[gameInfo[7]] = Number(gameInfo[9])
        var ffMatchup1 = [ffTeam1, ffTeam2]
        finalFourBrackets[gameInfo[0]]["Final Four"].push(ffMatchup1)
        var nextGameInfo = allGames[currentGame + 1].split(',');
        var ffTeam3 = {}
        ffTeam3[nextGameInfo[6]] = Number(nextGameInfo[4])
        var ffTeam4= {}
        ffTeam4[nextGameInfo[7]] = Number(nextGameInfo[9])
        var ffMatchup2 = [ffTeam3, ffTeam4]
        finalFourBrackets[gameInfo[0]]["Final Four"].push(ffMatchup2)
        var championshipGameInfo = allGames[currentGame + 2].split(',');
        var championshipTeam1 = {}
        championshipTeam1[championshipGameInfo[6]] = Number(championshipGameInfo[4])
        var championshipTeam2 = {}
        championshipTeam2[championshipGameInfo[7]] = Number(championshipGameInfo[9])
        var championshipMatchup = [championshipTeam1, championshipTeam2]
        finalsBrackets[gameInfo[0]]["Finals"].push(championshipMatchup)
        currentGame += 2
      }
      
      
    }

    buildBracketLeaves("2011");

  }


var currDivision = ""
//Configures the 2011 bracKket
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
  for(var division in round2Brackets[year]){
    var match18 = round2Brackets[year][division][0]
    var match27 = round2Brackets[year][division][1]
    var match36 = round2Brackets[year][division][2]
    var match45 = round2Brackets[year][division][3]
    var team1 = Object.keys(match18[0])[0]
    var team2 = Object.keys(match27[0])[0]
    var team3 = Object.keys(match36[0])[0]
    var team4 = Object.keys(match45[0])[0]
    var team5 = Object.keys(match45[1])[0]
    var team6 = Object.keys(match36[1])[0]
    var team7 = Object.keys(match27[1])[0]
    var team8 = Object.keys(match18[1])[0]
    var team1seed = match18[0][team1]
    var team2seed = match27[0][team2]
    var team3seed = match36[0][team3]
    var team4seed = match45[0][team4]
    var team5seed = match45[1][team5]
    var team6seed = match36[1][team6]
    var team7seed = match27[1][team7]
    var team8seed = match18[1][team8]
    document.getElementById("1-8-" + division + "-1").textContent = team1seed + ". " + team1
    document.getElementById("2-7-" + division + "-2").textContent = team2seed + ". " + team2
    document.getElementById("3-6-" + division + "-3").textContent = team3seed + ". " + team3
    document.getElementById("4-5-" + division + "-4").textContent = team4seed + ". " + team4
    document.getElementById("4-5-" + division + "-5").textContent = team5seed + ". " + team5
    document.getElementById("3-6-" + division + "-6").textContent = team6seed + ". " + team6
    document.getElementById("2-7-" + division + "-7").textContent = team7seed + ". " + team7
    document.getElementById("1-8-" + division + "-8").textContent = team8seed + ". " + team8

  }
  for(var division in sweet16Brackets[year]){
    var match14 = sweet16Brackets[year][division][0]
    var match23 = sweet16Brackets[year][division][1]
    var team1 = Object.keys(match14[0])[0]
    var team2 = Object.keys(match23[0])[0]
    var team3 = Object.keys(match23[1])[0]
    var team4 = Object.keys(match14[1])[0]
    var team1seed = match14[0][team1]
    var team2seed = match23[0][team2]
    var team3seed = match23[1][team3]
    var team4seed = match14[1][team4]

    document.getElementById("1-4-" + division + "-1").textContent = team1seed + ". " + team1
    document.getElementById("2-3-" + division + "-2").textContent = team2seed + ". " + team2
    document.getElementById("2-3-" + division + "-3").textContent = team3seed + ". " + team3
    document.getElementById("1-4-" + division + "-4").textContent = team4seed + ". " + team4

  }

  for(var division in elite8Brackets[year]){
    var match12 = elite8Brackets[year][division][0]
    var team1 = Object.keys(match12[0])[0]
    var team2 = Object.keys(match12[1])[0]
    var team1seed = match12[0][team1]
    var team2seed = match12[1][team2]

    document.getElementById("1-2-" + division + "-1").textContent = team1seed + ". " + team1
    document.getElementById("1-2-" + division + "-2").textContent = team2seed + ". " + team2

  }



  var finalFour1 = finalFourBrackets[year]["Final Four"][0]
  var finalFour2 = finalFourBrackets[year]["Final Four"][1]
  var finalFourTeam1 = Object.keys(finalFour1[0])[0]
  var finalFourTeam2 = Object.keys(finalFour1[1])[0]
  var finalFourTeam3 = Object.keys(finalFour2[0])[0]
  var finalFourTeam4 = Object.keys(finalFour2[1])[0]
  var finalFourTeam1seed = finalFour1[0][finalFourTeam1]
  var finalFourTeam2seed = finalFour1[1][finalFourTeam2]
  var finalFourTeam3seed = finalFour2[0][finalFourTeam3]
  var finalFourTeam4seed = finalFour2[1][finalFourTeam4]
  var finals = finalsBrackets[year]["Finals"][0]
  var finalsTeam1 = Object.keys(finals[0])[0]
  var finalsTeam2 = Object.keys(finals[1])[0]
  var finalsTeam1seed = finals[0][finalsTeam1]
  var finalsTeam2seed = finals[1][finalsTeam2]


  document.getElementById("West-East-West").textContent = finalFourTeam2seed + ". " + finalFourTeam2
  document.getElementById("West-East-East").textContent = finalFourTeam1seed + ". " + finalFourTeam1
  document.getElementById("Midwest-South-Midwest").textContent = finalFourTeam3seed + ". " + finalFourTeam3
  document.getElementById("Midwest-South-South").textContent = finalFourTeam4seed + ". " + finalFourTeam4
  document.getElementById("Inland").textContent = finalsTeam2seed + ". " + finalsTeam2
  document.getElementById("Coasts").textContent = finalsTeam1seed + ". " + finalsTeam1


  
}



var lastTeamsClicked = []


//allows two teams to be clicked and highlighted
function onMatchupClicked(element){
  $("#stat-holder").html("");
  var team1 = element.getElementsByTagName('h3')[0]
  var team2 = element.getElementsByTagName('h3')[1]

  lastTeamsClicked.push(team1.id)
  lastTeamsClicked.push(team2.id)

  if(team1.id == "Inland" || team2.id == "Inland"){
    var seedings = ["1-16-1","1-16-16","8-9-8","8-9-9","2-15-2","2-15-15","3-14-3","3-14-14","4-13-4","4-13-13","5-12-5","5-12-12","6-11-6","6-11-11","7-10-7", "7-10-10"]

    ogMatchups = []
    for(var division in divisions){
      var divisionName = divisions[division]
      for(var seed in seedings){
        var currId = seedings[seed].split("-")[0] + "-" + seedings[seed].split("-")[1] + "-" + divisionName + "-" + seedings[seed].split("-")[2]
        if(document.getElementById(currId).textContent == document.getElementById(lastTeamsClicked[0]).textContent){
          ogMatchups.push(currId)
        } else if (document.getElementById(currId).textContent == document.getElementById(lastTeamsClicked[1]).textContent){
          ogMatchups.push(currId)
        }
      }
    }
    lastTeamsClicked = []
    calculateProbabilityOfMeeting(ogMatchups)
  }

}


var team1Seed;
var team2Seed;


function calculateProbabilityOfMeeting(lastTeamsClicked){
  team1Division = ""
  team2Division = ""

  //test to make sure only two teams were able to be clicked
  if(lastTeamsClicked.length != 2){
    console.error("Error selecting teams")
  }
  //finds divisions of the two teams
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

  //team name formatting
  team1Seed = document.getElementById(lastTeamsClicked[0]).id.split("-").at(-1)
  team2Seed = document.getElementById(lastTeamsClicked[1]).id.split("-").at(-1)
  var team1Matchup = document.getElementById(lastTeamsClicked[0]).parentElement
  var team2Matchup = document.getElementById(lastTeamsClicked[1]).parentElement
  var team1Name = ""
  var team1NameAsArr = document.getElementById(lastTeamsClicked[0]).textContent.split(" ")
  team1NameAsArr.shift()
  for (var i in team1NameAsArr){
    team1Name += team1NameAsArr[i]
    team1Name += " "
  }
  var team2Name = ""
  var team2NameAsArr = document.getElementById(lastTeamsClicked[1]).textContent.split(" ")
  team2NameAsArr.shift()
  for (var j in team2NameAsArr){
    team2Name += team2NameAsArr[j]
    team2Name += " "
  }

  roundNames = {
    1 : "1st Round",
    2 : "2nd Round",
    3 : "Sweet Sixteen",
    4 : "Elite Eight",
    5 : "Final Four",
    6 : "Finals"
  }
  var roundOfMeeting = Number(findRoundOfMeeting(team1Matchup, team2Matchup, 1))
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

  var probabilityInPercent = String((probabilityTeam1Arrives * probabilityTeam2Arrives).toFixed(4) * 100).slice(0,5) + "%"
  var probabilityTeam1ArrivesInPercent = String(probabilityTeam1Arrives.toFixed(4) *100).slice(0,5) + "%"
  var probabilityTeam2ArrivesInPercent = String(probabilityTeam2Arrives.toFixed(4) *100).slice(0,5) + "%"

  //tests to make sure stat blocks formatted correctly
  if(probabilityTeam1ArrivesInPercent.length > 6 || probabilityTeam2ArrivesInPercent.length > 6){
    console.error("stat block formatting error")
  }
  if(probabilityInPercent.length > 6){
    console.error("stat block formatting error")
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
  stat1BlockProb.style.fontSize = "40px"
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
  stat2BlockProb.style.fontSize = "40px"
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
  statBlockProb.style.fontSize = "40px"
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

//recursively iterates from first round to when the two teams meet in teamMatchup
function findProbabilityTeamArrives(teamSeed, teamMatchup, currentProbability){
  if(teamMatchup.id == bruh5){
    return currentProbability
  }
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

  return findProbabilityTeamArrives(teamSeed, teamMatchup.parentElement, currentProbability)
  
}

//iterates until team1Matchup is equal to team2Matchup and returns the round they meet
function findRoundOfMeeting(team1Matchup, team2Matchup, roundIncrement){
  if(team1Matchup.id == team2Matchup.id){
    bruh5 = team1Matchup.id
    return roundIncrement
  }
  return findRoundOfMeeting(team1Matchup.parentElement, team2Matchup.parentElement, roundIncrement + 1)
  
}

