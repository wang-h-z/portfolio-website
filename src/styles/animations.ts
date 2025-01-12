export const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };
  
  export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  export const scaleIn = {
    hidden: { 
      opacity: 0, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 } 
    }
  };
  
  export const slideIn = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 } 
    }
  };

  export const slideAnimation = {
    hidden: (isLeft: boolean) => ({
      opacity: 0,
      x: isLeft ? -20 : 20,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.6
      }
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.6
      }
    }
   } as const;