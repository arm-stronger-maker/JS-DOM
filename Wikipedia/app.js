document.getElementById('searchButton').addEventListener('click', function(){
        const query = document.getElementById('searchInput').value.trim();
        if(query){
            fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`)
            .then(response => response.json())
            .then(data => { // Once data (results) irundhaal mattum dhan, previous results ah clear pandrom. Suppose, current search la endha data vum illana, still it presists the previous results.
                const resultSection = document.getElementById('results');
                resultSection.innerHTML = '';

                const searchResults = data.query.search;

                searchResults.forEach(result => {
                    const showResults = document.createElement('div');
                    showResults.className = 'mb-4 p-4 shadow-lg items-center bg-white';
                    showResults.innerHTML = `
                    <h2 class="text-xl font-bold text-blue-700 mb-2 text-start">${result.title}</h2>
                    <p class="text-gray-700">${result.snippet}...</p>
                    <a  href="https://en.wikipedia.org/wiki/${encodeURIComponent(result.title)}" target="_blank" class="hover:underline text-blue-500 block mt-2">Read more</a>
                    `
                    resultSection.appendChild(showResults);
                })
            })
            .catch(error => {
                console.error('Error Fetching Wikipedia data:', error);
            })
        }
})

