function makeid(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

// Examples
console.log(makeid(5));  // Example Output: e.g., "K3f2G"
console.log(makeid(10)); // Example Output: e.g., "aB9EfgT2X1"
