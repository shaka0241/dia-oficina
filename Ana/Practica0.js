import fetch from 'node-fetch';
const userGenerator = async () => { 
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];
        console.log(`Nombre: ${user.name.first} ${user.name.last}`);
        console.log(`Email: ${user.email}`);
        console.log(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGDhrMTg-2Z1oRUdn5DnGkscpmk6aFi7mXg&s`)
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

userGenerator();