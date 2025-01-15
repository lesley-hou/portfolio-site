import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import { motion, AnimatePresence } from "framer-motion";
import { searchData } from "../../data/searchData";
import MenuItem from "./MenuItem";
import { generalItems, navigationItems } from "../../data/menu";
import { popoverVariants } from "../../utils/animations";

interface SearchPopoverProps {
  onClose: () => void;
}

interface SearchResult {
  title: string;
  path: string;
  content: string;
}

const SearchPopover: React.FC<SearchPopoverProps> = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  const popoverRef = useRef<HTMLDivElement>(null);

  const fuse = new Fuse(searchData, {
    keys: ["tokens"],
    threshold: 0,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value.trim().toLowerCase();
    setQuery(searchQuery);
    setResults(searchQuery ? fuse.search(searchQuery).map((res) => res.item) : []);
  };

  const highlightMatch = (content: string, query: string) => {
    if (!query) return content;

    const regex = new RegExp(`(${query})`, "gi");
    return content.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const renderSection = (title: string, items: any[], handleClick: (item: any) => void) => (
    <div className="py-2">
      <p className="text-iron font-bold text-xxs">{title}</p>
      <div>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => handleClick(item)}
            label={item.label}
            iconSrc={item.iconSrc}
            iconAlt={item.iconAlt}
            iconSize={item.iconSize}
          />
        ))}
      </div>
    </div>
  );

  const renderContent = () =>
    query === "" ? (
      <>
        {renderSection("GENERAL", generalItems, (item) => item.onClick())}
        {renderSection("GO TO", navigationItems, (item) => item.onClick(navigate))}
      </>
    ) : (
      <div>
        {results.map((result, index) => (
          <div
            key={index}
            onClick={() => navigate(result.path)}
            className="cursor-pointer hover:bg-gravel p-2 rounded"
          >
            <p className="font-bold">{result.title}</p>
            <p className="text-sm">{highlightMatch(result.content, query)}</p>
          </div>
        ))}
        {results.length === 0 && <p className="text-boulder text-sm">No results found.</p>}
      </div>
    );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <AnimatePresence>
        <motion.div
          ref={popoverRef}
          className="bg-metal text-boulder p-4 rounded-lg shadow-lg w-[90%] max-w-lg"
          variants={popoverVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <input
            type="text"
            placeholder="search lesley's website"
            value={query}
            onChange={handleSearch}
            className="w-full p-3 mb-2 rounded-lg bg-gravel placeholder-boulder text-iron outline-none"
          />
          <div>{renderContent()}</div>
          <button
            onClick={onClose}
            className="text-gravel text-sm mt-2 flex items-center focus:outline-none"
          >
            Press <kbd className="mx-1">esc</kbd> or tap to close
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SearchPopover;
