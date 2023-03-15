export const callApi  = (userName) =>{
    return fetch(`https://api.github.com/users/${userName}`);
}