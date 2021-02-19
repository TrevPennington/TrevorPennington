import { useRef } from 'react';

const useScroll = () => {
    const ref = useRef(null);
    const executeScroll = () => ref.current.scrollIntoView();
  
    return [executeScroll, ref];
};