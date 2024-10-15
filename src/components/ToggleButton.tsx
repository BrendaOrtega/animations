// import { Switch } from "@headlessui/react";
// import { useState } from "react";
// import React from "react";

import { Switch } from "@headlessui/react";
import React, { useState } from "react";
// export default function ToggleButton({
//   onChange,
//   defaultValue,
//   isDisabled,
// }: {
//   isDisabled?: boolean;
//   defaultValue?: "dark" | "light";
//   onChange?: (arg0: boolean) => void;
// }) {
//   const [enabled, setEnabled] = useState(defaultValue === "dark");

//   return (
//     <Switch
//       checked={enabled}
//       onChange={() => {
//         if (isDisabled) return;
//         setEnabled(!enabled);
//         if (onChange) {
//           onChange(!enabled);
//         }
//       }}
//       className={`dark:bg-[#000000] bg-[#F1F1F1] relative inline-flex h-8 w-[52px] items-center rounded-full`}
//     >
//       <span
//         className={`dark:bg-[url('/moon.svg')] dark:translate-x-6 translate-x-1 bg-cover bg-[url('/sun.svg')] inline-block h-6 w-6 transform rounded-full  transition dark:bg-[#080808] bg-[#F1F1F1]`}
//       />
//     </Switch>
//   );
// }

export const ToggleButton = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
    >
      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
    </Switch>
  );
};
