function galacticElections(input) {

    let allVotes = 0;

    let winnersVotes = -Infinity;

    let winner;

    let runnerUp;

    let systems = new Map();

    let systemsVotes = new Map();

    for (let i = 0; i < input.length; i++) {

        let system = input[i].system;
        let candidate = input[i].candidate;
        let votes = input[i].votes;

        allVotes += votes;

        if(systemsVotes.has(system)){
            systemsVotes.set(system, systemsVotes.get(system) + votes)
        } else {
            systemsVotes.set(system, votes);
        }

        if(systems.has(system)){
            if(systems.get(system).has(candidate)){
                systems.get(system).set(candidate,  systems.get(system).get(candidate) + votes);
            } else {
                systems.get(system).set(candidate, votes);
            }
        } else {
            systems.set(system, new Map());
            systems.get(system).set(candidate, votes);
        }
        

    }

    for (let [systemName, candidateName] of systems) {

        let currentWinner;
        let currentMaxVote = 0;

        for (let [name, votes] of candidateName) {
            if(currentMaxVote < votes){
                currentMaxVote = votes;
                currentWinner = name;
            }
        }

        let a = [...systems.get(systemName).values()].reduce((a,b) => a + b);
        systems.set(systemName, new Map());
        systems.get(systemName).set(currentWinner, a);

        if([...systems.get(systemName).values()].reduce((a,b) => a + b) > winnersVotes){
            winnersVotes = [...systems.get(systemName).values()].reduce((a,b) => a + b);
            winner = currentWinner;
            
        }
    }
    console.log(systems);
    console.log(`${winner} wins with ${winnersVotes} votes
${winner} wins unopposed!
`);


}

galacticElections([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]
)