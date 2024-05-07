import styles from '@/components/Dropdown.module.css';
import { useEffect, useState, useRef } from 'react';
// import arrowImg from '@/public/arrowImg';

export default function Dropdown({
  className,
  name,
  value,
  options,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const handleInputClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isInside = inputRef.current?.contains(e.target);
      if (!isInside) setIsOpen(false);
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  const classNames = `${styles.input} ${
    isOpen ? styles.opened : ''
  } ${className}`;
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div
      className={classNames}
      onClick={handleInputClick}
      onBlur={handleBlur}
      ref={inputRef}
    >
      {selectedOption.label}
      <p className={styles.arrow} width={12} height={9}>
        ▼
      </p>
      <div className={styles.options}>
        {options.map((option) => {
          const selected = value === option.value;
          const className = `${styles.option} ${
            selected ? styles.selected : ''
          }`;
          return (
            <div
              className={className}
              key={option.value}
              onClick={() => onChange(name, option.value)}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
