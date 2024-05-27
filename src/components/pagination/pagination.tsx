import { FC } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
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
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 rounded-md ${
            currentPage === index + 1 ? "bg-gray-100" : " bg-none"
          }`}>
          {index + 1}
        </button>
      ))}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};
