import React from 'react';

// Define x-layout elements
export default function XLayout(props){
  return (
    <x-layout {...props} />
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
    <div class="x-layout-pane" {...layoutProps}>
      {children}
    </div>
  );
}
