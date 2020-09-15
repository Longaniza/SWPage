
export const getPlanetByName = async(name) => {
    const resp = await fetch(`https://swapi.dev/api/planets/?search=${name}`);
    const planet = await resp.json();
    console.log(planet);
    return planet;
}
