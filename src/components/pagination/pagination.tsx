import { FC } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePrevPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div className="flex flex-row justify-center gap-4 mt-12">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <IoIosArrowBack />
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-4 py-2 rounded-md ${
            currentPage === pageNumber ? "bg-gray-100" : " bg-none"
          }`}>
          {pageNumber}
        </button>
      ))}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};
