export const getTopCreators = (creators) => {
  // Handle undefined/null or non-array input
  if (!creators || !Array.isArray(creators)) {
    return [];
  }

  const finalCreators = [];

  const finalResults = creators.reduce((index, currentValue) => {
    // Check if currentValue has the required properties
    if (!currentValue?.seller || !currentValue?.price) {
      return index; // skip invalid items
    }

    (index[currentValue.seller] = index[currentValue.seller] || []).push(currentValue);
    return index;
  }, {});

  Object.entries(finalResults).forEach(([seller, items]) => {
    const total = items
      .map((item) => Number(item.price) || 0) // Ensure price is a number
      .reduce((sum, price) => sum + price, 0);

    finalCreators.push({ seller, total });
  });

  return finalCreators;
};