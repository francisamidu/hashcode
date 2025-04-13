/**
 * Transforms snake_case backend fields to camelCase frontend fields
 */
export const toFrontend = (data: Record<string, any>) => {
    const transformed: Record<string, any> = {};
  
    Object.entries(data).forEach(([key, value]) => {
      // Remove common prefixes like 'user_account_'
      const cleanKey = key.replace('user_account_', '');
      
      // Convert snake_case to camelCase
      const frontendKey = cleanKey.replace(/_([a-z])/g, (_, letter) => 
        letter.toUpperCase()
      );
  
      transformed[frontendKey] = value;
    });
  
    return transformed;
  };

  /**
 * Transforms camelCase frontend fields back to snake_case backend fields
 */
export const toBackend = (data: Record<string, any>) => {
    const transformed: Record<string, any> = {};
  
    Object.entries(data).forEach(([key, value]) => {
      // Convert camelCase to snake_case
      const backendKey = 'user_account_' + key
        .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  
      transformed[backendKey] = value;
    });
  
    return transformed;
  };
  