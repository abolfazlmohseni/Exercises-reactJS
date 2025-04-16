import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);
  const [step, setStep] = useState(1);
  useEffect(() => {
    document.title = `>تعداد کلیک های شما ${count}!`;
  });
  return (
    <div>
      <p>تعداد کلیک های شما {count}!</p>
      <button
        onClick={() => {
          setcount(count + step);
        }}
      >
        اضافه کردن کلیک
      </button>
      <input
        type="number"
        value={step}
        onChange={(event) => {
          setStep(Number(event.target.value));
        }}
      />
    </div>
  );
};

export default Counter;
