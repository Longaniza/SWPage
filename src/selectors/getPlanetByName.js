
export const getPlanetByName = async(name) => {
    const resp = await fetch(`https://swapi.dev/api/planets/?search=${name}`);
    const planet = await resp.json();
    let next = planet.next;
    while(next){
        const respNext = await fetch(next.replace(/^http:/, 'https:'));
        const planetNext = await respNext.json();
        planet.results = [...planet.results,...planetNext.results]
        next = planetNext.next;
    }
    
    return planet;
}
