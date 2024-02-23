import React, { useState } from 'react';

function Dropdown(props: { onSelect?: any; label?: any; items?: any; selectedItem?: any; }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value: any) => {
    if (props.onSelect) {
      props.onSelect(value);
    }
    setIsOpen(false); // Close the dropdown after item selection
  };

  const { label, items, selectedItem } = props;

  return (
    <div className="dropdown">
      <button className="dropdown-trigger" onClick={toggleDropdown}>
        {label}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item: { value: any; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
            <li
              key={item.value || item.label}
              className={`dropdown-item ${
                selectedItem === item.value || item.label === selectedItem
                  ? 'active'
                  : ''
              }`}
              onClick={() => handleItemClick(item.value || item.label)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
