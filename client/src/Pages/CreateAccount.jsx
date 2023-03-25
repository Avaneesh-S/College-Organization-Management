import React, { useState } from "react";
import InputField from "../Login/InputField";
function CreateAccount() {
  const [step, setStep] = useState(1);
  const Inputs = [
    {
        id: 1,
        type: "text",
        name: "Fname",
        label: "First Name",
        icon: "person"
    },
    {
        id: 2,
        type: "text",
        name: "Lname",
        label: "Last Name",
        icon: "person"
    },
    {
        id: 3,
        type: "password",
        name: "pass",
        label: "Password",
        icon: "password"
    },
    {
        id: 4,
        type: "password",
        name: "pass2",
        label: "Re-Enter Password",
        icon: "password"
    },
    {
        id: 5,
        type: "email",
        name: "email",
        label: "E mail",
        icon: "mail"
    }
  ]
  const steps = [
    {
      id: 1,
      title: "Step 1",
      icon: (
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-900 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Step 2",
      icon: (
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-900 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
          <path
            fill-rule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Step 3",
      icon: (
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-900 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
          <path
            fill-rule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
    },
  ];

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <form action="#" className='w-fit '>
        <div className="flex flex-wrap gap-4 p-4 w-[50rem]">
            {Inputs.map((i) => (
                <InputField type={i.type} name={i.name} label={i.label} icon={i.icon}/>
            ))}
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next Step: Payment Info
        </button>
      </form>
      <div className="flex justify-center gap-16 items-center">
        <div className="absolute h-4 rounded w-64 border border-gray-500 bg-gray-300"></div>
        {steps.map((s) => (
          <div
            key={s.id}
            className={`relative ${
              s.id <= step ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <div className="flex justify-center items-center">
              {s.id <= step ? (
                <span class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              ) : (
                <span class="flex items-center border border-gray-500 justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-slate-300 shrink-0">
                  {s.icon}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className={`px-4 py-2 bg-gray-600 text-white rounded ${
            step === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={prevStep}
          disabled={step === 1}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 bg-green-600 text-white rounded ${
            step === steps.length ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={nextStep}
          disabled={step === steps.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
