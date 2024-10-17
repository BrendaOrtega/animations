import { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import React from "react";

function Card(props) {
  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };
  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 70, opacity: 0.5 },
  };

  function handleDragEnd(_, info) {
    if (info.offset.x < -100) {
      setExitX(-250);
      props.setIndex(props.index + 1);
    }
    if (info.offset.x > 100) {
      setExitX(250);
      props.setIndex(props.index + 1);
    }
  }

  return (
    <motion.div
      style={{
        width: 250,
        height: 250,
        position: "absolute",
        top: 0,
        x,
        rotate,
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      // Dragging
      drag={props.drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      // Animation
      variants={props.frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        props.frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.div
        className="bg-cover"
        style={{
          width: 300,
          height: 300,
          backgroundImage:
            "url('https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=800')",
          borderRadius: 30,
          scale,
        }}
      />
    </motion.div>
  );
}

export function Example() {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <motion.div style={{ width: 250, height: 250, position: "relative" }}>
        <AnimatePresence initial={false}>
          <Card key={index + 1} frontCard={false} />
          <Card
            key={index}
            frontCard={true}
            index={index}
            setIndex={setIndex}
            drag="x"
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// <CardContainer className="inter-var min-h-screen">
//   <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-white/[0.1] dark:bg-[#141518] dark:border-white/[0.05] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//     <CardItem
//       translateZ="50"
//       className="text-2xl font-bold text-neutral-600 dark:text-white"
//     >
//       10 días en las Islas Griegas
//     </CardItem>
//     <CardItem
//       as="p"
//       translateZ="60"
//       className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//     >
//       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore autem
//       ut earum.
//     </CardItem>
//     <CardItem translateZ="100" className="w-full mt-10">
//       <img
//         src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//         height="1000"
//         width="1000"
//         className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//         alt="thumbnail"
//       />
//     </CardItem>
//     <div className="flex justify-between items-center mt-20">
//       <CardItem
//         translateZ={20}
//         as="button"
//         className="px-4 py-2 rounded-xl bg-fish dark:bg-white dark:text-black text-white text-xs font-bold"
//       >
//         Comprar
//       </CardItem>
//       <CardItem
//         translateZ={20}
//         href="https://twitter.com/mannupaaji"
//         target="__blank"
//         className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//       >
//         Ver más →
//       </CardItem>
//     </div>
//   </CardBody>
// </CardContainer>
