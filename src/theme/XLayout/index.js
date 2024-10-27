import React, { useEffect, useRef } from 'react';

// Define x-layout elements
export default function XLayout(props){
  const myRef = useRef(null);
  useEffect(() => {
    const scrollEvent = new Event('scroll');
    if (myRef.current) {
      myRef.current.addEventListener('scroll', () => {
        document.dispatchEvent(scrollEvent);
      });
    }
  }, [myRef]);
  return (
    <x-layout ref={myRef} {...props} />
  );
}
export function XLayoutGroup(props){
  const {children, ...layoutProps} = props;
  return (
    <div slot="group" {...layoutProps}>
      {children}
    </div>
  );
}
export function XLayoutPane(props){
  const {children, ...layoutProps} = props;
  return (
    <div className="x-layout-pane" {...layoutProps}>
      {children}
    </div>
  );
}
