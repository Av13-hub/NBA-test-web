document.addEventListener('DOMContentLoaded', () => {
    const teams = ['Los Angeles Lakers', 'Golden State Warriors', 'Brooklyn Nets', 'Milwaukee Bucks'];
    const players = [
        { name: 'LeBron James', team: 'Los Angeles Lakers' },
        { name: 'Stephen Curry', team: 'Golden State Warriors' },
        { name: 'Kevin Durant', team: 'Brooklyn Nets' },
        { name: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks' }
    ];
    const news = [
        { title: 'NBA Finals Recap', summary: 'A thrilling conclusion to the NBA Finals...' },
        { title: 'Trade Rumors', summary: 'Latest updates on potential trades...' },
        { title: 'MVP Candidates', summary: 'Who is in the running for MVP this year...' }
    ];

    // Populate teams
    const teamList = document.getElementById('team-list');
    teams.forEach(team => {
        const li = document.createElement('li');
        li.textContent = team;
        teamList.appendChild(li);
    });

    // Populate players
    const playerProfiles = document.getElementById('player-profiles');
    players.forEach(player => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${player.name}</strong> - ${player.team}`;
        playerProfiles.appendChild(div);
    });

    // Populate news
    const newsArticles = document.getElementById('news-articles');
    news.forEach(article => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${article.title}</h3><p>${article.summary}</p>`;
        newsArticles.appendChild(div);
    });
});