import { useState, useEffect } from "react";

const NumbersBoard = () => {
    const numbers = Array.from({ length: 10 }, (_, i) => i);
    const [quantity, setQuantity] = useState("");

    // Function to handle button click
    const handleButtonClick = (value) => {
        if (value === "delete") {
            setQuantity((prev) => prev.slice(0, -1));
        } else {
            setQuantity((prev) => prev + value);
        }
    };

    // Function to handle keypress events
    const handleKeyPress = (event) => {
        const { key } = event;
        if (key === " ") {
            event.preventDefault();
        } else if (!isNaN(key) || key === ".") {
            setQuantity((prev) => prev + key);
        } else if (key === "Backspace") {
            setQuantity((prev) => prev.slice(0, -1));
        }
    };

    // Add keypress event listener
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div className="p-4">
            {/* Input field */}
            <input type="text" value={quantity} readOnly className="w-full text-center mb-4 p-2 border border-gray-300 rounded"
                placeholder="Click numbers below or type" />

            {/* Numbers grid */}
            <ul className="grid grid-cols-3 gap-1 items-center">
                {numbers.map((num) => (
                    <li key={num} className="text-center p-1">
                        <button onClick={() => handleButtonClick(num.toString())}
                            className="bg-slate-900 text-white h-[50px] font-bold flex items-center justify-center rounded
                hover:bg-slate-600 cursor-pointer w-full"
                        >
                            {num}
                        </button>
                    </li>
                ))}

                {/* Decimal point button */}
                <li className="text-center p-1">
                    <button onClick={() => handleButtonClick(".")}
                        className="bg-slate-900 text-white h-[50px] font-bold flex items-center justify-center rounded
                hover:bg-slate-600 cursor-pointer w-full"
                    >
                        .
                    </button>
                </li>

                {/* Delete button */}
                <li className="text-center p-1">
                    <button onClick={() => handleButtonClick("delete")}
                        className="bg-slate-900 text-white h-[50px] font-bold flex items-center justify-center rounded
                hover:bg-slate-600 cursor-pointer w-full"
                    >
                        <i className="fa-solid fa-delete-left"></i>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default NumbersBoard;