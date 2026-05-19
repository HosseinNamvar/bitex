export const calculateTablePagination = (
  totalRows: number | null,
  currentPage: number,
  pageSize: number,
  maxButtons = 10
): (number | null)[] => {
  if (!totalRows || !currentPage || isNaN(currentPage)) {
    return [];
  }

  const totalPages = Math.ceil(totalRows / pageSize);

  const result = [];

  if (totalPages <= maxButtons) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const halfRange = Math.floor(maxButtons / 2);
  const startPage = Math.max(currentPage - halfRange, 1);
  const endPage = Math.min(startPage + maxButtons, totalPages);

  if (startPage > 1) {
    result.push(1, null);
  }

  for (let i = startPage; i <= endPage; i++) {
    result.push(i);
  }

  if (endPage + halfRange < totalPages) {
    result.push(null, totalPages);
  }

  return result;
};
