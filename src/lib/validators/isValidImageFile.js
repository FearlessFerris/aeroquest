// isValidImageFile Component Implementation 


// Dependencies 


// Components & Necessary Files 


// isValidImageFile Component
export function isValidImageFile(file, options = {}){ 
    if(!file) return true; 
    const { 
        maxBytes = 2 * 1024 * 1024, 
        allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif']
    } = options;
    if(!(file instanceof File)) return 'Invalid File';
    if(!allowedTypes.includes(file.type)) return 'Upload a PNG, JPG, WEBP, or GIF';
    if(file.size > maxBytes) return `Max file size is ${Math.round(maxBytes / (1024 * 1024))}MB`;
    return true;
}