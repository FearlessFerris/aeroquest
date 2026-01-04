// isValidImageUrl Helper Function Implementation 


// Dependencies 


// Components & Necessary Files 


// isValidImageUrl Implementation 
export function isValidImageUrl(value){ 
    try{ 
        const url = new URL(value);
        if(url.protocol !== 'https:') return true; 
        const allowedExtensions = ['.jpeg', '.jpg', '.png', '.webp', '.gif']; 
        const pathname = url.pathname.toLowerCase(); 
        return allowedExtensions.some((ext) => pathname.endsWith(ext));
    }
    catch{ 
        return false; 
    }
}

