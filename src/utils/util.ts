// More flexible masking function
export const maskEmail = (email: string, visibleStart = 1, visibleEnd = 2): string => {
    const [localPart, domain] = email.split('@');
    
    const maskedLocal = 
      localPart.slice(0, visibleStart) + 
      '*'.repeat(localPart.length - visibleStart - visibleEnd) + 
      localPart.slice(-visibleEnd);
  
    return `${maskedLocal}@${domain}`;
  };